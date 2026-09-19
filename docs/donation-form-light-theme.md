# Donation form: switching from dark to light

The Donate page embeds our Xplor Pay (Hyfin) payment link in an iframe. On
devices set to dark mode the form showed up black, and the logo was hard to
read against the dark background. This note explains why that happened and
how it was fixed.

## The fix

One line on the iframe in `src/pages/Donate.jsx`:

```jsx
<iframe
  src="https://xplorpay.hyfin.app/Z69N6PXK33UR/paymentLink?embed=true"
  style={{ colorScheme: "light", borderRadius: ".25em" }}
  ...
/>
```

`color-scheme: light` on the iframe element tells the browser to treat the
embedded page as a light-mode page, so the form renders white even when the
visitor's device is set to dark mode.

## Why it was dark

- The Xplor payment page has both a light and a dark theme built in. The theme
  is a `color-theme` attribute on the page's `<body>`, and all colors come from
  CSS variables keyed on that attribute (`:root, [color-theme="light"]` and
  `[color-theme="dark"]`).
- The page picks its theme from the visitor's browser/OS color preference
  (`prefers-color-scheme`). The site owner's device was set to dark, so the
  form was dark. Visitors on light-mode devices were already seeing white.
- There is no URL parameter to choose a theme, and nothing is saved in
  localStorage that we could set. The payment page lives on a different domain
  (`xplorpay.hyfin.app`), so our site cannot change its `<body>` or CSS
  directly.

## How we confirmed it

Using Edge with the DevTools protocol (emulating the color preference):

| Setup | Result |
| --- | --- |
| Open the embed URL with the device emulated as light | `color-theme="light"`, white form |
| Open the embed URL with the device emulated as dark | `color-theme="dark"`, dark form |
| Our page with a plain iframe, device emulated as dark | Dark form |
| Our page with `color-scheme: light` on the iframe, device emulated as dark | White form |

In the light version the logo and the three card boxes (number, expiry, CVV)
were all readable.

## Things that did not work or were ruled out

- Setting `localStorage.userTheme = "light"` on the embed and reloading: no
  effect on this page.
- Forcing light mode with a headless-browser launch flag: unreliable, and it
  briefly led us to think the theme was forced by Xplor. It is not.
- A URL parameter such as `?theme=light`: none exists in the page's code.
- The Hyfin API (`/api/v4/...`): it manages invoices, customers and payments.
  None of it controls the payment link's appearance. The site `branding.color`
  field only sets the accent color (the orange), not light or dark.

## Caveats

- Tested in Edge (Chromium). Chrome should behave the same way. Safari and
  Firefox were not tested, so check the Donate page there, especially on an
  iPhone.
- This relies on browser behavior for `color-scheme` on iframes, not on any
  promise from Xplor. If a browser ignores it, that visitor simply sees the
  form in their own device's theme.
- If Xplor later adds a theme option to the payment link settings, that would
  be a cleaner fix and this line could be removed.

## Other iframe settings on the Donate page

These were changed in the same work and matter for how the form displays:

- **Height (important):** the form scrolls inside its own box that starts
  about 100px below the top of the iframe. If the iframe is too short for the
  form, that box becomes a scroll area, and on a phone it grabs the visitor's
  finger so the page stops scrolling while they are over the form. We cannot
  turn that scrolling off (it belongs to Xplor's page on another domain), but
  when the iframe is taller than the form, the form stretches to fill it and
  there is nothing to scroll. So `Donate.jsx` uses generous responsive heights
  (1660px on small phones down to 1290px on desktop), which leaves some white
  space below the Donate Now button. The form's natural height differs by
  screen width and is about 36px taller in the phone layout, so the values were
  measured with an iPhone user agent and touch emulation from 272px to 896px
  wide, then padded by roughly 100px. All tested widths reported "not
  scrollable". If Xplor adds fields or text to the form, re-measure: the form
  could start scrolling inside the iframe again. Larger text sizes on a
  visitor's phone can also make the form taller than measured.
- **Width:** it fills a centered column up to `max-w-4xl` and shrinks to fit
  phones. An earlier version forced a 500px minimum width, but that came from
  a flawed test (headless Edge has a minimum window width) and clipped the form
  on phones, so it was removed.
- **No hero banner:** the page has no hero image or intro text, only a small
  "Go to account" link above the form, so the form is visible without
  scrolling. The link goes to the Xplor customer portal.
- **`allow="payment"`:** lets Apple Pay and Google Pay work inside the iframe.
- **No box-shadow:** the original embed snippet's shadow was removed.

## How to check it yourself

1. Open the Donate page and note whether the form is white.
2. In Chrome or Edge DevTools, press `Ctrl+Shift+P`, run
   `Emulate CSS prefers-color-scheme: dark`, and reload. The form should stay
   white.
3. Remove `colorScheme: "light"` temporarily to see the difference: with the
   emulation on, the form turns dark.

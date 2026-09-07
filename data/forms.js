// Form structure (for rendering) + SharePoint
// Internal column names (for the serverless function). Imported by both
// src/components/Forms.jsx and api/submit-to-sharepoint.js.

export const formsConfig = {
  contact: {
    envListIdKey: "CONTACT_LIST_ID",
    eyebrow: "Contact Form",
    title: "Ask us anything!",
    description:
      "Fill out the form below and we'll get back to you as soon as possible.",
    subject: "New contact form submission",
    submitLabel: "Submit",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true, sharepointField: "First" },
      { name: "lastName", label: "Last Name", type: "text", required: true, sharepointField: "Last" },
      { name: "email", label: "Email", type: "email", required: true, sharepointField: "Email" },
      { name: "phone", label: "Phone", type: "tel", sharepointField: "Phone" },
      { name: "comments", label: "Comments", type: "textarea", required: true, fullWidth: true, sharepointField: "Comments" },
    ],
  },

  checkout_charity: {
    envListIdKey: "CHECKOUT_CHARITY_LIST_ID",
    eyebrow: "Checkout Charity Form",
    title: "Put your information here",
    description: "Fill out this form to sign up for our checkout charity program.",
    subject: "New checkout charity sign-up",
    submitLabel: "Sign up",
    fields: [
      { name: "legalBusinessName", label: "Legal Business Name", type: "text", required: true, sharepointField: "Title" },
      { name: "dbaName", label: "DBA / Trade Name (if different)", type: "text", sharepointField: "AltName" },
      { name: "businessAddress", label: "Business Address", type: "text", required: true, fullWidth: true, sharepointField: "BusinessAddress" },
      { name: "websiteUrl", label: "Website URL", type: "text", sharepointField: "WebsiteURL" },
      { name: "repName", label: "Representative Name", type: "text", required: true, sharepointField: "RepName" },
      { name: "repEmail", label: "Representative Email", type: "email", required: true, sharepointField: "RepEmail" },
      { name: "repPhone", label: "Representative Phone", type: "tel", sharepointField: "RepPhone" },
      { name: "checkoutSystem", label: "POS/Checkout system you use (Square, Shopify, Clover, Toast, etc.)", type: "text", required: true, fullWidth: true, sharepointField: "CheckoutSystem" },
      { name: "preferredStartDate", label: "Preferred Start Date", type: "date", required: true, sharepointField: "PreferredStartDate" },
      { name: "comments", label: "Comments", type: "textarea", fullWidth: true, sharepointField: "Comments" },
    ],
  },
};
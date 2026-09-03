// data/forms.js
// Single source of truth: form structure (for rendering) + SharePoint
// internal column names (for the serverless function). Imported by both
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

  volunteer: {
    envListIdKey: "VOLUNTEER_LIST_ID",
    eyebrow: "Get Involved",
    title: "Volunteer Sign-up",
    description: "Let us know how you'd like to help.",
    subject: "New volunteer sign-up",
    submitLabel: "Sign up",
    fields: [
      {
        name: "events",
        label: "Which event(s) would you like to sign up for?",
        type: "checkbox-group",
        required: true,
        fullWidth: true,
        options: ["Event A", "Event B", "Event C"], // TODO: replace with event names
        sharepointField: "Event", // TODO: replace with real internal name
        multiItem: true, // server creates one list item per selected option
      },
      { name: "firstName", label: "First Name", type: "text", required: true, sharepointField: "First" }, // TODO
      { name: "lastName", label: "Last Name", type: "text", required: true, sharepointField: "Last" },   // TODO
      { name: "email", label: "Email", type: "email", required: true, sharepointField: "Email" },        // TODO
      { name: "phone", label: "Phone", type: "tel", sharepointField: "Phone" },                            // TODO
      { name: "comments", label: "Comments", type: "textarea", fullWidth: true, sharepointField: "Comments" }, // TODO
    ],
  },
};
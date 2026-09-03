import { getGraphToken } from "./_lib/graphAuth.js";
import { formsConfig } from "../data/forms.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { SITE_ID } = process.env;
  if (!SITE_ID) {
    console.error("Missing SITE_ID environment variable");
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  try {
    const { formKey, values } = req.body;

    const config = formsConfig[formKey];
    if (!config) {
      return res.status(400).json({ error: `Unknown formKey: ${formKey}` });
    }

    const listId = process.env[config.envListIdKey];
    if (!listId) {
      console.error(`Missing env var "${config.envListIdKey}" for formKey "${formKey}"`);
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    if (!values || typeof values !== "object") {
      return res.status(400).json({ error: "Missing or invalid 'values' in request body" });
    }

    // Map form values -> SharePoint internal field names, using ONLY the
    // fields this form's config defines. Anything else in `values` is
    // silently dropped, so a tampered request can't write arbitrary columns.
    const spFields = {};
    for (const field of config.fields) {
      const raw = values[field.name];
      if (raw === undefined || raw === "") continue;
      spFields[field.sharepointField] = raw;
    }

    const accessToken = await getGraphToken();

    const listRes = await fetch(
      `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${listId}/items`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: spFields }),
      }
    );

    const listData = await listRes.json();

    if (!listRes.ok) {
      console.error("SharePoint list insert failed:", listData);
      return res.status(502).json({ error: "Failed to write to SharePoint list" });
    }

    return res.status(200).json({ success: true, id: listData.id });
  } catch (err) {
    console.error("submit-to-sharepoint error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
// Run with: node get-columns.js
// Prints the internal `name` (and displayName + type) for every column
// on a given SharePoint list, so you can fill in `sharepointField` values
// in data/forms.js correctly.

import dotenv from "dotenv";
dotenv.config(); // reads .env in the same folder

const { TENANT_ID, CLIENT_ID, CLIENT_SECRET, SITE_ID } = process.env;

// Change this to whichever list you want to inspect right now,
// e.g. process.env.CHECKOUT_CHARITY_LIST_ID
const LIST_ID = process.env.CHECKOUT_CHARITY_LIST_ID;

async function getGraphToken() {
  const res = await fetch(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    }
  );
  const data = await res.json();
  if (!res.ok) {
    console.error("Token request failed:", data);
    throw new Error("Failed to authenticate with Microsoft Graph");
  }
  return data.access_token;
}

async function main() {
  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !SITE_ID || !LIST_ID) {
    console.error("Missing one of TENANT_ID, CLIENT_ID, CLIENT_SECRET, SITE_ID, or LIST_ID");
    process.exit(1);
  }

  const token = await getGraphToken();

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/columns`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const data = await res.json();

  if (!res.ok) {
    console.error("Failed to fetch columns:", data);
    process.exit(1);
  }

  console.log(`\nColumns for list ${LIST_ID}:\n`);
  for (const col of data.value) {
    // Skip Microsoft's built-in system columns unless you want to see everything
    if (col.hidden || col.readOnly) continue;

    const type = Object.keys(col).find((k) =>
      ["text", "choice", "dateTime", "boolean", "number", "personOrGroup", "lookup", "hyperlinkOrPicture"].includes(k)
    );

    console.log(`name: "${col.name}"  |  displayName: "${col.displayName}"  |  type: ${type || "unknown"}`);
  }

  console.log(`\n(${data.value.length} total columns, system/hidden columns included above only if not filtered)\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
// Run with: node list-lists.js
// Prints the internal `name`, `displayName`, and `id` for every list
// on a given SharePoint site, so you can find a list's ID by name.

import dotenv from "dotenv";
dotenv.config(); // reads .env in the same folder

const { TENANT_ID, CLIENT_ID, CLIENT_SECRET } = process.env;

const SITE_ID = "thelostenzymeproject.sharepoint.com,6fe2d776-81e8-4f40-b486-bec76d70018e,a8fd000a-3d42-4f49-bb38-645797150919";

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
  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !SITE_ID) {
    console.error("Missing one of TENANT_ID, CLIENT_ID, CLIENT_SECRET, or SITE_ID");
    process.exit(1);
  }

  const token = await getGraphToken();

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const data = await res.json();

  if (!res.ok) {
    console.error("Failed to fetch lists:", data);
    process.exit(1);
  }

  console.log(`\nLists for site ${SITE_ID}:\n`);
  for (const list of data.value) {
    console.log(`name: "${list.name}"  |  displayName: "${list.displayName}"  |  id: ${list.id}`);
  }

  console.log(`\n(${data.value.length} total lists)\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
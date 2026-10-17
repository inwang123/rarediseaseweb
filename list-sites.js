// list-sites.js
// Run with: node list-sites.js
// Lists every SharePoint site Graph can see, so you can find the new site's ID.

import dotenv from "dotenv";
dotenv.config();

const { TENANT_ID, CLIENT_ID, CLIENT_SECRET } = process.env;

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
  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
    console.error("Missing one of TENANT_ID, CLIENT_ID, or CLIENT_SECRET");
    process.exit(1);
  }

  const token = await getGraphToken();

  // "search=*" returns all sites the app has access to list.
  // Graph paginates results via @odata.nextLink, so we follow it until done.
  let url = `https://graph.microsoft.com/v1.0/sites?search=*`;
  let allSites = [];

  while (url) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json();

    if (!res.ok) {
      console.error("Failed to fetch sites:", data);
      process.exit(1);
    }

    allSites = allSites.concat(data.value || []);
    url = data["@odata.nextLink"] || null;
  }

  console.log(`\nFound ${allSites.length} site(s):\n`);
  for (const site of allSites) {
    console.log(`name: "${site.name || "(root)"}"  |  displayName: "${site.displayName}"  |  id: ${site.id}  |  webUrl: ${site.webUrl}`);
  }
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
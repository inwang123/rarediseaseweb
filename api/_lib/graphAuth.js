let cachedToken = null;
let cachedTokenExpiry = 0;

export async function getGraphToken() {
  const { TENANT_ID, CLIENT_ID, CLIENT_SECRET } = process.env;

  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
    throw new Error("Missing TENANT_ID, CLIENT_ID, or CLIENT_SECRET");
  }

  // Reuse the token across warm invocations until ~1 min before it expires
  const now = Date.now();
  if (cachedToken && now < cachedTokenExpiry - 60_000) {
    return cachedToken;
  }

  const tokenRes = await fetch(
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

  const tokenData = await tokenRes.json();

  if (!tokenRes.ok) {
    console.error("Token request failed:", tokenData);
    throw new Error("Failed to authenticate with Microsoft Graph");
  }

  cachedToken = tokenData.access_token;
  cachedTokenExpiry = now + tokenData.expires_in * 1000;

  return cachedToken;
}
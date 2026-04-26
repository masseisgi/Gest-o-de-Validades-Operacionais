const SB_URL = "https://qknyacidudyyacpcecvb.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrbnlhY2lkdWR5eWFjcGNlY3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNTM2MzcsImV4cCI6MjA5MjYyOTYzN30.-zOqBLTedSzFlOL0aBnl67_hLIVLAuMR3CY5Irswurg";

exports.handler = async (event) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,apikey,Authorization,Prefer",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: cors, body: "" };
  }

  const path = event.queryStringParameters?.path || "";
  const method = event.httpMethod;

  try {
    const headers = {
      "apikey": SB_KEY,
      "Authorization": `Bearer ${SB_KEY}`,
      "Content-Type": "application/json",
    };
    if (method === "POST") headers["Prefer"] = "return=representation";

    const res = await fetch(`${SB_URL}/rest/v1/${path}`, {
      method,
      headers,
      body: (method !== "GET" && method !== "DELETE" && event.body) ? event.body : undefined,
    });

    const text = await res.text();
    return {
      statusCode: res.status,
      headers: { ...cors, "Content-Type": "application/json" },
      body: text || "[]",
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: cors,
      body: JSON.stringify({ error: e.message }),
    };
  }
};

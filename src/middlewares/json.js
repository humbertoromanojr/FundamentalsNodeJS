export async function json(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const rawBody = Buffer.concat(buffers).toString();

  try {
    req.body = rawBody ? JSON.parse(rawBody) : null;
    console.log("✅ Parsed Body:", req.body);
  } catch (error) {
    console.log("❌ Parse Error:", error.message);
    req.body = null;
  }

  // SÓ seta o body como null se não conseguiu fazer parse E o método espera body
  if (
    req.body === null &&
    (req.method === "POST" || req.method === "PUT" || req.method === "PATCH")
  ) {
    console.log("⚠️ Body required but missing or invalid");
  }

  res.setHeader("Content-Type", "application/json");
}

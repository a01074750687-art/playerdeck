/// <reference types="node" />

const HENRIK_API_BASE_URL = "https://api.henrikdev.xyz";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const apiKey = process.env.HENRIK_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "HENRIK_API_KEY is not configured.",
    });
  }

  const rawPath = Array.isArray(req.query.path)
    ? req.query.path[0]
    : req.query.path;

  if (!rawPath || typeof rawPath !== "string") {
    return res.status(400).json({
      error: "API path is required.",
    });
  }

  if (!rawPath.startsWith("/valorant/")) {
    return res.status(400).json({
      error: "Invalid Henrik API path.",
    });
  }

  try {
    const response = await fetch(`${HENRIK_API_BASE_URL}${rawPath}`, {
      headers: {
        Authorization: apiKey,
        Accept: "application/json",
      },
    });

    const body = await response.text();

    res.status(response.status);

    const contentType = response.headers.get("content-type");

    if (contentType) {
      res.setHeader("Content-Type", contentType);
    }

    return res.send(body);
  } catch (error) {
    console.error("Henrik API proxy error:", error);

    return res.status(500).json({
      error: "Failed to communicate with Henrik API.",
    });
  }
}
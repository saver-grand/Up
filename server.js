import express from "express";
import fetch from "node-fetch";

const app = express();

const ORIGIN = process.env.ORIGIN; 
ORIGIN="http://143.44.136.67:6060/001/2/ch00000090990000001143"

app.get("/manifest.mpd", async (req, res) => {
  const url = `${ORIGIN}/manifest.mpd${req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : ""}`;

  const upstream = await fetch(url);
  const body = await upstream.text();

  res.set("Content-Type", "application/dash+xml");
  res.send(
    body.replace(/http[^"]+\/segment/g, "https://your-app.onrender.com/segment")
  );
});

// Pass-through for segments
app.get("/segment/*", async (req, res) => {
  const segment = req.params[0];
  const url = `${ORIGIN}/${segment}`;

  const upstream = await fetch(url);
  res.set("Content-Type", upstream.headers.get("Content-Type"));
  upstream.body.pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("MPD proxy running");
});

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Generate random PH IP
function randomPhilippinesIP() {
  const octet1 = 49;
  const octet2 = 144 + Math.floor(Math.random() * 4);
  const octet3 = Math.floor(Math.random() * 256);
  const octet4 = Math.floor(Math.random() * 256);
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}

// Generate Base64 AuthInfo
function generateAuthInfo(length = 48) {
  const bytes = [];
  for (let i = 0; i < length; i++) {
    bytes.push(Math.floor(Math.random() * 256));
  }
  return encodeURIComponent(Buffer.from(bytes).toString("base64"));
}

// Random Session IDs
function generateUserSessionId() {
  return Math.floor(100000000 + Math.random() * 900000000);
}

function generateIASHttpSessionId(length = 26) {
  let id = "";
  for (let i = 0; i < length; i++) id += Math.floor(Math.random() * 10);
  return id;
}

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>MPD Proxy</title></head>
      <body style="font-family: Arial; text-align:center; margin-top:50px;">
        <h1>MPD Proxy Active</h1>
        <p>Supports .mpd → .mpd with auto AuthInfo and IP rotation</p>
      </body>
    </html>
  `);
});

// UNIVERSAL MPD ROUTE (accepts any .mpd link OR channel ID)
app.get("/proxy", (req, res) => {
  let input = req.query.url;
  const channelId = req.query.channel;

  if (!input && !channelId) {
    return res.status(400).send("Missing ?url= or ?channel=");
  }

  const authInfo = generateAuthInfo();
  const userSessionId = generateUserSessionId();
  const IASHttpSessionId = generateIASHttpSessionId();
  const randomIP = randomPhilippinesIP();

  // If user provides channel ID → convert to original ZTE link
  if (channelId) {
    input = `http://143.44.136.67:6060/001/2/ch0000009099000000${channelId}/manifest.mpd`;
  }

  // Append required parameters
  const finalURL = `${input}?JITPDRMType=Widevine&JITPMediaType=DASH&virtualDomain=001.live_hls.zte.com&m4s_min=1&stbMac=02:00:00:00:00:00&stbIp=${randomIP}&stbId=02:00:00:00:00:00&TerminalFlag=1&usersessionid=${userSessionId}&IASHttpSessionId=RR${IASHttpSessionId}&AuthInfo=${authInfo}`;

  res.redirect(finalURL);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

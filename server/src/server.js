const https = require("https");
const http = require('http');
const fs = require('fs');
const path = require('path')
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;


const MONGO_URL =
  "mongodb+srv://06bisik03:zzJBZw33AtZckXoj@productcluster.yygx1sz.mongodb.net/?retryWrites=true&w=majority"
const app = require("./app");

const server = https.createServer({
  
  key: fs.readFileSync(path.join(__dirname, "..","..","key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "..","..","cert.pem"))
},
  app); 
async function startServer() {
await mongoose.connect(MONGO_URL)
  server.listen(PORT, () => {
    console.log(`started listening on port ${PORT} `);
  })
  server.on('error', (error) => {
    console.error('HTTPS server error:', error);
  });
  
}



startServer();

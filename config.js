const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233247923525";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_41_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjIzeU9pWGtjN1I0Nnd1eG05QlFHUFNIeWdYa3FmNkRzV2g2Q1lJZmc3Qk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVJVjdoVU4yVEFPNzdFVHZoNkNDWkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjNhNWZiMDEtYzFjNS00ZGJhLTlkZWMtZjU0MWM2ZDRmODkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDE3NCxcbiAgICAgIDYzLFxuICAgICAgMTIyLFxuICAgICAgOTIsXG4gICAgICAxODQsXG4gICAgICA2NSxcbiAgICAgIDI0NCxcbiAgICAgIDgzLFxuICAgICAgMzYsXG4gICAgICA0NyxcbiAgICAgIDIwNSxcbiAgICAgIDE1NyxcbiAgICAgIDE1NSxcbiAgICAgIDYxLFxuICAgICAgOTIsXG4gICAgICAyMDcsXG4gICAgICAxMjUsXG4gICAgICAxMzMsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAxMjAsXG4gICAgICAxNzEsXG4gICAgICAyNixcbiAgICAgIDE5LFxuICAgICAgMjEzLFxuICAgICAgODUsXG4gICAgICAxMTksXG4gICAgICAxMzgsXG4gICAgICAzMixcbiAgICAgIDU5LFxuICAgICAgMjM2LFxuICAgICAgMjIyLFxuICAgICAgNTEsXG4gICAgICAxMjMsXG4gICAgICA5OSxcbiAgICAgIDExMixcbiAgICAgIDMxLFxuICAgICAgNDMsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDJDUzNXWEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NzkyMzUyNTo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTU5MzA4NTg3MTU2OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BuOW8vTUZFTlNqN3JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ2o2U0VoSVpmTlI0S0Y4c29iYUduL1F0WHlaUW4renB3MlM1dkVvdjlHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQQnJ4SE9ET0YrQkVDdXVlY3VYUThjejRycnh4cFFkSXhROGFSTWFORkF1d2d5RnR3bWtXOER4WVZ3RVZ1MTdhSmZoelNMU3FkZGJJWEFDSmNTSDdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDNmZLSEZOQTZDRmlVMGYxRGxRTWE5eTFNQU4rZTJseWNNOUViYW1PUFpWeDFuTENPK3d1cWo5WkVWczM2dUZXRkErTjlNdFpYemR0VE13dWV2dlppUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDc5MjM1MjU6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTg2MDA1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNiQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2JBLmpzb24iOiAie1wia2V5RGF0YVwiOlwicUR0NUtBNDlERC9ucU90UERqYzhhRVp1VEsrUWFFVjVTZlQyY1huSll2dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTgzOTM5MzA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

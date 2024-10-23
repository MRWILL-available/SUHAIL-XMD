const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'avai' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_05_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgzLFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVSXFuZGVuaUIrTnJmTEl1OWxvQ2k3QVRCTFpUTUVWMk8rWWpUdmQwOUprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NzkyMzUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUE1QTlGRjEyQURDQkE2QjM3N0E4OEI1OEVGRkFFODlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NjcwNzA4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjQ3OTIzNTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QTk4QUNDOEM0RUE5NDVFMDA4NzJFQUVEQ0YwMDE2QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk2NzA3MDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOUEwMzdsYVZUeXltQTFUcVdRWUd5d1wiLFxuICBcInBob25lSWRcIjogXCI1MDdhYzRkNS1mMDM4LTQ3NzktOGFjMS00Y2QwYmYwNmU0YzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDIxLFxuICAgICAgMTY3LFxuICAgICAgMTc1LFxuICAgICAgNTUsXG4gICAgICAxMTYsXG4gICAgICAyOCxcbiAgICAgIDE4MixcbiAgICAgIDIyNyxcbiAgICAgIDE2OCxcbiAgICAgIDE5OCxcbiAgICAgIDE0NixcbiAgICAgIDI0NyxcbiAgICAgIDE2MyxcbiAgICAgIDExOSxcbiAgICAgIDE4OSxcbiAgICAgIDIzNSxcbiAgICAgIDIxNyxcbiAgICAgIDExOSxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMTYwLFxuICAgICAgMTgyLFxuICAgICAgNjIsXG4gICAgICAyMTgsXG4gICAgICAxODAsXG4gICAgICAxMjksXG4gICAgICAxMjYsXG4gICAgICAyMzcsXG4gICAgICAxNDksXG4gICAgICAxMjIsXG4gICAgICAyMjcsXG4gICAgICA2MyxcbiAgICAgIDIxMyxcbiAgICAgIDE3OCxcbiAgICAgIDEwNyxcbiAgICAgIDEyNCxcbiAgICAgIDk4LFxuICAgICAgMjM4LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOOUFSSE04MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ3OTIzNTI1Ojg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDcxNTkzMDg1ODcxNTY6ODdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+HsiDwn4e3IPCfh7wg8J+HriDwn4exIPCfh7FcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUDlvL01GRUszYzRyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdqNlNFaElaZk5SNEtGOHNvYmFHbi9RdFh5WlFuK3pwdzJTNXZFb3Y5RzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL1NmcmlQREdPUEtBbUZodzl4MUsyUThmL1FHK1FqejY5alVMcDlzdDhQcmtzMFVsRERhUlIwclJEYXJvM1FHOFQ3MUphWGJPRUM4RnVwNi8rL1FhQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNGduMmh3ZEN5bTNjdTlZSEVDWTRSM3J5ZWVUVnlLcEgrWDE1NEVoRmFCbCs1VzY0YnE5ZWxQUWpqRGZWUmhxTm0zQlhFOGVCQ3Bwa3ZCSDFSMzkzZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ3OTIzNTI1Ojg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2NzA3MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDYlFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNiUS5qc29uIjogIntcImtleURhdGFcIjpcIlBUVjNKSEZPNWw3bXlNRnNvRkV6alRxSXdqNW1oQnhOSU8zaEdMVVZRWlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4MzkzOTMxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NjcwNzA4NjI3XCJ9Igp9"  // PUT your SESSION_ID 


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

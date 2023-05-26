//installieren mit npm install steam-totp   
const SteamTotp = require('steam-totp');

//Erstes Argument ist das Shared Secret
secret=String(process.argv.slice(2))
code=String(SteamTotp.generateAuthCode(secret))
//Token wird auf die Console gelogged
console.log(code);
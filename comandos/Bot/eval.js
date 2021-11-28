const Discord = require("discord.js");
const { MessageEmbed, Collection, Guild } = require('discord.js');
const fs = require("fs")

const cls = ((x)=>console.log(x))

module.exports = {
    name:"eval",
    aliases:["e"],
    description: "NULL", 
    args: false,
    category: "Configuarion del creador",
    permissions:"",
    permissionsme: ["SEND_MESSAGES","VIEW_CHANNEL"],
    cooldonw: 5, 
    onlycreator: true, 
    
async execute(message, args, client, prefix, db, MessageEmbed){ 
  let toEval = args.join(" ") //Definimos toEval con argumentos
  if(!toEval) { //Creamos un if para que diga
      let embed = new Discord.MessageEmbed()
      .setDescription("Necesitas evaluar __*ALGO*__")
      .setColor("RANDOM")
      message.channel.send(embed)
      .then(m => m.delete(1000))
      return
  }

  try { 
    if(toEval.toLowerCase().includes("token")){
        return;
   }
    const code = toEval
 
       let evaled = eval(code);
  
       if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
 
   message.reply("Evaluated by "+client.user.username +"\n```js\n"+evaled+"\n```")
 } catch(err) { 
 
  message.reply("Error occurred "+"```js\n"+err+"```") 
 
 }


}
}
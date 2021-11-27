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

/*
  try { //Hacemos un try
    if(toEval.toLowerCase().includes("token")){
        return;
  }
  let evaluated = eval( toEval ) //"evaluated" va a evaluar el comando
  
  let beautify = require("beautify") //Se usa beautify para que funcione
  let embed = new Discord.MessageEmbed() //Creamos otro embed
  .setColor("RANDOM")
  .setTimestamp() //Usamos un Timestamp
  .setFooter(client.user.tag, client.user.displayAvatarURL)
  .setTitle(":desktop: "+client.user.tag)
  .addField("Codigo:", "\`\`\`js\n"+beautify(args.join(" "), { format: "js" })+"\`\`\`")
  .addField("Lo evaluado:", "```js\n"+evaluated+"```") //Aca aparecera lo que se evalua
  message.channel.send(embed)
} catch(err) { //Hacemos un catch y que defina err
  let beautify = require("beautify")
  let embed2 = new Discord.MessageEmbed()
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL)
  .addField("Hubo un error con el codigo que evaluaste", "```js\n"+err+"```") //Va a aparecer el error
  .setColor("RANDOM")
  message.channel.send(embed2) 
}
*/

}
}
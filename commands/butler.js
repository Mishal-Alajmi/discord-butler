
const fetch = require('node-fetch');

const replies = ["Ugh What do you want...Sir?🤦‍♂️", "Sir, what would you like","Sir, take this 👊", "Sir, would you like me to call your nanny 👶", "Sir, I'm sure you can wait", "Sir, your wish will remain a wish if you don't wait"];

module.exports = async (msg,args) => {
    if (args.length === 0) {
        let index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    } 
    // Take the command after !butler
    let subcommand = args[0];
    switch(subcommand) {
        case "gif":
            let keywords;
            subcommand.length === 0 ? keywords = "annoyed" : keywords = args.join(' ');
            console.log(keywords);
            let url = `https://g.tenor.com/v1/search?&q=${keywords}&key=${process.env.TENORKEY}&limit=10&`;
            let response = await fetch(url);
            let json = await response.json();
            let gif = json.results[0].url; 
            msg.channel.send(gif);
            msg.channel.send("GIF provided by Tenor");
            break;
        default:
            break;
    }


}
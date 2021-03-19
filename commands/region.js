module.exports = (msg,args) => {
    if (args.length === 0) {
            msg.channel.send(msg.guild.region);
        } else if (args.length === 2 && args[0] === "change") {
            console.log(args[1].toLowerCase())
            msg.guild.setRegion(args[1].toLowerCase())
            .then(() => {
                msg.channel.send(`Sir, region changed to ${args[1]} per your request`);
            })
            .catch((error) => {
                msg.channel.send(`Sir, this error occurd ${error}`);
            });
        }
}
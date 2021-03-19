const replies = ["🤦‍♂️ ahhhh yes, what do you want cun... I mean Sir!", "Sir, what would you like","Sir, take this 👊", "Sir, would you like me to call your nanny 👶"];
module.exports = (msg,args) => {
    if (args.length === 0) {
        let index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    } else if (args.length >= 1) {
        
    }
}
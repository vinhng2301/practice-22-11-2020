class Mobile {
    constructor() {
        this.name ="";
        this.msg ="";
        this.inbox = [];
        this.outbox = [];
        this.battery = 100;
    }

    writeMsg(msg){
        this.msg = msg;
    }

    sendMsg(mobile){
        this.outbox.push(this.msg);
        mobile.reciveMsg(this.name,this.msg);
    }

    reciveMsg(name,msg){
        this.inbox.push(msg);
        console.log("you've got a messege from" + name);
    }
}
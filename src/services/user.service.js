const { UserRepository } = require("../repositories");


class User {
    constructor() {
        this.user=new UserRepository();
    }
    async createUser(body){
        return this.user.insert(body);
    }

    async getUser(){
        
    }

}
module.exports=new User();
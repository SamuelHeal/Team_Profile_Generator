const employee = require("./Employee")

class engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = engineer
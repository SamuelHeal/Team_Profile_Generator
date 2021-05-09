const employee = require("./Employee")

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getRole(){
        return "Intern"
    }
}

module.exports = intern
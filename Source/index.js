const generateCards = require("./TextGeneration/htmlGen.js")
const inquirer = require("inquirer");
const fs = require("fs")



const initQuestions = [
    {
        message: "Please enter the team leader's name: ",
        name: "name"
    },
    {
        message: "Please enter this persons ID: ",
        name: "Identify"
    },
    {
        message: "Please enter this persons Email: ",
        name: "Email"
    },
    {
        message: "Please enter this persons Office Number: ",
        name: "officeNumber"
    },
    {
        type: "list",
        message: "Would you like to add a member to your team? ",
        choices: ["Yes", "No"],
        name: "confirm"
    },
]

const positionQuestion = [
    {
        type: "list",
        message: "Please select which team member you would like to add next: ",
        choices: ["Engineer", "Intern"],
        name: "position"
    }
]

const engineerQuestions = [
    {
        message: "Please enter their name: ",
        name: "name"
    },
    {
        message: "Please enter their ID: ",
        name: "Identify"
    },
    {
        message: "Please enter their Email: ",
        name: "Email"
    },
    {
        message: "Please enter their Github: ",
        name: "Github"
    },
    {
        type: "list",
        message: "Would you like to add a member to your team? ",
        choices: ["Yes", "No"],
        name: "confirm"
    },
]

const internQuestions = [
    {
        message: "Please enter their name: ",
        name: "name"
    },
    {
        message: "Please enter their ID: ",
        name: "Identify"
    },
    {
        message: "Please enter their Email: ",
        name: "Email"
    },
    {
        message: "Please enter their School: ",
        name: "School"
    },
    {
        type: "list",
        message: "Would you like to add a member to your team? ",
        choices: ["Yes", "No"],
        name: "confirm"
    },
]

class employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email
    }

    getName(){
        return this.name
    }

    getID(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
}

class manager extends employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return "Manager"
    }
}

class engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getRole(){
        return "Engineer"
    }
}

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getRole(){
        return "Intern"
    }
}

const teamMembers = []

function init(){
    inquirer
    .prompt(initQuestions)
    .then(function(results){
        teamMembers.push(new manager(results.name, results.Identify, results.Email, results.officeNumber))
        console.log(teamMembers)

        if (results.confirm === "Yes"){
            askPosition()
        }
        else{
            generateHTML()

        }
    })
}

function askPosition(){
    inquirer
    .prompt(positionQuestion)
    .then(function(results){
        if (results.position === "Intern"){
            askIntern()
        }
        else if (results.position === "Engineer"){
            askEngineer()
        }
    })
}

function askIntern(){
    inquirer
    .prompt(internQuestions)
    .then(function(results){
        teamMembers.push(new intern(results.name, results.Identify, results.Email, results.School))
        console.log(teamMembers)

        if (results.confirm === "Yes"){
            askPosition()
        }
        else{
            generateHTML()
        }
    })
}

function askEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then(function(results){
        teamMembers.push(new engineer(results.name, results.Identify, results.Email, results.Github))
        console.log(teamMembers)
        if (results.confirm === "Yes"){
            askPosition()
        }
        else{
            generateHTML()
        }
    })
}

function generateHTML(){
    // writeToFile("index2.html", generateCards.generateCard(teamMembers[i].name, "manager", teamMembers[i].id, teamMembers[i].email, teamMembers[i].officeNumber))

    for (let i = 0; i < teamMembers.length; i++){
        // if (teamMembers[i] === "manager"){
        //     writeToFile("index2.html", generateCards.generateCard(teamMembers[i].name, "manager", teamMembers[i].id, teamMembers[i].email, teamMembers[i].officeNumber))
        // }
        // else if (teamMembers[i] === "engineer"){
        //     writeToFile("index2.html", generateCards.generateCard(teamMembers[i].name, "engineer",teamMembers[i].id, teamMembers[i].email, teamMembers[i].github))
        // }
        // else if (teamMembers[i] === "intern"){
        //     writeToFile("index2.html", generateCards.generateCard(teamMembers[i].name, "intern", teamMembers[i].id, teamMembers[i].email, teamMembers[i].school))
        // }
        console.log(teamMembers[i])
        console.log(teamMembers[i].name)
        console.log(teamMembers[i].id)
        console.log(teamMembers[i].email)
        if (teamMembers[i] === "manager"){
            console.log(teamMembers[i].officeNumber)
        }



    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully created index.html file!'))
}



init()

// function test(){
//     writeToFile("index.html", generateCards.generateCard("Sam", "manager", "a", "aef", "af"))
// }

// test()
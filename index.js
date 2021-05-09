const generateCards = require("./Source/TextGeneration/htmlGen.js")
const htmlTop = require("./Source/TextGeneration/htmlTop.js")
const htmlBottom = require("./Source/TextGeneration/htmlBottom.js")
const Employee = require("./Classes/Employee")
const Manager = require("./Classes/Manager")
const Engineer = require("./Classes/Engineer")
const Intern = require("./Classes/Intern")
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

const confirmBuild = [
    {
        type: "list",
        message: "Would you like to build your Team Profile page?",
        name: "confirmation",
        choices: ["Yes", "No"]
    }
]

// class employee{
//     constructor(name, id, email){
//         this.name = name;
//         this.id = id;
//         this.email = email
//     }

//     getName(){
//         return this.name
//     }

//     getID(){
//         return this.id
//     }

//     getEmail(){
//         return this.email
//     }

//     getRole(){
//         return "Employee"
//     }
// }

// class manager extends employee {
//     constructor(name, id, email, officeNumber){
//         super(name, id, email)
//         this.officeNumber = officeNumber
//     }

//     getRole(){
//         return "Manager"
//     }
// }

// class engineer extends employee {
//     constructor(name, id, email, github){
//         super(name, id, email)
//         this.github = github
//     }

//     getRole(){
//         return "Engineer"
//     }
// }

// class intern extends employee {
//     constructor(name, id, email, school){
//         super(name, id, email)
//         this.school = school
//     }

//     getRole(){
//         return "Intern"
//     }
// }

const teamMembers = []

// const Sam = new Employee("test", 1, "test@test.com")

// console.log(Sam)

function init(){
    inquirer
    .prompt(initQuestions)
    .then(function(results){
        teamMembers.push(new Manager(results.name, results.Identify, results.Email, results.officeNumber))
        if (results.confirm === "Yes"){
            askPosition()
        }
        else{
            buildHTML()

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
        teamMembers.push(new Intern(results.name, results.Identify, results.Email, results.School))
        if (results.confirm === "Yes"){
            askPosition()
        }
        else{
            buildHTML()
        }
    })
}

function askEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then(function(results){
        teamMembers.push(new Engineer(results.name, results.Identify, results.Email, results.Github))
        if (results.confirm === "Yes"){
            askPosition()
        }
        else{
            buildHTML()
        
        }
    })
}

function buildHTML(){
    inquirer
    .prompt(confirmBuild)
    .then((results) => {
        if (results.confirmation === "Yes"){
            fs.writeFile("profile.html", htmlTop.htmlTop(), (err) =>
            err ? console.error(err) : console.log("Building file..."))
            for (let i = 0; i < teamMembers.length; i++){
                generateHTML(i)
            }
            generateBottom()
        }
        else{
            console.log("Page will not be built.")
        }
        
    })
    
}



function generateHTML(i){
    setTimeout(function(){
        if (teamMembers[i].getRole() === "Manager"){
            writeToFile("profile.html", generateCards.generateCard(teamMembers[i].name, teamMembers[i].getRole(), teamMembers[i].id, teamMembers[i].email, teamMembers[i].officeNumber))
        }
        else if (teamMembers[i].getRole() === "Engineer"){
            writeToFile("profile.html", generateCards.generateCard(teamMembers[i].name, teamMembers[i].getRole(), teamMembers[i].id, teamMembers[i].email, teamMembers[i].github))
        }
        else if (teamMembers[i].getRole() === "Intern"){
            writeToFile("profile.html", generateCards.generateCard(teamMembers[i].name, teamMembers[i].getRole(), teamMembers[i].id, teamMembers[i].email, teamMembers[i].school))
        }
    }, 1000 * i)
}

function generateBottom(){
    setTimeout(function(){
        writeToFile("profile.html", htmlBottom.htmlBottom())
        console.log("Team profile page has been successfully built!")
    }, 1000 * teamMembers.length + 1)
}


function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(''))
}

init()


// module.exports =  {
//     employee : employee,
//     intern : intern
// }

   
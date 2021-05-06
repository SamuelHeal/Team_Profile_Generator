


function generateCard(name, position, first, second, third){
    const engineer = "./Images/Engineer.png"
    const intern = "./Images/Intern.png"
    const manager = "./Images/Manager.png"

    if (position === "manager"){
        return `
        <div class="cardStyle">
            <div class="cardHeader">
                <h2>${name}</h2>
                <h3><img src="${manager}">Manager</h3>
    
            </div>
            <div class="cardBody">
                <div class="cardTextBox">
                    <p>ID: ${first}</p>
                </div>
                <div class="cardTextBox">
                    <p>Email: ${second}</p>
                </div>
                <div class="cardTextBox">
                    <p>Office Number: ${third}</p>
                </div>
            </div>
        </div>`
    }
    else if (position === "engineer"){
        return `
        <div class="cardStyle">
            <div class="cardHeader">
                <h2>${name}</h2>
                <h3><img src="${engineer}">Engineer</h3>
    
            </div>
            <div class="cardBody">
                <div class="cardTextBox">
                    <p>ID: ${first}</p>
                </div>
                <div class="cardTextBox">
                    <p>Email: ${second}</p>
                </div>
                <div class="cardTextBox">
                    <p>Github: <a>https://github.com/${third}<a></p>
                </div>
            </div>
        </div>`
    }
    else if (position === "intern"){
        return `
        <div class="cardStyle">
            <div class="cardHeader">
                <h2>${name}</h2>
                <h3><img src="${intern}">Intern</h3>
    
            </div>
            <div class="cardBody">
                <div class="cardTextBox">
                    <p>ID: ${first}</p>
                </div>
                <div class="cardTextBox">
                    <p>Email: ${second}</p>
                </div>
                <div class="cardTextBox">
                    <p>School: ${third}</p>
                </div>
            </div>
        </div>`
    }
    
}




module.exports = { generateCard };



function generateCard(name, position, first, second, third){
    const engineer = "./Images/Engineer.png"
    const intern = "./Images/Intern.png"
    const manager = "./Images/Manager.png"

    if (position === "Manager"){
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
                    <p>Email: <a href="mailto:${second}">${second}<a/></p>
                </div>
                <div class="cardTextBox">
                    <p>Office Number: ${third}</p>
                </div>
            </div>
        </div>`
    }
    else if (position === "Engineer"){
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
                    <p>Email: <a href="mailto:${second}">${second}<a/></p>
                </div>
                <div class="cardTextBox">
                    <p>Github: <a href="https://github.com/${third}" target="_blank">${third}<a></p>
                </div>
            </div>
        </div>`
    }
    else if (position === "Intern"){
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
                    <p>Email: <a href="mailto:${second}">${second}<a/></p>
                </div>
                <div class="cardTextBox">
                    <p>School: ${third}</p>
                </div>
            </div>
        </div>`
    }
    
}




module.exports = { generateCard };
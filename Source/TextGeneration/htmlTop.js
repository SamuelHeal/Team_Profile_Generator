
function htmlTop(){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./Source/style.css">
    
    <title>Team Profile Generator</title>
</head>
<body>

    <header class="jumbotron jumbotron-fluid bg-danger text-white text-center">
        <h1>My Team</h1>
    </header>
    
    <div class="container">`
}

module.exports = { htmlTop };



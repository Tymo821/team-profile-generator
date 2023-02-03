function generateCards(teamList) {
    var cardsHTML = `
    <div class="container d-flex justify-content-center align-center">`
    var newRowCounter = 0;

    // loop through the teamList array
    for(i = 0; i < teamList.length; i++) {
        // if newRowCounter equals 3, create a new row
        if (newRowCounter === 3) {
            newRowCounter = 0;
            cardsHTML += `
    </div>
    <div class="container my-2 d-flex justify-content-center align-center">`
        }

        // add the card HTML
        cardsHTML += `
            <div class="card mx-4">
                <div class="card-header h-50 bg-primary text-light d-flex flex-column">
                    <h3>${teamList[i].name}</h2>
                    <h4>${teamList[i].role}</h3>
                </div>
                <div class="card-body d-flex flex-column bg-light justify-content-center align-center">
                    <div class="bg-white my-1 px-1 border">ID: ${teamList[i].id}</div>
                    <div class="bg-white my-1 px-1 border">Email: <a href="mailto: ${teamList[i].email}">${teamList[i].email}</a></div>`

        // add additional information based on the role
        switch (teamList[i].role) {
            case 'Manager':
                cardsHTML += `
                    <div class="bg-white my-1 px-1 border">Office Number: ${teamList[i].officeNum}</div>`;
                break;
            case 'Engineer':
                cardsHTML += `
                    <div class="bg-white my-1 px-1 border">Github: <a href="${teamList[i].github}">${teamList[i].github}</a></div>`
                break;
            case 'Intern':
                cardsHTML += `
                    <div class="bg-white my-1 px-1 border">School: ${teamList[i].school}</div>`
                break;
        }
        
        // close the card-body and card divs
        cardsHTML += `
        </div>
    </div>`

        // increment the newRowCounter
        newRowCounter ++;
    } 

    // close the last row
    cardsHTML += `
    </div>`

    // return the HTML
    return cardsHTML;
}

// exports the complete webpage
module.exports = (teamData) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>My Team</title>
</head>
<body class="bg-light">
    <header class="w-100 h-50 bg-danger pt-2 pb-2 text-center text-light">
        <h1 class="">My Team</h1>
    </header>
    <main class="container d-flex w-100 p-5 d-flex flex-column justify-content-center">
        ${generateCards(teamData)}
    </main>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>`
}
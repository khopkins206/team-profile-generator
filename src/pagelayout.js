const createManager = (teamMember) => {
  return `<div class="card text-center col-xs-6 col-md-4">
      <div class="card-header">
      <span class = "icon">☕</span>
       <h3>Manager</h3> <p> ${teamMember.grabName()} </p>
     </div>
      <div class="card-body list-group list-group-flush">
       <ul>
        <li class="list-group-item">ID: ${teamMember.grabID()} </li>
        <li class="list-group-item">Email: ${teamMember.grabEmail()} </li>
        <li class="list-group-item">Office Phone: ${teamMember.grabOffice()} </li>
       </ul>
     </div>
    </div>`
}

const createEngineer = (teamMember) => {
  return `<div class="card text-center col-xs-6 col-md-4">
      <div class="card-header list-group list-group-flush">
        <span class = "icon">👓</span>
        <h3>Engineer</h3> <p> ${teamMember.grabName()} </p>
     </div>
      <div class="card-body list-group list-group-flush">
       <ul>
        <li class="list-group-item">ID: ${teamMember.grabID()} </li>
        <li class="list-group-item">Email: ${teamMember.grabEmail()} </li>
        <li class="list-group-item">GitHub: ${teamMember.grabGithub()} </li>
       </ul>
     </div>
    </div>`
}

const createIntern = (teamMember) => {
  return `<div class="card text-center col-xs-6 col-md-4">
      <div class="card-header">
      <span class = "icon">🎓</span>
       <h3>Intern</h3> <p> ${teamMember.grabName()} </p>
     </div>
      <div class="card-body list-group list-group-flush">
       <ul>
        <li class="list-group-item">ID: ${teamMember.grabID()} </li>
        <li class="list-group-item">Email: ${teamMember.grabEmail()} </li>
        <li class="list-group-item">School: ${teamMember.grabSchool()} </li>
       </ul>
     </div>
    </div>`
}

const generateHTML = (teamMembers) => {
  console.log(teamMembers)

  let cardContainer = ""

  for (let index = 0; index < teamMembers.length; index++) {
    const teamMember = teamMembers[index];
    if (teamMember.grabPosition() === `Manager`) {
      cardContainer = cardContainer + createManager(teamMember)
    } else if (teamMember.grabPosition() === `Engineer`) {
      cardContainer = cardContainer + createEngineer(teamMember)
    } else if (teamMember.grabPosition() === `Intern`) {
      cardContainer = cardContainer + createIntern(teamMember)
    }
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper text-center">
            <h1>My Team</h1>
            </div>
        </nav>
        <div class="row">
        ${cardContainer}
        </div>
        </div>
    </body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </html>`;
};

module.exports = generateHTML;
const createManager = (teamMember) => {
  return `<div class="card text-center">
      <div class="card-header">
       Manager: ${teamMember.grabName()}
     </div>
      <div class="card-body">
       <ul>
        <li>ID: ${teamMember.grabID()} </li>
        <li>Email: ${teamMember.grabEmail()} </li>
        <li>Office Phone: ${teamMember.grabOffice()} </li>
       </ul>
     </div>
     <div class="card-footer text-muted">
     </div>
    </div>`
}

const createEngineer = (teamMember) => {
  return `<div class="card text-center">
      <div class="card-header">
       Engineer: ${teamMember.grabName()}
     </div>
      <div class="card-body">
       <ul>
        <li>ID: ${teamMember.grabID()} </li>
        <li>Email: ${teamMember.grabEmail()} </li>
        <li>GitHub: ${teamMember.grabGithub()} </li>
       </ul>
     </div>
     <div class="card-footer text-muted">
     </div>
    </div>`
}

const createIntern = (teamMember) => {
  return `<div class="card text-center">
      <div class="card-header">
       Intern: ${teamMember.grabName()}
     </div>
      <div class="card-body">
       <ul>
        <li>ID: ${teamMember.grabID()} </li>
        <li>Email: ${teamMember.grabEmail()} </li>
        <li>School: ${teamMember.grabSchool()} </li>
       </ul>
     </div>
     <div class="card-footer text-muted">
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
        <title>My Team</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
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
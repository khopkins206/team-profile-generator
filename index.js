const inquirer = require(`inquirer`);
var fs = require(`fs`)
const Engineer = require(`./lib/engineer`)
const Intern = require(`./lib/intern`)
const Manager = require(`./lib/manager`)
const generateHTML = require(`./src/pagelayout`)

const teamMembers = [];
// manager questions
// const askManagerQuestions = () => {
const managerQuestions = [{
  type: `input`,
  name: `name`,
  message: "What is your name?"
}, {
  type: `input`,
  name: `id`,
  message: "What is your employee ID?"
}, {
  type: `input`,
  name: `office`,
  message: "What is your office number?"
}, {
  type: `input`,
  name: `email`,
  message: "What is your email?"
}, {
  type: `list`,
  name: `nextEmployee`,
  message: "Which employee do you want to add to your team?",
  choices: [`Engineer`, `Intern`, `I'm finished adding`]
}]

// const Manager = new Manager(answers.name)

// engineer questions
const askEngineerQuestions = () => {
  inquirer.prompt([{
      type: `input`,
      name: `name`,
      message: "What is your name?"
    }, {
      type: `input`,
      name: `id`,
      message: "What is your employee ID?"
    }, {
      type: `input`,
      name: `email`,
      message: "What is your email?"
    }, {
      type: `input`,
      name: `github`,
      message: "What is your GitHub username?"
    }, {
      type: `list`,
      name: `nextEmployee`,
      message: "Which employee do you want to add to your team",
      choices: [`Engineer`, `Intern`, `I'm finished adding`]
    }])
    .then((engineerAnswers) => {
      const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);

      teamMembers.push(engineer)

      if (engineerAnswers.nextEmployee === `Engineer`) {
        askEngineerQuestions()
      } else if (engineerAnswers.nextEmployee === `Intern`) {
        askInternQuestions()
      } else {
        writeToFile("index.html", generateHTML(teamMembers))
      }
    });

  // intern questions
  const askInternQuestions = () => {
    inquirer.prompt([{
        type: `input`,
        name: `name`,
        message: "What is your name?"
      }, {
        type: `input`,
        name: `id`,
        message: "What is your employee ID?"
      }, {
        type: `input`,
        name: `email`,
        message: "What is your email?"
      }, {
        type: `input`,
        name: `school`,
        message: "What school did you attend?"
      }, {
        type: `list`,
        name: `nextEmployee`,
        message: "Which employee do you want to add to your team",
        choices: [`Engineer`, `Intern`, `I'm finished adding`]
      }])
      .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);

        teamMembers.push(intern)

        if (internAnswers.nextEmployee === `Engineer`) {
          askEngineerQuestions()
        } else if (internAnswers.nextEmployee === `Intern`) {
          askInternQuestions()
        } else {
          writeToFile("index.html", generateHTML(teamMembers))
        }
      })
  }
};

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.error(err)
    } else(
      console.log("You've successfully written to " + fileName)
    )
  })
}

// switch case depending on employee choice
const init = () => {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.office, answers.email);

    teamMembers.push(manager)

    console.log(answers)

    switch (answers.nextEmployee) {
      case `Engineer`:
        console.log("yo")
        askEngineerQuestions()
        break;
      case `Intern`:
        askInternQuestions()
        break;
      default:
        writeToFile("index.html", generateHTML(teamMembers))
    }
  })
};

init();
const inquirer = require(`inquirer`);
var fs = require(`fs`)

// manager questions
// const askManagerQuestions = () => {
const managerQuestions = ({
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
  message: "Which employee do you want to add to your team",
  choices: [`Engineer`, `Intern`, `I'm finished adding`]
})

// const Manager = new Manager(answers.name)

// engineer questions
const askEngineerQuestions = () => {
  inquirer.prompt({
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
    })
    .then((engineerAnswers) => {
      const Engineer = new Engineer(engineerAnswers.name)
      if (answers.nextEmployee === `Engineer`) {
        askEngineerQuestions()
      } else if (answers.nextEmployee === `Intern`) {
        askInternQuestions()
      } else {
        generateHTML(info)
      }
    });

  // intern questions
  const askInternQuestions = () => {
    inquirer.prompt({
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
      })
      .then((internAnswers) => {
        const Intern = new Intern(internAnswers.name)
        if (answers.nextEmployee === `Engineer`) {
          askEngineerQuestions()
        } else if (answers.nextEmployee === `Intern`) {
          askInternQuestions()
        } else {
          generateHTML(info)
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
    const Manager = new Manager(answers);

    switch (answers.nextEmployee) {
      case `Engineer`:
        askEngineerQuestions()
        break;
      case `Intern`:
        askInternQuestions()
        break;
      default:
        writeToFile("index.html", generateHTML(info))
    }
  })
};

init();
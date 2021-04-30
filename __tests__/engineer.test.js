const Engineer = require("../lib/engineer");


describe(`engineer`, () => {

  it(`should create an object with GitHub Profile`, () => {
    const engineer = new Engineer("John Doe", 1, "test@test.com","testprofile")

 
    expect(engineer.grabGithub()).toEqual("testprofile")

  })
})
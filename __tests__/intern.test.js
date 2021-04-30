const Intern = require("../lib/intern")

describe(`intern`, () => {

  it(`should create an object with GitHub Profile`, () => {
    const intern = new Intern("John Doe", 1, "test@test.com","Test University")

 
    expect(intern.grabSchool()).toEqual("Test University")

  })
})
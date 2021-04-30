const Manager = require("../lib/manager")

describe(`manager`, () => {

  it(`should create an object with GitHub Profile`, () => {
    const manager = new Manager("John Doe", 1, "test@test.com","555-555-5555")

 
    expect(manager.grabOffice()).toEqual("555-555-5555")

  })
})
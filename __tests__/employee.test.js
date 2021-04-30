const Employee = require("../lib/employee")


describe(`employee`, () => {

  it(`should create an object with ID and Name`, () => {
    const employee = new Employee("John Doe", 1, "test@test.com")

 
    expect(employee.grabID()).toEqual(1)
    expect(employee.grabName()).toEqual("John Doe");
    expect(employee.grabEmail()).toEqual("test@test.com");


  })
})
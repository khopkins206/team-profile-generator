class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  grabName() {
    return this.name
  }

  grabID() {
    return this.id
  }

  grabEmail() {
    return this.email
  }

  grabPosition() {
    return `Employee`;
  }
}

module.exports = Employee
class Employee {
    constructor() {
        this.employeeName
    }

    getEmployeeName() {
        return this.employeeName
    }

    setEmployeeName(newName) {
        if (typeof newName == "string") {
            this.employeeName = newName
        } else {
            throw new Error("Name should be a string")
        }
    }
}

const employee1 = new Employee()
employee1.setEmployeeName("David")
console.log(employee1.getEmployeeName())

const employee2 = new Employee()
employee2.setEmployeeName(123)
console.log(employee2.getEmployeeName());

// membuat class employee
class Employee {
    hour = 0

    addName(name) {
        if (typeof name !== 'string') {
            throw new Error("Name must be string")
        } else {
            this.name = name
        }
    }

    addWorkingHour(hour) {
        if (hour <= 0) {
            throw new Error("hour must be grether then 0")
        } else {
            this.hour += hour
        }
    }
}

class FullTimeEmployee extends Employee {
    getSalary() {
        if (this.hour <= 6) {
            return this.hour * 100000
        } else {
            return 600000 + (this.hour - 6) * 75000
        }
    }
}

class PartTimeEmployee extends Employee {
    getSalary() {
        if (this.hour <= 6) {
            return this.hour * 50000
        } else {
            return 300000 + (this.hour - 6) * 30000
        }
    }
}

const fullTimeEmployee1 = new FullTimeEmployee()
fullTimeEmployee1.addName("Employe 1")
fullTimeEmployee1.addWorkingHour(5)
fullTimeEmployee1.addWorkingHour(3)
console.log(fullTimeEmployee1)
console.log(fullTimeEmployee1.getSalary())
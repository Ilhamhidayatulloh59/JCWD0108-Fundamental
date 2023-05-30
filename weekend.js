function weekend(date) {
    const day = date ? new Date(date).getDay() : new Date().getDay()
    return day == 0 || day == 6 ? "Weekend" : "Weekday"
}

console.log(weekend())
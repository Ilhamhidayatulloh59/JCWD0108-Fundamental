const QueueClass = require('./queue')

let queue = new QueueClass([
    "Queue 1",
    "Queue 2",
    "Queue 3",
    "Queue 4",
    "Queue 5",
])

console.log(queue.data)
queue.run()

/*
    Queue 1 Done in 2 minutes
    Queue 2 Done in 4 minutes
    Queue 3 Done in 2 minutes
    Queue 4 Done in 9 minutes
    Queue 5 Done in 10 minutes
 */
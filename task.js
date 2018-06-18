const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var task = require('fs');
const all_task = [];
var i = 0;

console.log("type 'show' to display all task, type 'del_[number] to delete task example del_1'")
console.log("please enter your task :");

rl.on('line', (input) => {
    const stop = /^[\s]/;
    const del = /del_[\d]/;
    if (input == "" || stop.test(input)) {
        console.log("good bye");
        rl.close();
    }
    else if (input == "show") {
        show_all_task()
    }
    else if (del.test(input)) {
        let num = input.slice(input.indexOf("_"),input.length)
        delete_task(num);
    }
    else {
        console.log(`Received: ${input}`);
        all_task[i] = input;
        i = all_task.length;
    }
});

function show_all_task() {
    for(var j in all_task) {
        console.log(`${j}. ${all_task[j]}`);
    }
}

function delete_task(num) {
    if(all_task[num] == undefined){
        console.log("undefined task");
    }
    else{
        all_task.splice(num, 1);
        console.log("delete task finished!!");
    }
}
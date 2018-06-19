const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var task = require('fs');
const all_task = [];

console.log("type 'show' to display all task, type 'del_[number] to remove task. Example del_1'")
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
        let num = input.slice(input.indexOf("_")+1,input.length)
        delete_task(num);
    }
    else {
        console.log(`Received: ${input}`);
        all_task.push(input);
    }
});

function show_all_task() {
    var j = 0;
    for(j; j<=all_task.length; j++) {
        if(all_task[j] != undefined){
            console.log(`${j+1}. ${all_task[j]}`);
        }
        else{
            
        }
    }
}

function delete_task(num) {
    num = num - 1;
    if(all_task[num] == undefined){
        console.log("undefined task");
    }
    else{
        all_task.splice(num, 1);
        console.log("delete task finished!!");
    }
}
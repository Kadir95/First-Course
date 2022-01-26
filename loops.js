var todoList = [
    "Vacuum",
    "Iron",
    "Sleep",
    "Study Python",
];

var todoList2 = [
    "Vacuum!",
    "Iron!",
    "Sleep!",
    "Study Python!",
];


var todoLenght = todoList.length;
for (var i=0; i<todoLenght; i++) {
   //  todoList[i] = todoList[i] + "!"; 
    // todoList.pop();
    console.log(i);
}

todoList.forEach(function(todoList, i) {
    console.log(todoList, i);
})


function todoLog(todoList, i)
{
    console.log(todoList, i);
}
todoList.forEach(todoLog);

todoList2.forEach(todoLog);



/*
var Brojac = 10;
while (Brojac> 0) {
    console.log(Brojac);
    Brojac--;
}

var Brojac2 =0;
while (Brojac2<10) {
    console.log(Brojac2);
    Brojac2++;
}

var Brojac3=10;
do {
    console.log(Brojac3);
    Brojac3--;
    
} while (Brojac3>0) */



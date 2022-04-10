// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newestArray=[];
array.forEach(user=>{
  let{username}=user;
  username=username+"!";
  newestArray.push(username);
})
console.log(newestArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const saMapiranjem=array.map(user=>{
  let {username}=user;
  return username+"?";
})
console.log(saMapiranjem);








//Filter the array to only include users who are on team: red

const saFilterom= array.filter(user=> {
  return user.team==="red";
})
console.log(saFilterom);








//Find out the total score of all users using reduce

const saReduceom = array.reduce((acum, anum=>
  {
    return acum+anum.score;
  }),0 )
  console.log(saReduceom);





// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})



const array12= [2,4,6,7,10];
const noviArray=array12.map((num,i)=>{
  return num*2;
})
console.log(noviArray);




//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// sa cijelim korisnikom
const theMapping= array.map(user=> {
  user.items=user.items.map(item=>{
    return item+"!";
  })
  return user;
})
console.log(theMapping);


// samo sa itemima

const userMap = array.map(user=>
  {
    let itemMap=user.items.map(item=> {
      return item+"!";
    })
    return itemMap;
  })
  console.log(userMap);


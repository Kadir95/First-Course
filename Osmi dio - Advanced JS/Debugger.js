const flattered = [[0,1], [2,3] [4,5]].reduce(
    (accumulator,array) => { 
    debugger;
     return [].concat(array)}, []);


const flattere =  [[0,1], [2,3] [4,5]].reduce(
    (a,b) => a.concat(b), []);


debugger; // Govori programu da se pauzira, freeza
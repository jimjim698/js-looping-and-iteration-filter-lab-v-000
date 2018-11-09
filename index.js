// Code your solution in this file

function findMatching(drivers, string){
 drivers.filter(function (d) {return d.toLowerCase() === string.toLowerCase()})
  
  
}

[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
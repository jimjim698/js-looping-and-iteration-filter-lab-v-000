// Code your solution in this file

function findMatching(drivers, string){
 let b = drivers.filter(function (d) { d.toLowerCase() == string.toLowerCase()})
  
  return b 
}


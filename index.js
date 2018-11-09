// Code your solution in this file

function findMatching(drivers, string){
  let b = drivers.filter(function (d) { return d.toLowerCase() === string.toLowerCase()})
   return b
}

function fuzzyMatch(drivers, string){
  let n = string.length 
  let b = drivers.filter(function (d) { return d.slice(0,n) === string
  })
  return b 
}


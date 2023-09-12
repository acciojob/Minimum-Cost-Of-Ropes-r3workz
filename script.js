function calculateMinCost() {
  //your code here
  const ropes = document.getElementById("rope-lengths").value.split(",")

  let cost=0
  
  while(ropes.length>1){
    ropes.sort((a,b)=>a-b)

    let temp = Number.parseInt(ropes[0])+Number.parseInt(ropes[1])
    ropes.shift()
    ropes.shift()
    ropes.push(temp)

    cost +=temp

    // console.log(ropes);
  }
  // console.log(cost);
  
  document.getElementById("result").innerText = cost
}  

class NewArray {
  constructor(){
    this.length = 0
    this.data = {}
  }

  // push method

  push(item){
    this.data[this.length] = item;
    this.length ++ 
    return this.data
  }


  //access an item

  access(index){
    let accessVariable = this.data[index]
    return accessVariable
  }


  //pop method
  pop(){
    let poppedItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length --;
    return poppedItem
  }


  //delete an item

}


let arrayExample = new NewArray;
arrayExample.push("Hello this is a test")
arrayExample.push("This is the second element of our array")
arrayExample.push("This is the third element of our array")

console.log(arrayExample)

console.log("\n"+arrayExample.pop())
console.log("\n"+arrayExample.access(0))

console.log(arrayExample)
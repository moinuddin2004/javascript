// var fname=prompt("enter your first name")
// var lname=prompt("enter your last name")
// var fullname=fname +lname
// document.write(fullname +" welcome")
// TWO
// let str =prompt("enter")
// let strLength = str.length
// console.log(strLength)
// THREE
// let str = "pakistani";
// let index = str.indexOf('n');
// console.log(index); 
// FOUR
// let str = "Hello,World!";
// let index = str.lastIndexOf("l");
// console.log(index);
// FIVE
// var input=prompt("enter")
// var upper=input.slice(0).toUpperCase()
// document.write(upper)
// SIX
// var input=prompt("enter")
// var upper=input.slice(0,1).toUpperCase()
// document.write(upper)
// SEVEN
// var floatNum = 35.36;
// var  intNum = Math.floor(floatNum * 100); 
// console.log(intNum);
// EIGHT
// var a= 476
// document.write(typeof a)
// var str =a.toString()
// document.write(typeof str)



// 26 above

// ONE
// document.write(Math.floor(45.5)+'<br>')
// document.write(Math.ceil(44.4)+'<br>')
// document.write(Math.round(44.6)+'<br>')

// TWO
// console.log(Math.floor(-32.4)+'<br>')
// console.log(Math.ceil(-32.4)+'<br>')
// console.log(Math.round(-31.8)+'<br>')
// THREE

// var a=parseFloat(prompt('enter no.?'))
//  console.log(Math.round(a))
//  console.log(Math.ceil(a))
//  console.log(Math.floor(a))

//  FOUR

// var toss=(Math.random()*6)+1
// var change=Math.floor(toss)
// console.log("random dice value is ==>"+change)
//  FIVE

// var toss=(Math.random()*100)+1
// var change=Math.floor(toss)
// console.log("random  value is ==>"+change)

// SIX
var inp=parseInt(prompt('enter any number ?'))
var toss=(Math.random()*10)+1
var change=Math.floor(toss)
console.log("random  value is ==>"+change)

if(inp==change){
    console.log('you win')
}
else{
    console.log('you loss')

}

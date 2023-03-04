const pl = document.querySelectorAll('p')

console.log(pl)


function scripjsyasagich(src){

  const script11 = document.createElement('script')

  script11.src=src
  document.body.append(script11)
}
scripjsyasagich('js/jsi.js')
scripjsyasagich('js/js2.js')
scripjsyasagich('js/js3.js')











// "use strict";
// const calc= [1,2,3]

 
// function  logger (x, y, z){
//   console.log(x+y+z)
// }

// logger(...calc)

// const arr=['j', 'a']

// const newArr =[...arr]

// console.log(newArr)


// const numbers ={
//   x:2,
//   y:4,
// z:{
//   a:3,
//   b:1,
// }
// }
// const newNumbers={...numbers}

// newNumbers.x=9
// console.log(numbers)
// console.log(newNumbers)


// const firsName = "Jasur"
// const str = new String(firsName)

// console.log(typeof firsName)
// console.log( typeof str)































// const video =prompt("What`s your favourite videos?");


// const myvid =video.split(", ")
// myvid.sort()
// console.log(myvid.join("- "));

// const arrr = [3, 12 ,44, 88,4]
// arrr.sort((a,b)=>(a-b))
// console.log(arrr)

// function compfn(a,b){
//   return a-b
// }
  

// let x = 10;
// let y = x;

// y= y+3;

// console.log(x)
// console.log(y)


// const obekt = {
//   x: 10,
//   y: 4,
// }

// const newObk=obekt;

// newObk.x=20;

// console.log(newObk)
// console.log(obekt)

























// function nusxaOlgich (nusxaOlinadigan){
//   let nusxa ={};

//   for(let key in nusxaOlinadigan){
//     nusxa[key]=nusxaOlinadigan[key]
//   }
//   return nusxa
// }

// const raqamlar={
//   x:3,
//   y:9,
//   z:{
//     a:1,
//     b:2,
//   }
// }

// const yangiRaqamlar= Object.assign({},raqamlar)

// yangiRaqamlar.x=7;

// yangiRaqamlar.z.a=10


// console.log(raqamlar)
// console.log(yangiRaqamlar)







// const arr= [1,2,3,4];

// const newarr=arr.slice()

// newarr[0]="Jasurbek"

// console.log(arr)
// console.log(newarr)


// const Annasr =["Ronaldo" ,"Jaloliddin"];
// const Barsa= ["Messi"];

// const zborniy=[...Annasr, ...Barsa]
// console.log(zborniy)























// function nusxaObyekt(obj){
// let objNusxa={};

// for(let key in obj){
// objNusxa[key]=obj[key]
// }

// return objNusxa;

// }


// const numberlar={
//   x:33,
//   y:77,
// }

// const newNumberlar=nusxaObyekt(numberlar)

// newNumberlar.x=66;

// console.log(numberlar)
// console.log(newNumberlar)






























// function nusxaObyekt(obyect){
//   let Obyektnusxa={};
  
//   for(let key in obyect){
// Obyektnusxa[key]=obyect[key]
//   }
//   return Obyektnusxa;
// }

// const numbers={
//   x:1,
//   y:3,

// }
// const newObek=nusxaObyekt(numbers)

// newObek.x=4

// console.log(numbers)
// console.log(newObek)


















// const numberOfSeries =+prompt("Nechta serial ko`rdingiz?")

// const seriesDB={
//   count:numberOfSeries,
//   series:{},
//   actors:{},
//   genres:[],
//   privat:false

// }
// const ohirgiserial = prompt("Ohirgi ko`rgan serialingiz?"),
//   nechchibaho=+prompt("Nechchi baho berasiz?");
  
// let i =ohirgiserial;

// while(i<2){
//   console.log(i)
//   i++
// }
// while(nechchibaho<1){
//   console.log(nechchibaho)
//   nechchibaho++
// }
// seriesDB.series[ohirgiserial]=nechchibaho;

// console.log("Open modal")

// function sayHelloWorld (text) {
//   console.log(text)
// }

// sayHelloWorld("Hello world");

// function calc (a, b) {
//   console.log(a+b);
// }

// calc(44,44)

// let age =30;

// function sayMyName(name, surname){
//    age=20
//   console.log(`My name is ${name} ${surname}`)

// }

// sayMyName("Jasurbek", "Saribayev")
// console.log(age)

// function calc(a, b) {
//   return a+b;
// }
 
// const sumOfAandB=calc(10,5)
// console.log(sumOfAandB)

// // function declaration
// function declaration (){
//   return 
// }

// //  function expression
// const expression= function(){
//   return 
// }

// //  Arrow function
//  const arrow = () =>//return//
//  {
//   return
//  }
  
//  const user = "JasurbekSaribayev"
//  const arr = [1,2,3,4];

//  console.log(user.indexOf("S"))
//  console.log(user.substr(8,3))

// const numn = 4.2;
// console.log(Math.round(numn))

// const borderWidth = "13.9" 

// // console.log(parseInt(borderWidth))
// console.log(parseFloat(borderWidth))



// // for(let i=0; i<=1; i++){

// //   const ohirgiserial = prompt("Ohirgi ko`rgan serialingiz?"),
// //   nechchibaho=+prompt("Nechchi baho berasiz?");
  
// //   seriesDB.series[ohirgiserial]=nechchibaho;

// //   if(ohirgiserial!=null&& nechchibaho!=null&&nechchibaho!=NaN&& ohirgiserial!=""&&nechchibaho!=""&&nechchibaho!=NaN){
// //     console.log("done") 
// //   }else{
// //     console.log("error")
// //     i--;
// //   }
// // }

// if(seriesDB.count<5){
//   console.log("Kam serial ko`ripsiz")
// }else if(seriesDB.count>=5&& seriesDB.count<=10){
//   console.log("Siz klassik tomoshabin ekansiz!")
// }else if(seriesDB.count>10){
//   console.log("Siz serialchi zvezda ekansiz!")
// }else{
//   console.log("Eror")
// }



// console.log(seriesDB)



// // for(let i = 1; i <= 10; i++){

// //   if(i===7){
// //     break;
// //     // continue;
// //   }
// //   console.log(i)
// // }

// // if (age>18) {
// //   console.log("Welcome");
// // }else{
// //   console.log("No entry!!!!!")
// // }

// // if (age>25){
// //   console.log("Horror films");
// // }else if(age>18 ){
// //   console.log("Jangari films");
// // }else(console.log("Multfilm"))

// // age>25  ? console.log("Horror films"): console.log("Multik")
// // const color="red";

// // switch(color){
// //   case "red":
// //     console.log("Stop");
// //     break;
// //     case "green":
// //       console.log("Gooo!");
// //       break;
// //       case "yellow":
// //         console.log("Slowly");
// //         break;
// //         default:
// //           console.log("Traffic Jam");
// //           break;
// // }

// //   let numberSikl = 10;
// // //First yo`li
// //   // while(numberSikl > -10){
// //   //   console.log(numberSikl),
// //   //   numberSikl--
// //   // }

// //   // Second yo`li2

// // //   do{
// // // console.log(numberSikl)
// // // numberSikl++
// // //   }
// // //   while(numberSikl<=10)

// // //  Thirty yo`li

// // for(let i = 1; i <= 10; i++){

// //   if(i===7){
// //     break;
// //     // continue;
// //   }
// //   console.log(i)
// // }
// function showDb (){
//   if(!serialDB.privat){
//     console.log(serialDB)
//   }else(
//     console.log("Malumotlarni ko`rishga ruhsat yoq" )
//   )
// }

// showDb()

// function writeGenres(){
// for(let i=0; i<3; i++){
//   const liked=prompt(`Yaxshi ko'rgan janringiz ${i+1}?`)

//   serialDB.genres[i]=liked 

// }



// }
// writeGenres(1,2,3)
 





const age =0;

if (!age){
  console.log("g")
}

//to string
// 1
console.log(typeof String(5))
//2
console.log(typeof ("Jasur"+24))

const num=55
console.log(typeof ('yotu et'+num))

// //to number

// console.log(typeof Number("4"))

// console.log(typeof +"5") //  +promt

// console.log(typeof parseInt('44' ))

// // 0, null, undefined, NaN, "" bular har doim = false ga teng bo`ladi

// const aged= null

// if(!aged){
//   console.log("! fals ekan brat")
// }
 
// console.log(typeof !!"4")





















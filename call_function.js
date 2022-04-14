//Example 1
//==================================

function Prodcut (name,price){
    this.name = name ;
    this.price = price;
}

function Food(name,price){
    Prodcut.call(this,name,price);
}

console.log(new Food('Fride Rice',100).name);





//Example 2
//==================================



// const personBluePrint = {
//     fullName:function(){
//         return `My Full Name is ${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 ={
//     firstName:'Iftakhar Alam',
//     lastName:'Rizve'
// }

// const person2 ={

// }

// console.log(personBluePrint.fullName.call(person1))
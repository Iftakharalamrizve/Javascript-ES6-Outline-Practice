//default parameter 

let a = 5 , b =10 ;

function defaultParameter(first , second){
    return first * second ;
}

defaultParameter(a,b);


//Rest parameter 
let list = [1,2,3,4,5];

function restParameterExample(first,second,...third)
{
    return first * second * third.length ;
}
restParameterExample(a,b,list)

//Spread operator 

let list1 = ['iftakhar','alam','rizve'];
let list2 = [...list1] ; // user spread operation create new list 2
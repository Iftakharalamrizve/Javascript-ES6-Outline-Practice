
// constant define in globale schope  and constant syntax
const name = " Iftakhar Alam Rizve";


// constant define in block schope 
{
    const name = " Iftakhar ";
    console.log(' Print Block Scope Constant Value '+ name);
}

// constant define for function schope 
function functionSchopeConstantDefine()
{
    const name = " Iftakhar Alam Rizve " ;
    console.log(' Print Function Scope Constant Value '+ name);
}

functionSchopeConstantDefine();

console.log(' Print Global Scope Constant Value '+ name);

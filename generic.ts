interface Person<T>{
    name:string,
    age:string,
    document : T
}


const poerson1 : Person<(string|number)[]> = {
    name:'Iftakhar alam Rizve',
    age:'23',
    document:[1,2,3,4,5]
}


enum  ResourceType{
    BOOK,
    AUTHOR,
    FLIM,
    DIRECTOR,
    PERSON
}

interface Dictionary<T>{
    subject:ResourceType,
    name:string,
    roll:number,
    marks:T
}

const infoList : Dictionary < (string | number | number[]) >= {
    subject:ResourceType.BOOK,
    name:'Iftakhar',
    roll:2344,
    marks:[1,2,3,4,5,667]

}
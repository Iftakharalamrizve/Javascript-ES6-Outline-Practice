const range =  (start = 1, end = 10, step= 2) =>{
    return {
        [Symbol.iterator]:()=>{
            return{
                next(){
                    let element = start ;
                    start += step;
                    if(start <= end){
                        return {value: element, done: false}
                    }
                    return {done: true}
                }
            }
        }
    }
}

console.log(...range(1,1000,2))
/**
 * Arrow Function Syntax.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */


/**
 * Arrow Function Example.
 */
let itemList = [1,2,3,4,5];

//signle line statement
let exampleOne = () => console.log(itemList);

/**
 * Arrow Function with multiple line statement .
 * @param {Array} listInfo - Full Item List .
 * @return {Array} - Return a even number array 
 */

//multiple line statement 
let exampleTwo = (listInfo) => {
    let mapInfo = listInfo.filter((item,key)=>{
        if(item %  2 == 0){ return item ; }
    })
    return mapInfo;
}
//console.log(exampleTwo(itemList));



/**
 * Arrow Function Explain Lexical This .
 * Before Lexical This explain we need  to undestand what is the problem of this ,
 * with general funciton  and how can we easily solved .
 * @param {Array} listInfo - Full Item List .
 * @return {Array} - Return a even number array 
 */


let studentRecords = {

    studentMarksInfo : [
        {
            studentId : 1 ,
            mark : 22
        },
        {
            studentId : 2 ,
            mark : 23
        },
        {
            studentId : 3 ,
            mark : 24
        },
        {
            studentId : 4 ,
            mark : 25
        },
        {
            studentId : 45 ,
            mark : 29
        }
    ] ,

    defineGrade : function(){

        // this section i can use this.studentMarksInfo  

        // when can not access this in callback function so we intialize this in variable then we can use 
        const self = this;
        this.studentMarksInfo.forEach(function(item,key){
            // now i want to add new property  grade pass or fail every object 
            // For this reason i need to access this for push property specefic element 
            // This section i can't use this.studentMarksInfo 
            // Note : We can not use this section because Foreach callback function change before this so can not use 
            // Have one tricks for use this in this section see example .

            //console.log(self.studentMarksInfo);
        });

        this.studentMarksInfo.forEach((item,key)=>{
            // this section we can access this easily beacuse arrow function can not change this 
            this.studentMarksInfo[key] = {...item, grade: item.mark >= 25 ? 'Pass' : 'Fail'  }
        });


    }
    
}

studentRecords.defineGrade();
console.log(studentRecords.studentMarksInfo);

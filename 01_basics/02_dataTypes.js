
let name2="shivam singh";//string
let age=23;//number
let isLoogedIn=true;//bollean
let salary;//undefind
let state=null;//null

//number=>2to the power 55
//bigInt
//string= "zdsdvcds";
//boolean =>true/false;
//null = syandalone value;
//undefined=
//symbol = uniques


//object
//console.log(typeof "shivam")

//null is object in typeof
//undefined is undefined

let dataInfo={
    "name":"shivam",
    "RollNum":453,
    "subject":"Math",
    "grade":"d",
    "date":"23/02/2005"
}
console.table(dataInfo)//for all properties
console.table({
    name: dataInfo.name,
    RollNum: dataInfo.RollNum,
    subject: dataInfo.subject//for specified element
});
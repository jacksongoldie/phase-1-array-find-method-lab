/* 
function superbowlWin(anArray){
    anArray.find(isWin);
}

function isWin(recordArray){
    recordArray.result === "W" ? recordArray.year : undefined;
} */


//called with superbowlWin(record)
function superbowlWin(recordArray){
   if (recordArray.find(element => element.result === "W")){
       return recordArray.year;
   };
}
/* 
function superbowlWin(anArray){
    anArray.find(isWin);
}

function isWin(recordArray){
    recordArray.result === "W" ? recordArray.year : undefined;
} */


//called with superbowlWin(record) - does not work because recordArray.year is undefined; recordArray is left nondestructed so we can't call on the .year because it doesn't know which one
function superbowlWin(recordArray){
   if (recordArray.find(element => element.result === "W")){
       return recordArray.year;
   };
}

function superbowlWin(recordArray){
    //sets win to an object {year: and result:}, recordArray stays the same
    let win = recordArray.find(element => element.result === "W");
    debugger;
    if(win != undefined){
    return win.year;
    }
    else{
        return undefined;
    }
 }
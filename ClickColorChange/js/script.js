function colorChange(eventLog) {
    console.log(eventLog);
    var color=getRandomColor();
    var selectorValue=eventLog.srcElement.classList[1];
    selectorValue="."+selectorValue;
    document.querySelector(selectorValue).style.backgroundColor=color;

}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function random() {
    
}


function addCode() {
   var firstString='<div class="col-xs-1 demo';
   var secondString='" onclick="colorChange(event)"></div>';
    var finalString='';
   for(var i=0;i<600;i++){
       var temp=firstString+i+secondString;
       finalString=finalString+temp;
   }
   document.querySelector('.row').innerHTML=finalString;
    // console.log(finalString);
}

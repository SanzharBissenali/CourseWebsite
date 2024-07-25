var myList = ["apples", "bananas", "oranges"];
myList[3] = "hui";

function go(){
    alert("HI"); 
}

var times = 1;
while(times<7){
    console.log("we tried it " + "times " + times);
    times +=1;
}

for (var i = 0; i < myList.length; i++){
    console.log("current item is " + myList[i]);
}


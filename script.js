"use strict";

document.getElementById("btn").addEventListener("click",function(){
    // alert("Hello");
    var d1 = document.getElementById("x1").value;
    var d2 = document.getElementById("x2").value;
    var d3 = document.getElementById("x3").value;
     var v = parseInt(d1);
     var w = parseInt(d2);
     var x = parseInt(d3);
    var res = v + w + x;
    var per = Math.round(res/3);
    var msg = "";
    
    if(per < 35){
      msg = "Failed Tu shiku nakos";
    }else{
        if(per < 50){
            msg = "F😢"
        }else if(per < 60){
            msg = "E😫"
        }
        else if(per < 70){
            msg = "D😉"
        }
        else if(per < 80){
            msg = "C😊"
        }
        else if(per < 90){
            msg = "B😎"
        }else{
            msg="Bas kr re amchya tondakade pn bg 😫"
        }
    }
    
     
    document.getElementById("mark").innerHTML =`
    <p>Total Marks:${res}</p>
    <p>Percentage:${per}</p>
    <p>Grade:${msg}</p>
    `
    


})
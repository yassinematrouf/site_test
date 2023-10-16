function Addition(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    //t3.value = c;
   document.getElementById("t3").value = c; 
}


function multiplication(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    //t3.value = c;
   document.getElementById("t3").value = c; 
}


function multiplication(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    //t3.value = c;
   document.getElementById("t3").value = c; 
}


function soustraction(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    //t3.value = c;
   document.getElementById("t3").value = c; 
}

function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    //t3.value = c;
   document.getElementById("t3").value = c; 
}

function pariter(){
    var a = document.getElementById("t1").value;
    if(a%2==0){
        document.getElementById("t4").value= "pair";
    }
    else{
        document.getElementById("t4").value= "impair";
    }
}

function permuter(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = document.getElementById("t1").value;
    document.getElementById("t1").value= b;
    document.getElementById("t2").value= c;


}
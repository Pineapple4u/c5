function sum(n1, n2)
{
 console.log(n1+n2);
}

function min(n1,n2)
{
    console.log(n1-n2);
}

function mul(n1, n2)
{
    console.log(n1*n2);
}

function divi(n1, n2)
{
    console.log(n1/n2);
}

function mod(n1,n2)
{
    console.log(n1%n2);
}

sum(12,7);
min(283, 193);
mul(563, 458);
divi(1236, 99);
mod(1236, 99);



var displayName = function (name1, name2){
return name1+" "+name2
}

var name= displayName("Aarna", "Kapuria");
console.log(name);

var that= ()=> {
    return "Hi im in arrow function";
}

var th = that();
console.log(th);





function sum1(){
    var n1= Number(document.getElementById("n1").value);
    var n2= Number(document.getElementById("n2").value);
    var sum = n1+n2;
    document.getElementById("result").innerHTML=sum
}


function mul1(){
    var n1= document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    var mul = n1*n2;
    document.getElementById("result").innerHTML=mul
}


function sub1(){
    var n1= document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    var sub = n1-n2;
    document.getElementById("result").innerHTML=sub
}

function div1(){
    var n1= document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    var div = n1/n2;
    document.getElementById("result").innerHTML=div
}

function mod1(){
    var n1= document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    var mod = n1%n2;
    document.getElementById("result").innerHTML=div
}

var tag = document.createElement("div");
tag.setAttribute("class","container");

var tag1 = document.createElement("div");
tag1.setAttribute("class","calculator");

var input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","0")
input.setAttribute("id", "output-screen")

function createElement(tagname,attributename,attributevalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attributename,attributevalue);
    ele.innerHTML=content;
    return ele;
}

var cl = createElement("button","onclick","Clear()","Cl")
var del = createElement("button","onclick","Del()","DEL")
var per = createElement("button","onclick","display('%')","%")
var divi = createElement("button","onclick","display('/')","/")
var seven = createElement("button","onclick","display('7')","7")
var eight = createElement("button","onclick","display('8')","8")
var nine = createElement("button","onclick","display('9')","9")
var mul = createElement("button","onclick","display('*')","*")
var four = createElement("button","onclick","display('4')","4")
var five = createElement("button","onclick","display('5')","5")
var six = createElement("button","onclick","display('6')","6")
var min = createElement("button","onclick","display('-')","-")
var one = createElement("button","onclick","display('1')","1")
var two = createElement("button","onclick","display('2')","2")
var three = createElement("button","onclick","display('3')","3")
var add = createElement("button","onclick","display('+')","+")
var dot = createElement("button","onclick","display('.')",".")
var zero = createElement("button","onclick","display('0')","0")

var equal = document.createElement("button")
equal.setAttribute("onclick","calculate()")
equal.setAttribute("class", "equal")
equal.innerHTML=("=")



tag1.append(input)
tag1.append(cl)
tag1.append(del)
tag1.append(per)
tag1.append(divi)
tag1.append(seven)
tag1.append(eight)
tag1.append(nine)
tag1.append(mul)
tag1.append(four)
tag1.append(five)
tag1.append(six)
tag1.append(min)
tag1.append(one)
tag1.append(two)
tag1.append(three)
tag1.append(add)
tag1.append(dot)
tag1.append(zero)
tag1.append(equal)
tag.append(tag1)
document.body.append(tag)


let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear(){
    outputScreen.value = "";
}
function Del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}
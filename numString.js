"use strict";

//Variables
var num1 = document.getElementById("firstNum");
var num2 = document.getElementById("secondNum");
var num3 = document.getElementById("thirdNum");
var num4 = document.getElementById("fourthNum");
var num5 = document.getElementById("fifthNum");
var num6 = document.getElementById("sixthNum");

//Hello World
function hello(){
    output.innerHTML = "Hello World"
}

//Functions

//Shows What Number is the Largest
function largeNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);
    var largest = first;

    if(largest < second){
        largest = second;
    }
    if(largest < third){
        largest = third;
    }
    if(largest < fourth){
        largest = fourth;
    }
    if(largest < fifth){
        largest = fifth;
    }
    if(largest < sixth){
        largest = sixth;
    }
    output.innerHTML = "Largest number is " + largest;
    return largest;
}

//Shows What Number is the Smallest
function smallNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);
    var smallest = first;

    if(smallest > second){
        smallest = second;
    }
    if(smallest > third){
        smallest = third;
    }
    if(smallest > fourth){
        smallest = fourth;
    }
    if(smallest > fifth){
        smallest = fifth;
    }
    if(smallest > sixth){
        smallest = sixth;
    }
    output.innerHTML = "Smallest number is " + smallest;

    return smallest;
}

//Shows the Mean 
function meanNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    output.innerHTML = (first + second + third + fourth + fifth + sixth) / 6;
}

//Shows Range Of Numbers
function rangeNum(){
    var range = (largeNum() - smallNum());
    output.innerHTML = range;
}

//Orders the numbers
function orderNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(first, second, third, fourth, fifth, sixth);
    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === fifth){
        fifth = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth);
    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
    }else if(o2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
    }else if(o2 === third){
        third = fourth;
        fourth = fifth;
    }else if(o2 === fourth){
        fourth = fifth;
    }

    o3 = Math.min(first, second, third, fourth);
    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
    }else if(o3 === second){
        second = third;
        third = fourth;
    }else if(o3 === third){
        third = fourth;
    }

    o4 = Math.min(first, second, third);
    if(o4 === first){
        first = second;
        second = third;
    }else if(o4 === second){
        second = third;
    }

    o5 = Math.min(first, second);
    if(o5 === first){
        first = second;
    }

    o6 = first;

    output.innerHTML = "The Order is " + o1 +" "+ o2 +" "+ o3 +" "+ o4 +" "+ o5 +" "+ o6;
}

//Finds the Mode
function modeNum(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);
    
    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;

    if(one === two){
        n1 ++;
    }
    if(one === three){
        n1 ++;
    }
    if(one === four){
        n1 ++;
    }
    if(one === five){
        n1 ++;
    }
    if(one === six){
        n1 ++;
    }

    if(two === three){
        n2 ++;
    }
    if(two === four){
        n2 ++;
    }
    if(two === five){
        n2 ++;
    }
    if(two === six){
        n2 ++;
    }

    if(three === four){
        n4 ++;
    }
    if(three === five){
        n4 ++;
    }
    if(three === six){
        n4 ++;
    }

    if(four === five){
        n4 ++;
    }
    if(four === six){
        n4 ++;
    }

    if(five === six){
        n5 ++;
    }

    var max = Math.max(n1, n2, n3, n4, n5, n6);
    if(n1 === 1 && n2 === 1 && n3 === 1 && n4 === 1 && n5 === 1 && n6 === 1){
        output.innerHTML += "there were no duplicates";
    }else if(max === n1){
        output.innerHTML = "Your Mode is " + one + " and is appears " + n1 + " times.";
    }else if(max === n2){
        output.innerHTML = "Your Mode is " + two + " and is appears " + n2 + " times.";
    }else if(max === n3){
        output.innerHTML = "Your Mode is " + three + " and is appears " + n3 + " times.";
    }else if(max === n4){
        output.innerHTML = "Your Mode is " + four + " and is appears " + n4 + " times.";
    }else if(max === n5){
        output.innerHTML = "Your Mode is " + five + " and is appears " + n5 + " times.";
    }
}
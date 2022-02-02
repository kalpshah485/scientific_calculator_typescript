interface type {
    value: string | number,
    div: HTMLDivElement,
    btn: HTMLButtonElement,
    select: HTMLSelectElement
}
type arr = string[];
var display = document.getElementById("display") as type['div'];
var result = document.getElementById("result") as type['div'];
var degToRadbtn = document.getElementById("degToRad") as type['btn'];
var trigonometry = document.getElementById("Trigonometry") as type['select'];
const symbols:arr = ["+","-","*","/","%"];
const functions:arr = [
    "sin(",
    "cos(",
    "tan(",
    "cosec(",
    "sec(",
    "tan(",
    "cot(",
    "asin(",
    "acos(",
    "atan(",
    "acosec(",
    "asec(",
    "atan(",
    "acot(",
    "log(",
    "ln(",
    "tenRestTo(",
    "sqroot(",
    "exp(",
    "abs(",
    "oneBy(",
    "square(",
    "fact(",
    "round(",
    "ceil(",
    "floor(",
    "pi",
    "e"
];
var e:number = Math.exp(1);
var pi:number = Math.PI;
var store:number = 0;
function doubleSymbol<T extends string>(num:T):void {
    if(symbols.includes(display.innerText.slice(-1))){
        if (display.innerText.slice(-2,-1) == "*") {
            back();
        }
        back();
        btn(num);
    }else{
        if (display.innerText == '0' && (num == "-" || num == "+")) {
            display.innerText = num;
        }else {
            display.innerText += num;
        }
    }
}
// display function
function btn(num:string):void {
    if(isNaN(Number(num))){
        if(symbols.includes(num)) {
            doubleSymbol<string>(num);
        }else if (num == "**") {
            doubleSymbol<string>("**");
        }
        else if (num == "(" || num == ")") {
            if (symbols.includes(display.innerText.slice(-1)) ) {
                display.innerText += num;
            }else {
                if (display.innerText == '0') {
                    display.innerText = num;
                }else{
                    if ((display.innerText.slice(-1) == ")" || !isNaN(Number(display.innerText.slice(-1)))) && num == "(") {
                        btn('*'); 
                    }
                    display.innerText += num;
                }
            }
        }
        else if (functions.includes(num)) {
            if (symbols.includes(display.innerText.slice(-1)) ) {
                display.innerText += num;
            }else {
                if (display.innerText == '0') {
                    display.innerText = num;
                }else{
                    if (display.innerText.slice(-1) == ")" || !isNaN(Number(display.innerText.slice(-1)))) {
                        btn('*');
                    }
                    display.innerText += num;
                }
            }
        }else if (num == ".") {
            display.innerText += ".";
        }
    }else{
        if(display.innerText == '0'){
            display.innerText = num;
        }else{
            display.innerText += num;
        }
    }
}
function plusMinus():void {
    if (display.innerText.charAt(0) == "-") {
        display.innerText = display.innerText.substring(1,display.innerText.length);
    }else{
        display.innerText = "-"+display.innerText;
    }
}
function toggleFixToExp():void {
    answer();
    var fixed = 0;
    if (result.innerText.includes('.')) {
        fixed = result.innerText.split('.')[1].length;
      };
    if (display.innerText.includes("e")) {
        display.innerText = Number(result.innerText).toFixed(fixed);
    }else{
        display.innerText = Number(result.innerText).toExponential(4);
    }
}
function secondbtn():void {
    var arr = trigonometry.getElementsByTagName("option") as HTMLCollectionOf<HTMLOptionElement>;
    if (arr[1].value == "sin") {
        for (let i = 1; i < arr.length; i++) {
            arr[i].value = "a" + arr[i].value;
            arr[i].innerText = "a" + arr[i].innerText;
        }
    }else{
        for (let i = 1; i < arr.length; i++) {
            arr[i].value = arr[i].value.substring(1,arr[i].value.length);
            arr[i].innerText = arr[i].innerText.substring(1,arr[i].innerText.length);
        }
    }
}
function answer():void {
    try {
        result.style.color = "green";
        result.innerText = eval(display.innerText);
    } catch (error:any) {
        result.style.color = "red";
        result.innerText = error.message;
    }
}
function clearDisplay():void {
    result.style.color = "green";
    display.innerText = '0';
    result.innerText = '0';
}
function back():void {
    if(display.innerText.length == 1 || (display.innerText.length == 2 && display.innerText == "pi")){
        display.innerText = '0';
    }else{
        if (display.innerText.substring(display.innerText.length-2,display.innerText.length) == "pi") {
            display.innerText = display.innerText.substring(0,display.innerText.length-2);   
        }else {
            display.innerText = display.innerText.substring(0,display.innerText.length-1);
        }
    }
}
function square(num:number):number {
    return Math.pow(num,2);
}
function ln(num:number):number {
    return Math.log(num);
}
function log(num:number):number {
    return Math.log10(num);
}
function tenRestTo(num:number):number {
    return Math.pow(10,num);
}
function sqroot(num:number):number {
    return Math.sqrt(num);
}
function exp(num:number):number {
    return Math.exp(num);
}
function abs(num:number):number {
    return Math.abs(num);
}
function oneBy(num:number):number {
    return 1/num;
}
function fact(num:number):type['value']{
    let answer = 1;
    if (num != abs(num)) {
        return "fact of minus number is not possible";
    }
    if (num == 0 || num == 1){
      return answer;
    }else{
      for(var i = num; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
}

// Trigonometry Functions
function toggleDegRad(event:any):void {
    if (event.target.value == "DEG") {
        event.target.value = "RAD";
        event.target.innerText = "RAD";
    }else {
        event.target.value = "DEG";
        event.target.innerText = "DEG";
    }
}
function degToRad(angle:number):number {
    if (degToRadbtn.value == "DEG") {
        return angle * (pi/180);
    }
    return angle;
}
function sin(radNum:number):number {
    return Math.sin(degToRad(radNum));
}
function cos(radNum:number):number {
    return Math.cos(degToRad(radNum));
}
function tan(radNum:number):number {
    return Math.tan(degToRad(radNum));
}
function sec(radNum:number):number {
    return 1 / Math.cos(degToRad(radNum));
}
function cosec(radNum:number):number {
    return 1 / Math.sin(degToRad(radNum));
}
function cot(radNum:number):number {
    return 1 / Math.tan(degToRad(radNum));
}

// inverse functions
function asin(radNum:number):number {
    return Math.asin(degToRad(radNum));
}
function acos(radNum:number):number {
    return Math.acos(degToRad(radNum));
}
function atan(radNum:number):number {
    return Math.atan(degToRad(radNum));
}
function asec(radNum:number):number {
    return Math.acos(1 / degToRad(radNum));
}
function acosec(radNum:number):number {
    return Math.asin(1 / degToRad(radNum));
}
function acot(radNum:number):number {
    return Math.tan(1 / degToRad(radNum));
}

// Additional Functions
function round(num:number):number {
    return Math.round(num);
}
function ceil(num:number):number {
    return Math.ceil(num);
}
function floor(num:number):number {
    return Math.floor(num);
}

// Memory Functions
function memory():void {
    answer();
    store = eval(result.innerText);
}
function memoryplus():void {
    answer();
    store += eval(result.innerText);
}
function memoryminus():void {
    answer();
    store -= eval(result.innerText);
}
function memoryread():void {
    display.innerText = store.toString();
}
function memoryclear():void {
    store = 0;
}
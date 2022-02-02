var display = document.getElementById("display");
var result = document.getElementById("result");
var degToRadbtn = document.getElementById("degToRad");
var trigonometry = document.getElementById("Trigonometry");
var symbols = ["+", "-", "*", "/", "%"];
var functions = [
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
var e = Math.exp(1);
var pi = Math.PI;
var store = 0;
function doubleSymbol(num) {
    if (symbols.includes(display.innerText.slice(-1))) {
        if (display.innerText.slice(-2, -1) == "*") {
            back();
        }
        back();
        btn(num);
    }
    else {
        if (display.innerText == '0' && (num == "-" || num == "+")) {
            display.innerText = num;
        }
        else {
            display.innerText += num;
        }
    }
}
// display function
function btn(num) {
    if (isNaN(Number(num))) {
        if (symbols.includes(num)) {
            doubleSymbol(num);
        }
        else if (num == "**") {
            doubleSymbol("**");
        }
        else if (num == "(" || num == ")") {
            if (symbols.includes(display.innerText.slice(-1))) {
                display.innerText += num;
            }
            else {
                if (display.innerText == '0') {
                    display.innerText = num;
                }
                else {
                    if ((display.innerText.slice(-1) == ")" || !isNaN(Number(display.innerText.slice(-1)))) && num == "(") {
                        btn('*');
                    }
                    display.innerText += num;
                }
            }
        }
        else if (functions.includes(num)) {
            if (symbols.includes(display.innerText.slice(-1))) {
                display.innerText += num;
            }
            else {
                if (display.innerText == '0') {
                    display.innerText = num;
                }
                else {
                    if (display.innerText.slice(-1) == ")" || !isNaN(Number(display.innerText.slice(-1)))) {
                        btn('*');
                    }
                    display.innerText += num;
                }
            }
        }
        else if (num == ".") {
            display.innerText += ".";
        }
    }
    else {
        if (display.innerText == '0') {
            display.innerText = num;
        }
        else {
            display.innerText += num;
        }
    }
}
function plusMinus() {
    if (display.innerText.charAt(0) == "-") {
        display.innerText = display.innerText.substring(1, display.innerText.length);
    }
    else {
        display.innerText = "-" + display.innerText;
    }
}
function toggleFixToExp() {
    answer();
    var fixed = 0;
    if (result.innerText.includes('.')) {
        fixed = result.innerText.split('.')[1].length;
    }
    ;
    if (display.innerText.includes("e")) {
        display.innerText = Number(result.innerText).toFixed(fixed);
    }
    else {
        display.innerText = Number(result.innerText).toExponential(4);
    }
}
function secondbtn() {
    var arr = trigonometry.getElementsByTagName("option");
    if (arr[1].value == "sin") {
        for (var i = 1; i < arr.length; i++) {
            arr[i].value = "a" + arr[i].value;
            arr[i].innerText = "a" + arr[i].innerText;
        }
    }
    else {
        for (var i = 1; i < arr.length; i++) {
            arr[i].value = arr[i].value.substring(1, arr[i].value.length);
            arr[i].innerText = arr[i].innerText.substring(1, arr[i].innerText.length);
        }
    }
}
function answer() {
    try {
        result.style.color = "green";
        result.innerText = eval(display.innerText);
    }
    catch (error) {
        result.style.color = "red";
        result.innerText = error.message;
    }
}
function clearDisplay() {
    result.style.color = "green";
    display.innerText = '0';
    result.innerText = '0';
}
function back() {
    if (display.innerText.length == 1 || (display.innerText.length == 2 && display.innerText == "pi")) {
        display.innerText = '0';
    }
    else {
        if (display.innerText.substring(display.innerText.length - 2, display.innerText.length) == "pi") {
            display.innerText = display.innerText.substring(0, display.innerText.length - 2);
        }
        else {
            display.innerText = display.innerText.substring(0, display.innerText.length - 1);
        }
    }
}
function square(num) {
    return Math.pow(num, 2);
}
function ln(num) {
    return Math.log(num);
}
function log(num) {
    return Math.log10(num);
}
function tenRestTo(num) {
    return Math.pow(10, num);
}
function sqroot(num) {
    return Math.sqrt(num);
}
function exp(num) {
    return Math.exp(num);
}
function abs(num) {
    return Math.abs(num);
}
function oneBy(num) {
    return 1 / num;
}
function fact(num) {
    var answer = 1;
    if (num != abs(num)) {
        return "fact of minus number is not possible";
    }
    if (num == 0 || num == 1) {
        return answer;
    }
    else {
        for (var i = num; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
// Trigonometry Functions
function toggleDegRad(event) {
    if (event.target.value == "DEG") {
        event.target.value = "RAD";
        event.target.innerText = "RAD";
    }
    else {
        event.target.value = "DEG";
        event.target.innerText = "DEG";
    }
}
function degToRad(angle) {
    if (degToRadbtn.value == "DEG") {
        return angle * (pi / 180);
    }
    return angle;
}
function sin(radNum) {
    return Math.sin(degToRad(radNum));
}
function cos(radNum) {
    return Math.cos(degToRad(radNum));
}
function tan(radNum) {
    return Math.tan(degToRad(radNum));
}
function sec(radNum) {
    return 1 / Math.cos(degToRad(radNum));
}
function cosec(radNum) {
    return 1 / Math.sin(degToRad(radNum));
}
function cot(radNum) {
    return 1 / Math.tan(degToRad(radNum));
}
// inverse functions
function asin(radNum) {
    return Math.asin(degToRad(radNum));
}
function acos(radNum) {
    return Math.acos(degToRad(radNum));
}
function atan(radNum) {
    return Math.atan(degToRad(radNum));
}
function asec(radNum) {
    return Math.acos(1 / degToRad(radNum));
}
function acosec(radNum) {
    return Math.asin(1 / degToRad(radNum));
}
function acot(radNum) {
    return Math.tan(1 / degToRad(radNum));
}
// Additional Functions
function round(num) {
    return Math.round(num);
}
function ceil(num) {
    return Math.ceil(num);
}
function floor(num) {
    return Math.floor(num);
}
// Memory Functions
function memory() {
    answer();
    store = eval(result.innerText);
}
function memoryplus() {
    answer();
    store += eval(result.innerText);
}
function memoryminus() {
    answer();
    store -= eval(result.innerText);
}
function memoryread() {
    display.innerText = store.toString();
}
function memoryclear() {
    store = 0;
}

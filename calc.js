
document.getElementById('result').defaultValue = 0;
function dis(val) {
    let a = document.getElementById("result").value;
    if (a == '0') {
        document.getElementById("result").value = '';
    }
    document.getElementById("result").value += val;
}
function solve() {
    let x = document.getElementById("result").value;
    let y;
    try {
        y = eval(x);
        prec(y);

    }
    catch (err) {

        alert("enter valid operators to calculate!!");
        allclr();
        return;

    }

}

function prec(y) {
    let deci = String(y);
    if (deci.includes('.')) {
        y = (y) * 1000;
        y = Math.round(y);
        y = y * 1.0 / 1000;

    }
    document.getElementById("result").value = y;
}

function clr() {
    let a = document.getElementById("result").value;
    document.getElementById("result").value = a.toString().slice(0, -1);
}
function allclr() {

    document.getElementById("result").value = "";

}
function check() {

    alert("First enter some value");

    allclr();


}


function sin() {
    let x = document.getElementById("result").value;
    if (x == '') {
        check(x);
        return;
    }
    let y = Math.sin(eval(x));

    prec(y);
}


function cos() {
    let x = document.getElementById("result").value;
    if (x == "") {
        check();
        return;
    }
    let y = Math.cos(eval(x));
    prec(y);
}
function tan() {
    let x = document.getElementById("result").value;
    if (x == "") {
        check();
        return;
    }
    let y = Math.tan(eval(x));
    prec(y);
}
function log() {
    let x = document.getElementById("result").value;
    if (x == "") {
        alert("First enter some value");
        return;
    }
    let y = Math.log10(eval(x));
    prec(y);
}
function fact() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    f = 1;
    if (String(y).includes('.') || y < 0) {
        alert("Factorial can calculated only for integers");
        allclr();
        return;
    }
    else {
        for (i = 1; i <= (y); i++) {
            f *= i;
        }
        prec(f);
    }
}
function pi() {
    let x = document.getElementById("result").value;

    let y = Math.PI;
    if (document.getElementById("result").value == 0) {
        prec(y);
    }
    else {
        prec(y) * y;
    }
}

function exp() {
    let x = document.getElementById("result").value;
    if (x == "") {
        check();
        return;
    }
    let y = Math.pow(eval(x), 2);
    prec(y);
}

function root() {
    let x = document.getElementById("result").value;
    if (x == "") {
        check();
        return;
    }
    let y = Math.sqrt(eval(x), 2);
    prec(y);
}

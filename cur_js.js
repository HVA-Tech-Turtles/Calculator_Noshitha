function dis(val)
 {

    document.getElementById("result").value += val;
}
function solve()
 {
    let x = document.getElementById("result").value;
    let y;
    try 
    {
        y = eval(x);
    }
    catch (err) 
    {
        alert("enter valid operators to calculate!!");
    }
    let y1 = String(y);
    if (y1.includes('.')) 
    {
        p = y1.split('.')[1].length;
        if (p >= 4)
         {
            y = y.toFixed(3);
        }
    }
    document.getElementById("result").value = y;
}
function clr()
 {
    let a = document.getElementById("result").value;
    document.getElementById("result").value = a.toString().slice(0, -1);
}
function allclr() 
{
    document.getElementById("result").value = "";
}


function solve() 
{
    let str = document.getElementById('result').value;
    let num = parseFloat(str);
    let converted = str.split(num);
    let m = new Map([["₹-->$", 0.012], ['₹-->¥', 0.083], ['₹-->din', 0.0037], ['$-->₹', 82.93], ['$-->¥',6.86], ['$-->din', 0.31 ], ['¥-->₹',12.06], ['¥-->$', 0.15], ['¥-->din', 12.74], ['din-->₹', 270 ], ['din-->$', 3.26], ['din-->¥',22.39]]);
    let g = m.get(converted[1])

    if(m.has(converted[1]))
    {
        document.getElementById('result').value = num * g;
    }
    else{
    alert("Enter valid Conversion");
    allclr();
}
}

function dis(val){
    
    document.getElementById("result").value+=val;
}
function solve()
{
    let x=document.getElementById("result").value;
    let y;
    try{
     y=eval(x);
    }
    catch(err){
        alert("enter valid operators to calculate!!");
    }
    let y1=String(y);
    if(y1.includes('.')){
        p=y1.split('.')[1].length;
        if(p>=4)
        {
           y= y.toFixed(3);
        }
    }
    document.getElementById("result").value=y;
}
function clr(){
    let a=document.getElementById("result").value;
    document.getElementById("result").value=a.toString().slice(0,-1);
}
function allclr()
{
    document.getElementById("result").value="";
}


function solve()
{
    let str=document.getElementById('result').value;
    let num=parseFloat(str);
    let converted=str.split(num);
   
    // console.log(converted[1]);
    switch(converted[1])
    {
        case'km-->mtr':document.getElementById('result').value=num*1000;
            break;
        case'km-->cm':document.getElementById('result').value=num*100000;
            break;
        case'km-->mm':document.getElementById('result').value=num*1e+6;
            break;
        case'mtr-->km':document.getElementById('result').value=num*0.001;
            break;
        case'mtr-->cm':document.getElementById('result').value=num*100;
            break;
        case'mtr-->mm':document.getElementById('result').value=num*1000;
            break;
        case'cm-->km':document.getElementById('result').value=num*1e-5;
            break;
        case'cm-->mtr':document.getElementById('result').value=num*0.01;
            break;
        case'cm-->mm':document.getElementById('result').value=num*10;
            break;
        case'mm-->km':document.getElementById('result').value=num*1e-6;
            break;
        case'mm-->mtr':document.getElementById('result').value=num*0.001;
            break;
        case'mm-->cm':document.getElementById('result').value=num*0.1;
            break;
        default:alert("enter valid operators");


    }
}

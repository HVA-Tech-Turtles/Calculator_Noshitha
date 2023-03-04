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
    let m = new Map([['km-->mtr',1000], ['km-->cm',100000], ['km-->mm',1e+6], ['mtr-->km',0.001], ['mtr-->cm',100], ['mtr-->mm',1000], ['cm-->km',1e-5], ['cm-->mtr',0.01], ['cm-->mm',10], ['mm-->km',1e-6], ['mm-->mtr',0.001], ['mm-->cm',0.1]]);
    let g = m.get(converted[1])
    console.log(converted[1]);
    console.log(g);

    if(m.has(converted[1])) //has returns whether the particular key is in map or not
    {
        document.getElementById('result').value = num * g;
    }
    else{
    alert("Enter valid Conversion");
    allclr();
    // // console.log(converted[1]);
    // switch(converted[1])
    // {
    //     case'km-->mtr':document.getElementById('result').value=num*1000;
    //         break;
    //     case'km-->cm':document.getElementById('result').value=num*100000;
    //         break;
    //     case'km-->mm':document.getElementById('result').value=num*1e+6;
    //         break;
    //     case'mtr-->km':document.getElementById('result').value=num*0.001;
    //         break;
    //     case'mtr-->cm':document.getElementById('result').value=num*100;
    //         break;
    //     case'mtr-->mm':document.getElementById('result').value=num*1000;
    //         break;
    //     case'cm-->km':document.getElementById('result').value=num*1e-5;
    //         break;
    //     case'cm-->mtr':document.getElementById('result').value=num*0.01;
    //         break;
    //     case'cm-->mm':document.getElementById('result').value=num*10;
    //         break;
    //     case'mm-->km':document.getElementById('result').value=num*1e-6;
    //         break;
    //     case'mm-->mtr':document.getElementById('result').value=num*0.001;
    //         break;
    //     case'mm-->cm':document.getElementById('result').value=num*0.1;
    //         break;
    //     default:alert("enter valid operators");


    }

    
}

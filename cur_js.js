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
   
    
    switch(converted[1])
    {
        case'inr-->usd':document.getElementById('result').value=num*0.012;
            break;
        case'inr-->yen':document.getElementById('result').value=num*0.083;
            break;
        case'inr-->din':document.getElementById('result').value=num*0.0037;
            break;
        case'usd-->inr':document.getElementById('result').value=num*0.001;
            break;
        case'usd-->yen':document.getElementById('result').value=num*6.86;
            break;
        case'usd-->din':document.getElementById('result').value=num*0.31;
            break;
        case'yen-->inr':document.getElementById('result').value=num*12.06;
            break;
        case'yen-->usd':document.getElementById('result').value=num*0.15;
            break;
        case'yen-->din':document.getElementById('result').value=num*12.74;
            break;
        case'din-->inr':document.getElementById('result').value=num*270;
            break;
        case'din-->usd':document.getElementById('result').value=num*3.26;
            break;
        case'din-->yen':document.getElementById('result').value=num*22.39;
            break;
        default:alert("enter valid operators");


    }
}

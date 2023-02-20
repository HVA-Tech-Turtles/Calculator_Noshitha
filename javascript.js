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
    let abc=String(y);
    if(abc.includes('.')){
        p=abc.split('.')[1].length;
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

function sin(){
    let x=document.getElementById("result").value;
    let y=Math.sin(x);
    document.getElementById("result").value=y;
}
function cos(){
    let x=document.getElementById("result").value;
    let y=Math.cos(x);
    document.getElementById("result").value=y;
}
function tan(){
    let x=document.getElementById("result").value;
    let y=Math.tan(x);
    document.getElementById("result").value=y;
}
function log(){
    let x=document.getElementById("result").value;
    let y=Math.LOG2E(x);
    document.getElementById("result").value=y;
}
function fact(){
    let x=document.getElementById("result").value;
    f=1;
    for(i=1;i<=(x);i++){
        f*=i;
    }
    document.getElementById("result").value=f;
}
function pi(){
    let x=document.getElementById("result").value;
    
    let y=Math.PI;
    document.getElementById("result").value+=y;
}

function exp(){
    let x=document.getElementById("result").value;
    let y=Math.pow(x,2);
    document.getElementById("result").value=y;
}

function root(){
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x,2);
    document.getElementById("result").value=y;
}

var btn = document.getElementById("button");
var num = document.getElementById("number");
var rst = document.getElementById("result");
var djs = document.getElementById("timer");
var timer;
var count = 0;
var d = 5;

btn.addEventListener("click",function(){
    add();
    if(!timer){
        test();
        timer = setInterval(() => test(),1000);
    }
});
function add(){
    count++;
    num.innerText = count;
    rst.innerText = count/5;
}

function test(){
    djs.innerHTML="倒计时"+d+"秒";
    d--;
    if(d<0){
        djs.innerHTML="时间到";
        btn.setAttribute("disabled",true);
        alert("你的测试结果为"+rst.innerHTML+"次/秒");
        clearInterval(timer);
    }  
}


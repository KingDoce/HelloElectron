var loginStatus = false;
// @ts-ignore
document.getElementById('loginStatusItem').textContent = loginStatus? '已登录' : '未登录';

document.addEventListener('DOMContentLoaded',()=>{
    // @ts-ignore
    chrome.runtime.onMessage.addListener(
        (request)=>{
            if(request.userName){
                loginStatus = true;
                // @ts-ignore
                document.getElementById('loginStatusItem').textContent = '已登录';
            }
    });
});

var mode = '';
//快速模式
var fastMode = document.getElementById('fastMode');
fastMode?.addEventListener('click',()=>{
    if(isRun && mode){
        alert('程序正在执行，请勿随意更改！');
        return ;
    }
    mode = 'fast';
    fastMode?.classList.add('selected');
    customMode?.classList.remove('selected');
});

//自定义模式
var customMode = document.getElementById('customMode');
customMode?.addEventListener('click',()=>{
    if(isRun && mode){
        alert('程序正在执行，请勿随意更改！');
        return ;
    }
    mode = 'custom';
    customMode?.classList.add('selected');
    fastMode?.classList.remove('selected');
});

//运行
var isRun = false;
var run = document.getElementById('run');
run?.addEventListener('click',()=>{
    if(!loginStatus){
        alert('检测账号未登录');
        return ;
    }
    if(!mode){ 
        alert('请先选择模式');
        return ;
    }
    if(isRun){
        isRun = false;
        run?.classList.remove('selected');
        return ;
    }
    isRun = true;
    run?.classList.add('selected');

    //按模式执行程序
    if(mode == 'fast'){
        alert('快速模式已执行');
        return ;
    }
    if(mode == 'custom'){
        alert('自定义模式已执行');
        return ;
    }
});
// content.js
console.log('内容脚本已加载！');

// 获取网页的标题
var title = document.title;
console.log('页面标题:', title);

var userNameWidget = document.getElementsByClassName('user_name');
if(!userNameWidget){
    console.log('Cannot found username widget');
}
// @ts-ignore
var userName = userNameWidget[0].innerText;
console.log(userName);
// @ts-ignore
chrome.runtime.sendMessage({userName:userName});
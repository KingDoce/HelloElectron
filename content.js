// content.js
console.log('内容脚本已加载！');

// 获取网页的标题
var title = document.title;
console.log('页面标题:', title);

var currentAccount = window.localStorage.getItem('currentAccount');
console.log(currentAccount);
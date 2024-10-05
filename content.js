// content.js
console.log('Content script loaded!');

// 获取网页的标题
var title = document.title;
console.log('Page title:', title);

// 获取特定的DOM元素，例如ID为'myElement'的元素
var myElement = document.getElementById('myElement');
if (myElement) {
  console.log('Element found:', myElement);
} else {
  console.log('Element not found');
}
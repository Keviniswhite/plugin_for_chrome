const hookAjax = function() {
    var node = document.createElement("script");
    node.src = chrome.extension.getURL('jqku.js');
    node.class = 'authorGua'
    document.body.appendChild(node);
}
const __main = function() {
    console.log('jqku.js');
    hookAjax()
}
//
// document.addEventListener('DOMContendLoad', function() {
//     __main();
// }, false)

window.onload = function() {
    console.log(1)
    __main();
}

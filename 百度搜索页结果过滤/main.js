const hookAjax = function() {
    var node = document.createElement("script");
    node.src = chrome.extension.getURL('process.js');
    node.class = 'authorGua'
    document.body.appendChild(node);
}
const __main = function() {
    console.log('filter.js');
    hookAjax()
}


$(document).ready(function() {
    __main();
});
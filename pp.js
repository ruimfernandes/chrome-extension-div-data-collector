
document.getElementById("clickme").addEventListener("click", hello);

document.getElementById("clickme").addEventListener("click", function(e) {
  chrome.runtime.sendMessage({'myPopupIsOpen': true);
});
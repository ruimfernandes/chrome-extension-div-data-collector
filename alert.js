console.log("olaola");
var changedElements = document.getElementsByClassName("data");
for (let ele of changedElements) {
  ele.previousBackgroundColor = ele.style.backgroundColor || "white";
  ele.style.backgroundColor = "red";
}

function cenas() {
  console.log("eyyaeyayyaeyeayey");
}

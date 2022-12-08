// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left = "75px";


function moveDodgerLeft(){
  const leftNumber= dodger.style.left.replace("px","");
      const left= parseInt(leftNumber, 10);
if(left>0){
      dodger.style.left= `${left - 1}px`;
}
}

document.addEventListener("keydown", function (event) {
    if (event.key=== "ArrowLeft"){
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowLeft")
    moveDodgerLeft();
});
function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right >0) {
        dodger.style.left= `${right + 1}px`;
    }
}
document.addEventListener("keydown",function (e) {
    if(e.key=== "ArrowRight") {
        moveDodgerRight();
    }
});


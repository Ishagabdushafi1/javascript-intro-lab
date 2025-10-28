const myHeading = document.getElementById("myHeading");
myHeading.innerText = "Omar!";
let firstButton = document.querySelector(".btn");
console.log(firstButton); // Logs the first element with the class 'btn'
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.backgroundColor = "green";
    document.getElementById('myTestBtn').addEventListener('click', function() {
        console.info('hi');
      });
}
document.getElementById('myTestBtn').addEventListener('click', () => {
    console.info('Hello')
    console.info('World')
  });
  const redBtn = document.querySelector('.red');
  redBtn.addEventListener("class", function(){
    document.body.setAttribute("class", "redBtn")
  })
  const greenBtn = document.querySelector('.green');
  redBtn.addEventListener("class", function(){
    document.body.setAttribute("class", "geenBtn")
  })
  const blueBtn = document.querySelector('.blue');
  redBtn.addEventListener("class", function(){
    document.body.setAttribute("class", "blueBtn")
  })
  const resetBtn = document.querySelector('.reset');
  resetBtn.addEventListener("class", function(){
    document.body.removeAttribute("class")
  })


function addEventListenerToButton() {
    // Write your code here
    const b = document.querySelector("#clickMe")
    b.addEventListener("click", () => {
        alert("Button Clicked");
    })
  }

addEventListenerToButton()
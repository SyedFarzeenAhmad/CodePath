function appendToBody(text) {
    // Write your code here
    const b = document.querySelector("body")
    const t = document.createElement("p")
    t.textContent = text
    b.appendChild(t)
  }

appendToBody("Hello World")

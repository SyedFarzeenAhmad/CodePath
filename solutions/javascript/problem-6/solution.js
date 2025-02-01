function calculateArea(width, height) {
    return width*height;
  }
  
  function isEven(number) {
    if (number%2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
  }
  
  function greetUser(name, time) {
    return "Good " + time + ", " + name + "!";
  }

  console.log(calculateArea(5, 3));
  console.log(isEven(4));
  console.log(isEven(3));
  console.log(greetUser("John", "morning"));
  console.log(greetUser("Jane", "evening"));
  
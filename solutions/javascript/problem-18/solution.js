function processUserData(user, successCallback, errorCallback) {
    // Write your code here
    //self
    if (user.name != null && user.age != null)
    {
        successCallback(`User ${user.name} is ${user.age} years old`)
    }
    else
    {
        errorCallback("Invalid user data: missing required fields")
    }
  }

  //example
  processUserData(
    { name: "John" },
    (msg) => console.log(msg),
    (err) => console.error(err))
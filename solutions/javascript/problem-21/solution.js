//To complete

// Custom Error Class
class ValidationError extends Error {
    // Implement custom error
  }
  
  // Validation Function
  function validateUser(userData) {
    // Add validation logic
    // Throw ValidationError for invalid data
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z]+$/
    if (userData.email == null)
    {
      throw new ValidationError("Email is required")
    }
    else if (!emailPattern.test(userData.email))
    {
      throw new ValidationError("Invalid email format");
    }
    else if (userData.name == null)
    {
      throw new ValidationError("Name is required");
    }
    else if (!namePattern.test(userData.name))
    {
      throw new ValidationError("Invalid name");
    }
    else
    {
      return true;
    }
  }
  
  // Simulated Async Operation
  async function saveUser(userData) {
    // Add save logic
    // Simulate different errors
    userDatas = [];
    if (!userDatas.find(userData.email))
    {
      throw new DatabaseError("User already exists");
    }
    else
    {
      userDatas.push(userData);
    }
  }
  
  // Main Process Function
  async function processUser(userData) {
    try {
      // Implement user processing
      
    } catch (error) {
      // Handle different types of errors
    }
  }
  
  // Example usage:
  // processUser({
  //   email: "test@example.com",
  //   name: "John Doe",
  //   age: 25
  // });
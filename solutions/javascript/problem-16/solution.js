function extractInfo(user, scores) {
    // Write your code here
    const obj = {
        "userName: " : user.name,
        "userCity: " : user.address.city,
        "bestScore: " : Math.max(...scores)
    }
    return obj
  }

console.log(extractInfo({"name":"John","address":{"city":"NY","country":"USA"}},[85,92,88]))

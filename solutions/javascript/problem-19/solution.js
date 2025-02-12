function fetchUser(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: id, name: "John" });
      }, 100);
    });
  }
  
  function fetchPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, userId: userId, title: "Post 1" },
          { id: 2, userId: userId, title: "Post 2" }
        ]);
      }, 100);
    });
  }
  
  function fetchComments(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, postId: postId, text: "First comment" },
          { id: 2, postId: postId, text: "Second comment" }
        ]);
      }, 100);
    });
  }
  
  function getFirstComment(userId) {
    return fetchUser(userId)
      .then(user => fetchPosts(user.id))
      .then(posts => fetchComments(posts[0].id))
      .then(comments => comments[0].text);
  }


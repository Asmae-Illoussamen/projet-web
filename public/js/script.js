
function getArticles(take = 10, skip = 0) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: HOME + "/articles",
        type: "GET",
        data: {
          take: take,
          skip: skip,
        },
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
  

  
  function getCategories(take = 10, skip = 0) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: HOME + "/categories",
        type: "GET",
        data: {
          take: take,
          skip: skip,
        },
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }
  



  
  function getUsers(take = 10, skip = 0) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: HOME + "/users",
        type: "GET",
        data: {
          take: take,
          skip: skip,
        },
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }

  
  const HOME = "http://localhost:3000";
  
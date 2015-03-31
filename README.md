Clien Site Router


    Router.route("/home", function(params, state){
      console.log(params); 
      console.log(state);  
    });
    
    Router.route("/api/:collectionName/:id", function(params, state){
      console.log(params);     
      console.log(state);     
    }); 

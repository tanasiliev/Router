Clien Site Router


      Router.route("/home", function(route){
        console.log(route.params); 
        console.log(route.state);  
      });
      
      Router.route("/api/:collectionName/:id", function(route){
        console.log(route.params); 
        console.log(route.state);    
      }); 

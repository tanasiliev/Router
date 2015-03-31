Clien Site Router


      router.route("/home", function(route){
        console.log(route.params); 
        console.log(route.state);  
      });
      
      router.route("/api/:collectionName/:id", function(route){
        console.log(route.params); 
        console.log(route.state);    
      }); 

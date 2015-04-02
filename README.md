Clien Site Router


      router.route("/home", function(route){
            console.log(route.params); 
            console.log(route.state);  
      });
      
      router.route("/api/:collectionName/:id", function(route){
            console.log(route.params); 
            console.log(route.state);    
      });
        
      router.route("*", function(){
            console.log("*");   
      });
      
      var routes = {
            "contacts/:id" : fun1,
            "contacts/:id/edit" : fun2
      };
      router.route(routes); 	 

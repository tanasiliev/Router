(function(global){
   
   var utils = {
      String : {
          areEquals : function(str1, str2){
             return str1.trim().toUpperCase() === str2.trim().toUpperCase();
          },
          is : function(obj){
              return  typeof obj == 'string' || obj instanceof String;    
          },
          isEmpty : function(obj){
             return (obj.length === 0 || !obj.trim());
          }
      },
      Function : {
            is : function(obj){
              return !!(obj && obj.constructor && obj.call);     
            }
      },
      Error : {
          throw : function(msg){
             throw new Error(msg);
          }        
      }
   };    
    
   var Router = {
      routes : [],
      route : function(path, handler){
         if(!utils.String.is(path) || utils.String.isEmpty(path)){
             utils.Error.throw("Invalid path " + path);
         }
         if(!utils.Function.is(handler)){
            utils.Error.throw("Invalid Function " + handler);
         }    
         var route = new Route(path, handler);
         this.routes.push(route);    
      },
      run : function(){
          var self = this;
          var listener = function(event) {
            self.findRoute(location.pathname, event.state);  
          }
          window.addEventListener("load",listener, false);
          window.addEventListener("popstate", listener, false);
      },
      findRoute : function(url, state){
          var routes = this.routes;   
          for(var i = 0;  i < routes.length; i++ ){
              var route = routes[i];
              if(route.match(url)){
                   var options = { 
                       params: route.params, 
                       state : state 
                   };
                   return route.handler(options);
              }
          }
      }
   };
    
   var Route = function(path, handler){
      this.path = path;
      this.handler = handler;
   };
  
   Route.prototype.match = function(url){
        var selt =  this;
        if(utils.String.areEquals(selt.path, url)){
           return true;
        }
        var params = selt.path.match(/\/:([^/]+)/gi);
        if(params){
            var pattern = selt.path;
            for(var i =0; i < params.length; i++){
                pattern = pattern.replace(params[i].slice(1), "([^/]+)");
            }
            var regex = new RegExp(pattern);
            if(regex.exec(url)){
               var obj = {};    
               for(var i = 0; i < params.length; i++){
                  var par = params[i];
                  obj[par.slice(2)] = RegExp["$" + (i + 1)];
               }    
               selt.params = obj;
               return true;    
            }      
        } 
        return false;
   };
   
   var router = {
      route: (function(){
             Router.run();
             return Router.route.bind(Router);
      })()
   };
  
   if(typeof define === 'function' && define.amd){ 
      define(function () { return router; });
   } else { 
      global['observer'] = router;
   }
    
})(this);



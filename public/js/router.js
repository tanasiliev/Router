var fun = function(){
	console.log(location.pathname)
}
window.addEventListener("load",fun,false)

window.addEventListener('popstate', function(event) {
  console.log('popstate fired!');
   console.log(event.state);
},false);

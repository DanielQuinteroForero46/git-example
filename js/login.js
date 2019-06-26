document.addEventListener('DOMContentLoaded', function(){
	
	let form = document.getElementById('form_user');
	console.log(form);	
	document.getElementById('form_user').addEventListener('click', function(e){
		e.preventDefault();
		console.log(e);
	});

});
document.addEventListener('DOMContentLoaded', function(){
	
	let form = document.getElementById('form_user');
	console.log(form);	
	form.addEventListener('submit', function(e){
		e.preventDefault();
		for(let campo of form.children) {
			console.log(campo);
		}
	});


	console.log('Hola');
	console.log('conflicto');
	console.log('jssj');
	console.log('Pepito');
});
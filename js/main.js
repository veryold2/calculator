
let mainField = document.querySelector('.mainField');
let cansel = document.querySelector('.cansel');
let result = document.querySelector('.result');
let erase = document.querySelector('.erase');
let volume = document.querySelector('.volume');
let btns = document.querySelectorAll('.btnCalc');

for (let elem of btns) {
	elem.addEventListener('click',function(){
		let val = this.getAttribute('data-val');
		mainField.value += val;
		sound();
	});
}

cansel.addEventListener('click',() => {
	mainField.value = '';
	sound();
});

erase.addEventListener('click',() => {
	mainField.value = mainField.value.substr('0',mainField.value.length -1);
	sound();
});

result.addEventListener('click',() => {
	 mainField.value = eval(mainField.value);
	 sound();
});


volume.addEventListener('click',function(){
	 
	 if (this.getAttribute('data-flag') == 1) {
	 	  this.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
	 	  this.setAttribute('data-flag',0);
	 } else { 
	 	  this.setAttribute('data-flag',1);
	 	  this.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
   }

});

function sound() {
	let audio = new Audio();
	audio.src = 'audio/press.mp3';
  
  if (volume.getAttribute('data-flag') == 1) {
  	audio.play();
  } else {
  	return false;
  }


}
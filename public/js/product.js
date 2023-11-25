// Sumar, Restar

const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones Click

btnIncrement.addEventListener('click', () => {
	valueByDefault += 1;
	inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener('click', () => {
	if (valueByDefault === 1) {
		return;
	}
	valueByDefault -= 1;
	inputQuantity.value = valueByDefault;
});

// Funciones Toggle

const toggleDescription = document.querySelector('.title-description');
const iconDescription = toggleDescription.querySelector('i');
const contentDescription = document.querySelector('.text-description');

toggleDescription.addEventListener('click', () => {
	contentDescription.classList.toggle('hidden');
  	iconDescription.classList.toggle('fa-chevron-up');
  	iconDescription.classList.toggle('fa-chevron-down');
});

const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const iconInformation = toggleAdditionalInformation.querySelector('i');
const contentAdditionalInformation = document.querySelector('.text-additional-information');

toggleAdditionalInformation.addEventListener('click', () => {
	contentAdditionalInformation.classList.toggle('hidden');
  	iconInformation.classList.toggle('fa-chevron-up');
  	iconInformation.classList.toggle('fa-chevron-down');
});
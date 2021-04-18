const input = document.getElementById('search-input');
const icon = document.getElementById('clear-icon');

input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
	if (event.target.value) {
		icon.style.visibility = 'visible';
	} else {
		icon.style.visibility = 'hidden';
	}
}

icon.addEventListener('click', clearInput);

function clearInput() {
	input.value = '';
  icon.style.visibility = 'hidden';

}

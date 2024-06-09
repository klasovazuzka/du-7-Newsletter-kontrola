/*const formElm = document.querySelector('form');
const submitForm = e => {
	e.preventDefault();
	const inputElm = document.querySelector('input');
	const emailFromInput = inputElm.value;
	formElm.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailFromInput}.`;
};
formElm.addEventListener('submit', submitForm); */

const formElm = document.querySelector('form');
const inputElm = document.querySelector('input');

// Posluchač události 'input'
const handleInput = e => {
const currentInputValue = e.target.value;
if (currentInputValue.trim() === '' || !currentInputValue.includes('@')) {
inputElm.classList.add('error-border');
} else {
 inputElm.classList.remove('error-border');
 }
};
inputElm.addEventListener('input', handleInput);

const submitForm = e => {
 e.preventDefault();
            const emailFromInput = inputElm.value;
            if (emailFromInput.trim() === '' || !emailFromInput.includes('@')) {
                inputElm.classList.add('error-border');
            } else {
                formElm.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailFromInput}.`;
            }
        };

        formElm.addEventListener('submit', submitForm);
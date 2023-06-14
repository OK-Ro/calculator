const checkbox = document.querySelector('.toggler-wrapper input[type="checkbox"]');
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === '=') {
      try {
        const result = eval(screen.textContent);
        screen.textContent = result;
      } catch (error) {
        screen.textContent = 'Error';
      }
    } else if (buttonText === 'C') {
      screen.textContent = '';
    } else {
      screen.textContent += buttonText;
    }
  });
});

const calculator = document.querySelector('.calculator');
const body = document.querySelector('body');
const popup = document.querySelector('.popup');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    calculator.style.background = 'linear-gradient(179.6deg, rgba(0, 19, 26, 1) -4.9%, rgba(0, 77, 105, 1) 108.4%)';
    body.style.background = 'linear-gradient(179.6deg, rgba(0, 19, 26, 1) -4.9%, rgba(0, 77, 105, 1) 108.4%)';
    popup.textContent = 'Dark Mode';
  } else {
    calculator.style.background = 'linear-gradient(122.3deg, rgba(111, 71, 133, 1) 14.6%, rgba(232, 129, 166, 1) 29.6%, rgba(237, 237, 183, 1) 42.1%, rgba(244, 166, 215, 1) 56.7%, rgba(154, 219, 232, 1) 68.7%, rgba(238, 226, 159, 1) 84.8%)';
    body.style.background = 'linear-gradient(122.3deg, rgba(111, 71, 133, 1) 14.6%, rgba(232, 129, 166, 1) 29.6%, rgba(237, 237, 183, 1) 42.1%, rgba(244, 166, 215, 1) 56.7%, rgba(154, 219, 232, 1) 68.7%, rgba(238, 226, 159, 1) 84.8%)';
    popup.textContent = 'Light Mode';
  }
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 1000);
});




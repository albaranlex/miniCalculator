const buttons = document.querySelectorAll('.calc-button');
const result = document.querySelector('.calc-result');
const expression = document.querySelector('.calc-expression');
const equal = document.querySelector('.calc-equal');
const reset = document.querySelector('.calc-reset');

const expressionArr = [];

const addExpression = e => {
  const value = e.target.textContent;

  const classNames = ['calc-equal', 'calc-reset', 'calc-minus'];
  if (!classNames.some(className => e.target.classList.contains(className))) {
    expressionArr.push(value);
  }

  if (e.target.classList.contains('calc-minus')) {
    expressionArr.splice(expressionArr.length - 1, 0, '-');
  }

  expression.textContent = expressionArr.join('');
};

const calculate = () => {

  result.textContent = eval(`${expressionArr.join('')}`);
};

const resetExpression = () => {
  expressionArr.length = 0;
  result.textContent = '0';
  expression.textContent = '-';
};

buttons.forEach(el => el.addEventListener('click', addExpression));

equal.addEventListener('click', calculate);

reset.addEventListener('click', resetExpression);
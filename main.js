const adviceNumber = document.querySelector("p");
const adviceContent = document.querySelector("h1");
const generateBtn = document.querySelector("button");

const generateAdvice = async () => {
  const advice = await fetch('https://api.adviceslip.com/advice');
  const adviceContent = await advice.json();
  return adviceContent;
};

const updateAdvice = async () => {
  const advice = await generateAdvice();
  const adviceID = advice.slip.id;
  const adviceTextContent = advice.slip.advice;
  adviceNumber.innerText = `ADVICE #${adviceID}`;
  adviceContent.innerText = `"${adviceTextContent}"`;
};

updateAdvice();

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  updateAdvice();
});

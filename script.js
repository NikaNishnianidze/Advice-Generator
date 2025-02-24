let adviceNumber = document.getElementById("advice-number");
let advice = document.getElementById("advice");
let dice = document.getElementById("dice-circle");

dice.addEventListener("click", async function getData() {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    advice.innerHTML = `"${data.slip.advice}"`;
    adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
  } catch (error) {
    console.log(error);
  }
});

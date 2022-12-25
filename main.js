const IncreaseButton = document.querySelector('#increase')
const DecreaseButton = document.querySelector('#decrease');
const Counter = document.querySelector('#counter');
let counterNumber = 0;

IncreaseButton.addEventListener('click', () => {
    counterNumber = counterNumber + 1;
    Counter.innerText = counterNumber;
})
DecreaseButton.addEventListener('click', () => {
    counterNumber = counterNumber - 1;
    Counter.innerText = counterNumber;
})

const GithubRedirect = () => {
    // window.location.replace('https://github.com/LuisRamosOfficial');
    window.open('https://github.com/LuisRamosOfficial', '_blank');
}
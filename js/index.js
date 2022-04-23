const calculateBmi = (height, weight) => {
    height = height / 100;
    let result = weight / (height * height)

    return result.toFixed(3);
}

const clearResult = () => {
    document.querySelector('#result').innerHTML = '';
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    clearResult()

    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    document.querySelector('#result').innerHTML = calculateBmi(height, weight)
})
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

    document.querySelector('.heightMessage').innerHTML = '';
    document.querySelector('.weightMessage').innerHTML = '';

    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    if (height.trim() === '') {
        const message = 'لطفا قد را وارد کنید !';
        document.querySelector('.heightMessage').innerHTML = message;
        document.querySelector('.weightMessage').innerHTML = '';
        return false;
    }else if(height.trim() !== '' && isNaN(parseInt(height))) {
        const message = 'لطفا قد را بصورت عدد وارد کنید !';
        document.querySelector('.heightMessage').innerHTML = message;
        document.querySelector('.weightMessage').innerHTML = '';
        return false;
    }else if (height.trim() !== '' && !isNaN(parseInt(height)) && height < 0) {
        const message = 'لطفا عدد بزرگتر از صفر وارد کنید !';
        document.querySelector('.heightMessage').innerHTML = message;
        document.querySelector('.weightMessage').innerHTML = '';
        return false;
    }else if (weight.trim() === '') {
        const message = 'لطفا وزن را وارد کنید !';
        document.querySelector('.weightMessage').innerHTML = message;
        document.querySelector('.heightMessage').innerHTML = '';
        return false;
    }else if(weight.trim() !== '' && isNaN(parseInt(weight))) {
        const message = 'لطفا وزن را بصورت عدد وارد کنید !';
        document.querySelector('.weightMessage').innerHTML = message;
        document.querySelector('.heightMessage').innerHTML = '';
        return false;
    }else if(weight.trim() !== '' && !isNaN(parseInt(weight)) && weight < 0) {
        const message = 'لطفا عدد بزرگتر از صفر وارد کنید !';
        document.querySelector('.weightMessage').innerHTML = message;
        document.querySelector('.heightMessage').innerHTML = '';
        return false;
    }

    document.querySelector('#result').innerHTML = calculateBmi(height, weight)
})
function calculateBMI(event){
    event.preventDefault();
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const bmi = document.querySelector('.answer')
    bmi.innerHTML = `
        <p>Your current BMI is ${height/(weight*weight)}</p>
    `
    document.querySelector('#height').value = ' '
    document.querySelector('#weight').value = ' '
}
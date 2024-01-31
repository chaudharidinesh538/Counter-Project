const count = document.querySelector('.count')
const  minBtn =document.querySelector('.min-btn') 
const  plusBtn =document.querySelector('.plus-btn') 
const changeBy = document.querySelector('.changeby')
const resetBtn = document.querySelector('.reset-btn')

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerHTML);
    const changeByValue = parseInt(changeBy.value)
    count.innerHTML = countValue + changeByValue;
})

minBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerHTML);
    const changeByValue = parseInt(changeBy.value)
    count.innerHTML = countValue - changeByValue;
    
})

resetBtn.addEventListener('click' , () => {
    count.innerHTML = 0;
})
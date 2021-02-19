const colors = ['#ee13a8', '#076400', '#876200', 
                '#005173', '#999999', '#3f84a0', '#60539b', '#b0503a', '#677004','#2a0062'];
const btn = document.getElementById('button');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
});

function getRandomNumber(){  
   return '#' + Math.floor(Math.random() * 16777216).toString(16);

}
const chart = document.querySelector("#chart").getContext('2d');

// Create a new chart instance
new Chart(chart, {
    type: 'line',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
           {
            label:'BTC',
            data:[29765, 75876, 4987867, 59276, 55845, 34987, 30581, 48024, 33458,48568,64870],
            borderColor: 'red',
            borderWidth:2
           },
           {
            label:'ETH',
            data:[39765, 49876, 80786, 66276, 75845, 33987, 280181, 48024, 45458,58568,24870],
            borderColor: 'blue',
            borderWidth:2
           },
        ]
    },
    Options: {
        responsive: true
    }
}) 
const sideBar = document.querySelector('aside');
const closeBtn = document.querySelector('.close-btn');
const menuBtn = document.querySelector('#menu-btn');
const themeBtn = document.querySelector('.theme-btn');

// close button
closeBtn.addEventListener('click', () =>{
    sideBar.style.display = 'none';
})
// menu button
menuBtn.addEventListener('click', () => {
    sideBar.style.display = 'block';
})

// theme toggle
themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})
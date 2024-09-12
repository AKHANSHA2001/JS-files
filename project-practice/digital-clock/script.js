const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date()       //Date object is created by using new keyword, i.e. new Date()
console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000)


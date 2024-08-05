const month = document.getElementById('month')
const date = document.getElementById('date')
const cdv = document.getElementById('cdv')
const left = document.getElementById('left')
const right = document.getElementById('right')

const months = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

let ay = new Date().getMonth()
let il = new Date().getFullYear()
let tarix = new Date().getDate()

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
}

function updateCalendar() {
    let kod = ''
    let x = 1
    for (let i = 0; i < 5; i++) {
        kod += '<tr>'
        for (let j = 0; j < 7; j++) {
            let gun = x > daysInMonth(il, ay) ? '' : x++
            let currentd = (gun == tarix) ? 'highlight' : ''
            kod += `<td class='${currentd}'>${gun}</td>`
        }
        kod += '</tr>'
    }
    cdv.innerHTML = kod
}

function deyish() {
    month.innerHTML = months[ay]
    let dayOfWeek = new Date(il, ay, tarix).getDay()
    date.innerHTML = `${weekdays[dayOfWeek]}, ${tarix} ${months[ay]} ${il}`
    updateCalendar()
}

function evvele() {
    ay--
    if (ay < 0) {
        ay = 11
        il--
    }
    deyish()
}

function qabaqa() {
    ay++
    if (ay > 11) {
        ay = 0
        il++
    }
    deyish()
}
deyish()
const pagination = document.getElementById('pagination')
const checkb = document.getElementsByClassName('checkb')
const monthPag = document.getElementsByClassName('monthPag')
let kod = ''
let arr =[]
for(let i = 0; i < months.length; i++){
    kod += `<div class="wrap"><p>${months[i].slice(0,3)}</p> <input type="checkbox" class="checkinp" onclick='sech(this)'/></div>`
    arr.push(months[i])
    function sech(){
        console.log(monthPag.textContent);
        
    }
}
pagination.innerHTML = kod
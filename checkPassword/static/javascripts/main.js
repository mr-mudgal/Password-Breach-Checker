let cH = document.documentElement.clientHeight
let cW = document.documentElement.clientWidth
let poster = document.getElementById('poster')
let poster_content = document.getElementById('poster_content')
let input = document.getElementById('pswd')
let check_btn = document.getElementById('check_pass_btn')
let welcome = document.getElementById('welcome')
let contact = document.getElementById('contact')
let result = document.getElementById('result')
let github = document.getElementById('git-link')
let usage = document.getElementById('usage')
let about = document.getElementById('about')
let credit = document.getElementById('credit')
let pbc = document.getElementById('pbc-full')

poster.style.height = `${cH-1}px`
poster_content.style.height = `${cH - 100}px`
poster_content.style.width = `${cW - 100}px`
poster_content.style.left = `${(cW - parseInt(poster_content.style.width))/2}px`
poster_content.style.top = `${(cH - parseInt(poster_content.style.height))/2}px`
welcome.style.top = `${parseInt(poster_content.style.height)*0.05}px`
check_btn.style.top = `${parseInt(poster_content.style.height)*0.17}px`
contact.style.fontSize = `${parseInt(poster_content.style.height)*0.05}px`
result.style.fontSize = `${parseInt(contact.style.fontSize)}px`
credit.style.fontSize = result.style.fontSize

if (cH > cW) {
    input.style.top = `${parseInt(poster_content.style.height)*0.1}px`
    input.style.width = `${parseInt(poster_content.style.height)/2.5}px`
    input.style.height = `${parseInt(input.style.width)/5}px`
    input.style.fontSize = `${parseInt(input.style.height)}px`
    welcome.style.fontSize = `${parseInt(input.style.fontSize)+10}px`
    check_btn.style.height = `${parseInt(input.style.width)/5}px`
    contact.style.bottom = `-${parseInt(poster_content.style.height)*0.5}px`
    result.style.top = `${parseInt(poster_content.style.height)*0.02}px`
    document.getElementById('usage-text').style.fontSize = result.style.fontSize
}
else {
    input.style.top = `${parseInt(poster_content.style.height)*0.1}px`
    input.style.width = `${parseInt(poster_content.style.width) - 100}px`
    input.style.height = `${parseInt(input.style.width)/10}px`
    input.style.fontSize = `${parseInt(input.style.height)}px`
    welcome.style.fontSize = `${parseInt(input.style.fontSize)}px`
    check_btn.style.height = input.style.height
    contact.style.bottom = `-${parseInt(poster_content.style.height)*0.25}px`
    result.style.top = `${parseInt(poster_content.style.height)*0.03}px`
}

if (window.history.replaceState) {
    window.history.replaceState( null, null, window.location.href );
}

if (result.innerHTML === 'None') {
    result.style.visibility = 'hidden'
}
else if (result.innerHTML === '0') {
    result.style.color = 'green'
    result.innerHTML = 'Congratulation! Your Password have <b> NOT </b> yet been breached.'
}
else {
    result.style.color = 'red'
    result.innerHTML = `Unfortunate! Your Password have been breached <b> ${result.innerHTML} </b> times.`
}

document.getElementById('check_pass_btn').addEventListener('click', () => {
    if(input.value.length > 0) {
        document.getElementById('pswd_form').submit()
    }
})
document.getElementById('welcome').addEventListener('click', () => {
    open('http://0.0.0.0:2422/', '_self')
})
github.style.cursor = 'Pointer'
github.addEventListener('mouseover', () => {
    github.style.background = 'dodgerblue'
    github.style.borderRadius = '20px'
    github.style.paddingInline = '10px'
    github.style.marginInline = '-10px'
})
github.addEventListener('mouseout', () => {
    github.style.background = 'revert'
    github.style.paddingInline = 'revert'
    github.style.marginInline = 'revert'
})
github.addEventListener('click', () => {
    open('https://github.com/mr-mudgal/Password-Breach-Checker', '_self')
})
usage.style.cursor = 'Crosshair'
usage.addEventListener('mouseover', () => {
    document.getElementById('usage-text').style.display = 'block'
    usage.style.background = 'dodgerblue'
    usage.style.borderRadius = '20px'
    usage.style.paddingInline = '10px'
    usage.style.marginInline = '-10px'
    result.style.filter = 'blur(4px)'
})
usage.addEventListener('mouseout', () => {
    document.getElementById('usage-text').style.display = 'none'
    usage.style.background = 'revert'
    usage.style.paddingInline = 'revert'
    usage.style.marginInline = 'revert'
    result.style.filter = 'revert'
})
about.style.cursor = 'Crosshair'
about.addEventListener('mouseover', () => {
    document.getElementById('about-text').style.display = 'block'
    about.style.background = 'dodgerblue'
    about.style.borderRadius = '20px'
    about.style.paddingInline = '10px'
    about.style.marginInline = '-10px'
    result.style.filter = 'blur(4px)'
})
about.addEventListener('mouseout', () => {
    document.getElementById('about-text').style.display = 'none'
    about.style.background = 'revert'
    about.style.paddingInline = 'revert'
    about.style.marginInline = 'revert'
    result.style.filter = 'revert'
})
pbc.addEventListener('mouseover', () => {
    document.getElementById('full-form').style.display = 'revert'
})
pbc.addEventListener('mouseout', () => {
    document.getElementById('full-form').style.display = 'none'
})

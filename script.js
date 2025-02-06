function headerSearch() {
    const axtaris = document.querySelector("#axtaris") 
    axtaris.style.display = 'block'
    axtaris.style.height = '75px'
}


function toggle() {
    const hamburger = document.querySelector("#hamburger")
    let flag = false
    hamburger.style.top = flag ? '-100%' : '0'
    flag  = !flag
}
function change(dir = 1) {
clearTimeout(timer)
x += dir
if(x < 1) x = 4
if(x > 4) x = 1
slider.style = `background: url('img/slider-${x}.webp') center/cover;`
timer = setTimeout(change, 3000)
}
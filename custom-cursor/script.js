let main = document.querySelector('main')
let cursor = document.querySelector('#cursor')

main.addEventListener('mousemove',function(det){
cursor.style.left = det.clientX+ 'px'
cursor.style.top = det.clientY + 'px'
cursor.style.transform = 'translate(-50%,-50%)'
})
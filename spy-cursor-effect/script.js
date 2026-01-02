let body = document.querySelector('body')

addEventListener('mousemove',(val)=>{
    console.log(val.x,val.y)
    body.style.setProperty('--x',val.clientX +'px')
    body.style.setProperty('--y',val.clientY +'px')
})
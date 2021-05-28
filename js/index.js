function qqfun() {
    let  photo = $('.photo')
    let  none = $('.none')
    let qq = $('.qq')
    let timer
    let starX = 0
    let starY = 0
    let is_delay = false
//鼠标按下

    qq.addEventListener('mousedown',function (e){
        is_delay  = true
        qq.style.cursor = 'move';
        let X = e.clientX
        let Y = e.clientY
        let L = qq.offsetLeft
        let T = qq.offsetTop
        starX = X - L // 计算出来 qq 这个盒子自身的X 和 Y的坐标值
        starY = Y - T
    })
//鼠标移动
    qq.addEventListener('mousemove',function (e){
        if (is_delay) {
            let left = e.clientX - starX
            let top = e.clientY - starY
            // console.log(left)
            // console.log(top)
            qq.style.left = left + 'px' //改变top 的值
            qq.style.top = top + 'px'  //改变left的值
        }
    })
//鼠标抬起
    qq.addEventListener('mouseup', function (e) {
        is_delay  = false
        qq.style.cursor = 'auto'
    })

    qq.addEventListener('mouseleave', function (e) {
        is_delay  = false
    })

//
// photo.addEventListener('mouseenter',function (){
//     none.style.display = 'block'
//     // clearTimeout(timer)
//     // console.log(timer)
// })
// photo.addEventListener('mouseout',function (){
//     none.style.display = 'none'
// })
//
// none.addEventListener('mouseover',function (){
//     none.style.display = 'block'
//     clearTimeout(timer)
//     // console.log(timer)
// })
//
// none.addEventListener('mouseout',function (){
//    timer = setTimeout(function (){
//         none.style.display = 'none'
//     },1000)
// })


}qqfun()
























let menu = $('.menu')
$('.wrap').addEventListener('contextmenu',function (event){
    event.preventDefault()
    // console.log(event.clientX +'px',event.clientY +'px')
    menu.style.left = event.clientX +'px'
    menu.style.top = event.clientY +'px'
    menu.style.display = 'block'
})

document.documentElement.addEventListener('click',function (event){
    menu.style.display = 'none'
})
let wrap = $('.wrap')
wrap.addEventListener('click',function (){
    console.log('wrap')
})
let box = wrap.children[0]
box.addEventListener('click',function (event){
    event.stopPropagation()
    console.log('box')
})

let child = box.children[0]
child.addEventListener('click',function (event){
    event.stopPropagation()
    console.log('child')
}) //{capture:true} 事件铺获


// $('.del').addEventListener('click',function (){
//     // console.log(this.parentElement)
//     this.parentElement.remove()
// })



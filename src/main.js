mouth=document.querySelector(".mouth")
audio=document.querySelector("audio")
style=document.querySelector("style")
body =document.body




mouth.onclick=()=>{
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1
    let x = Math.random()
    let y = Math.random()

    // let maxX=parseInt(body.clientHeight) * x *plusOrMinus
    // let maxY=parseInt(body.clientWidth) * y *plusOrMinus

    let maxX1=100 * x *plusOrMinus
    let maxY1=100 * y *plusOrMinus
    let maxX2=500 * x *plusOrMinus
    let maxY2=500 * y *plusOrMinus
    let maxX3=1000 * x *plusOrMinus
    let maxY3=1000 * y *plusOrMinus

    audio.play()
    let span=document.createElement('span')
    mouth.appendChild(span)
    span.classList.add('bubble')
    style.innerHTML=`
    @keyframes move{
        0% {
        }
        25%{
            transform: translateX(${maxX1}px);
            transform: translateY(${maxY1}px);
            height: 100px;
            width: 100px;
            opacity: 0.8;
        }
        50%{
            transform: translateX(${maxX2}px);
            height: 100px;
            width: 100px;
            opacity: 0.5;
        }
        755{
            transform: translateY(${maxY2}px);
            height: 100px;
            width: 100px;
            opacity: 0.4;
        
        }
        100%{
            transform: translateX(${maxX3}px);
            transform: translateY(${maxY3}px);
            height: 20px;
            width: 20px;
            opacity: 0;
        }
}`
}
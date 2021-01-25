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
    let maxX=1000 * x *plusOrMinus
    let maxY=1000 * y *plusOrMinus
    console.log( maxX,maxY)
    audio.play()
    let span=document.createElement('span')
    mouth.appendChild(span)
    span.classList.add('bubble')
    style.innerHTML=`
    @keyframes move{
        0% {
        }
        100%{
            transform: translateX(${maxX}px);
            transform: translateY(${maxY}px);
            height: 100px;
            width: 100px;
            opacity: 0.8;
        }
        100%{
            transform: translateX(${maxX}px);
            transform: translateY(${maxY}px);
            height: 20px;
            width: 20px;
            opacity: 0;
        }
}`
}
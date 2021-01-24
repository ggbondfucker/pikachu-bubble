mouth=document.querySelector(".mouth")
audio=document.querySelector("audio")
body =document.body
mouth.onclick=()=>{
    audio.play()
    let span=document.createElement('span')
    mouth.appendChild(span)
    span.classList.add('bubble')
}
const enhanced = id => {
    const element = document.getElementById(id), 
    text = element.innerText.split("");
    element.innerText = "";
    text.forEach(letter => {
        const span = document.createElement("span");
        span.className += "letter";
        if(id == "channel-link1"){
            span.className += " letter1";
        }
        if(id == "channel-link2"){
            span.className += " letter2";
        }
        span.innerText = letter;
        element.appendChild(span);
        console.log(letter);
    });
}
enhanced("channel-link1");
enhanced("channel-link2");

/* document.getElementsByClassName("fancy").addEventListener("mouseover", fadeIn); */
/* var f = document.querySelectorAll(".fancy");
for(let i = 0; i < f.length; i++){
    f[i].addEventListener("mouseover", fadeIn(i));
}
 */
function fadeIn(i){
    /* var glam = document.querySelectorAll(".intro");
    glam.style.color = "red"; */
    console.log(i);
}
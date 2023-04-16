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
        /* console.log(letter); */
    });
}
enhanced("channel-link1");
enhanced("channel-link2");

var fancy = Array.from(document.getElementsByClassName("fancy"));
fancy.forEach(element => {
    element.addEventListener("mouseover", e => {
        var intro = Array.from(document.getElementsByClassName("intro"));
        intro.forEach(x =>{
            x.style.opacity = "0.15";
        });
    });
    element.addEventListener("mouseout", e => {
        var intro = Array.from(document.getElementsByClassName("intro"));
        intro.forEach(x =>{
            x.style.opacity = "1.0";
        });
    });
});

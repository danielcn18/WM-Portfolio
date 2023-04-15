const enhanced = id => {
    const element = document.getElementById(id), 
    text = element.innerText.split("");
    console.log("Hello World");


    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");

        span.className = "letter";

        span.innerText = letter;

        element.appendChild(span);
        console.log(letter);
    });
}

enhanced("channel-link1");
enhanced("channel-link2");
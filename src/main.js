function showSettings() {
    document.getElementById("settings").style.display = "flex";
}

function closeSettings() {
    document.getElementById("settings").style.display = "none";
}

function showAddLink() {
    document.getElementById("addLink").style.display = "flex";
}

function closeAddLink() {
    document.getElementById("addLink").style.display = "none";
}

// add links
function addLink() {
    const inputIcon = document.querySelector("[name='icon']")[0].value;
    const inputURL = document.querySelector("[name='url']")[0].value;
    const inputIconColor = document.querySelector("[name='icon-color']")[0]
        .value;
    const inputLinkName = document.querySelector("[name='link-name']")[0].value;

    const buttonTemplate = document
        .getElementById("button-link-template")
        .content.cloneNode(true);
    buttonTemplate.getElementsByTagName(
        "i"
    )[0].className = `ti ti-${inputIcon}`;
    buttonTemplate
        .getElementsByTagName("a")[0]
        .setAttribute("href", `${inputURL}`).innerHTML = `${inputLinkName}`;

    document.getElementsByClassName("link-row")[0].appendChild(buttonTemplate);
    document.getElementById("addLink").style.display = "none";
}

// display current time
window.onload = () => {
    setInterval(() => {
        let currentTime = new Date();
        let hr = currentTime.getHours();
        let min = currentTime.getMinutes();
        let ampm = hr >= 12 ? "PM" : "AM";

        // zero padding
        if (min <= 9) {
            min = `0${min}`;
        }

        // formats 12 hour clock
        document.getElementById("clock").innerHTML = `${
            hr === 12 ? 12 : hr % 12
        }:${min} ${ampm}`;
    }, 1000);
};

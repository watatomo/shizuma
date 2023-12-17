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

function addButtonLink(inputIcon, inputURL, inputIconColor, inputLinkName) {
    const parentDiv = document.getElementsByClassName("link-row").parentNode;
    let childElement = document.getElementsByClassName("link add");

    const buttonTemplate = document
        .getElementById("button-link-template")
        .content.cloneNode(true);
    document
        .getElementsByClassName("link-row")[0]
        .insertBefore(buttonTemplate, childElement);
    document
        .getElementsByClassName("link")
        [
            document.getElementsByClassName("link").length - 1
        ].getElementsByTagName("i")[0].className = `ti ti-${inputIcon}`;
    document
        .getElementsByClassName("link")
        [
            document.getElementsByClassName("link").length - 1
        ].getElementsByTagName("a")[0]
        .setAttribute("href", `${inputURL}`);
    document
        .getElementsByClassName("link")
        [
            document.getElementsByClassName("link").length - 1
        ].getElementsByTagName("i")[0].style.color = `${inputIconColor}`;
    document
        .getElementsByClassName("link")
        [
            document.getElementsByClassName("link").length - 1
        ].getElementsByTagName("a")[0].innerHTML = `${inputLinkName}`;
}

// add links
function addLink() {
    const inputIcon = document.querySelector("[name='icon']").value;
    const inputURL = document.querySelector("[name='url']").value;
    const inputIconColor = document.querySelector("[name='icon-color']").value;
    const inputLinkName = document.querySelector("[name='link-name']").value;

    addButtonLink(inputIcon, inputURL, inputIconColor, inputLinkName);

    let links = localStorage.getItem("links");

    let newArray =
        links === null || links.length === 0 ? [] : JSON.parse(links);
    newArray = newArray === null ? [] : newArray;

    let linkObject = {
        link_icon: `${inputIcon}`,
        link_icon_color: `${inputIconColor}`,
        link_name: `${inputLinkName}`,
        link_url: `${inputLinkURL}`,
    };

    newArray.push(linkObject);
    localStorage.setItem("links", JSON.stringify(newArray));

    document.getElementById("addLink").style.display = "none";

    // clear all inputs after
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach((singleInput) => (singleInput.value = ""));
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

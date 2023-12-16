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

// display current time
window.onload = () => {
    setInterval(() => {
        const currentTime = new Date();
        const hr = currentTime.getHours();
        const min = currentTime.getMinutes();
        const ampm = hr >= 12 ? "PM" : "AM";

        // formats 12 hour clock
        document.getElementById("clock").innerHTML = `${
            hr === 12 ? 12 : hr % 12
        }:${min} ${ampm}`;
    }, 1000);
};

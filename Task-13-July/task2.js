
function changeFlag(selectElement) {
    const flags = {
        Jordan: "jordan.png",
        Palestine: "pelastin.jpg"
       
    };

    const selectedCountry = selectElement.value;
    const selectedFlag = flags[selectedCountry];
    const flagImage = document.getElementById("flagImage");

    flagImage.src = selectedFlag;
}



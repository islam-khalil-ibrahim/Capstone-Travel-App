// cityChecker: inputText --> void
// Checks to ensure that the URL input is valid using regex


function checkForCity() {
    console.log("::: Running checkForName :::");
    const city = document.getElementById('city').value

    if(city == null) {
        alert("Please Enter a Valid City")
    } else {
        return true;
    };
};

export { checkForCity };

const realFileBtn = document.getElementById("realFileButton"); 
const customBtn = document.getElementById("customButton"); 
const customTxt = document.getElementById("customText"); 

customBtn.addEventListener("click", function() {
    realTimeBtn.click();
}); 

realTimeBtn.addEventListener("change", function() {
    if (realTimeBtn.value) {
        customTxt.innerHTML = realTimeBtn.value;
    } else {
        customTxt.innerHTML = "No file chosen";
    }
});
<script type ></script>

var realTimeBtn = document.getElementById("realTimeBtn"); 
var customBtn = document.getElementById("customBtn"); 
var customTxt = document.getElementById("customTxt"); 

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
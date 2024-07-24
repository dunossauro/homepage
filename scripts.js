function showField(id) {
    var pix = document.getElementById(id);
    if (pix.style.display === "none") {
	pix.style.display = "block";
    } else {
	pix.style.display = "none";
    }
}

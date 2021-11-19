function filterFunction() {
    console.log("in filter function");
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("filterBox");
    filter = input.value.toUpperCase();
    ul = document.getElementById("drinklist");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent;
        console.log(txtValue);
        txtValue = li[i].innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
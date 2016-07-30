function grade() {
    var student = document.getElementById("student").value;
    var show = document.getElementById("show");

    if (student <= 100 && student > 90) {
        show.innerHTML = ("1等");
    } else if (student <= 90 && student > 80) {
        show.innerHTML = ("2等");
    } else if (student <= 80 && student > 70) {
        show.innerHTML = ("3等");
    } else if (student <= 70 && student > 60) {
        show.innerHTML = ("4等");
    } else if (student <= 60 && student > 50) {
        show.innerHTML = ("5等");
    } else if (student <= 50 && student > 40) {
        show.innerHTML = ("6等");
    } else if (student <= 40 && student > 30) {
        show.innerHTML = ("7等");
    } else if (student <= 30 && student > 20) {
        show.innerHTML = ("8等");
    } else if (student <= 20 && student > 10) {
        show.innerHTML = ("9等");
    } else {
        show.innerHTML = ("10等");
    }
}

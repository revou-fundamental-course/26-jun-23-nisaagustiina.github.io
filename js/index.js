// SLIDER
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-coment");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

setInterval(() => {
    plusSlides(1);
}, 5000);

// Validasi
function validateForm() {
    var nama = document.getElementById("input-nama").value;
    var email = document.getElementById("input-email").value;
    var phone = document.getElementById("input-phone").value;
    var pesan = document.getElementById("input-pesan").value;
    if (nama == "" || email == "" || phone == "" || pesan == "") {
        alert("Data tidak boleh kosong");
        return false;
    } else if ((nama = "")) {
        alert("Nama tidak boleh kosong");
        return false;
    } else if (email == "") {
        alert("Email tidak boleh kosong");
        return false;
    } else if (phone == "") {
        alert("Nomor Telepon tidak boleh kosong");
        return false;
    } else if (pesan == "") {
        alert("Pesan tidak boleh kosong");
        return false;
    } else {
        alert("Data sudah masuk. Terimakasih");
        document.forms.submit();
        return true;
    }
}

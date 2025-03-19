function bukaSurat() {
    let surat = document.getElementById("suratContainer");

    // Tambahkan animasi
    surat.classList.add("fade-out");

    // Tunggu animasi selesai, lalu sembunyikan elemen
    setTimeout(() => {
        surat.style.display = "none"; // Hilangkan gambar surat
        document.querySelector(".popup-card").classList.add("active"); // Tampilkan kartu pertama
    }, 500); // Waktu harus sama dengan durasi animasi CSS
}


let currentCard = 0;
const cards = document.querySelectorAll('.popup-card');

function nextCard() {
    if (currentCard < cards.length - 1) {
        cards[currentCard].classList.remove('active');
        currentCard++;
        setTimeout(() => {
            cards[currentCard].classList.add('active');
        }, 100);
    }
}

function kirimPesan() {
    let pesan = document.getElementById("pesan").value;
    if (pesan.trim() === "") {
        alert("Silakan isi pesan terlebih dahulu!");
        return;
    }
    
    let nomorWA = "628XXXXXXXXXX";  // Ganti dengan nomor tujuan
    let link = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    
    window.open(link, "_blank");
}

// Fungsi untuk menampilkan custom alert
function showAlert(message) {
    document.getElementById("alert-message").innerText = message;
    document.getElementById("custom-alert").style.display = "block";
}

// Fungsi untuk menutup custom alert
function closeAlert() {
    document.getElementById("custom-alert").style.display = "none";
}

// Fungsi untuk mengirim pesan ke WhatsApp
function kirimPesan() {
    let pesan = document.getElementById("pesan").value;
    if (pesan.trim() === "") {
        showAlert("Aku udah bikin,masa kamu gaa isi! 😭");
        return;
    }

    let nomorWA = "6285876202818"; // Ganti dengan nomor tujuan
    let linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    // Buka WhatsApp
    window.open(linkWA, "_blank");

    // Tampilkan alert setelah membuka WhatsApp
    showAlert("Makasih kakaa! 😊");
}

document.addEventListener("DOMContentLoaded", function() {
    let bgMusic = document.getElementById("bg-music");

    // Coba putar musik otomatis
    let playPromise = bgMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Musik diputar otomatis.");
        }).catch(() => {
            console.log("Autoplay dicegah, menunggu interaksi...");
            
            // Putar musik saat pengguna pertama kali berinteraksi
            document.addEventListener("click", function() {
                bgMusic.play();
            }, { once: true });
        });
    }
});

// Tambahkan efek suara
const klikSuara = new Audio("asset/audio/click.mp3");  // Ganti dengan file klik
const notifSuara = new Audio("asset/audio/notif.mp3"); // Ganti dengan file notifikasi

// Tambahkan suara saat tombol diklik
document.querySelectorAll(".ok-btn").forEach(button => {
    button.addEventListener("click", () => {
        klikSuara.play();
    });
});

// Tambahkan suara saat pesan dikirim
function showAlert(message) {
    document.getElementById("alert-message").innerText = message;
    document.getElementById("custom-alert").style.display = "block";
    notifSuara.play();
          }

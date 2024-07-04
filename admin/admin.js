// Mengecek status login dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Periksa status login dari localStorage
  const hasLogin = localStorage.getItem("hasLogin") === "true";

  if (hasLogin) {
    // Tampilkan konten admin jika sudah login
    const adminContent = document.getElementById("adminContent");

    adminContent.style.display = "block";
  } else {
    // Redirect ke halaman login jika belum login
    window.location.href = "/login/index.html";
  }
});

function downloadData() {
  // Ambil data dari localStorage
  const dataJadwalString = localStorage.getItem("jadwalKonsultasi");

  // Jika data ditemukan, lanjutkan untuk mengunduhnya
  if (dataJadwalString) {
    const dataJadwal = JSON.parse(dataJadwalString);

    // Format data menjadi teks (misalnya, CSV)
    const dataText = dataJadwal
      .map(
        (data, index) =>
          `Data ke- ${index + 1}, Nama: ${data.nama}, No-Tlp: ${
            data.no_telepon
          } Tanggal Konsultasi: ${data.tanggal}, Waktu Konsultasi: ${
            data.waktu
          }, Keluhan Pasien: ${data.keluhan}`
      )
      .join("\n\n");

    // Buat elemen <a> untuk mengunduh file
    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(dataText);
    link.download = "data.txt"; // Nama file yang akan diunduh
    link.style.display = "none"; // Sembunyikan elemen <a>

    // Tambahkan elemen <a> ke dokumen dan klik secara otomatis
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    console.log("Data tidak ditemukan di localStorage");
  }
}

// Mendapatkan referensi tombol
const downloadButton = document.getElementById("download-button");

// Menambahkan event listener untuk download data ketika tombol diklik
downloadButton.addEventListener("click", downloadData);

const logoutButton = document.getElementById("logout-button");

function logout() {
  // Hapus status login dari localStorage
  localStorage.removeItem("hasLogin");

  // Redirect ke halaman login
  window.location.href = "/index.html";
}

logoutButton.addEventListener("click", logout);

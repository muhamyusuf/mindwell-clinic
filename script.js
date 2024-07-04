// Fungsi displayJadwalKonsul() akan menampilkan jadwal konsultasi yang sudah disimpan di localStorage ke dalam tabel HTML. Fungsi ini akan dipanggil saat halaman dimuat dan saat jadwal konsultasi baru disimpan.
function displayJadwalKonsul() {
  const tabelJadwal = document.getElementById("tablejadwal");

  // Ambil data dari localStorage
  const dataJadwalString = localStorage.getItem("jadwalKonsultasi");
  const dataJadwal = dataJadwalString ? JSON.parse(dataJadwalString) : [];

  // Hapus semua baris tabel yang sudah ada (kecuali header)
  while (tabelJadwal.rows.length > 1) {
    tabelJadwal.deleteRow(1);
  }

  // Iterasi untuk menampilkan setiap jadwal
  dataJadwal.forEach((data) => {
    const barisBaru = tabelJadwal.insertRow();
    barisBaru.insertCell().textContent = data.nama;
    barisBaru.insertCell().textContent = data.no_telepon;
    barisBaru.insertCell().textContent = data.tanggal;
    barisBaru.insertCell().textContent = data.waktu;
    barisBaru.insertCell().textContent = data.keluhan;
  });
}

// Tampilkan jadwal konsultasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", async function () {
  displayJadwalKonsul();
});

// Buat Simpan Jadwal Handle Function saat tombol buat janji ditekan
document
  .getElementById("simpanJadwal")
  .addEventListener("click", async function () {
    const nama = document.getElementById("nama").value;
    const no_telepon = document.getElementById("no_telepon").value;
    const tanggal = document.getElementById("tanggal").value;
    const waktu = document.getElementById("waktu").value;
    const keluhan = document.getElementById("keluhan").value;

    // Ambil data yang sudah ada dari localStorage
    const dataJadwalString = localStorage.getItem("jadwalKonsultasi");
    const dataJadwal = dataJadwalString ? JSON.parse(dataJadwalString) : [];

    // Tambahkan jadwal baru ke array
    dataJadwal.push({
      nama: nama,
      no_telepon: no_telepon,
      tanggal: tanggal,
      waktu: waktu,
      keluhan: keluhan,
    });

    // Simpan kembali array yang sudah diperbarui ke localStorage
    localStorage.setItem("jadwalKonsultasi", JSON.stringify(dataJadwal));
    alert("Jadwal berhasil disimpan!");

    // Redirect ke halaman jadwal konsultasi
    window.location.href = "/jadwal-konsultasi/index.html";

    // Perbarui tampilan tabel
    displayJadwalKonsul();
  });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

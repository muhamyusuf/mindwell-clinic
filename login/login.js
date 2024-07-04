email = "dr.amira@gmail.com";
password = "123456";

hasLogin = false;

// Fungsi untuk menangani login
async function handleSignIn() {
  // Pilih elemen form login
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  // Ambil data dari form login
  const inputEmail = emailInput.value;
  const inputPassword = passwordInput.value;

  // Periksa apakah email dan password sesuai dengan yang diinginkan
  if (inputEmail === email && inputPassword === password) {
    // Login berhasil
    alert("Login berhasil!");
    hasLogin = true;

    // Simpan status login ke localStorage
    localStorage.setItem("hasLogin", "true");
    // Arahkan ke halaman lain (misalnya, /jadwal-konsultasi/index.html)
    window.location.href = "/admin/index.html";
  } else {
    // Login gagal
    alert("Email atau password salah!");
  }
}

// Fungsi untuk menangani login ketika tombol login ditekan
document.getElementById("signInButton").addEventListener("click", handleSignIn);

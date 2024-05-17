// Temukan form dan output section
const formSection = document.getElementById("overlay");
const outputSection = document.getElementById("outputSection");

// Fungsi untuk menampilkan output
function showOutput() {
  // Sembunyikan form section
  formSection.style.display = "none";
  // Tampilkan output section
  outputSection.style.display = "block";
}

// Panggil fungsi showOutput() ketika formulir diserahkan
document.getElementById("burgerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  showOutput(); // Tampilkan output
  // Ambil nilai dari formulir
  const patty = document.getElementById("patty").value;
  const amount = document.getElementById("amount").value;
  const doneness = document.getElementById("doneness").value;
  const toppings = document.querySelectorAll('input[name="topping"]:checked');
  const beef = document.querySelector('input[name="cheese"]:checked');
  const bun = document.getElementById("bun").value;
  const sauce = document.getElementById("sauce").value;
  const extra = document.getElementById("extra").value;
  // Bangun output
  const outputContent = `
    <p>Jenis protein: ${patty}</p>
    <p>Jumlah burger: ${amount}</p>
    <p>Kematangan: ${doneness}</p>
    <p>Topping: ${Array.from(toppings).map(topping => topping.value).join(", ")}</p>
    <p>Extra Daging: ${beef ? beef.value : "Tidak"}</p>
    <p>Jenis roti: ${bun}</p>
    <p>Saus: ${sauce}</p>
    <p>Info Tambahan: ${extra}</p>
  `;
  // Tampilkan output dalam div orderOutput
  document.getElementById("orderOutput").innerHTML = outputContent;
});

document.getElementById('burgerForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  Swal.fire({
    title: "Terima kasih!",
    text: "Pesanan Anda telah diterima!",
    icon: "success"
  });
});


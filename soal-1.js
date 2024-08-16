function hitungBarang(kualitas, quantity) {
  let harga,
    potongan = 0,
    totalHarga;

  if (kualitas === "A") {
    harga = 4550;
    totalHarga = harga * quantity;
    if (quantity > 13) {
      potongan = 231 * quantity;
    }
  } else if (kualitas === "B") {
    harga = 5330;
    totalHarga = harga * quantity;
    if (quantity > 7) {
      potongan = totalHarga * 0.23; // 23%
    }
  } else if (kualitas === "C") {
    harga = 8653;
    totalHarga = harga * quantity;
  } else {
    console.log("Kualitas barang tidak valid");
    return;
  }

  const totalBayar = totalHarga - potongan;

  console.log(`- Total harga barang : ${totalHarga}`);
  console.log(`- Potongan : ${potongan}`);
  console.log(`- Total yang harus dibayar : ${totalBayar}`);
}

// Tester
console.log("Kualitas A");
hitungBarang("A", 14);
console.log("Kualitas B");
hitungBarang("B", 14);
console.log("Kualitas C");
hitungBarang("C", 14);

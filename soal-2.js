// Array awal
let arr = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21];

// Algoritma pengurutan (Bubble Sort)
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Menukar posisi elemen
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// Cetak hasil pengurutan
console.log("Array yang sudah diurutkan:", arr);
let konfirmasi  = false;

do{
    let namaUser = prompt('Masukkan Nama User');
    let asalNegara = prompt('Masukkan Asal Negara');
    konfirmasi = confirm('apakah data yang di isi sudah benar?');
} while (konfirmasi===false)
console.log(namaUser);
console.log(asalNegara);
alert('terima kasih sudah mengisi form');
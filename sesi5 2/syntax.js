let konfirmasi  = false;

do{
    let namaUser = prompt('Masukkan Nama User');
    let asalNegara = prompt('Masukkan Asal Negara');
    konfirmasi = confirm('apakah data yang di isi sudah benar?');
} while (konfirmasi===false)

alert('terima kasih sudah mengisi form');
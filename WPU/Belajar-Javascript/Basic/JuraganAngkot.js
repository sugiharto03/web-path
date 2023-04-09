var penumpang = ['Sugiharto','Sandhika','Fandi'];
var TambahPenumpang = function(NamaPenumpang, penumpang){
    //jika angkot kosong
    if(penumpang.length == 0){    
        //tambah satu penumpang
        penumpang.push(NamaPenumpang);
        //kembalikan  isi array dan keluarkan dari function. ini bisa dibilang output kan nilai penumpang sih dan sekaligus keluar dari program
        return penumpang;
    }else{
        //telusuri  seluruh kursi dari awal (kalau penumpang udah pernah di tambahkan sebelumnya)
        for(var i = 0; i < penumpang.length; i++){
                //jika ada kuris kosong
                if(penumpang[i] == undefined){
                    //tambah penumpang di kursi tersebut
                    penumpang[i] = NamaPenumpang;
                    //kembalikan  isi array dan keluarkan dari function
                    return penumpang;
                }
                //jika sudah ada nama yang sama
                else if(penumpang[i] == NamaPenumpang){
                    //tampilkan  pesan kesalahannya
                    console.log('Nama yang kamu masukkan sudah pernah ditambahkan');
                    //kembalikan  isi array dan keluarkan dari function
                    return penumpang;
                }
                 //jika seluruh kursi terisi
                else if(i == penumpang.length){
                    //tambah penumpang di akhir array
                    penumpang[i].push(NamaPenumpang);
                    //kembalikan  isi array dan keluarkan dari function
                    return penumpang;
                }
        }
    }
}
var HapusPenumpang = function(NamaPenumpang, penumpang){
    //jika angkot kosong
    if(penumpang.length == 0){
        //tampilkan pesan kesalahan
        console.log('Angkot sudah kosong');
    }else{
        //jika nama penumpang sesuai (ada dan bisa dihapus)
        //telusuri semua array-nya
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == NamaPenumpang){
                // delete penumpang[i]; sebenarnya bisa pake ini, tapi function di atas udah pake kondisi undifined untuk jalan
                penumpang[i] = undefined;
                return penumpang;
            }else if(i != penumpang.length - 1){
                console.log('Nama Penumpang tidak ada');
            }
        }
    }
    


}
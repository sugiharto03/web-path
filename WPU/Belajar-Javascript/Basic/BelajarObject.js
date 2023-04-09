//membuat object
//intinya objek itu tempat menampung berbagai jenis struktur data, mulai dari variabel, array, function dll
var mhs = {
    nama: "Sandhika",
    umur: 20,
    jurusan: "Sistem Informasi",
    ipk: [3.00, 4.00, 7.89, 2.89],
};

//ada banyak cara untuk membuat object
//salah satunya adalah obeject literal yang udah dibuat di atas, dikembangkan cara baru lagi karena itu nggak efektif kalau mau buat banyak value properti

//Function Declaration
function BuatObject (nama, umur, jurusan){
    //deklarasikan objek kosong
    var BJC = {}; 
    BJC.nama = nama;
    BJC.umur = umur;
    BJC.jurusan = jurusan;
    return BJC;
}

//cara pakai
var mhs4 = BuatObject("Sugiharto", 20, "Sistem Informasi");
var mhs5 = BuatObject("Gideon", 20, "Sistem Informasi");
var mhs5 = BuatObject("Aldi", 20, "Sistem Informasi");

//Constractor (function khusus untuk buat object)
function ConsObject (nama, umur, jurusan){
    this.nama = nama;
    this.umur = umur;
    this.jurusan = jurusan;
}

//cara pakai
var mhs6 = new ConsObject("Shintia", 20, "Sistem Informasi")
var mhs7 = new ConsObject("Chamber", 20, "Sistem Informasi")
var mhs8 = new ConsObject("Victor", 20, "Sistem Informasi")


//penggunaan this
function Case(nama, umur, hari){
    var anggota = {};
    anggota.nama = nama;
    anggota.umur = umur;
    anggota.hari = hari;

    //deklarasi method baru buat function
    anggota.hitungumur = function (jam){
        this.umur += jam;
        console.log('jumlah umur kamu untuk hari ini adalah' +  umur);
    }

    anggota.hitungtenaga = function(energi){
        this.hari += energi
        console.log('jumlah energi kamu setelah aktivitas adalah' +  umur);
    }

    return anggota;
}

//panggil
let main = Case('juragan', 20, 4);

//OBJECT.CREATE
//kita buat object-nya di dalam obeject lagi biar rapi
const hitungan = {
    tenaga: function(energi){
        this.hari += energi
        console.log('jumlah energi kamu setelah aktivitas adalah' +  umur);
    },

    usia: function (jam){
        this.umur += jam;
        console.log('jumlah umur kamu untuk hari ini adalah' +  umur);
    }
};

//CARA#1
function Coba1(nama, umur, hari){
    var anggota = {};
    anggota.nama = nama;
    anggota.umur = umur;
    anggota.hari = hari;

    //tinggal panggil di sini
    anggota.usia = hitungan.usia;
    anggota.tenaga = hitungan.tenaga;
    return anggota;
}

//CARA#2
function Coba2(nama, umur, hari){
    //lebih simple
    var anggota = Object.create(hitungan);
    anggota.nama = nama;
    anggota.umur = umur;
    anggota.hari = hari;   
    return anggota;
}

let cara1 = Coba1('Roronoa Zoro', 25, 12);
let cara2 = Coba2('Monkey D Luffy', 45, 13);

/* Perbedaan Object, Function dll
 * OBJECT harus pakai "="
 * Function atau method, langsung pake kurawal
 */


//kita kembali ke OOP C#
class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    //buat method isi parameter
    makan (porsi){
        this.energi += porsi;
        return 'ini adalah jumlah porsi kamu' + this.energi;
    }
    
    main (jam){
        this.energi += jam;
        return 'ini adalah jumlah porsi kamu' + this.energi;
    }
    
    tidur (jam){
        this.energi += jam;
        return 'ini adalah jumlah porsi kamu' + this.energi;
    }
}

//panggil
let kita = new Mahasiswa('Gibran', 20);


// Perbedaan function dan function expression adalah, kalo pake function, program akan duluan melakukan hoisting. kalo expression akan dilakukan debug sesuai baris

//Arrow Function
//kalo ini cuma untuk mempersingkat penulisan sintaks aja.

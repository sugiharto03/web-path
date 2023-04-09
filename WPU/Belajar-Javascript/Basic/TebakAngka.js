let Validasi;

function rannum(){
    var tebakan = Math.floor(Math.random() * 10) + 1;
}

function confirm(){
    confirm('Main lagi?')

    if(confirm == true){
        Validasi = 2;
    }else{
        alert('terimakasih telah bermain');
    }
}

function validation(){
    
}

while(2){
    var kesempatan = 4;
    var tebak = prompt('Pilih angka dari 1-10 \nAnda hanya memiliki 3 kesempatan');

    //validasi
    var hasil = '';
    
    if(tebak > tebakan){
        hasil = 'Tebakanmu terlalu besar';
        Validasi = 2;
    }else if(tebak < tebakan){
        hasil = 'Tebakanmu terlalu kecil';
        Validasi= 2;
    }else{
        hasil = 'Kamu benar, komputer memilih angka =' + tebakan + '\nkamu memilih =' + tebak;
        Validasi = 1;
    }
    alert (hasil);
}



//belajar function pemula
var LuasA = parseInt(prompt('Masukkan nilai luas sisi a')); 
var LuasB = parseInt(prompt('Masukkan nilai luas sisi b')); 
Luas(LuasA,LuasB);

function Luas(a, b){
    let VolA,VolB, Total;
    
    VolA = Math.pow(a,3);
    VolB = Math.pow(b,3);

    Total = VolA + VolB;

    return Total;
}w

alert(Luas(LuasA,LuasB));


//refactoring
/* untuk ningkatin performance
 * baca code jadi lebih enak
 * mengurangi duplikasi variabel
 */

var LuasA = parseInt(prompt('Masukkan nilai luas sisi a')); 
var LuasB = parseInt(prompt('Masukkan nilai luas sisi b')); 
Luas(LuasA,LuasB);

function Luas(a, b){

    let Total = Math.pow(a,3) + Math.pow(b,3);
    return Total;
}

alert(Luas(LuasA,LuasB));

//bisa juga lebih singkat
var LuasA = parseInt(prompt('Masukkan nilai luas sisi a')); 
var LuasB = parseInt(prompt('Masukkan nilai luas sisi b')); 
Luas(LuasA,LuasB);

function Luas(a, b){

    return Math.pow(a,3) + Math.pow(b,3);
}
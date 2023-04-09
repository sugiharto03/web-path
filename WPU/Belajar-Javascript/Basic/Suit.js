//menampilkan keterangan games
var p = prompt("Gajah, Semut, Orang");


// menentukan pilihan komputer
var comp = Math.floor(Math.random()*4);

if(comp == 1){
    comp = "Gajah";
}else if(comp == 2){
    comp = "Semut";
}else{
    comp = "Orang";
}

//menentukan rules
var hasil = '';
if(p == comp){
    hasil = "SERI";
}else if(p == "Gajah"){
    hasil = (comp == "Orang") ? "MENANG!" : "KALAH!";
}else if( comp == "Orang"){
    hasil = (comp == "Gajah") ? "KALAH!" : "MENANG!";
}else if(comp == "Semut"){
    hasil(comp == "Orang") ? "KALAH!" : "MENANG!";
}else{
    hasil = "Inputan salah";
}


//Tampilkan hasil
alert("Komputer memilih " + comp + " dan kamu memilih " + p + " maka hasilnya adalah kamu " + hasil);




//saat menekan element "paragraf 3"akan berubah warna
const gantiWarna = document.querySelector('.p2');

gantiWarna.addEventListener('click',function(){
    let agree = confirm('Apakah kamu berniat menekan tombol ini?');
    if(agree == true){
        gantiWarna.style.backgroundColor = 'green';
    }else{
        gantiWarna.style.backgroundColor = 'red';
    }
});

//event listener untuk menambahkan item pada list
var i= 1;
const tambahList = document.querySelector('section#b p');

while(i <= 10){
    tambahList.addEventListener('click', function(){
        //tentukan parent-nya
        const cari_li = document.querySelector('section#b ul');
            
        //buat elemen baru dan isikan teks-nya
        const buat_liBaru = document.createElement('li');
        const tambah_Teks = document.createTextNode('item ' + i++);

        buat_liBaru.appendChild(tambah_Teks);
        cari_li.appendChild(buat_liBaru);   
    });
}

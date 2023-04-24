//fungsi pilihan komputer
//return biar langsung hasil
function getPilihanComputer(){
    const comp = Math.random();
    if(comp < 0.34) return "Gajah";
    if(comp >=0.34 && comp < 0.67) return "Orang";
    return "Semut";
}

//fungsi pilihan user
function getHasil(comp, player){
    if(player == comp) return "SERI!";
    if(player == "Gajah") return (comp == "Orang") ? "MENANG!" : "KALAH!";
    if(player == "Orang") return (comp == "Gajah") ? "KALAH!" : "MENANG!";
    if(player == "Semut") return (comp == "Orang") ? "KALAH!" : "MENANG!";
}

// //VERSI 1
// //proses permainan.
// //panggil event.
// //pilihan user pake "classname" karena udah sama dengan pilihan.
// //Tampilkan gambar sesuai pilihan.
// //tampilan hasil di tengah.
// const plhGajah = document.querySelector('.Gajah');
// plhGajah.addEventListener('click', function(){
//     const plhComputer = getPilihanComputer();
//     const plhPlayer = plhGajah.className;
//     const hasil = getHasil(plhComputer,plhPlayer);
//     console.log(plhComputer);
//     console.log(plhPlayer);
//     console.log(hasil);

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute('src','img/' + plhComputer + '.png');

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });


//Animation Tambahan.
function spin(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['Gajah','Semut','Orang'];
    let indeks = 1;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[indeks++] + '.png');
        if(indeks == gambar.length) indeks = 0;
    }, 1000);
}


//VERSI 2 (Lebih Efektif)
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pilihan){
    pilihan.addEventListener('click', function(){
        const plhComputer = getPilihanComputer();
        const plhPlayer = pilihan.className;
        const hasil = getHasil(plhComputer,plhPlayer);
        console.log(plhComputer);
        console.log(plhPlayer);
        console.log(hasil);

        spin();
        // setTimeout(function(){
            
        // }, 1000);
        const imgComputer = document.querySelector(".img-komputer");
        imgComputer.setAttribute('src','img/' + plhComputer + '.png');

        const info = document.querySelector(".info");
        info.innerHTML = hasil;
    });
});
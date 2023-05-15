const ubahWarna = document.getElementById('ubah');
const warnaLatar = document.querySelector('body');

ubahWarna.addEventListener('click', function(){
    warnaLatar.style.backgroundColor = '#eee';
});

//buat elemen baru
const buatButtonAcak = document.createElement('button');
const txtButtonAcak = document.createTextNode('Acak Warna');
buatButtonAcak.appendChild(txtButtonAcak);
buatButtonAcak.setAttribute('type','button');

//simpan di samping button ubah warna
//pakai yang di atas aja
ubahWarna.after(buatButtonAcak);

//buat fungsinya

buatButtonAcak.addEventListener('click', function(){
    const r = Math.round(Math.random() * 225 + 1);
    const g = Math.round(Math.random() * 225 + 1);
    const b = Math.round(Math.random() * 225 + 1);
    warnaLatar.style.backgroundColor = 'rgba('+ r +','+ g +','+ b +')';
});

//*********************************** */
const slideMerah = document.querySelector('input[name=SliderMerah]')

slideMerah.addEventListener('input', function(){
    const r = slideMerah.value;
    warnaLatar.style.backgroundColor = 'rgba('+ r +',100,100)';
});

const slidehijau = document.querySelector('input[name=SliderHijau]')

slidehijau.addEventListener('input', function(){
    const g = slidehijau.value;
    warnaLatar.style.backgroundColor = 'rgba(100,'+ g +',100)';
});

const slidebiru = document.querySelector('input[name=SliderBiru]')

slidebiru.addEventListener('input', function(){
    const b = slidebiru.value;
    warnaLatar.style.backgroundColor = 'rgba(100,100,'+ b +')';
});

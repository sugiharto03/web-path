const container = document.querySelector('.container');
const gallery = document.querySelector('.main-image');
//Hapus
function hapus(){
    
};

//ambil semua kelas
//thumb itu function
// const gambar = document.querySelectorAll('.thumbs');
// gambar.forEach(thumb => {
//     thumb.addEventListener('click', function(){
//         switch (src) {
//             case "img/1.jpg":
//                 gallery.setAttribute("src", "img/1.jpg");
//                 break;
//             case "img/2.jpg":
//                 gallery.setAttribute("src", "img/2.jpg");
//                 break;
//             case "img/3.jpg":
//                 gallery.setAttribute("src", "img/3.jpg");
//                 break;
//             case "img/4.jpg":
//                 gallery.setAttribute("src", "img/4.jpg");
//                 break;
//             case "img/5.jpg":
//                 gallery.setAttribute("src", "img/5.jpg");
//                 break;
//             case "img/6.jpg":
//                 gallery.setAttribute("src", "img/6.jpg");
//                 break;
//             default:
//                 break;
//         }
//     });
// });

// cara lain
container.addEventListener('click', function(e){
    if(e.target.className == 'thumbs'){
        gallery.src = e.target.src;
        gallery.classList.add('fade');
        setTimeout(function(){
            gallery.classList.remove('fade');
        }, 100);
    }
});
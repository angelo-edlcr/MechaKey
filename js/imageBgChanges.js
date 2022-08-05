
let topContainer = document.getElementById("topContainer");

var bgImg1 = "url('https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/03/teclado-mecanico-mac-drevo-calibur-v2-1880875.jpg?itok=gyX3Df86')";

var bgImg2 = "url('https://eloutput.com/app/uploads-eloutput.com/2022/02/teclados-mecanicos-baratos.jpg')";

var bgImg3 = "url('https://www.destreaming.es/wp-content/uploads/2022/03/mejores-teclados-mecanicos-75-prueba.jpg')";

var bgImg4 = "url('https://www.adslzone.net/app/uploads-adslzone.net/2021/08/teclados-mecanicos.jpg')";

var bgImg = bgImg2;
setInterval(() => {
    topContainer.style.backgroundImage = bgImg;

    if (bgImg == bgImg1) {
        bgImg = bgImg2;
    } else if (bgImg ==bgImg2) {
        bgImg = bgImg3;
    } else if (bgImg == bgImg3) {
        bgImg = bgImg4;
    } else if (bgImg == bgImg4) {
        bgImg = bgImg1;
    }
}, 4000);
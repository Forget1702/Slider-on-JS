let images = [
    {
        url: "https://s3-alpha-sig.figma.com/img/84d2/4980/7f2a0f3b4ed9cd6671fa4e811b625992?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DLlBCegBEAKHy6zdqBj5z8dbwHP5qClqhkndIg0YdFkvCu8T-WcaqAqSHMBsCa-zMn2XolfR0lJEwoYknjzdgSEFkc9AGcd419iB-g6pdhqkqkiWS0g0cS5mXY5fcV71kYDc7Ivd1KT9oJ5KTDdNguKscSLm1gHmJzsN9PIdrJ23JoEU~vxq4pK0fOGGul2u53dOhp5oBsIQmhlwKeZmijDsJAsCaWgNLKjpTZ1pzswe5-R1s6kWymy0dhh47wQOwruhleZvNGn8dL2Y7SFtTRjeCmfw9noh0lO8Xm9ViQtdY6RAd~Bbkl414jBbGeO52ZXX5XtyZjFH0laGKszEdg__",
        city: "Rostov-on-Don LCD admiral",
        apartment: "81 m2",
        time: "3.5 months"
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/2b61/d91d/0d504ae5ddf821a6b6600ee9bd6d98fa?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SD28vyEEUYxnKvhHPm7pOLw4li0rnCI541zNtFuGfqZ~MF-7LMjWMuUQeIrljvzJr48oMp~eYWXiFujAadnFajjjdiKuYITPAJVwC1yL4xkjeRTx8ALg2RNpPWs73ta0dxrsQNEVSXPCv-27Gtli96GJUzAplpoB1iUa2u1~AqbuMiSi8UwrQFy7bi0qBkhxThWEicaV6AoCZZmRaQ-dzPn40ufY3VxTFvgzJbPYcEc6~ds~7ZkGnyMXKx8THNOGRJr8IgXrAenckdpOBxXpgqpK0LejyHOvh5MR4ZHS5Zl9MT~c5OfekjTOf8wDrhO9uRvyENCFsUH4~9UpDD9atQ__",
        city: "Sochi \n Thieves",
        apartment: "105 m2",
        time: "4 months"
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/2882/358d/e0332eab0ee26bbd0cebfe5592a469dc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ucpQ7sw~1y1BTOv1ySRiEN06YhSULk5tEE1gvFD7UWVrm~bKYeUjgGaPBZmTBevn1H-yYZiCzN8fSa~m8yr17uneuNTQOW1OELxLvKa84bCHHEch9ekr2VRj0eFDPOA3AXcDHlJ2je4XDezSxjlzka442dhOzItzJLK2Mg7MTE7R6J3IBGAzmGY0Ig82r84t--y0Z2Ei1cbluY-vuzTaMkMn1dhuymCdvKnLMSFZyLSqgmGzPwDxk1c9GsbPMvOcF8D~pufepwHC5kcXSmrsOXy9vHNsEIh6hq1OQdXnTaUiwrMBsf6Zkm2CIQC4s3pkOhHdBhYlALyU9z5D7z4VpA__",
        city: "Rostov-on-Don Patriotic",
        apartment: "93 m2",
        time: "3 months"
    }
];
function initSlider(options) {
    if (!images || !images.length) return;
    options = options || {
        titles: true,
        dots: true,
        nav: true
    };

    let sliderImg = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderNav = document.querySelector(".slider__cities")
    let sliderCity = document.querySelector(".city");
    let sliderApartment = document.querySelector(".apartment");
    let sliderTime = document.querySelector(".time");

    initImg();
    initArrows();
    if (options.dots) {
        initDots();
    }
    if (options.titles) {
        initTitles();
    }
    if (options.nav) {
        initNav();
    }

    function initImg() {
        images.forEach((image,index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image: url(${images[index].url});" data-index="${index}"></div>`;
            sliderImg.innerHTML += imageDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
           arrow.addEventListener("click", function () {
               let curNum = +sliderImg.querySelector(".active").dataset.index;
               let nextNum;
               if (arrow.classList.contains("left")) {
                   nextNum = curNum === 0? images.length - 1 : curNum - 1;
               } else {
                   nextNum = curNum === images.length - 1? 0 : curNum + 1;
               }
               moveSlider(nextNum);
           });
        });
    }

    function initDots() {
        images.forEach((image,index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            });
        });
    }

    function initTitles() {
        let titleCity = `<div class="slider__city_1 par">${images[0].city}</div>`;
        let titleApartment = `<div class="slider__apartment par">${images[0].apartment}</div>`;
        let titleTime = `<div class="slider__time par">${images[0].time}</div>`;
        sliderCity.innerHTML += titleCity;
        sliderApartment.innerHTML += titleApartment;
        sliderTime.innerHTML += titleTime;
    }

    function initNav() {
        images.forEach((image,index) => {
            let nav
            switch (index) {
                case 0: nav = `<button class="slider__city text-city n${index} active" data-index="${index}">Rostov-on-Don, Admiral</button>`; break;
                case 1: nav = `<button class="slider__city text-city n${index}" data-index="${index}">Sochi Thieves</button>`; break;
                case 2: nav = `<button class="slider__city text-city n${index}" data-index="${index}">Rostov-on-Don Patriotic</button>`; break;
            }
            sliderNav.innerHTML += nav;
        });
        sliderNav.querySelectorAll(".slider__city").forEach(nav => {
            nav.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            });
        });
    }

    function moveSlider(num) {
        sliderImg.querySelector(".active").classList.remove("active");
        sliderImg.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderNav.querySelector(".active").classList.remove("active");
        sliderNav.querySelector(".n" + num).classList.add("active");
        changeTitle(num);
    }

    function changeTitle(num) {
        let sliderInfoCity = sliderCity.querySelector(".slider__city_1");
        let sliderInfoApart = sliderApartment.querySelector(".slider__apartment");
        let sliderInfoTime = sliderTime.querySelector(".slider__time");
        sliderInfoCity.innerText = images[num].city;
        sliderInfoApart.innerText = images[num].apartment;
        sliderInfoTime.innerText = images[num].time;
    }
}

let sliderOptions = {
    titles: true,
    dots: true,
    nav: true
}
document.addEventListener("DOMContentLoaded", () => {
    initSlider(sliderOptions);
});
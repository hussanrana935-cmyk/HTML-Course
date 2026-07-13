const images = [
    "images/background.jpeg",
    "images/mosque.jpeg",
    "images/quran.jpg",
    "images/dua.jpg"
];

let current = 0;

const slider = document.getElementById("slider");

function showImage() {
    slider.src = images[current];
}

function nextImage() {
    current++;

    if (current >= images.length) {
        current = 0;
    }

    showImage();
}

function previousImage() {
    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    showImage();
}

// ہر 3 سیکنڈ بعد تصویر بدلے گی
setInterval(nextImage, 3000); 

function darkMode() {
    document.body.classList.toggle("dark");
}

function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

function updateDate() {

    const today = new Date();

    document.getElementById("date").innerHTML =
        today.toDateString();

}

setInterval(updateDate,1000);

updateDate();

let count = 0;

function increase(){

    count++;

    document.getElementById("count").innerHTML = count;

}

function resetCount(){

    count = 0;

    document.getElementById("count").innerHTML = count;

}
fetch("https://api.aladhan.com/v1/timingsByCity?city=Lahore&country=Pakistan&method=2")
.then(response => response.json())
.then(data => {

    const timings = data.data.timings;

    document.getElementById("prayer-times").innerHTML = `
        <p>🌅 فجر: ${timings.Fajr}</p>
        <p>☀️ ظہر: ${timings.Dhuhr}</p>
        <p>🌇 عصر: ${timings.Asr}</p>
        <p>🌆 مغرب: ${timings.Maghrib}</p>
        <p>🌙 عشاء: ${timings.Isha}</p>
    `;

});

// ===== Back To Top Button =====

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const ayat = [

"إِنَّ مَعَ الْعُسْرِ يُسْرًا (بیشک ہر مشکل کے ساتھ آسانی ہے) — سورۃ الشرح 94:6",

"وَاللَّهُ خَيْرُ الرَّازِقِينَ (اور اللہ سب سے بہتر رزق دینے والا ہے) — سورۃ الجمعہ 62:11",

"فَاذْكُرُونِي أَذْكُرْكُمْ (تم میرا ذکر کرو، میں تمہارا ذکر کروں گا) — سورۃ البقرہ 2:152",

"إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (بیشک اللہ صبر کرنے والوں کے ساتھ ہے) — سورۃ البقرہ 2:153"

];

let randomAyah = Math.floor(Math.random() * ayat.length);

document.getElementById("ayah-box").innerHTML = ayat[randomAyah];
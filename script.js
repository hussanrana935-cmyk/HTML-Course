/* =========================
   IMAGE SLIDER
========================= */

const images = [
    "images/background.jpeg",
    "images/mosque.jpeg",
    "images/quran.jpg",
    "images/dua.jpg"
];

let current = 0;

const slider = document.getElementById("slider");

function showImage() {
    if (slider) {
        slider.src = images[current];
    }
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

if (slider) {
    setInterval(nextImage, 3000);
}

/* =========================
   DARK MODE
========================= */

function darkMode() {

    document.body.classList.toggle("dark");

}

/* =========================
   LIVE CLOCK
========================= */

function updateClock() {

    const now = new Date();

    const clock = document.getElementById("clock");

    if (clock) {
        clock.innerHTML = now.toLocaleTimeString("ur-PK");
    }

}

setInterval(updateClock, 1000);

updateClock();

/* =========================
   LIVE DATE
========================= */

function updateDate() {

    const today = new Date();

    const date = document.getElementById("date");

    if (date) {
        date.innerHTML = today.toLocaleDateString("ur-PK", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

}

updateDate();

/* =========================
   TASBEEH COUNTER
========================= */

let count = 0;

const countDisplay = document.getElementById("count");

function increase() {

    count++;

    if (countDisplay) {
        countDisplay.innerHTML = count;
    }

}

function resetCount() {

    count = 0;

    if (countDisplay) {
        countDisplay.innerHTML = count;
    }

}

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

function topFunction() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

/* =========================
   SMOOTH LINKS
========================= */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* =========================
   PRAYER TIMES API
========================= */

fetch("https://api.aladhan.com/v1/timingsByCity?city=Lahore&country=Pakistan&method=2")
.then(response => response.json())
.then(data => {

    const timings = data.data.timings;

    const prayerBox = document.getElementById("prayer-times");

    if(prayerBox){

        prayerBox.innerHTML = `

        <p>🌅 فجر : ${timings.Fajr}</p>

        <p>☀️ ظہر : ${timings.Dhuhr}</p>

        <p>🌇 عصر : ${timings.Asr}</p>

        <p>🌆 مغرب : ${timings.Maghrib}</p>

        <p>🌙 عشاء : ${timings.Isha}</p>

        `;

    }

})

.catch(() => {

    document.getElementById("prayer-times").innerHTML =
    "نماز کے اوقات لوڈ نہیں ہو سکے۔";

});


/* =========================
   DAILY QURAN AYAH
========================= */

fetch(https://api.alquran.cloud/v1/ayah/262/ar.alafasy

.then(response => response.json())

.then(data => {

    const ayah = document.getElementById("ayah-box");

    if(ayah){

        ayah.innerHTML = `

        <h3>📖 قرآن مجید</h3>

        <p>${data.data.text}</p>

        <br>

        <strong>سورۃ نمبر ${data.data.surah.number}</strong>

        `;

    }

})

.catch(() => {

    document.getElementById("ayah-box").innerHTML =
    "آیت لوڈ نہیں ہو سکی۔";

});

/* =========================
   SAVE DARK MODE
========================= */

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

}

function darkMode(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

}

/* =========================
   SAVE TASBEEH COUNT
========================= */

let savedCount = localStorage.getItem("tasbeehCount");

if(savedCount !== null){

    count = parseInt(savedCount);

    document.getElementById("count").innerHTML = count;

}

function increase(){

    count++;

    document.getElementById("count").innerHTML = count;

    localStorage.setItem("tasbeehCount",count);

}

function resetCount(){

    count = 0;

    document.getElementById("count").innerHTML = count;

    localStorage.setItem("tasbeehCount",count);

}

/* =========================
   LOADING EFFECT
========================= */

window.addEventListener("load",function(){

    document.body.style.opacity="1";

});

/* =========================
   FADE EFFECT
========================= */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="1s";

observer.observe(section);

});

/* =========================
   COPYRIGHT YEAR
========================= */

document.querySelector("footer").innerHTML =
`© ${new Date().getFullYear()} Islamic Website | All Rights Reserved`;
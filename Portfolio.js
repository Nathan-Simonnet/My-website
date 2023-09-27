let lang = "fr";
let devWebForArray = "";

const header = document.querySelector('header');
const aHovered = document.querySelectorAll('nav li a');
const lineSpan = document.querySelectorAll('.after');
const flags = document.querySelectorAll('.flag-container');
const mailSpan = document.getElementById('mail-span');
const figureImg = document.querySelectorAll('figure>img');
const technosDiv = document.querySelectorAll('.techno-div');
const devWebP = document.getElementById('dev-web-p');

const createSpan = function (content) {
    const letter = document.createElement("span");
    devWebP.appendChild(letter);
    letter.textContent = content
}

let letterIndex = 0;
let stopIt = false;
const letterMaker = function () {

    if (lang == "fr") {
        devWebForArray = "Développeur web";
    } else {
        devWebForArray = "Web developer";
    }

    arrayLangSplited = [...devWebForArray]

    setTimeout(() => {
        createSpan(arrayLangSplited[letterIndex])
        letterIndex++;
        if (letterIndex == arrayLangSplited.length || stopIt) {
            return
        } else {
            letterMaker();
        }
    }, 120);
}

setTimeout(() => {
    letterMaker();
}, 1000);


lineSpan.forEach((span, index) => {
    const uniqueIndex = "lineSpan" + (index + 1)
    span.setAttribute('id', uniqueIndex)
    // console.log(span, span.id)
});

let technoIndex = 0;
technosDiv.forEach((technos, index) => {
    const uniqueIndex = "techno" + (index + 1)
    technos.setAttribute('id', uniqueIndex)
    technoIndex++;
    // console.log(technos, technos.id)
    // console.log(technoIndex)
});


// ===================
// nav anim 
// ===================

let lastScroll = 0;
window.addEventListener('scroll', (e) => {
    if (scrollY == 0) {
        header.classList.add("scroll-zero");
        header.classList.remove("scrolled-down");
        header.classList.remove("scrolled-up");
        aHovered.forEach((a) => {
            a.classList.remove("scrolled-up")
        });
    }

    else if (lastScroll >= scrollY) {
        header.classList.add("scrolled-up")
        header.classList.remove("scrolled-down")
        header.classList.remove("scroll-zero")

    } else {
        header.classList.add("scrolled-down")
        header.classList.remove("scrolled-up")
        header.classList.remove("scroll-zero")
        aHovered.forEach((a) => {
            a.classList.add("scrolled-up")
        });
    }

    lastScroll = scrollY
});

// ========================
// h1 anim
// ========================

let playOnce = true;

// const technosFlipper = function (techno) {
//     setTimeout(() => {

//         const randyTheRando = Math.ceil(Math.random() * technoIndex);
//         console.log(randyTheRando)
//         const temp = document.getElementById('techno' + randyTheRando);
//         temp.classList.add("scrolledTransition");

//         setTimeout(() => {
//             temp.classList.remove("scrolledTransition");
//             technosFlipper();
//         }, 3000)
//     }, 3000)
// }
// technosFlipper();

const technosAnimation = function (e) {

    let arrayTechnos = [];

    const technosShuffler = function () {

        for (let i = 1; i < technoIndex + 1; i++) {
            arrayTechnos.push(i);
        }
        // console.log(arrayTechnos)
        for (let i = 0; i < 100; i++) {
            const randyTheRando2 = Math.floor(Math.random() * technoIndex);
            const randyTheRando3 = Math.floor(Math.random() * technoIndex);
            [arrayTechnos[randyTheRando2], arrayTechnos[randyTheRando3]] = [arrayTechnos[randyTheRando3], arrayTechnos[randyTheRando2]];
        }
        // console.log(arrayTechnos)
    }

    technosShuffler();

    let arrayIndex = 0;
    const technosFlipper = function (techno) {

        setTimeout(() => {
            const temp = document.getElementById('techno' + arrayTechnos[arrayIndex]);
            temp.classList.add("scrolledTransition");

            setTimeout(() => {
                temp.classList.remove("scrolledTransition");
                arrayIndex++;

                if (arrayIndex == arrayTechnos.length) {
                    arrayIndex = 0
                }
                technosFlipper();
            }, 3000)
        }, 1000)

    }
    technosFlipper();
}

technosAnimation();

window.addEventListener('scroll', (e) => {

    let magicScrollValue = ((window.scrollY + innerHeight) / document.body.offsetHeight);
    // console.log(magicScrollValue)

    const pointer = function (index) {
        const pointed = document.getElementById('lineSpan' + index);
        pointed.style.animation = "h1AfterAnimation 2s ease-out 0.3s forwards"
    }

    if (magicScrollValue > 0.10 && playOnce) {

        if (playOnce) {
            let index = 1;
            figureImg.forEach((img) => {
                img.style.transition = index + "s"
                index += 0.2;
                img.classList.add('scrolledTransition')
                // console.log(img)
                playOnce = false;
            });
        }
    }

    if (magicScrollValue > 0.90) {
        pointer(4);
    } else if (magicScrollValue > 0.70) {
        pointer(3);
    } else if (magicScrollValue > 0.50) {
        pointer(2);
    } else if (magicScrollValue > 0.10) {
        pointer(1);
    }
});

// ========================
// Translation 
// ========================

const translatePage = function (id) {
    const projectAnchor = document.getElementById('project-anchor');
    const technosAnchor = document.getElementById('technos-anchor');
    const aboutMeAnchor = document.getElementById('about-me-anchor');
    const contactAnchor = document.getElementById('contact-anchor');
    const devWeb = document.getElementById('dev-web-p');
    const contactSpan = document.getElementById('contact-span');
    const projectsH1 = document.getElementById('projects-h1');
    const portefolioCaption = document.getElementById('portfolio-caption');
    const dbCaption = document.getElementById('db-caption');
    const yogaCaption = document.getElementById('yoga-caption');
    const passwordCaption = document.getElementById('password-caption');
    const mealCaption = document.getElementById('meal-caption');
    const quizzCaption = document.getElementById('quizz-caption')
    const textAnimCaption = document.getElementById('text-animation-caption')
    const technosH1 = document.getElementById('technos-h1');
    const aboutmeH1 = document.getElementById('about-me-h1');
    const profilP1 = document.getElementById('profil-p1');
    const profilP2 = document.getElementById('profil-p2');
    const profilP3 = document.getElementById('profil-p3');
    const profilP4 = document.getElementById('profil-p4');
    const CVSpan = document.getElementById('CV-span');
    const contactH1 = document.getElementById('contact-h1');

    if (id == "fra") {
        lang = "fr";
        projectAnchor.textContent = "Projets"
        technosAnchor.textContent = "Technos"
        aboutMeAnchor.textContent = "À propos de moi"
        contactAnchor.textContent = "Contact"
        setTimeout(() => {
            devWeb.textContent = ""
            letterIndex = 0;
            letterMaker();
        }, 200)
        contactSpan.textContent = "Me contacter"

        projectsH1.textContent = `My projects`
        portefolioCaption.textContent = "Portfolio fait avec amour"
        dbCaption.textContent = "Affichage d'une database d'utilisateurs"
        yogaCaption.textContent = "Yoga routine"
        passwordCaption.textContent = "Générateur de mot de passe"
        mealCaption.textContent = "Générateur de recettes"
        quizzCaption.textContent = "Quizz"
        textAnimCaption.textContent = "Animation de texte"
        technosH1.textContent = `Mes technos`
        aboutmeH1.textContent = `A propos de moi`
        profilP1.textContent = "Ancien maître nageur, je m'exerce à la programmation depuis 2021"
        profilP2.textContent = "HTML/CSS, puis javascript pour rendre mes pages plus dynamiques, plus récément react pour aller encore plus loin..."
        profilP3.textContent = "Ce qui à commencé comme une occupation, est maintenant devenu une passion, me poussant à me former continuelement"
        profilP4.textContent = "L'objectif maintenant, full stack! A suivre..."
        CVSpan.textContent = "Mon CV"
        contactH1.textContent = `Me contacter`
    } else {
        lang = "en";
        projectAnchor.textContent = "Projects"
        technosAnchor.textContent = "Technos"
        aboutMeAnchor.textContent = "About me"
        contactAnchor.textContent = "Contact"
        setTimeout(() => {

            devWeb.textContent = "";
            letterIndex = 0;
            letterMaker();

        }, 200)
        contactSpan.textContent = "Contact me"

        projectsH1.textContent = `My projects`
        portefolioCaption.textContent = "Portfolio, made with love"
        dbCaption.textContent = "Displaying a user database"
        yogaCaption.textContent = "Yoga routine"
        passwordCaption.textContent = "Password generator"
        mealCaption.textContent = "Recipe generator"
        quizzCaption.textContent = "Quizz app"
        textAnimCaption.textContent = "Text animation"
        technosH1.textContent = `My main techos`
        aboutmeH1.textContent = `About me`
        profilP1.textContent = "Former lifeguard, I have been practicing programming since 2021."
        profilP2.textContent = "HTML/CSS, then javascript to make my pages more responsive and dynamic, more recently react to go even further..."
        profilP3.textContent = "What started as a hobby, has now become a passion, pushing me to continually train myself continuously."
        profilP4.textContent = "The goal now, full stack! To be continued..."
        CVSpan.textContent = "My CV"
        contactH1.textContent = `Contact me`
    }
}

flags.forEach((flag) => {
    flag.addEventListener('click', (e) => {
        stopIt = true;
        setTimeout(() => {
            stopIt = false;
        }, 10)
        if (flag.classList.contains("actual-language")) {
        } else {
            flags.forEach((e) => {
                e.classList.remove("actual-language")
            });
            flag.classList.add("actual-language")
            translatePage(flag.id)
        }
    });
});

// =======================
// Contact me
// =======================

mailSpan.addEventListener('click', (span) => {
    navigator.clipboard.writeText(span.target.textContent)
    if (lang == "fr") {

        span.target.textContent = "copié!"
    } else {
        span.target.textContent = "copy!"
    }
    setTimeout(() => {
        span.target.textContent = "nathan.simonnet@gmail.com"
    }, 2000)
});


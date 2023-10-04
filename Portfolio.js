let lang = "fr";
let devWebForArray = "";

const header = document.querySelector('header');
const aHovered = document.querySelectorAll('nav li a');
const lineSpan = document.querySelectorAll('.after');
const flags = document.querySelectorAll('.flag-container');
const mailSpan = document.getElementById('mail-span');
const projectFigure = document.querySelectorAll('.project-figure');
const projectImg = document.querySelectorAll('.project-img');
const imgTechno = document.querySelectorAll('.img-techno');
const devWebP = document.getElementById('dev-web-p');
const technosContainer = document.getElementById('technos-container');
const technoContainer = document.querySelectorAll('.techno-container');
const technoAndPContainer = document.querySelectorAll('.techno-and-p-container');
const spanInfosTechnos = document.getElementById('span-infos-technos');

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
technoContainer.forEach((technos, index) => {
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
// h1 anim + projet anim
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
        for (let i = 0; i < 100; i++) {
            const randyTheRando2 = Math.floor(Math.random() * technoIndex);
            const randyTheRando3 = Math.floor(Math.random() * technoIndex);
            [arrayTechnos[randyTheRando2], arrayTechnos[randyTheRando3]] = [arrayTechnos[randyTheRando3], arrayTechnos[randyTheRando2]];
        }
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
            projectFigure.forEach((figure) => {
                figure.style.transition = index + "s"
                index += 0.2;
                figure.classList.add('scrolledTransition')
                // console.log(figure)
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
// Projet displayer
// ========================

const projectDisplayer = function (title, img, text) {
    document.body.createElement("span");
}


projectImg.forEach((projet) => {
    projet.addEventListener('click', (event) => {
        event.target.classList.add('clicked')
    });
})

// ========================
// Technos Displayer
// ========================

document.getElementById('technos-section').addEventListener('mouseover', (e) => {
    spanInfosTechnos.classList.add('shiningAnim')
});
document.getElementById('technos-section').addEventListener('mouseout', (e) => {
    spanInfosTechnos.classList.remove('shiningAnim')
});

technoAndPContainer.forEach((techno) => {
    techno.addEventListener('mousedown', (event) => {
        spanInfosTechnos.style.display = "none";
    });
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

        document.querySelector('.chantier>p').textContent = "Plus de fonctionnalités à venir..."

        projectAnchor.textContent = "Projets"
        technosAnchor.textContent = "Technos"
        aboutMeAnchor.textContent = "À propos de moi"
        contactAnchor.textContent = "Contact"
        setTimeout(() => {
            devWeb.textContent = ""
            letterIndex = 0;
            letterMaker();
        }, 200)
        contactSpan.textContent = "Me contacter";

        projectsH1.textContent = `Mes projets`;
        portefolioCaption.textContent = "Portfolio fait avec amour";
        dbCaption.textContent = "Affichage d'une database d'utilisateurs";
        yogaCaption.textContent = "Yoga routine";
        passwordCaption.textContent = "Générateur de mot de passe";
        mealCaption.textContent = "Générateur de recettes";
        quizzCaption.textContent = "Quizz";
        textAnimCaption.textContent = "Animation de texte";
        technosH1.textContent = `Mes technos`;
        spanInfosTechnos.textContent = "Cliquez et maintenez enfoncé pour plus d'informations";

        document.getElementById('p-CSS').innerHTML = `
                    <p>Une pratique régulière de plus de 4h par semaines depuis 2021</p>
                    <p>Et plus de 60h de formations en HTML / CSS via différents médias</p>
                    <p>Cette pratique s'accompagne de tout ce qui gravite autours du design UX / UI, et plus récemment
                        SASS
                    </p>
                    <p>Enfin concernant HTML, l'apprentissage des outils et méthodes de référenceent</p>
        `
        document.getElementById('p-JS').innerHTML = `
        <p>Une pratique régulière de plus de 8h par semaines depuis 2022</p>
                    <p>Plus de 40H de formations, plus des cours d'algorithmie</p>
                    <p>Javascript est mon langage préféré à l'heure actuelle, et utilisé dans tous les projets plus
                        hauts
                    </p>
        `
        document.getElementById('p-REACT').innerHTML = `
        <p>React = the next step!</p>
                    <p>Une première formation d'une dizaine d'heures passé il y a quelques mois, dans l'esprit de
                        vouloir allez encore plus loin</p>
                    <p>Autant que possible, je continuera mon apprentissage avec React, toujours pour la même raison,
                        des projets qui me tiennent à cœur</p>
        `
        document.getElementById('p-TS').innerHTML = `
        <p>J'ai eu l'occasion de pratiquer typescript pendant ma formation "principale" en javascript il y a
                        quelques mois</p>
                    <p>Encore un outil intéressant... Encore une corde à mon arc</p>
                    <p>Des projets sont encore en cours afin de progresser sur son utilisation, restez connectez !</p>
                
        `
        document.getElementById('p-PHP').innerHTML = `
        <p>Plus de 12H de formations à l'heure actuelle depuis 2023</p>
                    <p>Pour commencer à mettre un pied dans le back-end</p>
                    <p>Le chemin sera long, mais il faut ce qu'il faut, et je suis prêt!</p>
        `
        document.getElementById('p-MYSQL').innerHTML = `
        <p>La suite logique de PHP est MySql, et nous y voilà</p>
                    <p>Je suis divers tutoriels en parallèle de PHP, afin d'aller, petit à petit, encore plus loin</p>
                    <p>D'abord, j'ai un désir de comprendre, puis de tester, puis d'optimiser, voilà le tronc commun a
                        tout
                        ces langages</p>
        `

        aboutmeH1.textContent = `A propos de moi`;
        profilP1.textContent = "Ancien maître nageur, je m'exerce à la programmation depuis 2021.";
        profilP2.textContent = "HTML/CSS, puis javascript pour rendre mes pages plus dynamiques, plus récément react pour aller encore plus loin...";
        profilP3.textContent = "Ce qui à commencé comme une occupation, est maintenant devenu une passion, me poussant à me former continuelement.";
        profilP4.textContent = "L'objectif maintenant, full stack! A suivre...";
        CVSpan.textContent = "Mon CV";
        contactH1.textContent = `Me contacter`;
    } else {
        lang = "en";

        document.querySelector('.chantier>p').textContent = "More features to come..."

        projectAnchor.textContent = "Projects"
        technosAnchor.textContent = "Technos"
        aboutMeAnchor.textContent = "About me"
        contactAnchor.textContent = "Contact"
        setTimeout(() => {

            devWeb.textContent = "";
            letterIndex = 0;
            letterMaker();

        }, 200)
        contactSpan.textContent = "Contact me";

        projectsH1.textContent = `My projects`;
        portefolioCaption.textContent = "Portfolio, made with love";
        dbCaption.textContent = "Displaying a user database";
        yogaCaption.textContent = "Yoga routine";
        passwordCaption.textContent = "Password generator";
        mealCaption.textContent = "Recipe generator";
        quizzCaption.textContent = "Quizz app";
        textAnimCaption.textContent = "Text animation";
        technosH1.textContent = `My main techos`;
        spanInfosTechnos.textContent = "Click and hold for more informations";

        document.getElementById('p-CSS').innerHTML = `
        <p>Regular practice of over 4 hours per week since 2021</p>
        <p>Over 60 hours of training in HTML / CSS through various media</p>
        <p>This practice is accompanied by everything related to UX / UI design, and more recently, SASS</p>
        <p>Regarding HTML, learning the tools and methods of SEO </p>
        `
        document.getElementById('p-JS').innerHTML = `
        <p>Regular practice of over 8 hours per week since 2022</p>
<p>Over 40 hours of training, plus algorithmics courses</p>
<p>JavaScript is my current favorite language, and it's used in all the projects mentioned above</p>
        `
        document.getElementById('p-REACT').innerHTML = `
        <p>React = the next step!</p>
<p>A first training of about ten hours completed a few months ago, with the intention of going even further</p>
<p>As much as possible, I will continue my learning journey with React, all for the same reason - projects that are close to my heart</p>
        `
        document.getElementById('p-TS').innerHTML = `
        <p>I had the opportunity to practice TypeScript during my "main" training in JavaScript a few months ago</p>
<p>Yet another interesting tool... Another string to my bow</p>
<p>Projects are still ongoing to improve my usage of it, stay tuned!</p>
        `
        document.getElementById('p-PHP').innerHTML = `
        <p>Over 12 hours of training up to the current time since 2023</p>
        <p>To begin stepping into the back-end</p>
        <p>The journey will be long, but it takes what it takes, and I'm ready!</p>
        `
        document.getElementById('p-MYSQL').innerHTML = `
        <p>The next step after PHP is MySQL, and here we are</p>
        <p>I am exploring various tutorials alongside PHP to gradually delve deeper</p>
        <p>First, there's a desire to understand, then to test, and finally to optimize; that's the common thread among all these languages</p>
        `


        aboutmeH1.textContent = `About me`;
        profilP1.textContent = "Former lifeguard, I have been practicing programming since 2021.";
        profilP2.textContent = "HTML/CSS, then javascript to make my pages more responsive and dynamic, more recently react to go even further...";
        profilP3.textContent = "What started as a hobby, has now become a passion, pushing me to continually train myself continuously.";
        profilP4.textContent = "The goal now, full stack! To be continued...";
        CVSpan.textContent = "My CV";
        contactH1.textContent = `Contact me`;
    }
}

flags.forEach((flag) => {
    flag.addEventListener('click', (e) => {
        stopIt = true;
        spanInfosTechnos.style.display = "block"
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

// class Projects  {
// constructor(){
// this.=;
// }
// }
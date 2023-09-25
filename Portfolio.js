const header = document.querySelector('header');
const theH1 = document.querySelector('h1');
const aHovered = document.querySelectorAll('nav li a');
const lineSpan = document.querySelectorAll('.after');
const flags = document.querySelectorAll('.flag-container');

lineSpan.forEach((span, index) => {
    const uniqueIndex = "lineSpan" + (index + 1)
    span.setAttribute('id', uniqueIndex)
    console.log(span, span.id)
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
        // aHovered.forEach((a) => {
        //     a.classList.remove("scrolled-up")
        //     });
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

window.addEventListener('scroll', (e) => {

    let magicScrollValue = ((window.scrollY + innerHeight) / document.body.offsetHeight);
    // console.log(magicScrollValue)

    const pointer = function (index) {
        const pointed = document.getElementById('lineSpan' + index);
        pointed.style.animation = "h1AfterAnimation 2s ease-out 0.3s forwards"
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

// console.log(
//     // function translatePage(language) {

//     //     const pageContent = document.documentElement.innerHTML;
//     //     const apiKey = 'pdct.1.1.20230918T174040Z.24d6959369025e66.a55620b84404182f5163d04617fd4c7b013fc50b';


//     //     const apiUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${encodeURIComponent(pageContent)}&lang=${language}&format=html`;

//     //     fetch(apiUrl, {
//     //         method: "GET"
//     //     })
//     //         .then(response => response.json())
//     //         .then(data => {
//     //             const translatedContent = data;

//     //             // Mettez à jour le contenu du document HTML avec la traduction
//     //             document.documentElement.innerHTML = translatedContent;
//     //         })
//     //         .catch(error => {
//     //             console.error("Erreur lors de la traduction :", error);
//     //         });
//     // }
//     "hey")

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
        projectAnchor.textContent = "Projets"
        technosAnchor.textContent = "Technos"
        aboutMeAnchor.textContent = "À propos de moi"
        contactAnchor.textContent = "Contact"
        devWeb.textContent = "Developpeur web"
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
        projectAnchor.textContent = "Projects"
        technosAnchor.textContent = "Technos"
        aboutMeAnchor.textContent = "About me"
        contactAnchor.textContent = "Contact"
        devWeb.textContent = "Web developer"
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
let lang = "fr";
let devWebForArray = "";

const header = document.querySelector('header');
const aHovered = document.querySelectorAll('nav li a');
const lineSpan = document.querySelectorAll('.after');
const flags = document.querySelectorAll('.flag-container');
const mailSpan = document.getElementById('mail-span');

const projectFigureAndPContainer = document.querySelectorAll('.project-figure-and-p-container');

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

                setTimeout(() => {
                    projectFigure.forEach((fig) => {
                        fig.style.transition = "none"
                    })

                }, 2400);
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

projectFigureAndPContainer.forEach((projectContainer) => {
    projectContainer.addEventListener('click', () => {
        projectContainer.classList.toggle("project-clicked");

        projectFigureAndPContainer.forEach((otherProjectContainer) => {
            if (otherProjectContainer != projectContainer) {
                otherProjectContainer.classList.toggle('other-projects')
            }
        });

        projectContainer.scrollIntoView();
    });
});

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
    techno.addEventListener('click', () => {
        // technoAndPContainer.forEach((tech) => {
        //     tech.style.transition = "none"
        // })
        document.getElementById('span-infos-technos').style.display = "none";
        techno.classList.toggle("techno-clicked");
        technosContainer.classList.toggle("techno-clicked");
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
    const bubbleCaption = document.getElementById('bubble-caption');
    const dbCaption = document.getElementById('db-caption');
    const yogaCaption = document.getElementById('yoga-caption');
    const passwordCaption = document.getElementById('password-caption');
    const mealCaption = document.getElementById('meal-caption');
    const quizzCaption = document.getElementById('quizz-caption')
    const formCaption = document.getElementById('form-caption');
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
        document.getElementById('portfolio-p-container').innerHTML = `
        <p>Fait de A à Z par mes soins</p>
                    <p>Ce portfolio n'en reste pas moins un projet qui me tient à cœur, et une des vitrines de mes
                        compétences de front</p>
                    <p>Les images ont toutes étaient compressés, un sitemap mise en place, validé par W3C... bref,
                        je
                        n'ai rien laissé au hasard</p>
                    <p>Mais je reste ouvert à tout retours</p>
        `;
        bubbleCaption.textContent = "Bubble popper";
        document.getElementById('bubble-p-container').innerHTML = `
        <p>Un de mes tout premier projets, tout est dans le titre</p>
                    <p>Élaboré en collaboration avec ma jeune sœur de 9 ans (attention, toutes critique négatives
                        est
                        donc à vos risques et périls !)</p>
                    <p>Ce mini jeu a été créé entièrement en CSS/JS</p>
                    <p>Gestion du DOM, timer, animations aléatoires, effets de particules... Pourquoi ne pas essayer
                        ?
                    </p>
                    <p><a href="https://nathan-simonnet.github.io/" target="_blank" id="bubble-popper-link">Cliquez
                            ici pour tester</a></p>
        `;
        dbCaption.textContent = "Affichage d'une database d'utilisateurs";
        document.getElementById('db-p-container').innerHTML = `
        <p>Utilisation d'une API pour générer l'affichage d'une base de données d'utilisateurs fictifs
                    </p>
                    <p>Le résultat (bientôt en ligne) étant plusieurs cartes affiché de manière responsive</p>
                    <p>Également la possibilité de trier et filtrer les utilisateurs par nom, âge et statut</p>
        `;
        yogaCaption.textContent = "Yoga routine";
        document.getElementById('yoga-p-container').innerHTML = `
        <p>Un de mes projets préféré en POO</p>
                    <p>Bientôt disponible en ligne, cette application permet de choisir différentes postures et
                        différents temps d'execution</p>
                    <p>Un fois la routine lancé, une nouvelle page apparait faisant défiler les images selon le
                        temps
                        désiré</p>
                    <p>Et pour finir, un ecran de fin avec la possibilité de recommencer</p>
        `;
        passwordCaption.textContent = "Générateur de mot de passe";
        document.getElementById('password-p-container').innerHTML = `
                    <p>Permet de générer un mot de passe selon différents critères</p>
                    <p>La taille, et la contenance (minuscules, majuscules, nombre et ou symboles)</p>
                    <p>Bonus: Le mot de passe est copié dans le presse papier en un clique</p>
        `;
        mealCaption.textContent = "Générateur de recettes";
        document.getElementById('meal-p-container').innerHTML = `
        <p>Utilisant l'API de TheMealDB, affichage de recettes selon les ingrédients désiré</p>
        <p>Affichés en plusieurs cartes, ordonnées et "responsive"</p>
        `;
        quizzCaption.textContent = "Quizz";
        document.getElementById('quizz-p-container').innerHTML = `
        <p>Quizz sur Javascript affiché grâce à la POO</p>
                    <p>Il suffira de modifier un fichier Json, afin de modifier ou rajouter des questions/réponses
                    </p>
                    <p>Bientôt uploadé sur Github</p>
        `;
        formCaption.textContent = "Form checking";
        document.getElementById('form-p-container').innerHTML = `
        <p>Un formulaire assez classique, exigeant certain paramètres avant validation</p>
                    <p>Si tout est validé, les données sont envoyées via une simulation de méthode POST, puis
                        aussitôt
                        supprimées</p>
                    <p>Fonctions, regexp, et quelques animations afin d'évaluer rapidement la "solidité" du mot de
                        passe</p>
        `;

        technosH1.textContent = `Mes technos`;
        spanInfosTechnos.textContent = "Cliquez pour plus d'informations";

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
        document.getElementById('portfolio-p-container').innerHTML = `
        <p>Created from scratch by myself</p>
<p>Nonetheless, this portfolio remains a project that is close to my heart and one of the showcases of my front-end skills</p>
<p>All the images have been compressed, a sitemap has been set up, validated by W3C... in short, I have left nothing to chance</p>
<p>But I am open to any feedback</p>
        `;
        bubbleCaption.textContent = "Bubble popper";

        document.getElementById('bubble-p-container').innerHTML = `
        <p>One of my very first projects, it's all in the title</p>
<p>Developed in collaboration with my 9-year-old sister (please note, any negative criticism is therefore at your own risk!)</p>
<p>This mini-game was created entirely in CSS/JS</p>
<p>DOM manipulation, timer, random animations, particle effects... Why not give it a try?</p>
<p><a href="https://nathan-simonnet.github.io/" target="_blank" id="bubble-popper-link">Click here to try it out</a></p>
        `
        dbCaption.textContent = "Displaying a user database";
        document.getElementById('db-p-container').innerHTML = `
        <p>Using an API to generate the display of a fictional user database</p>
<p>The result (coming online soon) being multiple cards displayed in a responsive manner</p>
<p>Also, the ability to sort and filter users by name, age, and status</p>
        `
        yogaCaption.textContent = "Yoga routine";
        document.getElementById('yoga-p-container').innerHTML = `
        <p>One of my favorite OOP projects</p>
<p>Coming online soon, this application allows you to choose different poses and execution times</p>
<p>Once the routine is started, a new page appears, scrolling through the images according to the desired time</p>
<p>And finally, an end screen with the option to start over</p>
        `;
        passwordCaption.textContent = "Password generator";
        document.getElementById('password-p-container').innerHTML = `
<p>Generate a password according to different parameters</p>
<p>The length and composition (lowercase, uppercase, numbers, and/or symbols)</p>
<p>Bonus: The password is copied to the clipboard with a single click</p>
        `;
        mealCaption.textContent = "Recipe generator";
        document.getElementById('meal-p-container').innerHTML = `
        <p>Using TheMealDB API, displaying recipes based on the desired ingredients</p>
        <p>Displayed in multiple cards, sorted, and responsive</p>
        `;
        quizzCaption.textContent = "Quiz app";
        document.getElementById('quizz-p-container').innerHTML = `
        <p>JavaScript quiz displayed through OOP</p>
<p>Simply modify a JSON file to edit or add questions/answers</p>
<p>Coming soon on GitHub</p>
                    `;

        formCaption.textContent = "Form checking";
        document.getElementById('form-p-container').innerHTML = `
        <p>A fairly typical form, requiring certain parameters before validation</p>
<p>If everything is validated, datas are sent through a simulated POST method, and immediately deleted</p>
<p>Functions, regex, and some animations to quickly assess the "strength" of the password</p>
        `;
        technosH1.textContent = `My main techos`;
        spanInfosTechnos.textContent = "Click for more informations";

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
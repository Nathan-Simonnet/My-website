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

// ====================
// Dev web animation
// ====================
let devWebForArray = "";

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
lineSpan.forEach((span, index) => {
    const uniqueIndex = "lineSpan" + (index + 1)
    span.setAttribute('id', uniqueIndex)
});

let playOnce = true;

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
// Technos 
// ========================
// ------------------------
// Technos animation
// ------------------------

let technoIndex = 0;
technoContainer.forEach((technos, index) => {
    const uniqueIndex = "techno" + (index + 1)
    technos.setAttribute('id', uniqueIndex)
    technoIndex++;
});

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
            const temporarySelector = document.getElementById('techno' + arrayTechnos[arrayIndex]);
            temporarySelector.classList.add("scrolledTransition");

            setTimeout(() => {
                temporarySelector.classList.remove("scrolledTransition");
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

// ------------------------
// Technos Displayer
// ------------------------

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

// ========================
// Translation 
// ========================

let lang = "fr";

const translatePage = function (id) {
    const projectAnchor = document.getElementById('project-anchor');
    const technosAnchor = document.getElementById('technos-anchor');
    const aboutMeAnchor = document.getElementById('about-me-anchor');
    const contactAnchor = document.getElementById('contact-anchor');
    const devWeb = document.getElementById('dev-web-p');
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
        contactH1.textContent = "Me contacter";

        projectsH1.textContent = `Mes projets`;
        portefolioCaption.textContent = "Portfolio fait avec amour";
        document.getElementById('portfolio-p-container').innerHTML = `
        <p>Fait de A à Z par mes soins</p>
        <p>Très imparfait, lourd, et a refaire, évidement</p>
        <p>Mais en attendant j'y ai mis du coeur et beaucoup de soins avec les outils qui m'été disponible
            au moment de sa création (alors un peu dindulgence que diable!)</p>
        <p>Les images ont toutes étaient compressés, un sitemap mise en place, validé par W3C... bref,
            j'ai tenté de ne rien laissé au hasard</p>
        <p>J'en déjà ai tiré beaucoups de leçons, et je reste ouvert à tout retours</p>
    
        `;
        bubbleCaption.textContent = "Bubble popper";
        document.getElementById('bubble-p-container').innerHTML = `
        <p>Un de mes tout premier projets, tout est dans le titre</p>
                    <p>Élaboré en collaboration avec ma jeune sœur de 9 ans (attention, toutes critique négatives
                        est donc à vos risques et périls !)</p>
                    <p>Ce mini jeu a été créé entièrement en CSS/JS</p>
                    <p>Gestion du DOM, timer, animations aléatoires, effets de particules... Pourquoi ne pas essayer?
                    </p>
                    <p class="click-to-test"><a href="https://nathan-simonnet.github.io/" target="_blank"
                            id="bubble-popper-link">Cliquez
                            ici pour tester</a></p>
        `;
        dbCaption.textContent = "Affichage d'une database d'utilisateurs";
        document.getElementById('db-p-container').innerHTML = `
        <p>Utilisation d'une API pour générer l'affichage d'une base de données d'utilisateurs fictifs
                    </p>
                    <p>Le résultat étant plusieurs cartes affiché de manière responsive</p>
                    <p>Également la possibilité de trier et filtrer les utilisateurs par nom, âge et statut</p>
                    <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/user-database-displayer/"
                            target="_blank">Lien vers GitHub</a></p>
                             `;
        yogaCaption.textContent = "Yoga routine";
        document.getElementById('yoga-p-container').innerHTML = `
        <p>Gestions de routes avec React</p>
                    <p>Choix différentes postures et
                        différents temps d'execution, local storage...</p>
                    <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Yoga-routine_React/"
                            target="_blank">Lien vers GitHub</a></p>
        `;
        passwordCaption.textContent = "Générateur de mot de passe";
        document.getElementById('password-p-container').innerHTML = `
        <p>Un classique, mais éxécuté avec soins</p>
        <p>Gestions des choix tant en CSS qu'en JS</p>
        <p>Copié en un clique</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Password-maker"
                            target="_blank">Lien vers GitHub</a></p>
        `;
        mealCaption.textContent = "Générateur de recettes";
        document.getElementById('meal-p-container').innerHTML = `
        <p>Utilisant l'API de TheMealDB, affichage de recettes selon les ingrédients désiré</p>
        <p>Affichés en plusieurs cartes, ordonnées et "responsive"</p>
        <p>Lightmode et darkmode disponible a tout moment</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Fetch-my-meal/"
                target="_blank">Lien vers GitHub</a></p>
        `;
        quizzCaption.textContent = "Quizz";
        document.getElementById('quizz-p-container').innerHTML = `
        <p>Quizz sur Javascript/React</p>
                    <p>Il suffira de modifier un fichier Json, afin de modifier ou rajouter des questions/réponses
                    </p>
                    <p>Gestion du score, et code couleur selon la réponse</p>
                    <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/quizz-react-routes"
                            target="_blank">Lien vers GitHub</a></p>
        `;
        formCaption.textContent = "Form checking";
        document.getElementById('form-p-container').innerHTML = `
        <p>Un formulaire assez classique, exigeant certain paramètres avant validation</p>
                    <p>Simulation de méthode POST 
                        aussitôt
                        supprimées si tout est validé</p>
                    <p>Fonctions, regexp, et quelques animations afin d'évaluer rapidement la "solidité" du mot de
                        passe</p>
                        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Form-checker"
                            target="_blank">Lien vers GitHub</a></p>
        `;

        technosH1.textContent = `Mes technos`;
        spanInfosTechnos.textContent = "Cliquez pour plus d'informations";

        document.getElementById('p-CSS').innerHTML = `
        <p>Une pratique régulière de plus de 4h par semaines depuis 2022</p>
        <p>Et plus de 40h de formations en HTML / CSS via différents médias</p>
        <p>Cette pratique s'accompagne de tout ce qui gravite autours du design UX / UI.
        </p>
        <p>Maintenant que je suis à l'aise avec CSS, je me plais à créer des projets en utilisant pleinement
            différentes librairies (tailwind et Animate.CSS notament), rendant le code bien plus léger, et
            l'exprience de programation plus fluide (des projets tout chauds sortis du fours arrivent...).
        </p>
        <p>Enfin concernant HTML, l'apprentissage des outils et méthodes de référencement via la sémantique,
            et l'utilisation d'IA et applications tiers.</p>
                    `
        document.getElementById('p-JS').innerHTML = `
        <p>La pierre angualire du developpement web, pratique régulièrement depuis 2022</p>
        <p>Plus de 30H de formations, plus des cours d'algorithmie, ainsi que des challenges variés.</p>
        <p>Javascript est mon langage préféré à l'heure actuelle, et utilisé dans tous les projets plus
            hauts (mais, React prends de plus en plus de place..).
        </p>
        <p>
            Je pratique également typescript, ainsi que du JS en strict mode, afin de garantir une plus
            grande stabilité et pereinitée des projets plus complexe a maintenir.
        </p>
        `
        document.getElementById('p-REACT').innerHTML = `
        <p>React = the next step!</p>
        <p>12H de formations à mon actif</p>
        <p>Plusieurs projets déjà élaborés (Ceasar cipher encryption, yoga routine,worldview...)</p>
        <p>En plus de creer de nouveaux projets, je me plais a reprendre d'ancien projets, et les
            remodeliser en utilisant React</p>
        <p>N'en déplaise à Javascript, c'est mon nouvel amour... (parait-il que les algorithme de google
            partagent mon avis) </p>
        `
        document.getElementById('p-TS').innerHTML = `
        <p>Node JS, express, mongodb, mongoose... et bien d'autres librairies associés</p>
        <p>Si le front est bien sure encore a perfectionner, il est normal de s'interesser au "back", afin
            de mieux saisir les interactions entre les deux, et ainsi commencer dès maintenant a être plus
            polyvalent</p>
        <p>Des projets sont encore en cours afin de progresser sur l'utilisations des routes express, et la
            gestion de base de données, restez connectez !</p>
        `
        // document.getElementById('p-PHP').innerHTML = `
        // <p>Plus de 12H de formations à l'heure actuelle depuis 2023</p>
        //             <p>Pour commencer à mettre un pied dans le back-end</p>
        //             <p>Le chemin sera long, mais il faut ce qu'il faut, et je suis prêt!</p>
        // `
        // document.getElementById('p-MYSQL').innerHTML = `
        // <p>La suite logique de PHP est MySql, et nous y voilà</p>
        //             <p>Je suis divers tutoriels en parallèle de PHP, afin d'aller, petit à petit, encore plus loin</p>
        //             <p>D'abord, j'ai un désir de comprendre, puis de tester, puis d'optimiser, voilà le tronc commun a
        //                 tout
        //                 ces langages</p>
        // `

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
        contactH1.textContent = "Contact me";

        projectsH1.textContent = `My projects`;
        portefolioCaption.textContent = "Portfolio, made with love";
        document.getElementById('portfolio-p-container').innerHTML = `
        <p>Made from A to Z by myself</p>
<p>Very imperfect, heavy, and to be reshaped for sure</p>
<p>But in the meantime, I put my heart and a lot of care into it with the tools available to me at the time of its creation (so a little indulgence, for heaven's sake!)</p>
<p>All images have been compressed, a sitemap has been implemented, validated by W3C... in short, I tried not to leave anything to chance</p>
<p>I've already learned a lot from it, and I remain open to any feedback</p>
        `;
        bubbleCaption.textContent = "Bubble popper";

        document.getElementById('bubble-p-container').innerHTML = `
        <p>One of my very first projects, it's all in the title</p>
        <p>Developed in collaboration with my 9-year-old younger sister (attention, all negative criticism is therefore at your own risk!)</p>
        <p>This mini-game was created entirely in CSS/JS</p>
        <p>DOM manipulation, timer, random animations, particle effects... Why not give it a try?</p>
        <p class="click-to-test"><a href="https://nathan-simonnet.github.io/" target="_blank" id="bubble-popper-link">Click here to test</a></p>
         `
        dbCaption.textContent = "Displaying a user database";
        document.getElementById('db-p-container').innerHTML = `
        <p>Using an API to generate the display of a database of fictional users</p>
        <p>The result being multiple cards displayed in a responsive manner</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/user-database-displayer/" target="_blank">Link to GitHub</a></p>
        
        `
        yogaCaption.textContent = "Yoga routine";
        document.getElementById('yoga-p-container').innerHTML = `
        <p>Route management with React</p>
        <p>Choosing different poses and
            different execution times, local storage...</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Yoga-routine_React/" target="_blank">Link to GitHub</a></p>        
        `;
        passwordCaption.textContent = "Password generator";
        document.getElementById('password-p-container').innerHTML = `
        <p>A classic, but executed with care</p>
        <p>Handling choices in both CSS and JS</p>
        <p>Copy with one click</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Password-maker" target="_blank">Link to GitHub</a></p>
         `;
        mealCaption.textContent = "Meal fetcher";
        document.getElementById('meal-p-container').innerHTML = `
        <p>Using TheMealDB API, displaying recipes based on desired ingredients</p>
        <p>Displayed in multiple cards, ordered and "responsive"</p>
        <p>Light mode and dark mode available at any time</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Fetch-my-meal/" target="_blank">Link to GitHub</a></p>
        
        `;
        quizzCaption.textContent = "Quiz app";
        document.getElementById('quizz-p-container').innerHTML = `
        <p>Quiz on Javascript/React</p>
        <p>Simply modify a JSON file to edit or add questions/answers</p>
        <p>Score management, and color-coded based on the response</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/quizz-react-routes" target="_blank">Link to GitHub</a></p>        
                    `;

        formCaption.textContent = "Form checking";
        document.getElementById('form-p-container').innerHTML = `
        <p>A fairly standard form, requiring certain parameters before validation</p>
        <p>If everything is validated, the data is sent via a simulated POST method, then immediately deleted</p>
        <p>Functions, regex, and some animations to quickly assess the "strength" of the password</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Form-checker" target="_blank">Link to GitHub</a></p>
         `;
        technosH1.textContent = `My main techos`;
        spanInfosTechnos.textContent = "Click for more informations";

        document.getElementById('p-CSS').innerHTML = `
        <p>Regular practice of over 4 hours per week since 2022</p>
<p>And over 40 hours of training in HTML / CSS through various media</p>
<p>This practice is accompanied by everything surrounding UX / UI design.</p>
<p>Now that I'm comfortable with CSS, I enjoy creating projects using various libraries (especially Tailwind and Animate.CSS), making the code much lighter, and the programming experience smoother (some fresh projects are coming out of the oven...)</p>
<p>Finally, regarding HTML, learning tools and methods of referencing through semantics, and the use of AI</p>

        `
        document.getElementById('p-JS').innerHTML = `
        <p>The cornerstone of web development, regularly practiced since 2022</p>
        <p>Over 30 hours of training, along with algorithm courses, and various challenges</p>
        <p>Javascript is currently my favorite language, and used in all projects above (although, React is taking more and more space..)</p>
        <p>
            I also practice TypeScript, as well as JS in strict mode, to ensure greater stability and longevity of more complex projects to maintain.
        </p>  `
        document.getElementById('p-REACT').innerHTML = `
        <p>React = the next step!</p>
        <p>12 hours of training under my belt</p>
        <p>Several projects already developed (Ceasar cipher encryption, yoga routine, worldview...)</p>
        <p>In addition to creating new projects, I enjoy revisiting old projects and remodeling them using React</p>
        <p>Sorry, JavaScript, but React is my new love... (apparently Google's algorithms agree with me)</p>
         `
        document.getElementById('p-TS').innerHTML = `
        <p>Node.js, Express, MongoDB, Mongoose... and many other associated libraries</p>
<p>While the front end still needs improvement, it's natural to take an interest in the "back end" in order to better understand the interactions between the two, and thus start becoming more versatile from now on</p>
<p>Projects are still ongoing to improve the use of Express routes and database management, stay tuned!</p>

        `
        // document.getElementById('p-PHP').innerHTML = `
        // <p>Over 12 hours of training up to the current time since 2023</p>
        // <p>To begin stepping into the back-end</p>
        // <p>The journey will be long, but it takes what it takes, and I'm ready!</p>
        // `
        // document.getElementById('p-MYSQL').innerHTML = `
        // <p>The next step after PHP is MySQL, and here we are</p>
        // <p>I am exploring various tutorials alongside PHP to gradually delve deeper</p>
        // <p>First, there's a desire to understand, then to test, and finally to optimize; that's the common thread among all these languages</p>
        // `
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

// ======================
// Scroll problem!!
// ======================
// window.addEventListener('load', () => {
//     window.scrollTo(0, 0);
// });

// history.scrollRestoration = 'manual';

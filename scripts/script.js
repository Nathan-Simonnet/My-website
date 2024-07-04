// Particle effects
// =======================

const particlesContainer = document.querySelector('.particles-container')

for (let i = 0; i < 60; i++) {
    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circle-container')
    particlesContainer.appendChild(circleContainer)

    const circle = document.createElement('div');
    circle.classList.add('circle')
    circleContainer.appendChild(circle)
}

// =================
// Header
// ==================

document.querySelectorAll('.flag-container').forEach((flag) => {
    flag.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.target.click();
        }
    });
});
// ====================
// Dev web animation
// ====================
let devWebForArray = "";

const createSpan = function (content) {
    const letter = document.createElement("span");
    document.getElementById('dev-web-p').appendChild(letter);
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
// If scroll up reach first section, nav show up
let lastScroll = 0;
const header = document.querySelector('header');
const aHovered = document.querySelectorAll('nav li a');
window.addEventListener('scroll', () => {
    if (scrollY == 0) {
        header.classList.add("scroll-zero");
        header.classList.remove("scrolled-down");
        header.classList.remove("scrolled-up");
        aHovered.forEach((a) => {
            a.classList.remove("scrolled-up")
        });
    }

    else if (lastScroll >= scrollY && lastScroll < 900) {
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
// h1 underline anim 
// ========================
document.querySelectorAll('.after').forEach((span, index) => {
    const uniqueIndex = "lineSpan" + (index + 1)
    span.setAttribute('id', uniqueIndex)
});

let playOnce = true;

// If the screen is near a new h1, launch the animation
window.addEventListener('scroll', (e) => {

    // Track where the screen is scrolling
    let magicScrollValue = ((window.scrollY + innerHeight) / document.body.offsetHeight);

    const pointer = function (index) {
        const pointed = document.getElementById('lineSpan' + index);
        pointed.style.animation = "h1AfterAnimation 2s ease-out 0.3s forwards"
    }

    if (magicScrollValue > 0.10 && playOnce) {

        if (playOnce) {
            let index = 1;
            document.querySelectorAll('.project-figure').forEach((figure) => {
                figure.style.transition = index + "s"
                index += 0.2;
                figure.classList.add('scrolledTransition')
                // console.log(figure)
                playOnce = false;

                setTimeout(() => {
                    document.querySelectorAll('.project-figure').forEach((fig) => {
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
    } else if (magicScrollValue > 0.55) {
        pointer(2);
    } else if (magicScrollValue > 0.10) {
        pointer(1);
    }
});

// ========================
// Projet displayer
// ========================

document.querySelectorAll('.project-figure-and-p-container').forEach((projectContainer) => {
    // Allow keyboard using
    projectContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.target.click();
        }
    });

    //When clicked,  Hide all other projects
    projectContainer.addEventListener('click', () => {
        projectContainer.classList.toggle("project-clicked");

        projectContainer.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { e.target.click(); }
        });

        document.querySelectorAll('.project-figure-and-p-container').forEach((otherProjectContainer) => {
            if (otherProjectContainer != projectContainer) {
                otherProjectContainer.classList.toggle('other-projects')
            }
        });

        // When clicked, autofocus the window to the center of the project
        projectContainer.scrollIntoView({ block: 'center' })
    });
});

// ========================
// Technos 
// ========================
// ------------------------
// Technos Displayer
// ------------------------

const spanInfosTechnos = document.getElementById('span-infos-technos');

document.getElementById('technos-section').addEventListener('mouseover', () => {
    spanInfosTechnos.classList.add('shiningAnim');
});
document.getElementById('technos-section').addEventListener('mouseout', () => {
    spanInfosTechnos.classList.remove('shiningAnim');
});


document.querySelectorAll('.techno-and-p-container').forEach((techno) => {
    const modal = techno.children[1];
    // Allow keyboard using
    techno.addEventListener('keydown', (e) => {
        e.key === 'Enter' ? e.target.click() : "";
    });
    // Toggle to open and close modal
    techno.addEventListener('click', () => {
        // Onclick, delete the info tooltip until refreshing the page
        document.getElementById('span-infos-technos').style.display = "none";

        modal.open ? modal.close() : modal.showModal();
    });
});

// =======================
// Contact me
// =======================
// Automatically copie the mail onclick
document.getElementById('mail-span').addEventListener('click', (span) => {
    navigator.clipboard.writeText(span.target.textContent);
    lang == "fr" ? span.target.textContent = "copié!" : span.target.textContent = "copy!"
    setTimeout(() => { span.target.textContent = "nathan.simonnet@gmail.com" }, 2000);
});

// ========================
// Translation 
// ========================

let lang = "fr";

const translatePage = function (id) {

    const contactH1 = document.getElementById('contact-h1');

    if (id == "fra") {
        lang = "fr";
        // document.querySelector('.chantier>p').textContent = "Plus de fonctionnalités à venir..."
        document.getElementById('project-anchor').textContent = "Projets"
        document.getElementById('technos-anchor').textContent = "Technos"
        document.getElementById('about-me-anchor').textContent = "À propos de moi"
        document.getElementById('contact-anchor').textContent = "Contact"
        setTimeout(() => {
            document.getElementById('dev-web-p').textContent = ""
            letterIndex = 0;
            letterMaker();
        }, 200)
        contactH1.textContent = "Me contacter";

        document.getElementById('projects-h1').textContent = `Quelques projets`;
        document.getElementById('portfolio-caption').textContent = "Kasa - site de locations d'appartments";
        document.getElementById('portfolio-p-container').innerHTML = `
       <p>Application React</p>
        <p>BrowserRouter, useStates, useEffects, useNavigation...</p>
        <p>Gestion de 4 pages, dont une page avec un paramètre en fonction de l'id</p>
        <p>Et finalement gestion de la page d'erreur et redirections</p>
        <p class="click-to-test"><a tabindex="0" href="https://github.com/Nathan-Simonnet/Kasa"
        target="_blank">Lien vers GitHub</a></p>
        `;
        document.getElementById('bubble-caption').textContent = "Bubble popper";
        document.getElementById('bubble-p-container').innerHTML = `
        <p>Un de mes tout premier projets, tout est dans le titre</p>
        <p>Élaboré en collaboration avec ma jeune sœur de 9 ans (attention, toutes critique négatives
        est donc à vos risques et périls !)</p>
        <p>Ce mini jeu a été créé entièrement en CSS/JS</p>
        <p>Gestion du DOM, timer, animations aléatoires, effets de particules... Pourquoi ne pas essayer?</p>
        <p class="click-to-test"><a href="https://nathan-simonnet.github.io/" 
        target="_blank"id="bubble-popper-link">Cliquezici pour tester</a></p>
        `;
        document.getElementById('db-caption').textContent = "Portfolio d'architecte";
        document.getElementById('db-p-container').innerHTML = `
       <p>Gestion d'API, CRUD, fenêtres modales.</p>
        <p>Récupéreration dynamique des données des travaux via l’API (SQlight), ajout d'options de tri des projets par catégorie, Intégration et gestion de la page de connexion, ajoute de 2 fenêtres modales pour gérer les projets (ajout, modifications, suppressions)</p>
        <p class="click-to-test"><a tabindex="0" href="https://github.com/Nathan-Simonnet/Portfolio-architecte-sophie-bluel"
        target="_blank">Lien vers GitHub</a></p>
        `;
        document.getElementById('meal-caption').textContent = "Générateur de recettes";
        document.getElementById('meal-p-container').innerHTML = `
        <p>Utilisant l'API de TheMealDB, affichage de recettes selon les ingrédients désiré</p>
        <p>Affichés en plusieurs cartes, ordonnées et "responsive"</p>
        <p>Lightmode et darkmode disponible a tout moment</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Fetch-my-meal/"
        target="_blank">Lien vers GitHub</a></p>
        `;
        document.getElementById('quizz-caption').textContent = "Quizz";
        document.getElementById('quizz-p-container').innerHTML = `
        <p>Quizz sur Javascript/React</p>
        <p>Il suffira de modifier un fichier Json, afin de modifier ou rajouter des questions/réponses</p>
        <p>Gestion du score, et code couleur selon la réponse</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/quizz-react-routes"
        target="_blank">Lien vers GitHub</a></p>
        `;
        document.getElementById('parallax-p-container').innerHTML = `
        <p>Un petit effet qui attire toujours l'œil.</p>
        <p>Simple, mais responsive, et exécuté avec soins à la main en CSS/JS.</p>
        <p>Un des nooombreux petits projets qui permettent de s'entrainer et polir son arsenal, tout en prenant plaisir à élaborer sa création.</p>
        <p class="click-to-test"><a tabindex="0" href="http://parallax-jungle.go.yo.fr/"
        target="_blank">Lien vers le site</a></p>
        <p class="click-to-test"><a tabindex="0" href="https://github.com/Nathan-Simonnet/Parallax-jungle"
        target="_blank">Lien vers Github</a></p>
        `;
        document.getElementById('form-caption').textContent = "Form checking";
        document.getElementById('form-p-container').innerHTML = `
        <p>Un formulaire assez classique, exigeant certain paramètres avant validation</p>
        <p>Si tout est validé, les données sont envoyées via une simulation de méthode POST, puis aussitôt supprimées</p>
        <p>Fonctions, regexp, et quelques animations afin d'évaluer rapidement la "solidité" du mot de passe</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Form-checker"
        target="_blank">Lien vers GitHub</a></p>
        `;

        document.getElementById('technos-h1').textContent = `Mes technos`;
        spanInfosTechnos.textContent = "Cliquez pour plus d'informations";

        document.getElementById('p-CSS').innerHTML = `
         <i class="fa-solid fa-xmark modal-close"  tabindex="0"></i>
        <p>Une pratique régulière depuis 2022</p>
        <p>Plus de 30 projets, ainsi que de nombreuses formations en HTML / CSS via différents médias / organismes</p>
        <p>Cette pratique s'accompagne de tout ce qui gravite autours du design UX / UI.</p>
        <p>Maintenant que je suis à l'aise avec CSS, je me plais à créer des projets en utilisant pleinement
        différentes librairies (tailwind et Animate.CSS notamment), rendant le code bien plus léger, et
        l'expérience de programmation plus fluide (des projets tout chauds sortis du four arrivent...).</p>
        <p> Enfin concernant HTML, l'apprentissage des outils et méthodes de référencement via la sémantique, et l'utilisation d'IA et applications tiers .</p>
        `;
        document.getElementById('p-JS').innerHTML = `
         <i class="fa-solid fa-xmark modal-close"  tabindex="0"></i>
        <p>La pierre angulaire du développement web, pratique régulièrement depuis 2022</p>
        <p>Plus de 30H de formations, plus des cours d'algorithmie, ainsi que des challenges variés</p>
        <p>Javascript est mon langage préféré à l'heure actuelle, et utilisé dans tous les projets plus
        hauts (mais, React prend de plus en plus de place..)</p>
        <p>Je pratique également typescript, et de plus en plus de JS en strict mode, afin de garantir une plus
        grande stabilité et pérennité des projets plus complexe à maintenir.</p>
        `;
        document.getElementById('p-REACT').innerHTML = `
        <i class="fa-solid fa-xmark modal-close"  tabindex="0"></i>
        <p>Routes, useStates, links... Encore beaucoup à apprendre, mais je suis officiellement à l'aise avec React</p>
        <p>Plusieurs projets déjà élaborés (Application de yoga, worldview, Quizz, application de location d'appartements...)</p>
        <p>En plus de créer de nouveaux projets, je me plais à reprendre d'anciens projets, et les modéliser à nouveau en utilisant React</p>
        <p>N'en déplaise à JavaScript, c'est mon nouvel amour... (parait-il que les algorithmes de Google partagent mon avis)</p>
        `;
        document.getElementById('p-NODEJS').innerHTML = `
         <i class="fa-solid fa-xmark modal-close"  tabindex="0"></i>
        <p>Node JS, express, mongodb, mongoose... et bien d'autres librairies associées</p>
        <p>Si le front est bien sûr encore à perfectionner, il est normal de s'intéresser au "back", afin de mieux saisir les interactions entre les deux, et ainsi commencer dès maintenant à être plus polyvalent</p>
        <p>Des projets sont encore en cours dans le but de progresser sur l'utilisation des routes express, et la gestion de base de données, restez connecté !</p>
        `;

        document.getElementById('about-me-h1').textContent = `A propos de moi`;
        document.getElementById('profil-p1').textContent = "Ancien maître nageur, je m'exerce à la programmation depuis 2021.";
        document.getElementById('profil-p2').textContent = "HTML/CSS, puis javascript pour rendre mes pages plus dynamiques, plus récément react pour aller encore plus loin...";
        document.getElementById('profil-p3').textContent = "Ce qui à commencé comme une occupation, est maintenant devenu une passion, me poussant à me former continuelement.";
        document.getElementById('profil-p4').textContent = "L'objectif maintenant, full stack! A suivre...";
        document.getElementById('CV-span').textContent = "Mon CV";
        contactH1.textContent = `Me contacter`;
    } else {
        lang = "en";

        // document.querySelector('.chantier>p').textContent = "More features to come..."

        document.getElementById('project-anchor').textContent = "Projects"
        document.getElementById('technos-anchor').textContent = "Technos"
        document.getElementById('about-me-anchor').textContent = "About me"
        document.getElementById('contact-anchor').textContent = "Contact"
        setTimeout(() => {
            document.getElementById('dev-web-p').textContent = "";
            letterIndex = 0;
            letterMaker();

        }, 200)
        contactH1.textContent = "Contact me";

        document.getElementById('projects-h1').textContent = `Some projects`;
        document.getElementById('portfolio-caption').textContent = "Kasa - apartment rental site";
        document.getElementById('portfolio-p-container').innerHTML = `
        <p>React Application</p>
        <p>BrowserRouter, useStates, useEffects, useNavigation...</p>
        <p>Management of 4 pages, including one page with a parameter based on the ID</p>
        <p>And finally, error page management and redirections</p>
        <p class="click-to-test"><a tabindex="0" href="https://github.com/Nathan-Simonnet/Kasa"
        target="_blank">Link to GitHub</a></p>
        `;
        document.getElementById('bubble-caption').textContent = "Bubble popper";

        document.getElementById('bubble-p-container').innerHTML = `
        <p>One of my very first projects, it's all in the title</p>
        <p>Developed in collaboration with my 9-year-old younger sister (attention, all negative criticism is therefore at your own risk!)</p>
        <p>This mini-game was created entirely in CSS/JS</p>
        <p>DOM manipulation, timer, random animations, particle effects... Why not give it a try?</p>
        <p class="click-to-test"><a href="https://nathan-simonnet.github.io/" target="_blank" id="bubble-popper-link">Click here to test</a></p>
         `;
        document.getElementById('db-caption').textContent = "Architect portfolio";
        document.getElementById('db-p-container').innerHTML = `
        <p>API management, CRUD, modal windows.</p>
        <p>Dynamic data retrieval of projects via the API (SQLite), addition of project sorting options by category, integration and management of the login page, addition of 2 modal windows to manage projects (add, edit, delete)</p>
        <p class="click-to-test"><a tabindex="0" href="https://github.com/Nathan-Simonnet/Portfolio-architecte-sophie-bluel"
        target="_blank">Link to GitHub</a></p>
        `;
        document.getElementById('meal-caption').textContent = "Meal fetcher";
        document.getElementById('meal-p-container').innerHTML = `
        <p>Using TheMealDB API, displaying recipes based on desired ingredients</p>
        <p>Displayed in multiple cards, ordered and "responsive"</p>
        <p>Light mode and dark mode available at any time</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Fetch-my-meal/" target="_blank">Link to GitHub</a></p>
        `;
        document.getElementById('quizz-caption').textContent = "Quiz app";
        document.getElementById('quizz-p-container').innerHTML = `
        <p>Quiz on Javascript/React</p>
        <p>Simply modify a JSON file to edit or add questions/answers</p>
        <p>Score management, and color-coded based on the response</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/quizz-react-routes" target="_blank">Link to GitHub</a></p>        
        `;
        document.getElementById('parallax-p-container').innerHTML = `
        <p>An effect that always catches the eye</p>
        <p>Simple, yet responsive, and hand-crafted with care in CSS/JS</p>
        <p>One of the many small projects that allow practice, refine toolkits, while enjoying the process of creation</p>
        <p class="click-to-test"><a tabindex="0" href="https://github.com/Nathan-Simonnet/Kasa" target="_blank">Link to the site</a></p>
        <p class="click-to-test"><a tabindex="0" href="https://github.com/Nathan-Simonnet/Parallax-jungle" target="_blank">Lien vers Github</a></p>
        `;
        document.getElementById('form-caption').textContent = "Form checking";
        document.getElementById('form-p-container').innerHTML = `
        <p>A fairly standard form, requiring certain parameters before validation</p>
        <p>If everything is validated, the data is sent via a simulated POST method, then immediately deleted</p>
        <p>Functions, regex, and some animations to quickly assess the "strength" of the password</p>
        <p class="click-to-test"><a href="https://github.com/Nathan-Simonnet/Form-checker" target="_blank">Link to GitHub</a></p>
         `;
        document.getElementById('technos-h1').textContent = `My main techos`;
        spanInfosTechnos.textContent = "Click for more informations";

        document.getElementById('p-CSS').innerHTML = `
         <i class="fa-solid fa-xmark modal-close"  data-modal-id="nodejs" tabindex="0"></i>
        <p>Regular practice since 2022</p>
        <p>More than 30 projects, and many training in HTML / CSS through various medias</p>
        <p>This practice is accompanied by everything surrounding UX / UI design.</p>
        <p>Now that i am fully comfortable with CSS, and i ma not against using libraries (especially Tailwind), making the code much lighter, and the programming experience smoother (some fresh projects are coming out of the oven...)</p>
        <p>Finally, regarding HTML, learning tools and methods of referencing through semantics, and the use of AI</p>
        `;
        document.getElementById('p-JS').innerHTML = `
         <i class="fa-solid fa-xmark modal-close"  data-modal-id="nodejs" tabindex="0"></i>
        <p>The cornerstone of web development, regularly practiced since 2022</p>
        <p>Over 30 hours of training, along with algorithm courses, and various challenges</p>
        <p>Javascript is currently my favorite language, and used in all projects above (although, React is taking more and more space..)</p>
        <p>I also practice TypeScript, as well as JS in strict mode, to ensure greater stability and longevity of more complex projects to maintain. </p>  `;
        document.getElementById('p-REACT').innerHTML = `
         <i class="fa-solid fa-xmark modal-close"  data-modal-id="nodejs" tabindex="0"></i>
       <p>Routes, useStates, links... Still a lot to learn, but I am officially comfortable with React</p>
        <p>Several projects already developed (Yoga application, worldview, Quiz, apartment rental application...)</p>
        <p>In addition to creating new projects, I enjoy revisiting old projects and remodeling them using React</p>
        <p>Sorry, Javascript, but it's my new love... (it seems that Google's algorithms share my opinion)</p>

         `;
        document.getElementById('p-NODEJS').innerHTML = `
         <i class="fa-solid fa-xmark modal-close"  data-modal-id="nodejs" tabindex="0"></i>
        <p>Node.js, Express, MongoDB, Mongoose... and many other associated libraries</p>
        <p>While the front end still needs improvement, it's natural to take an interest in the "back end" in order to better understand the interactions between the two, and thus start becoming more versatile from now on</p>
        <p>Projects are still ongoing to improve the use of Express routes and database management, stay tuned!</p> `

        document.getElementById('about-me-h1').textContent = `About me`;
        document.getElementById('profil-p1').textContent = "Former lifeguard, I have been practicing programming since 2021.";
        document.getElementById('profil-p2').textContent = "HTML/CSS, then javascript to make my pages more responsive and dynamic, more recently react to go even further...";
        document.getElementById('profil-p3').textContent = "What started as a hobby, has now become a passion, pushing me to continually train myself continuously.";
        document.getElementById('profil-p4').textContent = "The goal now, full stack! To be continued...";
        document.getElementById('CV-span').textContent = "My CV";
        contactH1.textContent = `Contact me`;
    }
}

document.querySelectorAll('.flag-container').forEach((flag) => {
    flag.addEventListener('click', (e) => {
        stopIt = true;
        spanInfosTechnos.style.display = "block"
        setTimeout(() => { stopIt = false; }, 10)
        if (flag.classList.contains("actual-language")) {
        } else {
            document.querySelectorAll('.flag-container').forEach((e) => {
                e.classList.remove("actual-language")
            });
            flag.classList.add("actual-language")
            translatePage(flag.id)
        }
    });
});

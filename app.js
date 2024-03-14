const certficationCards = () => {
  const certficationData = [
    {
      titile: "The Complete Web Developer Course 2.0",
      link: "https://drive.google.com/file/d/1TL9L_zEbOAKdl5YSfhmQhpCe5xMyfTgB/view?usp=sharing"
    },
    {
      titile: "Responsive Web Design Developer",
      link: "https://drive.google.com/file/d/1Pn4zdI_L1lSqoupydCQVnNQY22l9OukA/view?usp=sharing"
    },
    {
      titile: "Virtual Internship at BHARAT INTERN",
      link: "https://drive.google.com/file/d/1jm5itb850_1jTC8Ca1s3EUfEWDqNm5p8/view?usp=sharing"
    }
    
    
  ];
  
  certficationData.map((certificate) => {
    
    const card = document.querySelector('.certification-cards')
    console.log(card)
    const div = document.createElement("div")
    div.id = "certification-card"
    div.className = "card border-primary mb-3 certification-card"
    div.style.width = "18rem"
    const certificateBody = document.createElement('div')
    certificateBody.className = "card-body"
    const h6 = document.createElement('h6');
    h6.className = "card-title"
    h6.textContent = certificate.titile;
    const a = document.createElement('a');
    a.className = "card-link";
    a.href = certificate.link;
    a.textContent = "VIEW";
    card.append(div)
    div.append(certificateBody)
    certificateBody.append(h6,a)
  })
}

const projects = () => {
  const projectData = [
    {
      name: 'Todo List JS',
      description: 'A task management application that allows users to add, delete, and mark tasks as completed. It incorporates local storage for persistence.',
      link: 'https://purushotham-kuntumalla.github.io/TodoList/'
    },
    {
      name: 'Quiz App',
      description: 'An interactive quiz application that supports multiple-choice questions and provides feedback on user performance.',
      link: 'https://purushotham-kuntumalla.github.io/Quiz-application/'
    },
    {
      name: 'Quote Generator',
      description: 'A project that generates random quotes or inspirations. It features engaging and dynamic content and may utilize APIs or local data storage.',
      link: 'https://purushotham-kuntumalla.github.io/QuoteGenerator/'
    },
    {
      name: 'HTML Project Site',
      description: 'This project demonstrates proficiency in HTML. It showcases various HTML elements and structures, highlighting web development skills.',
      link: 'https://purushotham-kuntumalla.github.io/htmlprojectsite/'
    },
    {
      name: 'Portfolio',
      description: 'A personal portfolio website that includes details about skills, projects, and contact information. It reflects professionalism and creativity.',
      link: 'https://purushotham-kuntumalla.github.io/portfolio/'
    },
    {
      name: 'E-Commerce',
      description: 'An online shopping platform featuring product listings, shopping cart, and checkout functionalities. It utilizes both front-end and back-end development skills.',
      link: 'https://purushotham-kuntumalla.github.io/e_commerce/'
    },
    
    {
      name: 'Calculator',
      description: 'Basic calculator functionality built using HTML, CSS, and JavaScript. Suitable for simple mathematical calculations.',
      link: 'https://purushotham-kuntumalla.github.io/calculator/'
    },
    {
      name: 'Temperature Converter',
      description: 'A temperature converter that allows users to convert temperatures between different units (Celsius, Fahrenheit). It features a user-friendly interface and illustrates knowledge of JavaScript and DOM manipulation.',
      link: 'https://purushotham-kuntumalla.github.io/Tempo-Converter/'
    },
    
    
    {
      name: 'Fashion Styles',
      description: 'A project showcasing different fashion styles. It includes images, descriptions, and possibly links to fashion items, demonstrating design and layout skills.',
      link: 'https://purushotham-kuntumalla.github.io/FashionStyles/'
    },
   
  ];

  const projectsDiv = document.getElementById('projects');

  projectData.map((project) => { 
    const projectsCardDiv = document.getElementById('projectsCard')

    const div = document.createElement("div")
        div.className = "card border-primary mb-3"
        div.style.width = "18rem"
        const cardBody = document.createElement('div')
        cardBody.className = "card-body"
        const h6 = document.createElement('h6');
        h6.className = "card-title"
    h6.textContent = project.name;
    const p = document.createElement('p');
    p.className = "title-data"
    p.textContent = project.description;
    const link = document.createElement('a');
    link.className = "link"
    link.href = `${project.link}`;
    link.textContent = "Go To Live"
    projectsDiv.append(projectsCardDiv)
        projectsCardDiv.append(div)
        div.append(cardBody);
    cardBody.append(h6, p,link)
  })

}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", revealCard);
  revealCard(); // Call revealCard() initially to check if the card is already in view

  function revealCard() {
    
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;

      // Adjust this value according to your needs
      // Here, we'll show the card when it's 100 pixels above the bottom of the viewport
      const triggerBottom = window.innerHeight - 100;

      if (cardTop < triggerBottom && cardBottom > 0) {
        card.classList.add("animation");
      } else {
        card.classList.remove("animation");
      }
    });
  }
});

certficationCards();
projects()
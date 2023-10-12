const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;

const questions = [
    {
      question: "¿Qué etiqueta se utiliza para crear un párrafo en HTML?",
      options: ["<para>", "<p>", "<paragraph>", "<text>"],
      correctAnswer: "<p>"
    },
    {
      question: "¿Qué etiqueta se utiliza para agrupar contenido de navegación en una página web?",
      options: ["<href>", "<section>", "<nav>", "<header>"],
      correctAnswer: "<nav>"
    },
    {
      question: "¿Qué etiqueta se utiliza para insertar una imagen?",
      options: ["<img>", "<image>", "<picture>", "<photo>"],
      correctAnswer: "<img>"
    },
    {
      question: "¿Cuál de las siguientes etiquetas se utiliza para definir la estructura de encabezado de una página web?",
      options: ["<body>", "<header>", "<table-header>", "<nav>"],
      correctAnswer: "<header>"
    },
    {
      question: "¿Qué etiqueta se usa para crear una lista desordenada?",
      options: ["<ul>", "<list>", "<ol>", "<unordered>"],
      correctAnswer: "<ul>"
    },
    {
      question: "¿Cuál de las siguientes etiquetas se utiliza para agrupar contenido relacionado en una página web?",
      options: ["<nav>", "<newline>", "<section>", "<linebreak>"],
      correctAnswer: "<section>"
    },
    {
      question: "¿Qué etiqueta se utiliza para resaltar un texto importante?",
      options: ["<strong>", "<b>", "<em>", "<i>"],
      correctAnswer: "<strong>"
    },
    {
      question: "¿Qué etiqueta se utiliza para crear un enlace a otra página web en HTML?",
      options: ["<link>", "<a>", "<url>", "<href>"],
      correctAnswer: "<a>"
    },
    {
      question: "¿Qué se coloca dentro del elemento <body> en un documento HTML?",
      options: ["Etiquetas de estilo CSS.", "Encabezados de la página.", "Contenido visible de la página, como texto, imágenes y enlaces.", "JavaScript para la interacción del usuario."],
      correctAnswer: "Contenido visible de la página, como texto, imágenes y enlaces."
    },
    {
      question: "¿Qué hace el atributo href en una etiqueta <a> en HTML?",
      options: ["Define el título del enlace.", "Especifica el color del enlace.", "Indica la dirección o URL de destino del enlace.", "Establece el ancho del enlace."],
      correctAnswer: "Indica la dirección o URL de destino del enlace."
    },
    // Agrega más preguntas aquí
  ];

function showQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = ""; // Limpia las opciones anteriores
  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () => {
      answerInput.value = option;
      answerInput.focus();
    });
    optionsElement.appendChild(optionButton);
  });
  answerInput.value = "";
  nextButton.style.display = "none";
  checkButton.style.display = "block";
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer.toLowerCase() === correctAnswer) {
    questionElement.textContent = "¡Respuesta correcta!";
    checkButton.style.display = "none";
    nextButton.style.display = "block";
  } else {
    questionElement.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
  }
}

checkButton.addEventListener("click", () => {
  const userAnswer = answerInput.value;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  checkAnswer(userAnswer, correctAnswer);
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    questionElement.textContent = "¡Has completado todas las preguntas!";
    optionsElement.style.display = "none";
    answerInput.style.display = "none";
    checkButton.style.display = "none";
    nextButton.style.display = "none";
  }
});

// Mostrar la primera pregunta al cargar la página
showQuestion(questions[currentQuestionIndex]);


const mostrarVideoBtn1 = document.getElementById('mostrarVideoBtn1');
const videoPopup1 = document.getElementById('videoPopup1');
const cerrarVideoBtn1 = document.getElementById('cerrarVideoBtn1');

const mostrarVideoBtn2 = document.getElementById('mostrarVideoBtn2');
const videoPopup2 = document.getElementById('videoPopup2');
const cerrarVideoBtn2 = document.getElementById('cerrarVideoBtn2');

mostrarVideoBtn1.addEventListener('click', () => {
    videoPopup1.style.display = 'block';
});

cerrarVideoBtn1.addEventListener('click', () => {
    videoPopup1.style.display = 'none';
});

mostrarVideoBtn2.addEventListener('click', () => {
    videoPopup2.style.display = 'block';
});

cerrarVideoBtn2.addEventListener('click', () => {
    videoPopup2.style.display = 'none';
});





const answerBodyInput = document.getElementById('answerBody');
const validarBodyBtn = document.getElementById('validarBodyBtn');
const resultadoBody = document.getElementById('resultadoBody');

const answerHeaderInput = document.getElementById('answerHeader');
const validarHeaderBtn = document.getElementById('validarHeaderBtn');
const resultadoHeader = document.getElementById('resultadoHeader');

const answerNavInput = document.getElementById('answerNav');
const validarNavBtn = document.getElementById('validarNavBtn');
const resultadoNav = document.getElementById('resultadoNav');

const answerSectionInput = document.getElementById('answerSection');
const validarSectionBtn = document.getElementById('validarSectionBtn');
const resultadoSection = document.getElementById('resultadoSection');

const answerParagraphInput = document.getElementById('answerParagraph');
const validarParagraphBtn = document.getElementById('validarParagraphBtn');
const resultadoParagraph = document.getElementById('resultadoParagraph');

const answerImgInput = document.getElementById('answerImg');
const validarImgBtn = document.getElementById('validarImgBtn');
const resultadoImg = document.getElementById('resultadoImg');

const answerLinkInput = document.getElementById('answerLink');
const validarLinkBtn = document.getElementById('validarLinkBtn');
const resultadoLink = document.getElementById('resultadoLink');

validarBodyBtn.addEventListener('click', () => {
    const respuestaUsuario = answerBodyInput.value.trim().toLowerCase();

    if (respuestaUsuario === "<body></body>") {
        resultadoBody.textContent = "¡Respuesta correcta! Puedes avanzar!.";
        resultadoBody.style.color = "green";
    } else {
        resultadoBody.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
        resultadoBody.style.color = "red";
    }
});

validarHeaderBtn.addEventListener('click', () => {
    const respuestaUsuario = answerHeaderInput.value.trim().toLowerCase();

    if (respuestaUsuario === "<header></header>") {
        resultadoHeader.textContent = "¡Respuesta correcta! Puedes avanzar!.";
        resultadoHeader.style.color = "green";
    } else {
        resultadoHeader.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
        resultadoHeader.style.color = "red";
    }
});

validarNavBtn.addEventListener('click', () => {
    const respuestaUsuario = answerNavInput.value.trim().toLowerCase();

    if (respuestaUsuario === "<nav></nav>") {
        resultadoNav.textContent = "¡Respuesta correcta! Puedes avanzar!.";
        resultadoNav.style.color = "green";
    } else {
        resultadoNav.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
        resultadoNav.style.color = "red";
    }
});

validarSectionBtn.addEventListener('click', () => {
    const respuestaUsuario = answerSectionInput.value.trim().toLowerCase();

    if (respuestaUsuario === "<section></section>") {
        resultadoSection.textContent = "¡Respuesta correcta! Puedes avanzar!.";
        resultadoSection.style.color = "green";
    } else {
        resultadoSection.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
        resultadoSection.style.color = "red";
    }
});

validarParagraphBtn.addEventListener('click', () => {
    const respuestaUsuario = answerParagraphInput.value.trim().toLowerCase();

    if (respuestaUsuario === "<p></p>") {
        resultadoParagraph.textContent = "¡Respuesta correcta! Puedes avanzar!.";
        resultadoParagraph.style.color = "green";
    } else {
        resultadoParagraph.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
        resultadoParagraph.style.color = "red";
    }
});

validarImgBtn.addEventListener('click', () => {
  const respuestaUsuarioImg = answerImgInput.value.trim().toLowerCase();

  if (respuestaUsuarioImg === "<img></img>") {
      resultadoImg.textContent = "¡Respuesta correcta! Puedes avanzar!.";
      resultadoImg.style.color = "green";
  } else {
      resultadoImg.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
      resultadoImg.style.color = "red";
  }
});

validarLinkBtn.addEventListener('click', () => {
  const respuestaUsuarioLink = answerLinkInput.value.trim().toLowerCase();

  if (respuestaUsuarioLink === "<a></a>") {
      resultadoLink.textContent = "¡Respuesta correcta! Puedes avanzar!.";
      resultadoLink.style.color = "green";
  } else {
      resultadoLink.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
      resultadoLink.style.color = "red";
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("myModal");
  const closeModal = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const images = document.querySelectorAll(".carousel-content img");
  let currentImageIndex = 0;

  openModalBtn.addEventListener("click", function() {
      modal.style.display = "block";
      showImage(currentImageIndex);
  });

  closeModal.addEventListener("click", function() {
      modal.style.display = "none";
  });

  prevBtn.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
  });

  nextBtn.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
  });

  function showImage(index) {
      images.forEach(function(image, i) {
          if (i === index) {
              image.style.display = "block";
          } else {
              image.style.display = "none";
          }
      });
  }

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBc-x6EYv3LxISVVdZGW9m06CGxfz3VrPg",
    authDomain: "botane-e8214.firebaseapp.com",
    projectId: "botane-e8214",
    storageBucket: "botane-e8214.firebasestorage.app",
    messagingSenderId: "1073605193555",
    appId: "1:1073605193555:web:12ec22dbd8b3514df47ba6",
    measurementId: "G-PCE0XCW5X5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);
// Referencia al formulario
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  try {
    await addDoc(collection(db, "contactos"), {
      nombre: name,
      correo: email,
      asunto: subject,
      mensaje: message,
      fecha: new Date()
    });

    console.log("Mensaje enviado correctamente:");
    console.log({
        nombre: name,
        correo: email,
        asunto: subject,
        mensaje: message
  });

    alert("Tu mensaje se envió correctamente.");
    form.reset();
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    alert(" Hubo un error al enviar el mensaje.");
  }
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBc-x6EYv3LxISVVdZGW9m06CGxfz3VrPg",
  authDomain: "botane-e8214.firebaseapp.com",
  projectId: "botane-e8214",
  storageBucket: "botane-e8214.appspot.com",
  messagingSenderId: "1073605193555",
  appId: "1:1073605193555:web:12ec22dbd8b3514df47ba6",
  measurementId: "G-PCE0XCW5X5"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("subscribeForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("emailSub");
  const email = emailInput.value.trim();

  if (!email) {
    alert("Por favor, ingresa tu correo electrónico.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "suscripciones"), {
      correo: email,
      fecha: new Date()
    });

    console.log(`Correo guardado correctamente con ID: ${docRef.id}`);
    alert("🌱 ¡Gracias por unirte a Botanē! Te enviaremos actualizaciones pronto.");
    form.reset();
  } catch (error) {
    console.error("Error al guardar suscripción:", error);
    alert("Ocurrió un error al guardar tu correo. Intenta nuevamente.");
  }
});
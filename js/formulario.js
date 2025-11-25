import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

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
const form = document.getElementById("plantForm");
const buttbuscar = document.getElementById("buttbuscar");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("plant-name").value.trim();
  const tipo = document.getElementById("plant-type").value.trim();
  const riego = document.getElementById("watering-frequency").value.trim();
  const temperatura = document.getElementById("recommended-temperature").value.trim();
  const luz = document.querySelector('input[name="luz"]:checked').value;
  const notas = document.getElementById("additional-notes").value.trim();

  if (!nombre || !tipo || !riego || !temperatura) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  try {
    await addDoc(collection(db, "plantas"), {
      nombre,
      tipo,
      riego,
      temperatura,
      luz,
      notas,
      fechaRegistro: new Date()
    });

    console.log("Planta guardada correctamente:");
    console.log({
        nombre,
        tipo,
        riego,
        temperatura,
        luz,
        notas
  });

    alert("¡Planta registrada con éxito!");
    form.reset();
  } catch (error) {
    console.error("Error al guardar la planta:", error);
    alert("Ocurrió un error al guardar la información.");
  }
});

buttbuscar.addEventListener("click", async () => {
console.log("Buscando plantas tipo Interior...");
const q = query(collection(db, "plantas"), where("tipo", "==", "Interior"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
    
  });
});
  

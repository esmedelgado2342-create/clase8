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
//Elemento dom
const allplants = document.querySelector("#allplants");

    document.addEventListener("DOMContentLoaded", async () => {
        const q = query(collection(db, "plantas"), where("tipo", "==", "Interior"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    allplants.innerHTML += `
    <div class="plant-card">
        <img src="./image/${doc.data().nombre}.jpg"   alt"${doc.data().nombre}">
        <h3>${doc.data().nombre}</h3>
        <p>${doc.data().notas}</p>
    </div>
    `;


    });
});
    
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>ChildHood</h1>
        <p>14-Desember-2009</p>
      </header>

      <section className="photo-section">
        <img
          src="carissa.jpeg"
          alt="Foto masa kecil"
          className="child-photo"
        />
        <div className="photo-desc">
          <h2>Risa masa kecil era</h2>
          <p>
            haihaii ini risa kecill, dulu foto ini di ambil pas dulu
            aku ikut mamaku kerja lohhh, lucu gasi. 
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Risa 3 tahun era</p>
      </footer>
    </div>
  );
}

export default App;

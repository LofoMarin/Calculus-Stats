import React from "react";
import "./manual.css"; // Archivo CSS para estilos

const Theme = () => {
  return (
    <div className="manual-container">
      <h1 className="manual-title">Manual de Usuario</h1>
      <section className="section">
        <h2 className="section-title">Introducción</h2>
        <p>¡Bienvenido al manual de usuario! Aquí encontrarás toda la información necesaria para utilizar nuestra aplicación.</p>
      </section>
      <section className="section">
        <h2 className="section-title">Instalación</h2>
        <p>Para instalar la aplicación, sigue estos pasos...</p>
      </section>
      <section className="section">
        <h2 className="section-title">Funcionalidades</h2>
        <p>Descubre todas las funcionalidades que nuestra aplicación tiene para ofrecerte...</p>
      </section>
      <section className="section">
        <h2 className="section-title">Solución de Problemas</h2>
        <p>En esta sección encontrarás las soluciones a los problemas más comunes...</p>
      </section>
      <section className="section">
        <h2 className="section-title">Contacto</h2>
        <p>Si necesitas ayuda adicional, no dudes en ponerte en contacto con nuestro equipo de soporte...</p>
      </section>
    </div>
  );
};

export default Theme;

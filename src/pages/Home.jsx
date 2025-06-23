import { useState } from 'react'
// src/pages/Home.jsx
//import React from 'react';

export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: 'auto', padding: '2rem' }}>
      <h1>Bienvenue sur notre site</h1>
      <p>
        Ceci est la page d’accueil. Vous trouverez ici une description de la plateforme, 
        ses fonctionnalités et un lien pour vous connecter ou vous inscrire.
      </p>
    </main>
  );
}
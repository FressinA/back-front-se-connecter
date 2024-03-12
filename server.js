const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Endpoint pour gérer la connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Ici, vous pouvez vérifier les informations de connexion dans votre base de données ou autre
  // C'est juste un exemple de validation simplifié
  if (username === 'utilisateur' && password === 'motdepasse') {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Rediriger vers le tableau de bord ou afficher un message de succès
      window.location.href = '/dashboard';
    } else {
      // Afficher un message d'erreur
      document.getElementById('message').innerHTML = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
  })
  .catch(error => console.error('Erreur:', error));
});

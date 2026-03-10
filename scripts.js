// Animation typing 
if (document.querySelector('.typing')) {
  new Typed('.typing', {
    strings: ['Maria De Stephanis'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    backDelay: 1500,
  });
}

// envois des emails sans avoir besoin d'un serveur
emailjs.init("UA1wrMmE2-vIQ6YQB");

// Récupération des éléments du DOM
const form = document.getElementById('contact-form');      
const submitBtn = document.getElementById('submit-btn');   
const overlay = document.getElementById('send-overlay');  
const envelope = document.getElementById('envelope');      


form.addEventListener('submit', function(e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i>Envoi en cours...';

  // Paramètres : ID du service, ID du modèle, données du formulaire
  emailjs.sendForm('service_a7zxzjv', 'template_28hb7fl', form)
    .then(() => {
      lancerAnimation();
      form.reset();
    })
    .catch((error) => {
      console.error('Erreur EmailJS:', error);
      alert('Erreur: ' + JSON.stringify(error));
      // Réactiver le bouton
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right:8px;"></i>Envoyer';
    });
});

function lancerAnimation() {
  overlay.classList.add('active');
  setTimeout(() => {
    envelope.classList.add('open');
  }, 300);

  // Étape 3 : Fait envoler l'enveloppe après 1 seconde
  setTimeout(() => {
    envelope.classList.add('fly');
  }, 1000);

  setTimeout(() => {
    overlay.classList.remove('active');
    
    setTimeout(() => {
      envelope.classList.remove('open', 'fly');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane" style="margin-right:8px;"></i>Envoyer';
    }, 300);
  }, 3500);
}

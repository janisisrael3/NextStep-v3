/**
 * NEXTSTEP SYSTEM - Par Israel Jules-Christ SAHOUEGNON
 * Gestion de l'authentification et de la messagerie temps réel simulée.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. GESTION DE L'INSCRIPTION (Redirection vers Discussion) --- */
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Bloque le rechargement standard
            
            const btn = document.getElementById('btnSignup');
            const originalText = btn.innerHTML;
            
            // Animation "Pro" de chargement
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Initialisation de l\'accès...';
            btn.style.opacity = '0.8';
            btn.disabled = true;

            // Simulation de traitement (2 secondes) puis redirection
            setTimeout(() => {
                // Optionnel : petit message de succès avant de rediriger
                // alert("Bienvenue dans l'élite NextStep !"); 
                window.location.href = "discussion.html"; // LA REDIRECTION EST ICI
            }, 2000);
        });
    }

    /* --- 2. GESTION DU CHAT (Envoi avec Entrée) --- */
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') sendMessage();
        });
        // Focus automatique sur le champ de saisie
        chatInput.focus();
    }
});

/* --- FONCTION D'ENVOI DE MESSAGE (Style WhatsApp) --- */
function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatBox');
    const text = input.value.trim();

    if (text !== "") {
        // 1. Créer la bulle du message
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg', 'sent');
        
        // 2. Obtenir l'heure actuelle (HH:MM)
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

        // 3. Remplir le HTML du message avec texte + heure + ticks
        msgDiv.innerHTML = `
            ${text}
            <span class="msg-time">
                ${time} <i class="fas fa-check-double"></i>
            </span>
        `;

        // 4. Ajouter au chat et scroller vers le bas
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // 5. Vider le champ de saisie
        input.value = "";
        input.focus();
    }
}
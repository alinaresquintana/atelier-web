document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div>
      <a href="#accueil" style="text-decoration:none; color:inherit; display:block; padding-bottom: 25px; border-bottom: 1px solid var(--border); margin-bottom: 30px; text-align: center;">
        <img src="images/logo.webp" alt="Atelier Arte Logo" style="width: 85px; height: auto; object-fit: contain; margin: 0 auto 12px auto; display: block;">
        <div style="font-family: 'Instrument Serif', serif; font-size: 56px; line-height: 0.95; font-weight: 400; letter-spacing: -1px; margin-bottom: 8px;">
          Atelier Arte
        </div>
        <div data-i18n="brand_sub" style="font-size: 13px; text-transform: uppercase; letter-spacing: 5px; color: var(--accent); font-weight: 700;">
          Vich • Suisse
        </div>
      </a>

      <nav style="display: flex; flex-direction: column; gap: 18px;">
        <a href="#accueil" class="nav-link" style="text-decoration: none; color: var(--text); font-size: 15px; font-weight: 500; transition: color 0.2s;" data-i18n="nav_accueil">Accueil</a>
        
        <a href="#atelier" class="nav-link" style="text-decoration: none; color: var(--text); font-size: 15px; font-weight: 500; transition: color 0.2s;" data-i18n="nav_atelier">L'atelier</a>

        <!-- CURSOS DE PINTURA (ENFANTS, ADOS & ADULTES) -->
        <div>
          <div data-i18n="nav_cours_peinture" style="font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 8px;">
            Cours de peinture
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 14px; border-left: 2px solid var(--border);">
            <a href="#enfants" class="nav-link" style="text-decoration: none; color: var(--muted); font-size: 13.5px; font-weight: 400; transition: color 0.2s;" data-i18n="nav_enfants_sub1">Cours Enfants (5-10 ans)</a>
            <a href="#ados" class="nav-link" style="text-decoration: none; color: var(--muted); font-size: 13.5px; font-weight: 400; transition: color 0.2s;" data-i18n="nav_enfants_sub2">Ateliers Ados</a>
            <a href="#adultes" class="nav-link" style="text-decoration: none; color: var(--muted); font-size: 13.5px; font-weight: 400; transition: color 0.2s;" data-i18n="nav_adultes">Adultes</a>
          </div>
        </div>

        <!-- WORKSHOPS -->
        <div>
          <div data-i18n="nav_workshops" style="font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 8px;">
            Workshops
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px; padding-left: 14px; border-left: 2px solid var(--border);">
            <a href="#pouring" class="nav-link" style="text-decoration: none; color: var(--muted); font-size: 13.5px; font-weight: 400; transition: color 0.2s;" data-i18n="nav_workshops_sub1">Pouring</a>
            <a href="#textures" class="nav-link" style="text-decoration: none; color: var(--muted); font-size: 13.5px; font-weight: 400; transition: color 0.2s;" data-i18n="nav_workshops_sub2">Textures Picturales</a>
            <a href="#portraits" class="nav-link" style="text-decoration: none; color: var(--muted); font-size: 13.5px; font-weight: 400; transition: color 0.2s;" data-i18n="nav_workshops_sub3">Portrait</a>
          </div>
        </div>

        <!-- ATELIERS CRÉATIFS -->
        <a href="#creatives" class="nav-link" style="text-decoration: none; color: var(--text); font-size: 15px; font-weight: 500; transition: color 0.2s;" data-i18n="nav_creatives">Ateliers créatifs</a>

        <!-- À PROPOS -->
        <a href="#apropos" class="nav-link" style="text-decoration: none; color: var(--text); font-size: 15px; font-weight: 500; transition: color 0.2s;" data-i18n="nav_apropos">À propos</a>

        <!-- INFORMATIONS & TARIFS -->
        <a href="#tarifs" class="nav-link" style="text-decoration: none; color: var(--text); font-size: 15px; font-weight: 500; transition: color 0.2s;" data-i18n="nav_info_sub1">Inscriptions & Tarifs</a>
        
        <!-- CONTACTO -->
        <a href="#contact" class="nav-link" style="text-decoration: none; color: var(--text); font-size: 15px; font-weight: 500; transition: color 0.2s;" data-i18n="nav_contact">Contact</a>
        
        <a href="atelier-admin.html" style="text-decoration: none !important; color: inherit !important; font-family: inherit !important;" class="flex items-center space-x-2 py-1 hover:text-indigo-600 transition">
            <span>🔒</span>
            <span>Admin</span>
        </a>

        <!-- Teléfono y Email integrados al final del menú -->
        <div style="background: var(--bg); border: 1px solid var(--border); border-radius: 10px; padding: 12px; font-size: 12px; display: flex; flex-direction: column; gap: 6px; margin-top: 10px; margin-bottom: 0;">
          <a href="tel:+41799137055" style="color: var(--text); text-decoration: none; display: flex; align-items: center; gap: 8px; font-weight: 600;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +41 79 913 70 55
          </a>
          <a href="mailto:atelierartevich@gmail.com" style="color: var(--muted); text-decoration: none; display: flex; align-items: center; gap: 8px; font-weight: 500; word-break: break-all;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            atelierartevich@gmail.com
          </a>
        </div>
      </nav>
    </div>

    <!-- PIE DE PAGINA / CONTROLES INFERIORES -->
    <div style="border-top: 1px solid var(--border); padding-top: 15px; margin-top: auto; display: flex; flex-direction: column; gap: 12px;">
      
      <!-- Fila 1: Idiomas e Iconos de Redes Sociales -->
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
        <div style="display: flex; gap: 6px;">
          <button onclick="setLanguage('fr')" class="lang-btn active" data-lang="fr" style="display: flex; align-items: center; gap: 4px;">🇫🇷 FR</button>
          <button onclick="setLanguage('en')" class="lang-btn" data-lang="en" style="display: flex; align-items: center; gap: 4px;">🇬🇧 EN</button>
          <button onclick="setLanguage('it')" class="lang-btn" data-lang="it" style="display: flex; align-items: center; gap: 4px;">🇮🇹 IT</button>
          <button onclick="setLanguage('es')" class="lang-btn" data-lang="es" style="display: flex; align-items: center; gap: 4px;">🇪🇸 ES</button>
        </div>

        <!-- Redes Sociales Minimalistas -->
        <div style="display: flex; align-items: center; gap: 10px;">
          <a href="https://www.instagram.com/eloisarg_art/" target="_blank" rel="noopener" title="Instagram" style="color: var(--muted); display: flex; align-items: center; transition: color 0.2s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--muted)'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://m.facebook.com/100081551711285" target="_blank" rel="noopener" title="Facebook" style="color: var(--muted); display: flex; align-items: center; transition: color 0.2s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--muted)'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
      </div>

      <!-- Fila 2: Modo oscuro separado -->
      <div onclick="toggleTheme()" style="cursor: pointer; font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 6px; user-select: none; width: fit-content;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <span id="themeLabel" style="font-weight: 500;">Mode Sombre</span>
      </div>

      <!-- Fila 3: Copyright y Autoría -->
      <div style="font-size: 11px; color: var(--muted); line-height: 1.4; border-top: 1px dashed var(--border); padding-top: 10px;">
        <span>Atelier Arte Vich © 2026</span><br>
        <span>Design & Architecture by <a href="mailto:alinaresquintana@gmail.com" style="color: var(--accent); text-decoration: none; font-weight: 600;">Antonio Linares</a></span>
      </div>
    </div>
  `;
});

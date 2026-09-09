/**
 * email-templates.js
 * Centralización multilingüe de plantillas HTML y asuntos de correo para Atelier Arte Vich.
 * Idiomas soportados: 'fr' (por defecto), 'en', 'it', 'es'.
 */

const EmailTemplates = {
  // --- DICCIONARIO MULTILINGÜE ---
  i18n: {
    fr: {
      preRegSubject: "[Atelier Arte] Nouvelle pré-inscription :",
      preRegTitle: "Nouvelle Demande",
      preRegHeading: "Pré-inscription de",
      preRegGreeting: "Bonjour Eloísa,",
      preRegNotice: "Une nouvelle demande de pré-inscription a été soumise depuis la page web :",
      fieldCourse: "Cours sélectionné :",
      fieldStudent: "Élève :",
      fieldAdult: "N/A (Adulte)",
      fieldParent: "Nom du responsable :",
      fieldEmail: "Email :",
      fieldPhone: "Téléphone :",
      fieldComments: "Commentaires :",
      fieldNone: "Aucun",
      btnAdmin: "Accéder au Panneau Admin →",

      contactSubject: "[Atelier Arte] Nouveau message de contact :",
      contactTitle: "Contact Web",
      contactHeading: "Message de",
      contactNotice: "Vous avez reçu un nouveau message depuis le formulaire de contact :",
      fieldName: "Nom :",
      fieldMessage: "Message :",

      greetingClient: "Bonjour",
      confirmSubject: "Confirmation de votre inscription – Atelier Arte Vich",
      confirmTitle: "Inscription Confirmée",
      confirmHeading: "Bienvenue à l'Atelier Arte",
      confirmBody: "Nous avons le plaisir de vous confirmer votre inscription aux cours de l'Atelier Arte Vich !",
      confirmDetailsTitle: "Détails de votre réservation :",
      confirmFormula: "Formule :",
      confirmLocation: "Lieu :",
      confirmQuestions: "Si vous avez la moindre question, vous pouvez contacter Eloísa au",
      confirmRegards: "Cordialement,\nEloísa • Atelier Arte Vich",

      invoiceSubject: "Facture",
      invoiceTitle: "Facturation",
      invoiceHeading: "Facture N°",
      invoiceBody: "Veuillez trouver ci-joint votre facture concernant les cours à l'Atelier Arte Vich.",
      invoiceConcept: "Concept",
      invoiceAmount: "Montant",
      invoiceAttachedNote: "Le document PDF correspondant est joint à ce message.",
      invoiceThanks: "Merci pour votre confiance !\nAtelier Arte Vich",

      bonusLowSubject: "Rappel : Carnet de cours bientôt épuisé - Atelier Arte Vich",
      bonusLowTitle: "Suivi des Cours",
      bonusLowHeading: "Votre carnet touche à sa fin",
      bonusLowBody1: "Nous vous informons qu'il ne vous reste plus que",
      bonusLowBody2: "séance(s) disponible(s) sur votre carnet de cours",
      bonusLowBody3: "N'hésitez pas à nous contacter ou à passer à l'atelier si vous souhaitez le renouveler.",
      bonusLowRegards: "Cordialement,\nEloísa • Atelier Arte Vich",

      paymentReminderSubject: "Rappel : Facture en attente",
      paymentReminderTitle: "Rappel de Règlement",
      paymentReminderHeading: "Facture en attente de paiement",
      paymentReminderBody: "Sauf erreur ou omission de notre part, nous vous rappelons que la facture",
      paymentReminderPending: "est actuellement en attente de règlement :",
      paymentReminderAction: "Nous vous remercions de bien vouloir procéder au règlement dans les meilleurs délais."
    },

    en: {
      preRegSubject: "[Atelier Arte] New pre-registration:",
      preRegTitle: "New Request",
      preRegHeading: "Pre-registration from",
      preRegGreeting: "Hello Eloísa,",
      preRegNotice: "A new pre-registration request has been submitted from the website:",
      fieldCourse: "Selected course:",
      fieldStudent: "Student:",
      fieldAdult: "N/A (Adult)",
      fieldParent: "Contact name:",
      fieldEmail: "Email:",
      fieldPhone: "Phone:",
      fieldComments: "Comments:",
      fieldNone: "None",
      btnAdmin: "Access Admin Panel →",

      contactSubject: "[Atelier Arte] New contact message:",
      contactTitle: "Web Contact",
      contactHeading: "Message from",
      contactNotice: "You received a new message from the contact form:",
      fieldName: "Name:",
      fieldMessage: "Message:",

      greetingClient: "Hello",
      confirmSubject: "Enrollment Confirmation – Atelier Arte Vich",
      confirmTitle: "Enrollment Confirmed",
      confirmHeading: "Welcome to Atelier Arte",
      confirmBody: "We are delighted to confirm your registration for classes at Atelier Arte Vich!",
      confirmDetailsTitle: "Your booking details:",
      confirmFormula: "Option:",
      confirmLocation: "Location:",
      confirmQuestions: "If you have any questions, feel free to contact Eloísa at",
      confirmRegards: "Warm regards,\nEloísa • Atelier Arte Vich",

      invoiceSubject: "Invoice",
      invoiceTitle: "Invoicing",
      invoiceHeading: "Invoice N°",
      invoiceBody: "Please find attached your invoice for art classes at Atelier Arte Vich.",
      invoiceConcept: "Concept",
      invoiceAmount: "Amount",
      invoiceAttachedNote: "The corresponding PDF document is attached to this message.",
      invoiceThanks: "Thank you for your trust!\nAtelier Arte Vich",

      bonusLowSubject: "Reminder: Class pass running low - Atelier Arte Vich",
      bonusLowTitle: "Course Tracking",
      bonusLowHeading: "Your class pass is almost empty",
      bonusLowBody1: "We would like to inform you that you have only",
      bonusLowBody2: "session(s) left on your class pass",
      bonusLowBody3: "Feel free to contact us or visit the studio if you wish to renew it.",
      bonusLowRegards: "Best regards,\nEloísa • Atelier Arte Vich",

      paymentReminderSubject: "Reminder: Pending invoice",
      paymentReminderTitle: "Payment Reminder",
      paymentReminderHeading: "Invoice pending payment",
      paymentReminderBody: "Unless already paid, we kindly remind you that invoice",
      paymentReminderPending: "is currently pending payment:",
      paymentReminderAction: "Thank you for settling this payment at your earliest convenience."
    },

    it: {
      preRegSubject: "[Atelier Arte] Nuova pre-iscrizione:",
      preRegTitle: "Nuova Richiesta",
      preRegHeading: "Pre-iscrizione di",
      preRegGreeting: "Buongiorno Eloísa,",
      preRegNotice: "È stata inviata una nuova richiesta di pre-iscrizione dal sito web:",
      fieldCourse: "Corso selezionato:",
      fieldStudent: "Studente:",
      fieldAdult: "N/A (Adulto)",
      fieldParent: "Nome referente:",
      fieldEmail: "Email:",
      fieldPhone: "Telefono:",
      fieldComments: "Commenti:",
      fieldNone: "Nessuno",
      btnAdmin: "Accedi al Pannello Admin →",

      contactSubject: "[Atelier Arte] Nuovo messaggio di contatto:",
      contactTitle: "Contatto Web",
      contactHeading: "Messaggio da",
      contactNotice: "Hai ricevuto un nuovo messaggio dal modulo di contatto:",
      fieldName: "Nome:",
      fieldMessage: "Messaggio:",

      greetingClient: "Buongiorno",
      confirmSubject: "Conferma di iscrizione – Atelier Arte Vich",
      confirmTitle: "Iscrizione Confermata",
      confirmHeading: "Benvenuti all'Atelier Arte",
      confirmBody: "Siamo lieti di confermare la tua iscrizione ai corsi dell'Atelier Arte Vich!",
      confirmDetailsTitle: "Dettagli della prenotazione:",
      confirmFormula: "Formula:",
      confirmLocation: "Luogo:",
      confirmQuestions: "Per qualsiasi domanda, puoi contattare Eloísa al numero",
      confirmRegards: "Cordiali saluti,\nEloísa • Atelier Arte Vich",

      invoiceSubject: "Fattura",
      invoiceTitle: "Fatturazione",
      invoiceHeading: "Fattura N°",
      invoiceBody: "In allegato trovi la fattura relativa ai corsi presso l'Atelier Arte Vich.",
      invoiceConcept: "Concetto",
      invoiceAmount: "Importo",
      invoiceAttachedNote: "Il documento PDF corrispondente è allegato a questo messaggio.",
      invoiceThanks: "Grazie per la tua fiducia!\nAtelier Arte Vich",

      bonusLowSubject: "Rammento: Tessera corsi in esaurimento - Atelier Arte Vich",
      bonusLowTitle: "Monitoraggio Corsi",
      bonusLowHeading: "La tua tessera sta per terminare",
      bonusLowBody1: "Ti informiamo che ti rimangono solo",
      bonusLowBody2: "lezione/i disponibile/i sulla tua tessera",
      bonusLowBody3: "Non esitare a contattarci se desideri rinnovarla.",
      bonusLowRegards: "Cordiali saluti,\nEloísa • Atelier Arte Vich",

      paymentReminderSubject: "Rammento: Fattura in attesa",
      paymentReminderTitle: "Rammento di Pagamento",
      paymentReminderHeading: "Fattura in attesa di pagamento",
      paymentReminderBody: "Salvo errore, ti ricordiamo che la fattura",
      paymentReminderPending: "è attualmente in attesa di pagamento:",
      paymentReminderAction: "Ti ringraziamo per voler procedere al saldo al più presto."
    },

    es: {
      preRegSubject: "[Atelier Arte] Nueva pre-inscripción:",
      preRegTitle: "Nueva Solicitud",
      preRegHeading: "Pre-inscripción de",
      preRegGreeting: "Hola Eloísa,",
      preRegNotice: "Se ha enviado una nueva solicitud de pre-inscripción desde la web:",
      fieldCourse: "Curso seleccionado:",
      fieldStudent: "Alumno/a:",
      fieldAdult: "N/A (Adulto)",
      fieldParent: "Nombre del responsable:",
      fieldEmail: "Email:",
      fieldPhone: "Teléfono:",
      fieldComments: "Comentarios:",
      fieldNone: "Ninguno",
      btnAdmin: "Acceder al Panel Admin →",

      contactSubject: "[Atelier Arte] Nuevo mensaje de contacto:",
      contactTitle: "Contacto Web",
      contactHeading: "Mensaje de",
      contactNotice: "Has recibido un nuevo mensaje desde el formulario de contacto:",
      fieldName: "Nombre:",
      fieldMessage: "Mensaje:",

      greetingClient: "Hola",
      confirmSubject: "Confirmación de matrícula – Atelier Arte Vich",
      confirmTitle: "Inscripción Confirmada",
      confirmHeading: "Bienvenido/a al Atelier Arte",
      confirmBody: "¡Nos complace confirmar tu inscripción en los cursos del Atelier Arte Vich!",
      confirmDetailsTitle: "Detalles de tu reserva:",
      confirmFormula: "Modalidad:",
      confirmLocation: "Lugar:",
      confirmQuestions: "Si tienes cualquier duda, puedes contactar con Eloísa en el",
      confirmRegards: "Un cordial saludo,\nEloísa • Atelier Arte Vich",

      invoiceSubject: "Factura",
      invoiceTitle: "Facturación",
      invoiceHeading: "Factura N°",
      invoiceBody: "Adjunto encontrarás tu factura correspondiente a los cursos del Atelier Arte Vich.",
      invoiceConcept: "Concepto",
      invoiceAmount: "Importe",
      invoiceAttachedNote: "El documento PDF correspondiente está adjunto a este mensaje.",
      invoiceThanks: "¡Muchas gracias por tu confianza!\nAtelier Arte Vich",

      bonusLowSubject: "Recordatorio: Bono de clases a punto de agotarse - Atelier Arte Vich",
      bonusLowTitle: "Seguimiento de Clases",
      bonusLowHeading: "Tu bono está a punto de finalizar",
      bonusLowBody1: "Te informamos de que solo te quedan",
      bonusLowBody2: "clase(s) disponible(s) en tu bono de curso",
      bonusLowBody3: "No dudes en contactarnos o pasarte por el estudio si deseas renovarlo.",
      bonusLowRegards: "Un saludo,\nEloísa • Atelier Arte Vich",

      paymentReminderSubject: "Recordatorio: Factura pendiente de pago",
      paymentReminderTitle: "Recordatorio de Pago",
      paymentReminderHeading: "Factura pendiente de cobro",
      paymentReminderBody: "Salvo error u omisión, te recordamos que la factura",
      paymentReminderPending: "se encuentra actualmente pendiente de pago:",
      paymentReminderAction: "Agradecemos que procedas a su abono lo antes posible."
    }
  },

  // Normalizador de idioma para tolerar códigos tipo 'es-ES', 'FR', etc.
  _getDict(lang) {
    if (!lang) return this.i18n['fr'];
    const code = String(lang).toLowerCase().split('-')[0];
    return this.i18n[code] || this.i18n['fr'];
  },

  _brandHeader(titleTag, heading) {
    return `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border: 1px solid #e8e8ed; border-radius: 12px;">
    <p style="color: #e63500; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px 0;">${titleTag}</p>
    <h2 style="color: #111115; font-size: 20px; margin: 0 0 20px 0; font-family: Georgia, serif;">${heading}</h2>
  `;
  },

  _brandFooter() {
    return `
      </div>
      <div style="background: #f4f4f6; padding: 20px 30px; border-top: 1px solid #e8e8ed; text-align: center; font-size: 12px; color: #86868b;">
        <p style="margin: 0 0 6px 0; font-weight: 600; color: #111115;">Atelier Arte Vich • Grand'Rue 6, 1267 Vich (Suisse)</p>
        <p style="margin: 0;">Tel: +41 79 913 70 55 | Email: info@atelierartvich.com</p>
      </div>
    </div>
    `;
  },

  // --- 1. Alerta Pre-inscripción (Notificación interna para Eloísa, por defecto 'fr') ---
  newPreRegistrationAlert(data, lang = 'fr') {
    const t = this._getDict(lang);
    const { name, className, childName, email, phone, comments } = data;
    return {
      subject: `${t.preRegSubject} ${name}`,
      html: `
        ${this._brandHeader(t.preRegTitle, `${t.preRegHeading} ${name}`)}
          <p style="margin-top: 0;">${t.preRegGreeting}</p>
          <p>${t.preRegNotice}</p>
          <div style="background: #f9f9fb; border-left: 4px solid #e63500; padding: 16px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0;"><strong>${t.fieldCourse}</strong> ${className || 'N/A'}</p>
            <p style="margin: 0 0 8px 0;"><strong>${t.fieldStudent}</strong> ${childName || t.fieldAdult}</p>
            <p style="margin: 0 0 8px 0;"><strong>${t.fieldParent}</strong> ${name}</p>
            <p style="margin: 0 0 8px 0;"><strong>${t.fieldEmail}</strong> <a href="mailto:${email}" style="color: #e63500;">${email}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>${t.fieldPhone}</strong> ${phone}</p>
            <p style="margin: 0;"><strong>${t.fieldComments}</strong><br>${comments || t.fieldNone}</p>
          </div>
          <div style="text-align: center; margin-top: 25px;">
            <a href="https://atelierartevich.ch/admin.html" style="background: #111115; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: 600; font-size: 13px; display: inline-block;">${t.btnAdmin}</a>
          </div>
        ${this._brandFooter()}
      `
    };
  },

  // --- 2. Alerta Contacto (Notificación interna para Eloísa, por defecto 'fr') ---
  newContactMessageAlert(data, lang = 'fr') {
    const t = this._getDict(lang);
    const { name, email, message } = data;
    return {
      subject: `${t.contactSubject} ${name}`,
      html: `
        ${this._brandHeader(t.contactTitle, `${t.contactHeading} ${name}`)}
          <p style="margin-top: 0;">${t.preRegGreeting}</p>
          <p>${t.contactNotice}</p>
          <div style="background: #f9f9fb; border-left: 4px solid #e63500; padding: 16px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0;"><strong>${t.fieldName}</strong> ${name}</p>
            <p style="margin: 0 0 8px 0;"><strong>${t.fieldEmail}</strong> <a href="mailto:${email}" style="color: #e63500;">${email}</a></p>
            <p style="margin: 0;"><strong>${t.fieldMessage}</strong><br>${(message || '').replace(/\n/g, '<br>')}</p>
          </div>
        ${this._brandFooter()}
      `
    };
  },

  // --- 3. Confirmación Inscripción (Cliente) ---
  registrationConfirmationClient(data, lang = 'fr') {
    const t = this._getDict(lang);
    const { name, className, rateName } = data;
    return {
      subject: t.confirmSubject,
      html: `
        ${this._brandHeader(t.confirmTitle, t.confirmHeading)}
          <p style="margin-top: 0;">${t.greetingClient} ${name},</p>
          <p>${t.confirmBody}</p>
          <div style="background: #f9f9fb; border: 1px solid #e8e8ed; border-radius: 10px; padding: 20px; margin: 20px 0;">
            <h4 style="margin: 0 0 12px 0; color: #e63500; font-size: 15px;">${t.confirmDetailsTitle}</h4>
            <p style="margin: 4px 0;"><strong>${t.fieldCourse}</strong> ${className}</p>
            <p style="margin: 4px 0;"><strong>${t.confirmFormula}</strong> ${rateName}</p>
            <p style="margin: 4px 0;"><strong>${t.confirmLocation}</strong> Grand'Rue 6, 1267 Vich</p>
          </div>
          <p>${t.confirmQuestions} <strong>+41 79 913 70 55</strong>.</p>
          <p style="margin-top: 24px; font-weight: 600;">${t.confirmRegards}</p>
        ${this._brandFooter()}
      `
    };
  },

  // --- 4. Factura con Adjunto (Cliente) ---
  invoiceEmail(data, lang = 'fr') {
    const t = this._getDict(lang);
    const { name, invoiceNumber, concept, amount } = data;
    return {
      subject: `${t.invoiceSubject} ${invoiceNumber} - Atelier Arte Vich`,
      html: `
        ${this._brandHeader(t.invoiceTitle, `${t.invoiceHeading} ${invoiceNumber}`)}
          <p style="margin-top: 0;">${t.greetingClient} ${name},</p>
          <p>${t.invoiceBody}</p>
          <table style="width: 100%; background: #f9f9fb; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #e8e8ed;">
            <tr>
              <td>
                <span style="font-size: 11px; color: #86868b; text-transform: uppercase;">${t.invoiceConcept}</span><br>
                <strong style="font-size: 15px; color: #111115;">${concept}</strong>
              </td>
              <td style="text-align: right;">
                <span style="font-size: 11px; color: #86868b; text-transform: uppercase;">${t.invoiceAmount}</span><br>
                <span style="font-size: 20px; font-weight: bold; color: #e63500;">${amount} CHF</span>
              </td>
            </tr>
          </table>
          <p style="font-size: 13px; color: #66666d;">${t.invoiceAttachedNote}</p>
          <p style="margin-top: 24px; font-weight: 600;">${t.invoiceThanks}</p>
        ${this._brandFooter()}
      `
    };
  },

  // --- 5. Recordatorio de Bono Bajo (Cliente) ---
  bonusLowReminder(data, lang = 'fr') {
    const t = this._getDict(lang);
    const { name, invoiceNumber, remaining } = data;
    return {
      subject: t.bonusLowSubject,
      html: `
        ${this._brandHeader(t.bonusLowTitle, t.bonusLowHeading)}
          <p style="margin-top: 0;">${t.greetingClient} ${name},</p>
          <p>${t.bonusLowBody1} <strong>${remaining}</strong> ${t.bonusLowBody2} <strong>${invoiceNumber}</strong>.</p>
          <p>${t.bonusLowBody3}</p>
          <p style="margin-top: 24px; font-weight: 600;">${t.bonusLowRegards}</p>
        ${this._brandFooter()}
      `
    };
  },

  // --- 6. Recordatorio de Pago (Cliente) ---
  paymentReminder(data, lang = 'fr') {
    const t = this._getDict(lang);
    const { name, invoiceNumber, concept, amount } = data;
    return {
      subject: `${t.paymentReminderSubject} (${invoiceNumber}) - Atelier Arte Vich`,
      html: `
        ${this._brandHeader(t.paymentReminderTitle, t.paymentReminderHeading)}
          <p style="margin-top: 0;">${t.greetingClient} ${name},</p>
          <p>${t.paymentReminderBody} <strong>${invoiceNumber}</strong> ${t.paymentReminderPending}</p>
          <div style="background: #f9f9fb; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #e8e8ed;">
            <p style="margin: 0 0 6px 0;"><strong>${t.invoiceConcept} :</strong> ${concept}</p>
            <p style="margin: 0;"><strong>${t.invoiceAmount} :</strong> ${amount} CHF</p>
          </div>
          <p>${t.paymentReminderAction}</p>
          <p style="margin-top: 24px; font-weight: 600;">${t.bonusLowRegards}</p>
        ${this._brandFooter()}
      `
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EmailTemplates;
}
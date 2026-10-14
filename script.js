// Multi-step registration logic, autofill, document handling, QR and simulated payment
(function(){
  // Helper to show/hide steps
  function showStep(n) {
    document.querySelectorAll('.step').forEach(function(f){
      f.classList.toggle('hidden', f.getAttribute('data-step') !== String(n));
    });
    document.querySelectorAll('.step-ind').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(n));
    });
  }

  function saveToStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }
  function getFromStorage(key){
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : null;
  }

  // Predefined lookup for roll number
  const rollLookup = {
    '2603209373': { full_name: 'ANNI PRIYA', neet_marks: '596', neet_rank: '11057' }
  };

  // Elements
  const step1Next = document.getElementById('step1Next');
  const step2Back = document.getElementById('step2Back');
  const step2Next = document.getElementById('step2Next');
  const step3Back = document.getElementById('step3Back');
  const step3Next = document.getElementById('step3Next');
  const step4Back = document.getElementById('step4Back');
  const confirmPayment = document.getElementById('confirmPayment');

  const neetRollInput = document.getElementById('neet_roll_number');
  const applicationInput = document.getElementById('application_number');

  const fullNameInput = document.getElementById('full_name');
  const marksInput = document.getElementById('neet_marks');
  const rankInput = document.getElementById('neet_rank');
  const dobInput = document.getElementById('date_of_birth');
  const categoryInput = document.getElementById('category');
  const genderInput = document.getElementById('gender');
  const mobileInput = document.getElementById('mobile_number');
  const emailInput = document.getElementById('email');
  const addressInput = document.getElementById('address');

  const docScore = document.getElementById('doc_score');
  const docBirth = document.getElementById('doc_birth');
  const docAdmit = document.getElementById('doc_admit');
  const notesInput = document.getElementById('notes');

  const paymentQrImg = document.getElementById('paymentQr');

  // initialize
  showStep(1);

  // Auto-fill behavior when continuing from step 1
  step1Next.addEventListener('click', function(){
    const roll = (neetRollInput.value || '').trim();
    if(!roll){ alert('Please enter your NEET roll number.'); return; }

    // store basic
    saveToStorage('mcc_registration_roll', roll);
    saveToStorage('mcc_registration_application', applicationInput.value || '');

    // Check lookup
    if(rollLookup[roll]){
      const info = rollLookup[roll];
      // Pre-fill next step fields
      fullNameInput.value = info.full_name;
      marksInput.value = info.neet_marks;
      rankInput.value = info.neet_rank;
      // Save to storage as well
      saveToStorage('mcc_registration_full_name', info.full_name);
      saveToStorage('mcc_registration_neet_marks', info.neet_marks);
      saveToStorage('mcc_registration_neet_rank', info.neet_rank);
    }

    showStep(2);
  });

  step2Back.addEventListener('click', function(){ showStep(1); });

  step2Next.addEventListener('click', function(){
    // validate minimal
    if(!fullNameInput.value.trim()){ alert('Please enter full name.'); return; }
    if(!marksInput.value.trim()){ alert('Please enter NEET marks.'); return; }
    if(!rankInput.value.trim()){ alert('Please enter NEET rank.'); return; }
    // save
    saveToStorage('mcc_registration_full_name', fullNameInput.value.trim());
    saveToStorage('mcc_registration_neet_marks', marksInput.value.trim());
    saveToStorage('mcc_registration_neet_rank', rankInput.value.trim());
    saveToStorage('mcc_registration_dob', dobInput.value || '');
    saveToStorage('mcc_registration_category', categoryInput.value || '');
    saveToStorage('mcc_registration_gender', genderInput.value || '');
    saveToStorage('mcc_registration_mobile', mobileInput.value || '');
    saveToStorage('mcc_registration_email', emailInput.value || '');
    saveToStorage('mcc_registration_address', addressInput.value || '');

    showStep(3);
  });

  step3Back.addEventListener('click', function(){ showStep(2); });

  // Capture file names (we don't upload in this static demo)
  function handleFileInput(inputEl, storageKey){
    if(!inputEl) return;
    inputEl.addEventListener('change', function(){
      const file = inputEl.files && inputEl.files[0];
      if(file){
        saveToStorage(storageKey, { name: file.name, size: file.size, type: file.type });
      } else {
        localStorage.removeItem(storageKey);
      }
    });
  }
  handleFileInput(docScore, 'mcc_doc_score');
  handleFileInput(docBirth, 'mcc_doc_birth');
  handleFileInput(docAdmit, 'mcc_doc_admit');

  step3Next.addEventListener('click', function(){
    // save notes
    saveToStorage('mcc_registration_notes', notesInput.value || '');
    // prepare payment QR payload
    const roll = getFromStorage('mcc_registration_roll') || '';
    const amount = '1000.00';
    const paymentPayload = 'MCC|PAY|AMOUNT=' + amount + '|ROLL=' + roll + '|DATE=' + new Date().toISOString();
    const qrUrl = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=' + encodeURIComponent(paymentPayload);
    paymentQrImg.src = qrUrl;

    showStep(4);
  });

  step4Back.addEventListener('click', function(){ showStep(3); });

  // Confirm payment - simulate transaction
  confirmPayment.addEventListener('click', function(){
    // Simple simulation of payment verification
    const txn = 'TXN' + Math.floor(100000 + Math.random()*900000);
    saveToStorage('mcc_payment_txn', txn);
    saveToStorage('mcc_payment_amount', '1000.00');
    saveToStorage('mcc_registration_completed_at', new Date().toISOString());

    // After payment, redirect to confirmation/thank you page
    window.location.href = 'thank-you.html';
  });

  // If user returns to registration page and storage has values, pre-populate
  function preloadFields(){
    const roll = getFromStorage('mcc_registration_roll');
    if(roll) neetRollInput.value = roll;
    const app = getFromStorage('mcc_registration_application');
    if(app) applicationInput.value = app;

    const full = getFromStorage('mcc_registration_full_name');
    if(full) fullNameInput.value = full;
    const marks = getFromStorage('mcc_registration_neet_marks');
    if(marks) marksInput.value = marks;
    const rank = getFromStorage('mcc_registration_neet_rank');
    if(rank) rankInput.value = rank;

    const dob = getFromStorage('mcc_registration_dob'); if(dob) dobInput.value = dob;
    const cat = getFromStorage('mcc_registration_category'); if(cat) categoryInput.value = cat;
    const gen = getFromStorage('mcc_registration_gender'); if(gen) genderInput.value = gen;
    const mob = getFromStorage('mcc_registration_mobile'); if(mob) mobileInput.value = mob;
    const em = getFromStorage('mcc_registration_email'); if(em) emailInput.value = em;
    const addr = getFromStorage('mcc_registration_address'); if(addr) addressInput.value = addr;
  }

  preloadFields();

})();

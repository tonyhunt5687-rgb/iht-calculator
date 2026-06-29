(function() {
  const CORRECT_PASSWORD = 'ihtsolutions2026';
  const SESSION_KEY = 'iht_password_verified';

  function isPasswordVerified() {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }

  function markPasswordVerified() {
    sessionStorage.setItem(SESSION_KEY, 'true');
  }

  function verifyPassword(enteredPassword) {
    return enteredPassword === CORRECT_PASSWORD;
  }

  function showPasswordModal() {
    const modal = document.getElementById('password-modal');
    if (modal) {
      modal.style.display = 'flex';
      const input = document.getElementById('password-input');
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
    }
  }

  function hidePasswordModal() {
    const modal = document.getElementById('password-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  function hideMainContent() {
    document.body.style.visibility = 'hidden';
  }

  function showMainContent() {
    document.body.style.visibility = 'visible';
  }

  function handlePasswordSubmit() {
    const input = document.getElementById('password-input');
    const errorMsg = document.getElementById('password-error');

    if (!input) return;

    const enteredPassword = input.value.trim();

    if (verifyPassword(enteredPassword)) {
      markPasswordVerified();
      hidePasswordModal();
      showMainContent();
      input.value = '';
    } else {
      if (errorMsg) {
        errorMsg.style.display = 'block';
      }
      input.value = '';
      input.focus();
    }
  }

  function initPasswordProtection() {
    if (isPasswordVerified()) {
      showMainContent();
      return;
    }

    hideMainContent();
    showPasswordModal();

    const submitBtn = document.getElementById('password-submit');
    const input = document.getElementById('password-input');

    if (submitBtn) {
      submitBtn.addEventListener('click', handlePasswordSubmit);
    }

    if (input) {
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          handlePasswordSubmit();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPasswordProtection);
  } else {
    initPasswordProtection();
  }
})();

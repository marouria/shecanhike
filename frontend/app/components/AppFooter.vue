<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h2 class="footer-logo">SheCanHike</h2>
        <div class="footer-socials">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="TikTok">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#577067" stroke-width="2"/>
              <circle cx="17.5" cy="6.5" r="1" fill="#577067"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#577067"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">© 2025 Shecanhike. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <span class="footer-separator">|</span>
          <a href="#" class="footer-link">Terms and Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #577067;
  padding: 3rem 0 2rem;
  color: white;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.footer-socials {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.social-link {
  color: white;
  transition: opacity 0.2s;
}

.social-link:hover {
  opacity: 0.7;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-copyright {
  font-size: 0.875rem;
  color: white;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.footer-link {
  font-size: 0.875rem;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 0.7;
}

.footer-separator {
  color: white;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>

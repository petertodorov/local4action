<template>
  <footer class="footer-wrapper">
    <article class="footer-logo-container">
      <img src="/main-logo.jpg" alt="local four action" />
    </article>

    <article class="footer-logo-container">
      <img src="/uclg-logo.png" alt="local four action" />
    </article>

    <article class="footer-newsletter-container">
      <form class="newsletter-form" action="#" method="post">
        <label for="email-input">Newsletter subscription</label>
        <input
          id="email-input"
          name="email"
          type="email"
          placeholder="yourEmail@domain.com"
          required
        />
        <button type="submit">Send</button>
      </form>
    </article>

    <article class="footer-contacts-container">
      <section class="address-container">
        <p>some address here</p>
        <p>08002 Barcelona (Spain)</p>
      </section>
      <section class="email-container">
        <a href="mailto:info@domain.org">info@domain.org</a>
      </section>
      <a to="tel:+34 999 111 111">P: +34 999 111 111</a>
      <a to="tel:+34 999 777 888">F:+34 999 777 888</a>
    </article>

    <article class="footer-misc-container">
      <a :href="acessibilityUrl">Accessibility</a>
      <a :href="legalUrl">Legal notice</a>
      <a href="#">Cookies</a>
      <a href="#">Privacy</a>
      <a href="#">Visual Identity</a>
      <a href="#">Sitemap</a>
    </article>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      acessibilityUrl: 'http://www.uclg-decentralisation.org/en/accessibility',
      legalUrl: 'http://www.uclg-decentralisation.org/en/legal',
    }
  },
}
</script>

export default defineNuxtPlugin((nuxtApp) => {
  const loadMyPlugin = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtualPageview",
      pageUrl: window.location.href,
      pageTitle: document.title,
    });
  };

  nuxtApp.hook("page:finish", loadMyPlugin);
});

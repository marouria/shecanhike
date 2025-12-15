export default defineEventHandler((event) => {
  const url = getRequestURL(event);

  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    return sendRedirect(
      event,
      url.pathname.replace(/\/+$/, "") + url.search,
      301
    );
  }
});

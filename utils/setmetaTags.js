export function setMetaTags(metatags) {
  for (let metatag of metatags) {
    if (metatag[1] === "title") {
      useHead({
        title: metatag[0]["#attributes"]["content"],
      });
    }
    useHead({
      [metatag[0]["#tag"]]: metatag[0]["#attributes"]
    })
    // Вы можете добавить логику для других метатегов здесь
  }
}

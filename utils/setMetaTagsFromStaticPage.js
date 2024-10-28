import config from "@/config.js";
export async function setMetaTagsFromStaticPage(url) {
  const { data } = await useLazyAsyncData(
    "rental",

    () =>
      $fetch(`${url}?_format=json`, {
        baseURL: config.drupal_url,
      }),

    {
      transform: (res) => {
        setMetaTags(res.metatag.html_head);
      },
    }
  );
}

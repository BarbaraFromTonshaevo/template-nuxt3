export default defineNuxtRouteMiddleware(async (to, from) => {
    if(to.path !== '/') {
      try {
        const response = await fetch(useDomain(to.path));
        if (response.redirected) {
          let url = response.url.split("?", 2);
          let urlArr = url[0].split("/");
          console.log('middleware redirected')
          return navigateTo('/' + urlArr.slice(3).join('/'), {redirectCode: 301})
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    }
  });
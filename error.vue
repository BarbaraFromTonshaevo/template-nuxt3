<template>
  <NuxtLayout>
    <main>
      <section class="not-found" v-if="error.statusCode == 404">
        <div class="not-found__container container">
          <h1 class="not-found__title page-title"></h1>
          <p class="not-found__descr"></p>
          <NuxtLink to="/" class="not-found__btn btn btn--prim">HOME</NuxtLink>
        </div>
      </section>
      <section class="not-found" v-else>
        <div class="not-found__container container">
          <h1 class="not-found__title page-title">{{ error.statusCode }}</h1>
          <p class="not-found__descr">{{ error.message }}</p>
          <NuxtLink
            :to="localePath('/')"
            class="not-found__btn btn btn--prim"
            >HOME</NuxtLink
          >
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>

<style lang="scss">
.not-found {
  &__container {
    min-height: calc(100vh - 100px - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 60px;
    @media (max-width: 767px) {
      gap: 30px;
    }
  }
  &__btn {
    margin-top: 20px;
  }
  &__title {
    margin-bottom: 0;
  }
}
</style>

<template>
  <div @wheel="wheelActions($event)">
    <Header :isHidden="isHiddenHeader"></Header>
    <main class="main">
      <slot/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  props: ['mainInfo'],
  data: function(){
    return{
      isAdulthoodVerified: false,
      isAdultCookie: useCookie('adult'),
      isHiddenHeader: false,
      dataBase: [],
      route: useRoute(),
    }
  },
  created(){
    if(this.isAdultCookie){
      this.isAdulthoodVerified = true;
    }else{
      this.isAdulthoodVerified = false;
    }
  },
  mounted(){
    document.body.classList.add('hidden-scroll');
  },
  methods: {
    closeAdulthood(){
      this.isAdultCookie = true;
      this.isAdulthoodVerified = true;
    },
    wheelActions(event){
      if(event.deltaY > 0){
        this.isHiddenHeader = true;
      }else{
        this.isHiddenHeader = false;
      }
    },
  },
}
</script>

<style lang="scss">

</style>
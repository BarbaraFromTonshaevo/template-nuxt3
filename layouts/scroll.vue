<template>
    <div class="scroller">
        <Header></Header>
        <main class="main">
            <slot/>
        </main>
        <Footer></Footer>
        <Adulthood :state="!isAdulthoodVerified" @closeAdulthood="closeAdulthood"></Adulthood>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar';
export default {
  data: function(){
    return{
      isAdulthoodVerified: false,
      isAdultCookie: useCookie('adult'),
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
    Scrollbar.init(this.$el);
  },
  methods: {
    closeAdulthood(){
      this.isAdultCookie = true;
      this.isAdulthoodVerified = true;
    }
  }
}
</script>

<style lang="scss">
.main{
    min-height: 100vh;
    padding-top: calc(var(--header-height) + var(--header-margin) + 50px);
}
.scroller{
  width: 100vw;
  height: 100vh;
  overflow: auto;

  .scrollbar-track{
    background: transparent;
  }

  .scrollbar-thumb{
    cursor: pointer;
  }
}
</style>
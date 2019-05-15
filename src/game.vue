<template>

  <div :id="id"></div>

</template>

<script>

  export default{
    data(){
      return {
        id: 'game',

      }
    },
    mounted(){
      console.log(document.getElementById(this.id));
    }
  }

</script>

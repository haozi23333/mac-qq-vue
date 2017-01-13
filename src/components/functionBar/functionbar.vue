<template>
    <div class="functionBar">
        <window-control></window-control>
        <search></search>
    </div>
</template>
<script>
  import windowControl from './windowControl.vue'
  import search from './search.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
        windowControl,
        search
    }
  }
</script>


<style scoped>
.functionBar {
    height: 50px;
    width: 100%;
    background: #efeced;

    border-radius: 5px;
}
</style>

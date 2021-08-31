<template>
    <button>{{ itemlabel }}</button>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['strInfo'],
  data() {
    return {
      itemlabel: this.strInfo,
    }
  },
  setup() {
    
  },
})
</script>

<style scoped>
  button{
      width: auto;
      height: 50px;
      width: 100%;
      margin: 20px auto;
      border: solid 1px #999;
      border-radius: 10px;
  }
</style>
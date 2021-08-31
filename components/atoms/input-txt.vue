<template>
  <input type="text" :name="itemname" :placeholder="itemplaceholder" />
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['name','placeholder'],
  data() {
    return {
      itemname: this.name,
      itemplaceholder: this.placeholder,
    }
  },
  setup() {
    
  },
})
</script>

<style scoped>
  input{
      box-sizing: border-box;
      border: solid 1px #222;
      border-radius: 5px;
      line-height: 14pt;
      height: calc(14pt + 20px);
      padding: 1rem 5px;
      margin-left: 20px;
  }
</style>
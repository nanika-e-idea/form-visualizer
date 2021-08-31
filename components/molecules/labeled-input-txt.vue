<template>
    <div class="form_item"><AtomsLabelCommon :label="info[0]" /><AtomsInputTxt :name="info[1]" :placeholder="info[2]" /></div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['arrInfo'],
  data() {
    return{
      info: this.arrInfo,
    }
  },
  setup() {
    
  },
})
</script>

<style scoped>
  .form_item{
      margin: 10px auto;
  }
</style>
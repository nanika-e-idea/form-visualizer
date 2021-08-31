<template>
    <label>{{ itemlabel }}</label>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: ['label'],
    data() {
        return {
            itemlabel: this.label,
        }
    },
    setup() {
        
    },
})
</script>

<template>
    <div id="demo">
        <div class="entry"><OrganismsEntrySheet /></div>
        <div class="preview"><OrganismsPreview /></div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
    },
})
</script>
<style lang="scss">
html{
    height: 100%;
    font-size: 12pt;
}
body{
    height: 100%;
    margin: 0;
}
#__nuxt,
#__layout{
    height: 100%;
    margin: 0;
}
#demo{
    display: flex;
    width: 100%;
    min-height: 100%;
}
.entry{
    display: block;
    width: 30%;
    background-color: #eee;
}
.preview{
    display: block;
    width: 70%;
    background-color: #aaa;
}
</style>

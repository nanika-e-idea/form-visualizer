<template>
    <div>
        <span>入力項目がサイト上のどこに表示されるのかをプレビュー</span>
        <div class="wrapper">
            <OrganismsCommonHeader/>
            <div class="flex-container">
                <div class="main">
                    <h3>main content</h3>
                </div>
                <div class="sub">
                    <OrganismsVerticalNav />
                </div>
            </div>
            <OrganismsCommonFooter/>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
    },
})
</script>
<style scoped>
.flex-container{
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    width: 100%;
}
.main{
    display: block;
    background-color: #fff;
    width: 73%;
}
.sub{
    width: 25%;
    background-color: #222;
    color: #fff;
}
</style>
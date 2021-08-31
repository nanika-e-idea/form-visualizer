<template>
  <div id="entry">
    <p>入力フォームにエントリーシート各項目を表示</p>
    <MoleculesLabeledInputTxt :arrInfo="info1" />
    <MoleculesLabeledInputTxt :arrInfo="info2" />
    <MoleculesLabeledInputTxt :arrInfo="info3" />
    <MoleculesLabeledInputTxt :arrInfo="info4" />
    <AtomsButtonPrimary :strInfo="info5"/>
    <p>→ メール登録機能等を利用してBacklogへ課題、コメント登録できれば理想的<br>
      次点としてGoole Forms経由のスプレッドシート<br>（Microsoft365周りで同様のことが可能ならそちらで）<br>
      最悪でも、JSON,CSV出力</p>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      info1:['項目1','txt1','入力してください'],
      info2:['項目2','txt2','入力してください'],
      info3:['項目3','txt3','入力してください'],
      info4:['項目4','txt4','入力してください'],
      info5:'送信',
    }
  },
  setup() {
  },
})
</script>
<style scoped>
  #entry{
      padding: 10px;
  }
</style>
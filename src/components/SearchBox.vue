<template>
  <div class="th-container">
        <div class="th-category">
            <div class="th-row">
                <div id="cat_2" class="category ct1">Doujinshi</div>
                <div id="cat_4" class="category ct2">Manga</div>
                <div id="cat_8" class="category ct2">Artist CG</div>
                <div id="cat_16" class="category ct4">Game CG</div>
                <div id="cat_512" class="category ct9">Western</div>
            </div>
            <div class="th-row">
                <div id="cat_256" class="category ct8">Non-H</div>
                <div id="cat_32" class="category ct5">Image Set</div>
                <div id="cat_64" class="category ct6">Cosplay</div>
                <div id="cat_128" class="category ct7">Asian Porn</div>
                <div id="cat_1" class="category ct0">Misc</div>
            </div>
        </div>
        <div style="margin-top: 15px">
            <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
            >
                <!-- <template #prepend>
                <el-select v-model="select" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                </template> -->
                <template #append>
                <el-button @click="onClick" icon="el-icon-search"></el-button>
                </template>
            </el-input>
        </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      select: ref('')
    }
  },
  methods: {
      onClick(){
          console.log('perform click search button')
      }
  }
})
</script>

<style lang="scss" scoped>
#cat_2 {
    background: radial-gradient(#fc4e4e, #f26f5f);
    border: 1px solid #fc4e4e;
}
#cat_4 {
    background: radial-gradient(#e78c1a, #fcb417);
    border: 1px solid #e78c1a;
}
#cat_8 {
    background: radial-gradient(#c7bf07, #dde500);
    border: 1px solid #c7bf07;
}
#cat_16 {
    background: radial-gradient(#1a9317, #05bf0b);
    border: 1px solid #1a9317;
}
#cat_512 {
    background: radial-gradient(#5dc13b, #14e723);
    border: 1px solid #5dc13b;
}
#cat_256 {
    background: radial-gradient(#0f9ebd, #08d7e2);
    border: 1px solid #0f9ebd;
}
#cat_32 {
    background: radial-gradient(#2756aa, #5f5fff);
    border: 1px solid #2756aa;
}
#cat_64 {
    background: radial-gradient(#8800c3, #9755f5);
    border: 1px solid #8800c3;
}
#cat_128 {
    background: radial-gradient(#b452a5, #fe93ff);
    border: 1px solid #b452a5;
}
.category{
    user-select: none;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    height: 20px;
    line-height: 20px;
    font-size: 9pt;
    border-radius: 0.1875rem;
    color: #f1f1f1;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    text-shadow: 2px 2px 3px rgba(0,0,0,.3);
    width: 98px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}
.el-input {
    width: 580px;
}
.th-category{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 60px;
    .th-row{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
}
.th-container{
    width: 598px;
    border-collapse: collapse;
    margin: 0px auto 8px auto;
    padding: 5px;
    border: 2px ridge #5C0D12;
    text-align: center;
}
</style>
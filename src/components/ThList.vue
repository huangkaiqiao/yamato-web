<template>
    <div class="app-container">
        <el-table
            class="th-table"
            :data="tableData"
            stripe
            cell-class-name="th-td"
            style="width: 100%">
                <el-table-column
                    prop="cat"
                    label="Category"
                    width="180">
                    <template #default="scope">
                        <div :class="'category ct'+ scope.row.cat">{{categorys[scope.row.cat]}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="upd_at"
                    label="Published"
                    width="180">
                    <template #default="scope">
                        <div>{{scope.row.upd_at}}</div>
                        <div class="star45"></div>
                        <!-- <el-rate  v-model="value"  allow-half /> -->
                    </template>
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="Title"
                    width="280">
                    <template #default="scope">
                        <el-popover
                            placement="left-start"
                            :width="200"
                            trigger="hover"
                        >
                            <template #reference>
                                <router-link to="/g/0806">
                                    <div class="title">{{scope.row.title}}</div>
                                </router-link>
                            </template>
                            <img alt="Vue logo" src="../assets/logo.png" />
                        </el-popover>
                        <div class="tags">
                            <div class="tag">english</div>
                            <div class="tag">translated</div>
                            <div class="tag">metroid</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="pages"
                    label="Pages"
                    width="200"
                    class-name="th-pages"
                    :formatter="(row,column,cellValue)=>cellValue + ' pages'">
                </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
import {
    onMounted
} from 'vue'
let catIds = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
let categorys = ['Misc','Doujinshi','Manga','Artist CG','Game CG','Image Set','Cosplay','Asian Porn','Non-H','Western']
let tableData =  [{
        cat: 8,
        upd_at: '2021-08-05 02:45',
        star: 9,
        title: '[pixiv] Kiyo 木又',
        tags: ['shielder', 'kiyo', 'non-h imageset'],
        pages: 101
    }]
let value = 4.5
let formatPages = (row, column, cellValue) => {
    return cellValue
}
console.log('created')
let item = tableData[0]
for(let i=0;i<10;i++){
    tableData.push(item)
}
onMounted (() => {
    console.log('onMounted')
})
</script>
<style lang="scss">
a{
    text-decoration: none;
    color: $th-color;
}
a:active{
    color: $th-color;
}
.tags{
    display: flex;
    padding: 0px;
    .tag{
        // height: 20px;
        line-height: 18px;
        // float: left;
        font-weight: bold;
        padding: 0px 4px;
        margin: 0 2px 0px 2px;
        // position: relative;
        border-radius: 7px;
        border: 1px solid #806769;
        background: #F2EFDF;
        border-collapse: collapse;
        font-size: 12px;
        text-align: center;
    }
}
td.th-pages{
    width: 120px;
    // text-align: center;
    // position: absolute;
    // top: 30px;
    font-size: 8pt;
    // color: red;
}
</style>
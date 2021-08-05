<template>
    <div class="app-container">
        <el-table
            :data="tableData"
            stripe
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
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Title"
                    width="180">
                    <template #default="scope">
                        <div class="title">{{scope.row.title}}</div>
                        <div class="tags">
                            <div class="tag">tag</div>
                            <div class="tag">tag</div>
                            <div class="tag">tag</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="Pages"
                    width="200">
                </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
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
</script>
<style lang="scss" scoped>

</style>
<template>
    <el-menu
        :default-active="activeIndex2"
        class="th-nav-menu"
        mode="horizontal"
        @select="handleSelect"
        :background-color="$th-bgcolor"
        :text-color="$th-color"
        active-text-color="#ffd04b">
        <el-menu-item index="1">Front Page</el-menu-item>
        <el-submenu index="2">
            <template #title>Watched</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>Popular</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Favorites</a></el-menu-item>
        <el-menu-item index="5">My Home</el-menu-item>
        <el-menu-item index="6">My Uploads</el-menu-item>
        <el-menu-item index="7">Toplists</el-menu-item>
        <el-menu-item index="8">Bounties</el-menu-item>
        <el-menu-item index="9">News</el-menu-item>
        <el-menu-item index="10">Forums</el-menu-item>
        <el-menu-item index="11">Wiki</el-menu-item>
    </el-menu>
</template>
<script setup>
// import {defineProps} from 'vue'

// defineProps({
//     activateIndex: '1',
//     activateIndex2: '1'
// })
let activateIndex = '1'
let activateIndex2 = '2'

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.th-nav-menu{
    background: $th-bgcolor;
    border-bottom: none;
    .el-menu-item{
        color: $th-color;
    }
}
// .el-menu.el-menu--horizontal{
//     border-
// }
</style>
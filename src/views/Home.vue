<template>
    <div id="home" class="app-container">
        E-Hentai Galleries: The Free Hentai Doujinshi, Manga and Image Gallery System
        <!-- {{msg}} -->
        <search-box />
        <th-list />
    </div>
</template>

<script setup>
import {defineComponent, defineProps} from 'vue'
import SearchBox from '/@/components/SearchBox.vue'
import ThList from '/@/components/ThList.vue'

defineComponent({
    SearchBox,
    ThList
})
defineProps({
    msg: String
})
</script>

<style lang="scss" scoped>
#home{
    color: $th-color;
    // color: red;
    background: #EDEBDF;
    border: 1px solid #5C0D12;
    text-align: justify;
    min-width: 740px;
    max-width: 1200px;
    margin: 10px auto 5px;
    padding: 5px;
    position: relative;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
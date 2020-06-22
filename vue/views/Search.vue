<template>
<div>
    <div class="container">
        <i-input v-model="serchData" placeholder="输入你想查找的商品"
        class="search" size="large">
        <Button solt ="append" icon="ios-search" @click="search"/>
        </i-input>
        <Tag v-for="(item,index) in promotionTags" :key="index" >
        {{item}}
        </Tag>
        </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            promotionTags:['卖2免1','领200券','199减100','母婴五折抢','充100送20'],
            searchData:''
        }
    },
    methods:{
        search(){
           console.log(this.searchData);
          }

    }
}
</script>
<style >

</style>
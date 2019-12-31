<template>
  <div>
    Goods
    <shopcart/>
    <cartcontrol/>
    <food />
  </div>
</template>
<script>
//组件化
import shopcart from '../components/shopcart/shopcart'
import cartcontrol from '../components/cartcontrol/cartcontrol'
import food from '../components/food/food'
export default {
  components:{
    shopcart,
    cartcontrol,
    food
  },
  created(){
    this.goods=response.data;
  }
  
}
</script>

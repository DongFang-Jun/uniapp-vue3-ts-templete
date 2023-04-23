<template>
  <view class="container">
    我是详情
    <button class="button" @click="backIndex">返回首页</button>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps(['id', 'name'])
console.log('页面参数id:', props.id)
console.log('页面参数name:', props.name)

/*返回首页*/
function backIndex() {
  uni.navigateBack()
}
</script>

<style scoped lang="less"></style>

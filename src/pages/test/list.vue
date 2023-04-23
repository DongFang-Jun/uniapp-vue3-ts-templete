<template>
  <view class="container">
    <view class="title">pinia 功能展示</view>

    <view class="text">当前pinia的值为：{{ testStore.count }}</view>
    <view class="text">当前pinia 2倍的值为：{{ testStore.double }}</view>
    <view class="button" @click="addTap">+1</view>

    <view class="title">页面跳转功能展示</view>
    <view class="button" @click="enterDetail">前往详情</view>

    <view class="title">请求接口功能展示</view>
    <view class="button" @click="requestTap">立即请求</view>

    <!--  #ifdef  H5 -->
    <view class="title">条件编译</view>
    <view class="button">仅h5展示</view>
    <!-- #endif -->

    <view class="title">uni-ui日历组件展示</view>
    <uni-calendar
      :insert="true"
      :lunar="true"
      :start-date="'2019-3-2'"
      :end-date="'2019-5-20'"
      @change="changeDate"
      >211</uni-calendar
    >
  </view>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/test/test'
import { testApi } from '@/apis/test/test'
import { showToast } from '@/utils/util'

const testStore = useTestStore()

/*加法*/
function addTap() {
  testStore.increment()
}

/*进入详情*/
function enterDetail() {
  uni.navigateTo({
    url: '/pages/test/detail?id=1&name=测试'
  })
}

/*请求接口*/
function requestTap() {
  testApi({ start: 21 }).then((res) => {
    console.log(res)
    showToast('请求成功')
  })
}

/*切换日期*/
function changeDate(e: any) {
  console.log(e)
}

console.log(import.meta.env.VITE_NODE_ENV)
</script>

<style scoped lang="less">
.container {
  padding: 0 16rpx;
  background-color: var(--background);

  .title {
    font-size: 42rpx;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
    padding-top: 32rpx;
    padding-bottom: 24rpx;
  }
  .text {
    color: #6e6e76;
    padding-bottom: 24rpx;
  }
  .button {
    width: 100%;
    background-color: #7b4cd9;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32rpx;
    border-radius: 4rpx;
    height: 80rpx;
  }
}
</style>

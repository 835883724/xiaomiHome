<template>
  <div>
    <div class="box" id="box" ref="lavContainer" style="width: 500px;" @click="playLottie"></div>
    <el-button type="primary" @click="playLottie">播放动画</el-button>
    <el-button type="primary" @click="unplayLottie">暂停动画</el-button>
  </div>
</template>

<script setup >
import lottie from 'lottie-web'
import * as animationData from './heart.json'
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const lavContainer = ref(null)
const state = reactive({
  anim: null
})
onMounted(() => {
  console.log(animationData, 222, lavContainer.value, 123, document.getElementById('box'))
  //使用lottie
  state.anim = lottie.loadAnimation({
    container: lavContainer.value,
    renderer: 'svg', //渲染方式：svg：支持交互、不会失帧；canvas、html：支持3D，支持交互
    loop: true, //循环播放：默认为true
    autoplay: false, //自动播放：默认为true
    animationData: animationData //
  })
  state.anim.setSpeed(1)
  state.anim.play()
  state.anim.goToAndStop(60, true) // 跳转到第30帧并停止
})

const playLottie = () => {
  state.anim.goToAndPlay(0)
  state.anim.play()
}
const unplayLottie = () => {
  state.anim.stop() // 停止动画
}
onUnmounted(() => {
  // state.anim.destroy()
  state.anim = null
})
</script>

<style scoped lang='scss'>
</style>
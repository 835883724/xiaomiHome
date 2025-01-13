
<template>
  <div class="container">
    <div class="topDiv curp" @click="carClick">
      <img src="@/assets/111.jpg" alt="" style="  width: 100%; height: auto;">
    </div>
    <div :class="state.mouseTop==false?'bgcColor':''" class="navBoxClass flexAround">
      <nav class="w100 navClass">
        <img src="@/assets/logo.jpeg" style="width: 40px;height: 40px;margin-left: 40px; ">
        <div class="flexEvenly" style="flex: .8;">
          <div class="menuItem" style="color: #ff6900;">小米官网</div>
          <div class="menuItem" @click="router.push('/myCenter')">小米手机</div>
          <div class="menuItem" @click="router.push('/test')">小米汽车</div>
          <div class="menuItem">小米影像</div>
          <div class="menuItem">小米OS</div>
        </div>
        <div style="color: #fff;" class="mr40">登录 | 注册</div>
      </nav>
    </div>
    <el-carousel class="mt10" height="" autoplay>
      <el-carousel-item v-for="item in state.imgList" :key="item.id">
        <img :src="item.url " alt="" style=" width: 100%; height: auto;">
      </el-carousel-item>
    </el-carousel>
    <div class="footBox">
      <div class="footContent">
        <div>
          <div>选购指南</div>
          <div>手机</div>
          <div>电视</div>
          <div>笔记本</div>
        </div>
        <div>
          <div>服务中心</div>
          <div>项目21</div>
          <div>项目22</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script  setup>
import { onMounted, reactive, ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
  mouseTop: true,
  imgList: [
    {
      url: 'https://img.youpin.mi-img.com/ferriswheel/d17b2f05_740a_4ce1_be4d_a629c53ae924.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=2560',
      id: 1
    },
    {
      url: 'https://img.youpin.mi-img.com/ferriswheel/bb716c99_fd18_4299_a0d8_cd417e60fdf8.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=2560',
      id: 2
    }
  ]
})

window.addEventListener('scroll', e => {
  // console.log(document.documentElement.scrollTop, 2222)
  if (document.documentElement.scrollTop > 0) {
    state.mouseTop = false
  } else {
    state.mouseTop = true
  }
})
const carClick = () => {
  console.log(123)
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.container {
  width: 100%;
  height: 100%;
  .box {
    width: 500px;
    height: 1220px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .navBoxClass {
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    z-index: 999;
    background: transparent;
    transition: background-color 1s;

    .menuItem {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px; //字体间距
      color: #fff;
      cursor: pointer;
      &:hover {
        color: #ff6900;
      }
    }
  }
}
.topDiv {
  width: 100%;
  // height: 800px;
  // background-image: url('@/assets/111.jpg');
  // background-size: contain;
  // background-repeat: no-repeat;
}
.bgcColor {
  transition: background-color 1s;
  background-color: rgba($color: #000000, $alpha: 0.7) !important;
}
.navClass {
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footBox {
  width: 100%;
  .footContent {
    margin: 0 auto;
    width: 800px;
    height: 400px;
  }
}
</style>
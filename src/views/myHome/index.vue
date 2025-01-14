
<template>
  <div class="container">
    <div class="topDiv curp" @click="carClick">
      <!-- <img :src=state.firtImg[0] alt="" style="width: 100%; "> -->
      <div>
        <el-carousel :height="state.bannerHeight + 'px'" :autoplay="false">
          <el-carousel-item v-for="item in state.firtImg" :key="item" style="height: 100%;">
            <img :src="item " alt="" style="width: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div :class="state.mouseTop==false?'bgcColor':''" class="navBoxClass flexAround">
      <nav class="w100 navClass">
        <img src="@/assets/logo.jpeg" style="width: 40px;height: 40px;margin-left: 40px; ">
        <div class="flexEvenly" style="flex: .8;    display: flex;  justify-content: space-between;">
          <div class="menuItem" style="color: #ff6900;">小米官网</div>
          <div class="menuItem" @click="router.push('/myQnSearch')">青柠搜索项目</div>
          <div class="menuItem" @click="router.push('/test')">大文件测试分片</div>
          <div class="menuItem" @click="router.push('/myCenter')">动画demo</div>
          <div class="menuItem">公司项目合集</div>
        </div>
        <div style="color: #fff;" class="mr40">登录 | 注册</div>
      </nav>
    </div>
    <el-carousel class="mt10" autoplay type="card">
      <el-carousel-item v-for="item in state.imgList" :key="item.id">
        <img :src="item.url " alt="" style="height: 100%;">
      </el-carousel-item>
    </el-carousel>
    <div class="footBox">
      <div class="footContent">
        <div v-for="it,index in state.footerList" :key="index">
          <div class="foot-header">{{it.header}}</div>
          <div class="foot-cont">
            <div v-for="item,idx in it.content" :key="idx" class="itemList curp">{{item}}</div>
          </div>
        </div>
        <el-divider direction="vertical" style="height:100px" />
        <div style="width: 200px;margin-top: 10px;">
          <div style="font-size: 24px;font-weight: bold;color: #ff6900;"> 950816 </div>
          <div class="mt8 mb8"> 8：00-18：00(仅收市话费) </div>
          <el-button type="primary" plain>
            <el-icon class="el-icon--right">
              <ChatRound />
            </el-icon>人工客服</el-button>
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
  firtImg: ['https://img.youpin.mi-img.com/ferriswheel/2b1aac43_8370_4641_956d_3e25a284d150.jpeg@base@tag=imgScale&F=webp&h=1180&q=90&w=2560', 'https://img.youpin.mi-img.com/ferriswheel/0ab388fd_16e0_434e_a3de_b659878c9470.jpeg@base@tag=imgScale&F=webp&h=1180&q=90&w=2560'],
  imgList: [
    {
      url: 'https://img.youpin.mi-img.com/ferriswheel/d17b2f05_740a_4ce1_be4d_a629c53ae924.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=2560',
      id: 1
    },
    {
      url: 'https://img.youpin.mi-img.com/ferriswheel/bb716c99_fd18_4299_a0d8_cd417e60fdf8.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=2560',
      id: 2
    },
    {
      url: 'https://img.youpin.mi-img.com/ferriswheel/7f34b8b0_0d61_4e84_b7fe_7c45eb52d36c.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=2560',
      id: 3
    }
  ],
  footerList: [
    {
      header: '选购指南',
      content: ['手机', '电视', '笔记本', '电脑', '平板']
    },
    {
      header: '服务中心',
      content: ['申请售后', '售后政策', '以旧换新', '保障服务']
    },
    {
      header: '线下门店',
      content: ['小米之家', '服务网点', '体验店']
    },
    {
      header: '关于小米',
      content: ['了解小米', '认识小米', '加入小米', '可持续发展']
    },
    {
      header: '关注我们',
      content: ['新浪微博', '官方微信', '微博', '电脑', '平板']
    }
  ],
  bannerHeight: '300'
})

onMounted(() => {
  // console.log(document, 'document')
  state.bannerHeight = document.documentElement.clientHeight // 设置为屏幕高度
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
.container {
  width: 100%;
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
  padding: 0 20px;
}
.footBox {
  width: 100%;
  .footContent {
    margin: 0 auto;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    .foot-header {
      font-weight: bold;
    }
    .foot-cont {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
.itemList {
  color: #757575;
  font-weight: 500;
  margin: 5px 0;
  &:hover {
    color: #ff6900;
  }
}
</style>
<style type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
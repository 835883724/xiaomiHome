
<template>
  <div class="container" :class=" state.inputFlag ? 'contanierShadow':'' " :style="{backgroundImage:`url(${state.imgPath})` }" ref="bgContainer"></div>
  <div class="timeBox curp">{{ state.currentTime }}</div>
  <div class="contentBox">
    <div class="searchBox" :class=" state.inputFlag ? 'inputActived':''">
      <el-icon :size="20" class="ml20 iconCls" :class="state.iconShow? 'iconShow':''" @click="state.showDialog=true">
        <PictureFilled />
      </el-icon>
      <input type="text" class="inputCls" :placeholder=" state.inputFlag ?'':'搜索'" @click="changeFlag(e)" v-model="state.inputValue" @keyup.enter="toBaiDu">
      <el-icon :size="20" class="mr20 iconCls" :class="state.iconShow? 'iconShow':''" @click="toBaiDu">
        <Search />
      </el-icon>
    </div>
    <div class="searchSuggest" :class="state.inputValue.length>0&& state.showDialog==false? 'suggestChange':''">
      <div>测试1</div>
      <div>测试12</div>
      <div>12321</div>
    </div>
  </div>
  <div class="footerTop" v-if="state.inputFlag==false">
    <div class="footerTop-item" v-for="item,index in state.kjCard" :key="index" @click="fastTo(item)" title="键盘按下快捷导航哦">
      <div style="font-size: 35px;font-weight: bold;" :title="item.key">{{item.key}}</div>
      <div style="width: 90%;overflow: hidden;" :title="item.content">{{item.content}}</div>
      <el-icon class="closeIcon" @click.stop="spliceArr(index)" v-show="item.content!=='新增网站'">
        <Close />
      </el-icon>
    </div>
  </div>
  <div class="footer">
    <span class="textItem"> 闽ICP备16233322号-2 </span> |
    <span class="textItem">闽公网安备35011123231376号</span>
  </div>

  <dailogCmp v-model:showDialog="state.showDialog" @bgChange="chageBg"></dailogCmp>

</template>

<script  setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import dayjs from 'dayjs'
import dailogCmp from './dailogCmp.vue'
import fristImg from '../../assets/bg6.jpeg'

const bgContainer = ref(null)
const state = reactive({
  inputFlag: false,
  iconShow: false,
  currentTime: '',
  timer: null,
  inputValue: '',
  showDialog: false,
  imgPath: fristImg,
  kjCard: [
    { key: 'Y', content: 'youku.com' },
    { key: 'B', content: 'bilibili.com' },
    { key: 'I', content: 'iqiyi.com' },
    { key: 'S', content: 'sohu.com' },
    { key: 'L', content: 'le.com' },
    { key: '+', content: '新增网站' }
  ]
})
const listenClick = e => {
  // console.log(typeof e.target.className, 222)
  if (typeof e.target.className == `object`) {
    return
  } else if (e.target.className?.includes(`container`)) {
    state.inputFlag = false
    state.iconShow = false
    state.inputValue = ''
    window.addEventListener('keydown', handleKeydown)
  }
}
onMounted(() => {
  window.addEventListener('click', listenClick)
  window.addEventListener('keydown', handleKeydown)
  // 初始化当前时间
  updateTime()
  // 每秒更新时间
  state.timer = setInterval(updateTime, 1000)
})
onUnmounted(() => {
  window.removeEventListener('click', listenClick)
  window.removeEventListener('keydown', handleKeydown)
  if (state.timer) {
    clearTimeout(state.timer)
    state.timer = null
  }
})
const updateTime = () => {
  state.currentTime = dayjs().format('HH:mm')
  // console.log(state.currentTime)
}
const changeFlag = e => {
  window.removeEventListener('keydown', handleKeydown)
  state.inputFlag = true
  state.iconShow = true
}
const chageBg = e => {
  console.log(e, 'eeeeeeeeeeeee')
  import(`../../assets/bg${e}.jpeg`).then(p => {
    state.imgPath = p.default
  })
}
const toBaiDu = () => {
  window.open('https://www.baidu.com', '_blank')
}
const fastTo = item => {
  if (item.content == '新增网站') {
    let addString = prompt('请输入要添加的网站地址,键盘按下可快捷导航哦：', '')
    if (addString) {
      state.kjCard.unshift({ key: addString[0].toUpperCase(), content: addString })
    }
  } else {
    window.open(`https://www.${item.content}`, '_blank')
  }
}
const spliceArr = index => {
  state.kjCard.splice(index, 1)
}
const handleKeydown = event => {
  console.log(event.key, 2222)
  const myKey = event.key.toUpperCase()
  const foundItem = state.kjCard.find(item => item.key === myKey)
  if (foundItem) {
    window.open(`https://www.${foundItem.content}`, '_blank')
  }
}
</script>

<style lang="scss" scoped>
html,
body,
#app {
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  // background-image: url('@/assets/day1Bg.jpg');
  background-size: 100% 100%;
  transition: 0.3s;
}
.contentBox {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
}
.searchBox {
  height: 50px;
  width: 300px;
  background: transparent;
  backdrop-filter: blur(3px);
  border-radius: 30px;
  box-shadow: 0 0 5px 1px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: width 0.3s ease 0s;
  &:hover {
    width: 500px;
    background: rgba($color: #fff, $alpha: 0.7);
    transition: width 0.3s ease 0s;
    input::-webkit-input-placeholder {
      color: #878b8d;
    }
  }
  .inputCls {
    height: 50px;
    border: none;
    background: transparent;
    text-align: center;
    flex: 1;
    &:focus {
      border: none;
      outline: none;
    }
  }
}
.timeBox {
  // width: 100%;
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 45px;
  text-shadow: 3px;
  transition: 0.3s;
  &:hover {
    font-size: 54px;
    transition: 0.3s;
  }
}
.inputActived {
  width: 500px;
  background: rgba($color: #fff, $alpha: 0.7);
  transition: width 0.3s ease 0s;
}
.contanierShadow {
  filter: blur(10px);
  transform: scale(1.05);
  transition: 0.3s;
}
.iconCls {
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  visibility: hidden;
}
.iconShow {
  visibility: visible;
  transition: 0.3s;
  &:hover {
    background: #fff;
  }
}
.footerTop {
  width: 45%;
  height: 300px;
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  .footerTop-item {
    position: relative;
    width: 150px;
    height: 130px;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px gray;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
  }
}
.closeIcon {
  position: absolute;
  top: 3px;
  right: 5px;
  visibility: hidden;
}
.footerTop-item:hover .closeIcon {
  visibility: visible; /* 鼠标移入时显示 */
}
.footer {
  position: fixed;
  bottom: 20px;
  left: 50%;
  font-size: 13px;
  padding: 2px 5px;
  transform: translate(-50%, 0);
  backdrop-filter: blur(10px);
  color: #878b8d;

  .textItem {
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
}
.searchSuggest {
  visibility: hidden;
  z-index: 40;
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 100%;
  height: auto;
  font-size: small;
  overflow-y: hidden;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(30px) saturate(1.25);
  backdrop-filter: blur(30px) saturate(1.25);
  opacity: 0; /* 开始时透明度为0 */
  transition: opacity 0.3s ease-in-out; /* 设置透明度变化的过渡效果 */
  & div {
    display: -webkit-box;
    // -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    clear: both;
    height: 30px;
    padding-right: 10px;
    text-indent: 20px;
    line-height: 30px;
    cursor: pointer;
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    transition: 0.3s;
    &:hover {
      text-indent: 30px;
      background: #aab7c5;
    }
  }
}
.suggestChange {
  visibility: visible;
  opacity: 1;
}

input::-webkit-input-placeholder {
  color: rgba($color: #fff, $alpha: 0.8);
}
</style>
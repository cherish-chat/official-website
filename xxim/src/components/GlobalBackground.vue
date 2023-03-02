<template>
  <div class="global-background">
    <div class="global-background__top-left"></div>
    <div class="global-background__bottom-left"></div>
    <div class="global-background__bottom-right">
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import topLeftBackground from '@/assets/背景1.png'
import bottomLeftBackground from '@/assets/背景2.png'
import bottomRightBackground from '@/assets/背景3.png'

onMounted(() => {
  const topLeft = document.querySelector('.global-background__top-left') as HTMLElement
  if (topLeft) {
    topLeft.style.backgroundImage = `url(${topLeftBackground})`
  } else {
    alert('topLeft is null')
  }
  const bottomLeft = document.querySelector('.global-background__bottom-left') as HTMLElement
  if (bottomLeft) {
    bottomLeft.style.backgroundImage = `url(${bottomLeftBackground})`
  }
  const bottomRight = document.querySelector('.global-background__bottom-right') as HTMLElement
  if (bottomRight) {
    bottomRight.style.backgroundImage = `url(${bottomRightBackground})`
  }
})
</script>

<style scoped>
.global-background {
  background-color: white;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  /*// 允许滑动*/
  overflow-y: scroll;
}

.global-background__top-left {
  background-image: url(@/assets/背景1.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left top;
  width: 37%;
  height: 100%;
  left: -23%;
  position: absolute;
  top: -50%;
}

.global-background__bottom-left {
  background-image: url(@/assets/背景2.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left bottom;
  bottom: -27%;
  width: 24%;
  height: 100%;
  left: -5%;
  position: absolute;
}

.global-background__bottom-right {
  background-image: url(@/assets/背景3.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: right bottom;
  bottom: -10%;
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
}


.content {
  padding: 1% 12%;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .global-background__top-left,
  .global-background__bottom-left,
  .global-background__bottom-right {
    display: none;
  }
}
</style>

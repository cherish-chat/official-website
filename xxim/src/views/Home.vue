<template>
  <GlobalBackground>
    <div class="header">
      <div class="logo">
        <img src="@/assets/左上logo.png" alt="logo">
      </div>
      <div class="links">
        <table class="links_table">
          <tr>
            <td>
              <a href="https://docs.cherish.chat" target="_blank">文档中心</a>
            </td>
            <td>
              <a href="https://xxim.cherish.chat" target="_blank">在线体验</a>
            </td>
            <td>
              <a href="https://github.com/cherish-chat/xxim-server.git" target="_blank">Github</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="table-container">
      <table class="my-table">
        <tr>
          <td class="cell1">
            <div class="desc_1">
              <div class="desc_1_title">
                <span class="desc_1_title_span">惺惺-属于你的社交地盘！</span>
              </div>
              <div class="desc_1_content">
                <span class="desc_1_content_span">惺惺是一个100%服务端开源的社交平台</span>
              </div>
              <div class="desc_1_content">
                <span class="desc_1_content_span">每个人都可以搭建自己的服务器</span>
              </div>
              <div class="desc_1_content">
                <span class="desc_1_content_span">掌握数据的所有权</span>
              </div>
              <div class="download_div">
                <table class="download_div_table">
                  <tr>
                    <td class="download_div_table__td_1" @mouseover="showIosCode(true)"
                        @mouseleave="showIosCode(false)">
                      <div class="img_and_name" v-if="!isShowIosCode">
                        <img src="@/assets/苹果.png" class="img_and_name_img"/>
                        <span class="img_and_name_span">iOS</span>
                      </div>
                      <div class="img_and_name" v-else>
                        <img src="@/assets/IOS二维码.png" class="code"/>
                      </div>
                    </td>
                    <td class="download_div_table__td_padding"></td>
                    <td class="download_div_table__td_2" @mouseover="showAndroidCode(true)"
                        @mouseleave="showAndroidCode(false)">
                      <div class="img_and_name" v-if="!isShowAndroidCode">
                        <img src="@/assets/安卓.png" class="img_and_name_img"/>
                        <span class="img_and_name_span">Android</span>
                      </div>
                      <div class="img_and_name" v-else>
                        <img src="@/assets/安卓二维码.png" class="code"/>
                      </div>
                    </td>
                    <td class="download_div_table__td_padding"></td>
                    <td class="download_div_table__td_3" @mouseover="showWML(true)" @mouseleave="showWML(false)">
                      <div class="img_and_name" v-if="!isShowWML">
                        <img src="@/assets/PC.png" class="img_and_name_img"/>
                        <span class="img_and_name_span">PC</span>
                      </div>
                      <div class="img_and_name" v-else>
                <span :class="windowsSelected ? 'platform_span_select' : 'platform_span'"
                      @mouseover="windowsSelected = true" @mouseleave="windowsSelected = false"
                      @click="download('windows')"
                >
                  &nbsp;&nbsp;Windows&nbsp;&nbsp;
                </span>
                        <br/>
                        <span :class="macSelected ? 'platform_span_select' : 'platform_span'"
                              @mouseover="macSelected = true" @mouseleave="macSelected = false"
                              @click="download('mac')"
                        >
                  &nbsp;&nbsp;MacOS&nbsp;&nbsp;
                </span>
                        <br/>
                        <span :class="linuxSelected ? 'platform_span_select' : 'platform_span'"
                              @mouseover="linuxSelected = true" @mouseleave="linuxSelected = false"
                              @click="download('linux')"
                        >
                  &nbsp;&nbsp;Linux&nbsp;&nbsp;
                </span>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="desc_1_content">
                <span class="desc_1_download_desc_span_1">点击下载，马上加入“惺惺”。我的服务器我做主！</span>
                <span class="desc_1_download_desc_span_2">（此app非盈利项目）</span>
              </div>
            </div>
          </td>
          <td class="cell2">
            <img src="@/assets/手机_waifu2x_art_noise1_scale.webp" class="cell2_img"/>
          </td>
        </tr>
        <tr>
          <td class="cell3">
            <div class="desc_2">
              <div class="desc_2_title">
                <span class="desc_2_title_span">团队介绍&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </div>
              <div class="desc_1_content">
                <span class="desc_1_content_span">惺惺团队由一群热爱开源的程序员组成</span>
              </div>
              <div class="desc_1_content">
                <span class="desc_1_content_span">我们致力于打造一个开源的社交平台</span>
              </div>
              <div class="desc_1_content">
                <span class="desc_1_content_span">让每个人都能够低成本地、自由地打造自己的社交乐园</span>
              </div>
            </div>
          </td>
          <td class="cell4">
            违法和不良信息举报电话：13141202335
            <br/>
            &nbsp;
            <br/>
            举报邮箱：report@cherish.chat
            <br/>
            &nbsp;
            <br/>
            营业执照：91110107MABT30HY6C 北京市石景山区阜石路165号院3号楼9层905-15
            <br/>
            &nbsp;
            <br/>
            @2022 北京惺惺科技有限公司 <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
               style="display:inline-block;text-decoration:none;height:15px;line-height:20px;" target="_blank">
              <img src="https://www.beian.gov.cn/img/new/gongan.png" style="float:left;"/>
              <p style="float:left;height:20px;margin: 0px 0px 0px 5px; color: #939393;">
                京ICP备2022022847号-2 京公网安备11011202007758号
              </p>
            </a>
          </td>
        </tr>
      </table>
    </div>


  </GlobalBackground>
</template>

<script setup lang="ts">
import GlobalBackground from "@/components/GlobalBackground.vue";
import {ref} from "vue";

const isShowIosCode = ref(false);
const showIosCode = (v: boolean) => {
  isShowIosCode.value = v;
};
const isShowAndroidCode = ref(false);
const showAndroidCode = (v: boolean) => {
  isShowAndroidCode.value = v;
};
const isShowWML = ref(false);
const showWML = (v: boolean) => {
  isShowWML.value = v;
};
const windowsSelected = ref(false);
const macSelected = ref(false);
const linuxSelected = ref(false);
const download = (platform: string) => {
  // 新建标签页 跳转到下载页面
  window.open("https://github.com/cherish-chat/xxim-flutter-app/releases");
};
</script>

<style scoped>
.header {
  height: 75px;
  width: 100%;
  position: relative;
}

.logo {
  float: left;
  height: 75px;
  margin: 16px 24px 16px 0;
}

.links_table a {
  color: #000000;
  text-decoration: none;
  font-size: 24px;
  /*// 细点*/
  font-weight: 340;
  /*// 垂直居中*/
  line-height: 75px;
}

.links {
  float: right;
  height: 75px;
}

.links_table {
  margin: 16px 0 16px 0;
}

.links_table td {
  padding: 0 100px 0 0;
}

.desc_1_title_span {
  background: linear-gradient(to right, #54DFFB, #2B52F9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.01em;
  /* 斜体 */
  font-style: italic;
}

.desc_2_title_span {
  background: linear-gradient(to right, #54DFFB, #2B52F9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  font-size: 36px;
  line-height: 56px;
  letter-spacing: 0.01em;
  /* 斜体 */
  font-style: italic;
  /* 下划线 */
  text-decoration: underline;
  border-bottom: 1px solid #333;
}

.content_table_tr_1 {
  height: 100%;
}

.content_table_tr_1_td_1 {
  width: 800px;
  height: 100%;
}

.content_table_tr_1_td_2 {
  width: 50%;
  height: 100%;
}

.desc_1_content {
  padding-top: 20px;
  padding-left: 5px;
}

.desc_1_content_span {
  /*// 字体大小 18  Regular  字间距 5%*/
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.desc_1_download_desc_span_1 {
  /*// 字体大小 18  Regular*/
  font-size: 18px;
  font-weight: 400;
}

.desc_1_download_desc_span_2 {
  /*// 字体大小 14  Regular  70%透明度*/
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
}

.download_div {
  padding-top: 50px;
}

.download_div_table {
}

.download_div_table td {
  /*// 内容居中*/
  text-align: center;
}

.download_div_table__td_1 {
  background-image: url("@/assets/01.png");
  /*// w: 162px h: 159px*/
  width: 162px;
  height: 159px;
  /*// 背景图铺开*/
  background-size: 100% 100%;
}

.download_div_table__td_2 {
  background-image: url("@/assets/02.png");
  /*// w: 154px h: 163px*/
  width: 154px;
  height: 163px;
  /*// 背景图铺开*/
  background-size: 100% 100%;
}

.download_div_table__td_3 {
  background-image: url("@/assets/03.png");
  /*// w: 165px h: 153px*/
  width: 165px;
  height: 153px;
  /*// 背景图铺开*/
  background-size: 100% 100%;
}

.code {
  /*// w: 100px h: 100px*/
  width: 100px;
  height: 100px;
}

.download_div_table__td_padding {
  padding: 0 20px 0 20px;
}

.download_div_table img {
  border-radius: 10px;
}

.img_and_name {
  /*// 内容居中*/
  text-align: center;
  /*// 图片和文字上下显示 图片在上 文字在下*/
  display: flex;
  flex-direction: column;
  /*// 垂直居中*/
  justify-content: center;
  /*// 水平居中*/
  align-items: center;
  /*// 鼠标悬浮变小手*/
  cursor: pointer;
}

.img_and_name_img {
  /*// w: 50px h: 50px*/
  width: 50px;
  height: 50px;
}

.img_and_name_span {
  /*// 字体大小 18  Regular  字间距 5%*/
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.05em;
  /*// 上下间距*/
  padding: 10px 0 0 0;
  color: #FFFFFF;
}

.platform_span {
  /*// 白色字体*/
  color: #FFFFFF;
  font-size: 18px;
}

.platform_span_select {
  /*// 白色字体 并且有背景颜色 #FFFFFF 背景颜色透明度 0.5*/
  color: #FFFFFF;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  /*// 四周有一定弧度*/
  border-radius: 25px;
}

.table-container {
  width: 100%;
  height: 100%;
  display: table;
  padding-top: 40px;
}

.my-table {
  width: 100%;
  height: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.my-table td {
  padding: 0;
}

.cell1 {
  width: 50%;
  height: 75%;
  vertical-align: top;
}

.cell2 {
  width: 50%;
  height: 50%;
  text-align: right;
  vertical-align: top;
}

.cell2_img {
  width: 60%;
  height: 68%;
}

.cell3 {
  width: 50%;
  height: 50%;
  text-align: left;
  vertical-align: bottom;
}

.cell4 {
  width: 50%;
  height: 25%;
  text-align: right;
  vertical-align: bottom;
  /*// 文字 颜色：白色 大小: 10 间距 -0.04*/
  font-size: 10px;
  /*letter-spacing: -0.04em;*/
  color: #FFFFFF;
}

</style>
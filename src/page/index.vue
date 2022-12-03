<template>
  <div class='index_page'>
    <div class='header'>
      <div class='flex'><img src="../assets/img/logo.webp" alt="" class='logo'>
        <div class='logo_text'>惺惺</div>
      </div>
      <div class='flex'>
        <div class="text_1 cursor" @click="document">文档</div>
        <div class="text_2 cursor" @click="online">在线体验</div>
        <div class="text_2 cursor" @click="github">Github</div>
      </div>
    </div>
    <div class='banner'>
      <div class='left'>
        <div class='text_1'>惺惺 —— 属于你的社交地盘！</div>
        <div class='text_2'>
          <p>惺惺是一个100%开源社交平台，每个人都可以搭建自己的服务器，掌握数据的所有权。<span class="focus-span">此APP非盈利项目！</span></p>
          <br/>
          <p>点击下载，马上加入“惺惺”，我的服务器我做主！</p>
        </div>
        <div class='flex'>
          <div class='btn btn_1 cursor' @click="downloadIos">
            <img src="../assets/img/apple_icon.png" alt="" class='icon'>
            苹果下载
          </div>
          <div class='btn btn_2 cursor' @click="downloadFn">
            <img src="../assets/img/anzhuo_icon.png" alt="" class='icon'>
            安卓测试版
          </div>
          <div class='btn btn_3 cursor' @click="downloadFn">
            <img src="../assets/img/agora_桌面端.svg" alt="" class='icon'>
            桌面下载
          </div>
        </div>
      </div>
      <div class='right'>
        <img src="../assets/img/phone.png" alt="" class='phone'>
      </div>
    </div>
    <div class='content'>
      <div class='layer_1'>
        <div class='text_3' name="team">
          团队介绍
        </div>
        <div class='text_4'>
          <p>惺惺团队由一群热爱开源的程序员组成，我们致力于打造一个开源的社交平台，让每个人都可以搭建自己的服务器，掌握数据的所有权。</p>
        </div>
        <div class="text_5">
          <p>我们拥有技能golang、flutter、rust，接受定制化IM需求（🥺赏口饭吃吧）</p>
        </div>
      </div>
      <p>&nbsp;</p>
      <div class='layer_1'>
        <div class='text_3' name="teamwork">
          商务合作
        </div>
        <div class='text_4'>
          <p>邮箱：team@cherish.chat</p>
          <p>手机号：+86 13141202335</p>
        </div>
      </div>
      <div class='layer_5'>
        <div class='text_1'>违法和不良信息举报电话：13141202335 消费者维权/客户服务/青少年守护专线：13141202335 举报邮箱：report@cherish.chat</div>
        <div class='text_1'>营业执照：91110107MABT30HY6C 北京市石景山区阜石路165号院3号楼9层905-15</div>
        <div class='text_1'>@2022 北京惺惺科技有限公司 京ICP备2022022847号-2 京公网安备11011202007758号</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    downloadFn() {
      // 判断平台 是否是 windows
      if (navigator.platform.indexOf("Win") > -1) {
        window.open("https://github.com/cherish-chat/xxim-flutter-app/releases")
      }
      // 判断平台 是否是 mac
      if (navigator.platform.indexOf("Mac") > -1) {
        window.open("https://github.com/cherish-chat/xxim-flutter-app/releases")
      }
      // 判断平台 是否是 android
      if (navigator.platform.indexOf("Android") > -1) {
        window.open("https://github.com/cherish-chat/xxim-flutter-app/releases")
      }
      // 判断平台 是否是 linux
      if (navigator.platform.indexOf("Linux") > -1) {
        window.open("https://github.com/cherish-chat/xxim-flutter-app/releases")
      }
    },
    downloadIos() {
      // 判断平台 是否是 ios
      alert("未上架，敬请期待")
    },
    github() {
      window.open("https://github.com/cherish-chat/xxim-server.git")
    },
    online() {
      alert("未上架，敬请期待")
    },
    document() {
      // 新窗口打开
      window.open("https://docs.cherish.chat")
    },
    setting() {
      this.$router.push({
        path: "/settingsList"
      })
    }
  }
}
</script>>
<style scoped>
.index_page {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.header {
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 114px 0 57.5px;
  box-sizing: border-box;
  background: #ffffff;
}

.logo {
  width: 27px;
  height: 27px;
}

.logo_text {
  font-size: 19px;
  font-weight: 600;
  color: #000000;
  margin-left: 3px;
}

.header .text_1 {
  font-size: 12px;
  color: #000000;
}

.header .text_2 {
  font-size: 12px;
  color: #000000;
  margin-left: 44px;
}

.banner {
  width: 100%;
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
}

.text_1, .text_2 {
  color: #000000;
}

.text_3 {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
  width: 150px;
}

.text_4 {
  font-size: 14px;
  color: #ffffff;
  line-height: 24px;
}

.text_5 {
  font-size: 11px;
  color: #c4a6ff;
  line-height: 24px;
}

.focus-span {
  color: red;
  /*加粗*/
  font-weight: bold;
}

.banner .left .text_1 {
  width: 197px;
  height: 53px;
  font-size: 19px;
  margin-bottom: 12px;
}

.banner .left .text_2 {
  width: 205px;
  height: 59px;
  font-size: 9px;
  margin-bottom: 14px;
  line-height: 12px;
}

.banner .left .btn {
  width: 64px;
  height: 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner .left .icon {
  width: 10px;
  height: 10px;
  margin-right: 6px;
}

.banner .left .btn_1 {
  background: #0066ff;
  margin-right: 7px;
  font-size: 8px;
}

.banner .left .btn_2 {
  background: #33cc33;
  font-size: 6px;
  margin-right: 7px;
}

.banner .left .btn_3 {
  background: #42c8fa;
  font-size: 8px;
}

.banner .left .btn_4 {
  width: 206px;
  background: #ff00f4;
  font-size: 8px;
}

.banner .right .phone {
  width: 116px;
  height: 223px;
  display: block;
}

.content {
  width: 100%;
  background: #000000;
}

.content .layer_1 {
  width: 100%;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  /*padding-top: 49px;*/
  padding-left: 80px;
  padding-right: 80px;
  box-sizing: border-box;
}

.content .layer_1 .text {
  width: 120px;
  height: 163px;
  font-size: 8px;
  color: #000000;
  line-height: 12px;
}

.content .layer_1 .img_1 {
  width: 405px;
  height: 238px;
  margin-left: 20px;
}

.content .layer_2 {
  width: 100%;
  font-weight: 600;
  margin-top: 56px;
  text-align: center;
  color: #000000;
  font-size: 12px;
}

.content .layer_3 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 22px;
}

.content .layer_3 .icon_1 {
  width: 15px;
  height: 14px;
  margin-right: 46px;
}

.content .layer_3 .icon_2 {
  width: 16px;
  height: 14px;
  margin-right: 46px;
}

.content .layer_3 .icon_3 {
  width: 33px;
  height: 27px;
  margin-right: 91px;
}

.content .layer_3 .icon_4 {
  width: 13px;
}

.content .layer_4 {
  width: 100%;
  height: 222px;
  background: #fcfcfb;
  padding-top: 32px;
  box-sizing: border-box;
}

.content .layer_4 .logo_text_1 {
  display: block;
  width: 89px;
  height: 5px;
  margin: 0 auto;
}

.content .layer_4 .logo_text_2 {
  display: block;
  width: 126px;
  height: 17px;
  margin: 10px auto 0;
}

.content .layer_4 .logo_box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
}

.content .layer_4 .logo_box .logo_item {
  width: 107px;
  height: 106px;
  border: 1px solid #e1dfd6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
}

.content .layer_4 .logo_box .logo_item .icon_1 {
  width: 19px;
  height: 23px;
}

.content .layer_4 .logo_box .logo_item .icon_2 {
  width: 20px;
  height: 24px;
}

.content .layer_4 .logo_box .logo_item .icon_3 {
  width: 71px;
  height: 71px;
}

.content .layer_5 {
  width: 100%;
  height: 77.5px;
  padding: 18px 0 26.5px;
  box-sizing: border-box;
}

.content .layer_5 .text_1 {
  width: 100%;
  text-align: center;
  font-size: 6px;
  color: #b5b5b5;
  line-height: 8px;
  margin-bottom: 4px;
}

.cursor {
  cursor: pointer;
}
</style>
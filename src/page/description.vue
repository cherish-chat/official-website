<template>
  <div class="page">
    <div class="content">
      <div class="header">
        <div>SDK技术说明：</div>
      </div>
      <div class="text">
        <p class="font_w_600">分享类：QQ分享</p>
        <p>第三方名称：腾讯科技（深圳）有限公司</p>
        <p>使用目的：QQ分享</p>
        <p>收集数据类型：设备信息</p>
        <p>网址：https://wiki.connect.qq.com</p>
        <p class="margin_t_40 font_w_600">分享类：微博分享</p>
        <p>第三方名称：新浪网络技术股份有限公司</p>
        <p>使用目的：微博分享</p>
        <p>收集数据类型：设备信息</p>
        <p>网址：https://open.weibo.com</p>
        <p class="margin_t_40 font_w_600">统计类：友盟统计</p>
        <p>第三方名称：北京锐讯灵通科技有限公司</p>
        <p>使用目的：友盟统计</p>
        <p>收集数据类型：设备信息、App信息、用户信息</p>
        <p>网址：https://www.umeng.com/analytics</p>
        <p class="margin_t_40 font_w_600">推送类：极光推送</p>
        <p>第三方名称：深圳市和讯华谷信息技术有限公司</p>
        <p>使用目的：消息推送</p>
        <p>收集数据类型：设备信息、App信息、用户信息</p>
        <p>网址：https://www.jiguang.cn/pus</p>
        <p class="margin_t_40 font_w_600">推送类：小米推送</p>
        <p>第三方名称：北京小米科技有限责任公司</p>
        <p>使用目的：消息推送</p>
        <p>收集数据类型：设备信息、App信息、用户信息</p>
        <p>网址：</p>
        <p>https://dev.mi.com/console/appservice/push.html</p>
        <p class="margin_t_40 font_w_600">推送类：魅族推送</p>
        <p>第三方名称：魅族科技有限公司</p>
        <p>使用目的：消息推送</p>
        <p>收集数据类型：设备信息、App信息、用户信息</p>
        <p>网址：https://open.flyme.cn/openNew/push.html</p>
        <p class="margin_t_40 font_w_600">推送类：OPPO推送</p>
        <p>第三方名称：OPPO广东移动通信有限公司</p>
        <p>使用目的：消息推送</p>
        <p>收集数据类型：设备信息、App信息、用户信息</p>
        <p>网址：</p>
        <p>https://open.oppomobile.com/new/introduction?page_name=oppopush</p>
        <p class="margin_t_40 font_w_600">推送类：VIVO推送</p>
        <p>第三方名称：维沃移动通信有限公司</p>
        <p>使用目的：消息推送<br />收集数据类型：设备信息、App信息、用户信息</p>
        <p>网址：https://push.vivo.com.cn/#/</p>
        <p class="margin_t_40 font_w_600">推送类：华为推送</p>
        <p>第三方名称：华为技术有限公司</p>
        <p>使用目的：消息推送</p>
        <p>收集数据类型：设备信息、App信息、用户信息</p>
        <p>网址：</p>
        <p>https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/service-introduction-0000001050040060</p>
        <p class="margin_t_40 font_w_600">定位类：腾讯地图</p>
        <p>第三方名称：深圳市腾讯计算机系统有限公司</p>
        <p>使用目的：根据当前定位在地图上展示动态卡片</p>
        <p>收集数据类型：App信息、位置信息</p>
        <p>网址：https://lbs.qq.com/map/</p>
        <p class="margin_t_40 font_w_600">存储类：阿里云OSS</p>
        <p>第三方名称：阿里巴巴集团控股有限公司</p>
        <p>使用目的：存储用户注册信息，App信息</p>
        <p>收集数据类型：App信息、用户信息</p>
        <p>网址：https://www.aliyun.com</p>
        <p class="margin_t_40 font_w_600">工具类：腾讯Bugly</p>
        <p>第三方名称：腾讯科技（深圳）有限公司</p>
        <p>使用目的：App异常上报，Crash监控，崩溃分析</p>
        <p>收集数据类型：App信息</p>
        <p>网址：https://bugly.qq.com/v2/</p>
        <p class="margin_t_80 text_right">北京惺惺科技有限公司</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  methods: {},
};
</script>
<style scoped>
.page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #000000;
  padding: 32px;
  box-sizing: border-box;
  background: #ffffff;
}

.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 38px;
  padding: 5px 0 5px 20px;
  box-sizing: border-box;
}

.line {
  width: 8px;
  height: 34px;
  background: #c50c37;
  margin-right: 10px;
}

.text {
  font-size: 28px;
  line-height: 46px;
  color: #000000;
  text-align: justify;
}

.font_w_600 {
  font-weight: 600;
}

.margin_t_40 {
  margin-top: 40px;
}

.text_right {
  text-align: right;
}
</style>
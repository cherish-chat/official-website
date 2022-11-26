<template>
    <div class="setting_list">
        <div v-for="(item, index) in list" :key="index" class="list">
            <div class="list_item" @click="jumpPage(item)">{{ index + 1 }}.{{ item.tit }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                tit: '增值服务协议',
                path: "/serviceAgreement"
            }, {
                tit: '连续包月协议',
                path: "/monthlyAgreement"
            }, {
                tit: '惺惺用户充值协议',
                path: "/rechargeProtocol"
            }, {
                tit: '惺惺用户隐私政策',
                path: "/privacyPolicy"
            }, {
                tit: '惺惺用户服务协议',
                path: "/userServiceAgreement"
            }, {
                tit: 'SDK技术说明',
                path: "/description"
            },{
                tit:"提现与兑换突币规则",
                path: "/withdrawalRules"
            },{
                tit:"真人实名认证协议",
                path:"/authenticationProtocol"
            }]
        }
    },
    methods: {
        jumpPage(item) {
            this.$router.push({
                path: item.path
            })
        }
    }
}
</script>
<style scoped>
.setting_list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 20px 0;
    box-sizing: border-box;

}

.list {
    width: 100%;
    padding: 0 36px;
    box-sizing: border-box;
}

.list_item {
    font-size: 12px;
    color: #999999;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #eeeeee;
    cursor: pointer;
}
</style>
<template>
  <div class="container daily-page">
    <div class="test-scss">每日一句</div>
    <div class="loading-test">

    </div>
  </div>

</template>

<script>
export default {
    data() {
        return {
            userInfo: {}
        };
    },

    methods: {
        getUserInfo() {
            // 调用登录接口
            wx.login({
                success: () => {
                    wx.getUserInfo({
                        success: res => {
                            this.userInfo = res.userInfo;
                        }
                    });
                }
            });
            
        },      
    },

    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo();
    }
};
</script>

<style scoped lang='scss'>
@import "./daily.scss";
</style>

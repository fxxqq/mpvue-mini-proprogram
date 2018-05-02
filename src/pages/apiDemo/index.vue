<template>
    <div class="container">
         fdd
    </div>
</template>

<script>
// import API from "../../api/API";
// const api = new API();
export default {
    // beforeMount() {
    //    //这里可以加入loading效果
    //     let that= this;
    //     //获取信息列表
    //     let response = api.getList();
    //     console.log(response);
    //     response
    //         .then(function(res) {
    //             console.log(res);
    //           //这里关闭loading效果
    //             that.list = data;
    //         })
    //         .catch(function(err) {
    //             console.log(err);
    //         });
    // },
    data() {
        return {
            time: {}
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
        }
    },

    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo();
    }
};
</script>

<style scoped>

</style>

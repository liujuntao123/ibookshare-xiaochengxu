//index.js
const app = getApp()
const {config,utils}=app.globalData

Page({
    data: {
        tagList: [],
    },

    onLoad: function() {
        // wx.config=config

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            this.setData({
                                avatarUrl: res.userInfo.avatarUrl,
                                userInfo: res.userInfo,
                            })
                        },
                    })
                }
            },
        })
        this.onGetTagList()
    },

    onGetTagList:function(){
      console.log(app.globalData)
      let _params={
        url:config.base_uri+config.tags_url,
        methods:'GET',
      }
      utils.wrapRequest(_params)
      .catch(err=>{
        console.log('err',err)
      })
      .then(res=>{
        this.setData({
          tagList:res.data
        })
      })
    },
})

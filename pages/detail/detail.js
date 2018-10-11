const app = getApp()
const { config, utils } = app.globalData
Page({
    data: {
        bookData: {},
    },

    onLoad: function(query) {
        this.getBookDetail(query)
        this.getCollectionList()

        
    },
    getBookDetail:function(query){
        let _params={
            url:config.base_uri+config.detail_url,
            method:'GET',
            data:{id:query.id}
        }
        utils.wrapRequest(_params).then(res=>{
            console.log('res',res)
            this.setData({
                bookData:res.data
            })
        })
    },

    handleOnCollect:function(){
      console.log('on collect')
    },
    getCollectionList:function(){
        console.log('get collection list')
    },
    handleCopyCode:function(){
        wx.setClipboardData({
            data: this.data.bookData.bookDownloadCode,
            success: function(res) {
                wx.showToast({
                    title: '复制提取码成功',
                    icon: 'success',
                    duration: 1000
                });
            }
          })
    }
})

//index.js
const app = getApp()
const { config, utils } = app.globalData

Page({
    data: {
        list: [],
    },

    onLoad: function(query) {
        this.setData({
            query
        })
        this.initData()
        this.getBookList()
    },
    onPullDownRefresh() {
        this.initData()
        this.getBookList()
    },
    onReachBottom() {
        this.setData({
            from: this.data.from + 1,
        })
        this.getBookList()
    },
    getBookList: function() {
        let { keywords, from, pageSize } = this.data
        let data={ from, pageSize }
        keywords&&(data.keywords=keywords)
        let _params = {
            url: config.base_uri + config.books_url,
            method: 'GET',
            data,
        }
        utils.wrapRequest(_params).then(res => {
            console.log('res', res)
            wx.stopPullDownRefresh()
            this.setData({
                list: this.data.list.concat(res.data.rows),
            })
        })
    },
    initData: function() {
        this.setData({
            list:[],
            keywords: this.data.query.keywords,
            from: 1,
            pageSize: config.pageSize,
        })
    },
})

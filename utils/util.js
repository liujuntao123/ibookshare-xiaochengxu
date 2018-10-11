const getToken=require('./token')
const wrapRequest=function(params){
    return new Promise((resolve,reject)=>{
        let data=params.data||{}
        let _params={
            ...params,
            data:{...data,token:getToken(Math.floor(Date.now()/1000000))},
            success:function(res){
                if(res.statusCode===200){
                    resolve(res.data)
                }else{
                    wx.showToast({
                        title: '获取数据失败',
                        icon: 'none',
                        duration: 1000
                    });
                    reject(res.data)
                }
            },
            fail:function(err){
                wx.showToast({
                    title: '获取数据失败',
                    icon: 'none',
                    duration: 1000
                });
                reject(err)
            },
        }
        wx.request(_params)
    })

}
module.exports={
    wrapRequest,
}
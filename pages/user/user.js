Page({
    data: {
        isOperationShow: false,
    },
    onToggleOperation: function () {
        this.setData({
            isOperationShow: !this.data.isOperationShow
        });
    },
    
});
let socket;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stack:{
      aa: 10,
      bb: 20,
      cc: 30,
    },
    falg:{
      aa: '',
      bb: '',
      cc:'',
    }
  },
  connect() {
    socket=wx.connectSocket({
      url: 'ws://localhost:8080',
    })
    const _this=this
    socket.onMessage(data=>{
      console.log(data)
      let stackData=JSON.parse(data.data)
      let aaa = _this.data.stack
      let falg=_this.data.falg
      for (let i in stackData){
        falg[i] = _this.change(aaa[i], stackData[i])
      }
       _this.setData({
        stack: stackData,
         falg: falg
      })
    })
  },
  change(oldval,newval){
    if (oldval > newval){
      return 'down'
    }else{
      return 'up'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

})
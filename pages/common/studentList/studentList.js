const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconBackColor: ['#0099CC', '#33CC99', '#FF6666', '#FF9900', '#99CC33', '#99CCCC', '#FF9966', '#FF9999', '#CCCCFF', '#99CCCC'],
    stuList: [],
    cozid:'',
    visible1:false,
    stumore:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cozid = options.cozid;
    var that = this;
    app.agriknow.getCozStudents(cozid)
      .then(data=>{
        that.setData({
          stuList:data
        })
      })
      .catch(data=>{

      })
  },

  stuMore(e){
    let stumore = e.currentTarget.dataset.item;
    this.setData({
      stumore:stumore,
      visible1:true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  handleClose1(){
    this.setData({
      visible1:false
    })
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
    
  }
})
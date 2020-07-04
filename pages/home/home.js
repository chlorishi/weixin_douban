// pages/home/home.js
const app = getApp();
const http = require('../../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {
      coming: {},
      theaters: {},
      top250: {

      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let global = app.globalData;
    let url = global.url;
    let coming = global.coming;
    let theaters = global.theaters;
    let top250 = global.top250;
    http.requestMovie(url + coming, 'coming', '影院热映', this.getHttp)
    http.requestMovie(url + theaters, 'theaters', '热门', this.getHttp)
    http.requestMovie(url + top250, 'top250', '榜单250', this.getHttp)
  },
  getHttp(res, key, title) {
    this.data.list[key] = {
      title,
      movie: res
    }
    console.log(this.data.list);

    this.setData({
      list: this.data.list
    })
  },
  // 跳转详情页
  toDetails(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
    })
  },
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  //跳转更多页面
  toMore(e){
    const title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/pages/more/more?title='+title,
    })
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

  }
})
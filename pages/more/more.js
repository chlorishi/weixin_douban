// pages/more/more.js
const app = getApp();
const http = require('../../utils/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allMore: [],
    totalCount: 0,
    requestCount: 20,
    urlHttp: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const title = options.title;
    let global = app.globalData;
    let url = global.url;
    let coming = global.coming;
    let theaters = global.theaters;
    let top250 = global.top250;
    let urlHttp = '';
    switch (title) {
      case '影院热映':
        urlHttp = url + coming;
        break;
      case '热门':
        urlHttp = url + theaters;
        break;
      case '榜单250':
        urlHttp = url + top250;
        break;
    }
    this.setData({
      urlHttp
    })
    http.request(urlHttp, this.getMore);

    //设置title
    wx.setNavigationBarTitle({
      title
    })
  },
  getMore(res) {
    let tplMore = []
    if (this.data.totalCount > 0) {
      tplMore = this.data.allMore.concat(res.subjects);
    } else {
      tplMore = res.subjects;
    }
    this.setData({
      allMore: tplMore
    })
  },
  loadMore() {
    this.data.totalCount += this.data.requestCount
    let url = this.data.urlHttp + "&start=" + this.data.totalCount + "&count=" + this.data.requestCount;
    http.request(url, this.getMore);
  },
  toDetails(e){
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
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
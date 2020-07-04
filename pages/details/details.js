// pages/details/details.js
const http = require('../../utils/http');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    large: '',
    genres: [],
    countries: [],
    year: '',
    rating: '',
    summary: '',
    casts: [],
    item: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    const global = app.globalData;
    const url = global.url;
    http.request(url + `/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, this.getDetails);
    wx.showLoading({
      title: '加载中',
    })
  },
  getDetails(res) {
    this.setData({
      title: res.title,
      large: res.images.large,
      genres: res.genres,
      countries: res.countries,
      year: res.year,
      rating: res.rating,
      summary: res.summary,
      casts: res.casts,
      item: res
    })
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
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
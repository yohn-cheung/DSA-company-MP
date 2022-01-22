// pages/about/about.js
import event from '../../utils/event'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        img: '../../images/1-image.jpg',
      },
      {
        img: '../../images/2-image.jpg',
      },
      {
        img: '../../images/1-image.jpg',
      },
      {
        img: '../../images/2-image.jpg',
      },
      {
        img: '../../images/1-image.jpg',
      }
    ],
    //language: '',
    language: '',
    languages: ['简体中文', 'English'],
    langIndex: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.loadFontFace({
      family: 'Acumin-RPro',
      source: 'url("../../fonts/Acumin-RPro.woff")',
      success: console.log
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
    this.setData({
      langIndex: wx.getStorageSync('langIndex')
    });
    this.setLanguage();
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
  changeLanguage(e) {
    let index = e.detail.value;
    this.setData({	// (1)
      langIndex: index
    });
    wx.T.setLocaleByIndex(index);
    this.setLanguage();
    event.emit('languageChanged');

    wx.setStorage({
      key: 'langIndex',
      data: this.data.langIndex
    })
  },
  setLanguage() {
    this.setData({
      language: wx.T.getLanguage()
    });
    wx.T.setNavigationBarTitle();
  }
})
//index.js
//获取应用实例
const app = getApp()
import event from '../../utils/event'

Page({
  data: {
    language: '',
    languages: ['简体中文', 'English'],
    langIndex: 0,
    url: ''
  },
  //事件处理函数
  about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  services: function () {
    wx.navigateTo({
      url: '../services/service'
    })
  },
  locations: function () {
    wx.navigateTo({
      url: '../locations/location'
    })
  },
  copy: function(){
    wx.setClipboardData({
      data: 'DSA_China',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: '复制成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  },
  calculator: function (e) {
    console.log(e.currentTarget.id)
    this.setData({
      data: e.currentTarget.id
    });

    wx.setStorage({
      key: "key",
      data: e.currentTarget.id
    })

    wx.navigateTo({
      url: '../calculators/calculator'
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://vv.video.qq.com/getinfo?vids=k1328zr76j9&platform=101001&charge=0&otype=json',
      method: "GET",
      header: { "content-type": "application/x-www-form-urlencoded" },
      dataType: "json",
      success: function (res) {
        var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        var dataJson1 = dataJson.replace(/;qwe/, '');
        var data = JSON.parse(dataJson1);
        var url = data.vl.vi[0].ul.ui[0].url
        var url2 = url.replace(/http/, "https"); //把'http'替换为https
        var fu = data.vl.vi[0].fn
        var fvkey = data.vl.vi[0].fvkey
        var a = url2 + fu + '?vkey=' + fvkey

        that.setData({
          url: a
        })
      }
    })


    this.setData({
      langIndex: wx.getStorageSync('langIndex')
    });
    this.setLanguage();
    wx.loadFontFace({
      family: 'Acumin-RPro',
      source: 'url("../../fonts/Acumin-RPro.woff")',
      success: console.log
    })
  },
  onShow: function () {
    this.setData({
      langIndex: wx.getStorageSync('langIndex')
    });
    this.setLanguage();
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

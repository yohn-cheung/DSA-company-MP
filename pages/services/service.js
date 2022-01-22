// pages/services/service.js
import event from '../../utils/event'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
      {
        img: '../../images/services/Business-intelligence.jpg',
      },
      {
        img: '../../images/services/Business-advisory.jpg',
      },
      {
        img: '../../images/services/Due-dilligence.jpg',
      },
      {
        img: '../../images/services/Accounting.jpg',
      },
      {
        img: '../../images/services/HR-and-Payroll.jpg',
      },
      {
        img: '../../images/services/Tax.jpg',
      },
      {
        img: '../../images/services/Audit.jpg',
      },
      {
        img: '../../images/services/ISA.jpg',
      },
      {
        img: '../../images/services/ODI.jpg',
      },
    ],
    folders: ['English', 'French', 'German', 'Spanish', 'Russian', 'Italian', 'Chinese'],
    folderIndex: 0,
    language: '',
    languages: ['简体中文', 'English'],
    langIndex: 0,
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
    /*if (this.data.shouldChangeTitle) {
      wx.T.setNavigationBarTitle(); // (1)
      this.data.shouldChangeTitle = false;
    }*/
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
  },
  clickFolder(e) {
    let index = e.detail.value;
    this.setData({	// (1)
      folderIndex: index
    });

    //'English', 'French', 'German', 'Spanish', 'Russian', 'Italian', 'Chinese'
    if (index == 0){
      console.log('English');
    }
    else if (index == 0) {
      console.log('English');
    }
    else if (index == 1) {
      console.log('French');
    }
    else if (index == 2) {
      console.log('German');
    }
    else if (index == 3) {
      console.log('Spanish');
    }
    else if (index == 4) {
      console.log('Russian');
    }
    else if (index == 5) {
      console.log('Italian');
    }
    else if (index == 6) {
      console.log('Chinese');
    }
  },
  openFlyer: function (e) {
    wx.downloadFile({
      url: 'https://www.dezshira.com/brochure_download_status/french',
      fileType: 'pdf',
      success: function (res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  contact: function (e) {
    this.setData({
      data: e.currentTarget.id
    });

    wx.setStorage({
      key: "key",
      data: e.currentTarget.id
    })
    
    //use this calculator page to open the webview of the website.
    wx.navigateTo({
      url: '../calculators/calculator'
    })
  }
})
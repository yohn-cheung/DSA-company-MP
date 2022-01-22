// pages/locations/location.js

import event from '../../utils/event'


var offices = ['All', 'China', 'Hong Kong', 'India', 'Indonesia', 'Singapore', 'Vietnam', 'Asian Alliance', 'Liaison Offices', 'Russia'];

  var contacts = [
      {
      image: "../../images/offices/Beijing.jpg",
      city: ['北京', 'Beijing'],
      address: ['协力管理咨询（深圳）有限公司 北京办公室中国北京市朝阳区建国门外大街乙12号双子座大厦东塔701室', 'Suite 701, East Tower, Twin Towers, B-12, Jian Guo Men Wai Avenue Chaoyang District'],
        address_zh: '中国北京市朝阳区建国门外大街乙12号双子座大厦东塔701室',
        lat: 39.913818,
        lon: 116.363625,
        tel: +861065660088,
        email:'beijing@dezshira.com',
        office: 'China',
        category: ['中国', 'China'],
        value: 1
      },
      {
        image: "../../images/offices/Dalian.jpg",
        city: ['大连','Dalian'],
        address: ['协力管理咨询（深圳）有限公司 大连办公室中国辽宁省大连市甘井子区高新园区软件园东路21号大连软件园12号楼501D室', 'Room 501D, Building 12, Dalian Software Park 21 Ruan Jian Yuan East Road, Shahekou District'],
        lat: 38.888822,
        lon: 121.546933,
        tel: +8641139573311,
        email: 'dalian@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Dongguan.jpg",
        city: ['东莞', 'Dongguan'],
        address: ['中国广东省东莞市南城区莞泰路111号民间金融大厦1号楼11层B15室', 'Room C255, 11/F, Minjian Financial Building, 111 Guantai Road Nancheng District Dongguan'],
        lat: 23.020673,
        lon: 113.751799,
        tel: +8676933818020,
        email: 'dongguan@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Guangzhou.jpg",
        city: ['广州', 'Guangzhou'],
        address: ['协力管理咨询（深圳）有限公司 广州办公室中国广东省广州市天河区林和西路161号中泰国际广场B塔1005单元', 'Suite 1005, 10/F, Tower B, Center Plaza, 161 Linhexi Road Tianhe District'],
        lat: 23.149761,
        lon: 113.322894,
        tel: +862038251581,
        email: 'guangzhou@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Hangzhou.jpg",
        city: ['杭州', 'Hangzhou'],
        address: ['中国浙江省杭州市上城区西湖大道1号西湖国贸大厦15层', 'Floor 15, West Lake International Trade Plaza 1 West Lake Avenue, Shangcheng District'],
        lat: 30.244477,
        lon: 120.180612,
        tel: +862038251581,
        email: 'hangzhou@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Ningbo.jpg",
        city: ['宁波', 'Ningbo'],
        address: ['中国浙江省宁波市江东区彩虹南路11号嘉汇国贸A座1105室', 'Room 1105, building A, Crown World Trade Plaza, No. 11, Caihong South Road, Jiangdong District'],
        lat: 29.864414,
        lon: 121.568506,
        tel: +8657487338682,
        email: 'ningbo@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Qingdao.jpg",
        city: ['青岛', 'Qingdao'],
        address: ['中国山东省青岛市市南区闽江路172号软件大厦4楼410房间', 'Room 410 No. 172 Minjiang Road Software Building Shinan District'],
        lat: 36.071434,
        lon: 120.399015,
        tel: +8653286102237,
        email: 'qingdao@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Shanghai.jpg",
        city: ['上海', 'Shanghai'],
        address: ['中国上海市黄浦区南京西路338号天安中心1803-1805室', 'Suite 1803-1805, Tian An Centre, 338 West Nanjing Road, Huangpu District'],
        lat: 31.23184,
        lon: 121.469636,
        tel: +862163588686,
        email: 'shanghai@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Shenzhen.jpg",
        city: ['深圳', 'Shenzhen'],
        address: ['中国广东省深圳市福田区金田路3038号现代国际大厦2503-2504室', 'Unit 2503-2504, 25/F, Modern International Building, 3038 Jintian Road Futian District'],
        lat: 22.534765,
        lon: 114.063115,
        tel: +8675583664120,
        email: 'shenzhen@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Suzhou.jpg",
        city: ['苏州', 'Suzhou'],
        address: ['中国江苏省苏州市吴中区东环路1508号星东环商务大厦608室', 'Suite 608, Xing Dong Huan Commerce Building, 1508 Donghuan Road Wuzhong District'],
        lat: 31.318995,
        lon: 120.648086,
        tel: +8651286868717,
        email: 'suzhou@dezshira.com',
        office: 'China',
        value: 1
      },
      {
        image: "../../images/offices/Tianjin.jpg",
        city: ['Tianjin', '天津'],
        address: ['中国天津市和平区南京路189号津汇广场2座29层20室', 'Unit 20, 29F The Exchange Tower 2 189 Nanjing Road Heping District'],
        lat: 39.117449,
        lon: 117.196608,
        tel: +862258307666,
        email: 'tianjin@dezshira.com',
        office: 'China',
        value: 1
      }, 
      {
        image: "../../images/offices/Zhongshan.jpg",
        city: ['中山', 'Zhongshan'],
        address: ['中国广东省中山市城区中山三路怡华商业中心西座921室', 'Room 921, 9/F, West Building, Yihua Commercial Center No.3 Zhongshan Road'],
        lat: '',
        lon: '',
        tel: +8676088269592,
        email: 'zhongshan@dezshira.com',
        office: 'China',
        value: 1
      }, 
      {
        image: "../../images/offices/Hong-Kong.jpg",
        city: ['香港', 'Hong Kong'],
        address: ['香港九龍尖沙咀麼地道77號華懋廣場5樓507室', 'Unit 507, 5/F, Chinachem Golden Plaza, 77 Mody Road, Tsim Sha Tsui East'],
        lat: 22.300017,
        lon: 114.179215,
        tel: +85223760334,
        email: 'hongkong@dezshira.com',
        office: 'Hong Kong',
        city: ['香港', 'Hong Kong'],
        value: 2
    },
    {
      image: "../../images/offices/India-Delhi.jpg",
      city: ['德里','Delhi'],
      address: ['Unit No. 902, 9th Floor, Eros Corporate Tower, Nehru Place New Delhi 110019, India', 'Unit No. 902, 9th Floor, Eros Corporate Tower, Nehru Place New Delhi 110019, India'],
      lat: 28.550312,
      lon: 77.251927,
      tel: +911140038904,
      email: 'delhi@dezshira.com',
      office: 'India',
      category: ['印度', 'India'],
      value: 3
    },
    {
      image: "../../images/offices/Mumbai-office.jpg",
      city: ['孟买', 'Mumbai'],
      address: ['Office No.212, 2nd Floor, ’A’ Wing, Dynasty Business Park, Andheri Kurla Road, Andheri (East)', 'Office No.212, 2nd Floor, ’A’ Wing, Dynasty Business Park, Andheri Kurla Road, Andheri (East)'],
      lat: 19.11285,
      lon: 72.865899,
      tel: +912267418760,
      email: 'mumbai@dezshira.com',
      office: 'India',
      value: 3
    },
    {
      image: "../../images/offices/Indonesia.jpg",
      city: ['雅加达', 'Jakarta'],
      address: ['8th GP Plaza 3rd Floor Jl.Gelora 2 No. 1, Gelora-Tanah Abang Jakarta Pusat 10720)', '8th GP Plaza 3rd Floor Jl.Gelora 2 No. 1, Gelora-Tanah Abang Jakarta Pusat 10720)'],
      lat: -6.202742,
      lon: 106.799277,
      tel: +622122530984,
      email: 'indonesia@dezshira.com',
      office: 'Indonesia',
      category: ['印度尼西亚','Indonesia'],
      value: 4
    },
    {
      image: "../../images/offices/Singapore.jpg",
      city: ['新加坡', 'Singapore'],
      address: ['8th GP Plaza 3rd Floor Jl.Gelora 2 No. 1, Gelora-Tanah Abang Jakarta Pusat 10720', '8th GP Plaza 3rd Floor Jl.Gelora 2 No. 1, Gelora-Tanah Abang Jakarta Pusat 10720'],
      lat: 1.278051,
      lon: 103.84797,
      tel: +6567893256,
      email: 'singapore@dezshira.com',
      office: 'Singapore',
      category: ['新加坡', 'Singapore'],
      value: 5
    },
    {
      image: "../../images/offices/Vietnam-Hanoi.jpg",
      city: ['河内', 'Hanoi'],
      address: ['Room 901, 9th Floor, TNR Hoan Kiem Tower, 115 Tran Hung Dao Str, Hoan Kiem District', 'Room 901, 9th Floor, TNR Hoan Kiem Tower, 115 Tran Hung Dao Str, Hoan Kiem District'],
      lat: 21.023998,
      lon: 105.841722,
      tel: +842439420443,
      email: 'hanoi@dezshira.com',
      office: 'Vietnam',
      category: ['越南', 'Vietnam'],
      value: 6
    },
    {
      image: "../../images/offices/Vietnam-Ho-Chi-Minh.jpg",
      city: ['胡志明市', 'Ho Chi Minh City'],
      address: ['5th Floor, Anh Dang Building 215 Nam Ky Khoi Nghia street, District 3','5th Floor, Anh Dang Building 215 Nam Ky Khoi Nghia street, District 3'],
      lat: 10.787982,
      lon: 106.685471,
      tel: +842839302828,
      email: 'hcmc@dezshira.com',
      office: 'Vietnam',
      value: 6
    },
    {
      image: "../../images/offices/Malaysia-Kuala-Lumpur.jpg",
      city: ['吉隆坡', 'Kuala Lumpur'],
      address: ['No. 568, Suite 8-11 to 8-13 (Level 8)Kompleks Mutiara, 3½ Mile Jalan Ipoh', 'No. 568, Suite 8-11 to 8-13 (Level 8)Kompleks Mutiara, 3½ Mile Jalan Ipoh'],
      lat: 3.18945,
      lon: 101.680543,
      tel: +60362571130,
      email: 'malaysia@dezshira.com',
      office: 'Malaysia',
      category: ['马来西亚','Malaysia'],
      value: 7
    },
    {
      image: "../../images/offices/Malaysia-Selangor.jpg",
      city: ['雪兰莪', 'Selangor'],
      address: ['No. 7-7 (Level 7), Jalan USJ 9/5T UEP Subang Jaya', 'No. 7-7 (Level 7), Jalan USJ 9/5T UEP Subang Jaya'],
      lat: 3.046772,
      lon: 101.587867,
      tel: +60362571130,
      email: 'malaysia@dezshira.com',
      office: 'Malaysia',
      value: 7
    },
    {
      image: "../../images/offices/The-Philippines-Manila.jpg",
      city: ['马尼拉', 'Manila'],
      address: ['Unit 1101 Cityland 10 Tower 1, 156 H.V.dela Costa Street Ayala North, Makati City, Manila, 1209', 'Unit 1101 Cityland 10 Tower 1, 156 H.V.dela Costa Street Ayala North, Makati City, Manila, 1209'],
      lat: 14.560456,
      lon: 121.017249,
      tel: +6325628190,
      email: 'philippines@dezshira.com',
      office: 'The Philippines',
      category: ['菲律宾', 'The Philippines'],
      value: 7
    },
    {
      image: "../../images/offices/Thailand.jpg",
      city: ['曼谷','Bangkok'],
      address: ['JNP Legal Co., Ltd. Unit 1, 23rd Floor, Interchange 21 Building, North-Klongtoey, Wattana', 'JNP Legal Co., Ltd. Unit 1, 23rd Floor, Interchange 21 Building, North-Klongtoey, Wattana'],
      lat: 13.736672,
      lon: 100.561709,
      tel: +662611279899,
      email: 'thailand@dezshira.com',
      office: 'Thailand',
      category: ['泰国','Thailand'],
      value: 7
    },
    {
      image: "../../images/offices/German-Cologne.jpg",
      city: ['科隆香水', 'Cologne'],
      address: ['Verbindungsbüro Köln Korts Rechtsanwaltsgesellschaft mbH Alter Militärring 10', 'Verbindungsbüro Köln Korts Rechtsanwaltsgesellschaft mbH Alter Militärring 10'],
      lat: 50.93833,
      lon: 6.88209,
      tel: +492219402100,
      email: 'germandesk@dezshira.com',
      office: 'Germany',
      category: ['德国','Germany'],
      value: 8
    },
    {
      image: "../../images/offices/Germany-Essen.jpg",
      city: ['埃森', 'Essen'],
      address: ['Verbindungsbüro Essen ETL International AG Kronprinzenstraße 10', 'Verbindungsbüro Essen ETL International AG Kronprinzenstraße 10'],
      lat: 51.445511,
      lon: 7.018398,
      tel: +492012404376,
      email: 'etl@dezshira.com',
      office: 'Germany',
      value: 8
    },
    {
      image: "../../images/offices/German-Stuttgart.jpg",
      city: ['斯图加特', 'Stuttgart'],
      address: ['Verbindungsbüro Stuttgart Berners Consulting GmbH Plieninger Straße 58', 'Verbindungsbüro Stuttgart Berners Consulting GmbH Plieninger Straße 58'],
      lat: 48.72389,
      lon: 9.15521,
      tel: +497113418020,
      email: 'germandesk@dezshira.com',
      office: 'Germany',
      value: 8
    },
    {
      image: "../../images/offices/Italian-Treviso.jpg",
      city: ['特雷维索', 'Treviso'],
      address: ['Studio Mosca & Associati Via Castagnole, 20/M - 31100 Treviso', 'Studio Mosca & Associati Via Castagnole, 20/M - 31100 Treviso'],
      lat: '',
      lon: '',
      tel: +390422264026,
      email: 'italiandesk@dezshira.com',
      office: 'Italy',
      category: ['意大利','Italy'],
      value: 8
    },
    {
      image: "../../images/offices/Italian-Udine.jpg",
      city: ['乌迪内', 'Udine'],
      address: ['Via C. Percoto No. 11, 33100, Udine, Italyo' ,'Via C. Percoto No. 11, 33100, Udine, Italyo'],
      lat: 46.056874,
      lon: 13.238356,
      tel: +390432701488,
      email: 'andrea.volpe@dezshira.com',
      office: 'Italy',
      value: 8
    },
    {
      image: "../../images/offices/Boston-Waltham.jpg",
      city: ['波士顿', 'Boston'],
      address: ['99 Summer Street, Suite 520 Boston, MA 02210', '99 Summer Street, Suite 520 Boston, MA 02210'],
      lat: 42.353692,
      lon: -71.058418,
      tel: +16469203081,
      email: 'Maria.Kotova@dezshira.com',
      office: 'USA',
      category: ['美国', 'USA'],
      value: 8
    },
    {
      image: "../../images/offices/Boston-Waltham.jpg",
      city: ['圣地亚哥', 'San Diego'],
      address: ['600 B Street, Suite 1400 San Diego, CA 92101', '600 B Street, Suite 1400 San Diego, CA 92101'],
      lat: 32.717972,
      lon: -117.158753,
      tel: +18018336645,
      email: 'dustin.daugherty@dezshira.com',
      office: 'USA',
      value: 8
    },
    {
      image: "../../images/offices/Moscow.jpg",
      city: ['莫斯科', 'Moscow'],
      address: ['Mark Prior & Co. 2 bld.6, Andreevskaya naberezhnaya, Moscow', 'Mark Prior & Co. 2 bld.6, Andreevskaya naberezhnaya, Moscow'],
      lat: 55.755826,
      lon: 37.6173,
      email: 'russia@dezshira.com',
      office: 'Russia',
      category: ['俄罗斯', 'Russia'],
      value: 9
    },
    {
      image: "../../images/offices/St.Petersburg.jpg",
      city: ['圣彼得堡', 'St.Petersburg'],
      address: ['Mark Prior & Co. 4/f, 14, Karavanaya, St.Petersburg', 'Mark Prior & Co. 4/f, 14, Karavanaya, St.Petersburg'],
      lat: 59.93428,
      lon: 30.335099,
      email: 'russia@dezshira.com',
      office: 'Russia',
      value: 9
    },
    {
      image: "../../images/offices/Irkutsk.jpg",
      city: ['伊尔库茨克', 'Irkutsk'],
      address: ['Mark Prior & Co. 121, Karl Libknecht St., Irkutsk', 'Mark Prior & Co. 121, Karl Libknecht St., Irkutsk'],
      lat: 52.286974,
      lon: 104.305018,
      email: 'russia@dezshira.com',
      office: 'Russia',
      value: 9
    }
  ];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: offices,
    contactList: contacts,
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

    console.log(event);
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
  launchAppError(e) {
    console.log(e.detail.errMsg)
  },
  bindPickerChange: function (e) {

    var filterSelect = e.detail.value;
    var compareArray = contacts;
    var filterArray = [];

    if (filterSelect == 0) {
      console.log('show all');
      filterArray = compareArray;
    }
    else {
      for (var i = 0; i < compareArray.length; i++) {
        var value = compareArray[i].value;
        if (value == filterSelect) {
          filterArray.push(compareArray[i]);
        }
      }
    }

    this.setData({
      index: e.detail.value,
      contactList: filterArray,
    })
  },
  makeCall: function (event) {
    var tel = event.currentTarget.id;
    wx.makePhoneCall({
      phoneNumber: tel //仅为示例，并非真实的电话号码
    })
  },
  openLocation: function (event) {

    console.log(event);
    var lat = Number(event.currentTarget.dataset.lat);
    var lon = Number(event.currentTarget.dataset.lon);
    wx.openLocation({
      latitude: lat,
      longitude: lon,
      scale: 18
    })
  }
})
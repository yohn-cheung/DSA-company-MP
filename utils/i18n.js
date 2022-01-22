let T = {
  locale: null,
  locales: {},
  langCode: ['zh-Hans', 'en']
};
let lastLangIndex;

T.registerLocale = function (locales) {
  T.locales = locales;
};

T.setLocale = function (code) {
  T.locale = code;
};

T.setLocaleByIndex = function (index) {
  lastLangIndex = index;
  T.setLocale(T.langCode[index]);

  T.setTabBarLang(index);
};

T.getLanguage = function () {
  return T.locales[T.locale];
};

let navigationBarTitles = [
  '协力管理咨询（深圳）有限公司',
  'Dezan Shira & Associates'
];
// 设置导航栏标题
T.setNavigationBarTitle = function () {
  wx.setNavigationBarTitle({
    title: navigationBarTitles[lastLangIndex]
  });
};

let tabBarLangs = [
  [
    '首先',
    '我'
  ],
  [
    'Home',
    'Me'
  ]
];
// 设置 TabBar 语言
T.setTabBarLang = function (index) {
  let tabBarLang = tabBarLangs[index];

  tabBarLang.forEach((element, index) => {
    wx.setTabBarItem({
      'index': index,
      'text': element
    });
  });
}

export default T;
const aboutMe = Vue.createApp({
  data() {
    return { 
      keywords: ['Data Analysis','Data Visualization', 'Text Mining', 'Web Developing','Machine Learning', 'Deep Learning','Team Leadership','Event Planning']
    }
  }
})
aboutMe.mount('#aboutMe')


const work = Vue.createApp({
  data() {
    return {
      tools: ['Bootstrap', 'SCSS', 'RWD','Javascript', 'Vue']
    }
  }
})

work.mount('#work')

const skill = Vue.createApp({
  data() {
    return {
      skills: [{
        title: 'Data analysis',
        list: [
          "data analysis：R、Python",
          "社媒專案：以文字探勘在社群媒體中分析核四議題",
          "巨量專案：高雄市房價分析及預測",
          "商業數據分析專案：Tafeng資料集顧客分析",
          "金融案例專案：客戶是否購買基金分析及預測"
        ]
      }, {
        title: 'Front-end',
        list: [
          "Basic：HTML｜CSS｜RWD｜JavaScript｜JQuery",
          "CSS Framework：Bootstrap5｜Tailwind CSS",
          "Frontend Framework： Vue.js",
          "網路程式研究社 WEB講師",
          "新創團隊 - 中山GO 平台開發"
        ]
      },
      {
        title: 'Programming',
        list: [
          "Backend ：PHP",
          "Database：MySQL",
          "Web Clawer：Python",
          "Deep Learning:Pytorch",
          "Version control:Git、Github"
        ]
      },
      {
        title: 'Taken Master course',
        list: [
          "微學程：金融服務與金融科技微學程",
          "社群媒體分析",
          "商業數據分析",
          "資料視覺化",
          "巨量資料分析導論",
          "深度學習",
          "消費者心理與行為",
          "金融服務與金融科技資料案例"
        ]
      },
      {
        title: 'Team Leadership / Event Planning',
        list: [
          "畢業專案 組長",
          "中山資管系學會 副會長",
          "中山大學資管週 總籌",
          "中山資管系學會 活動長",
          "網路程式研究社 資訊長",
          "中山資管迎新活動 活動長",
        ]
      },
      {
        title: 'Other skills',
        list: [
          "平面設計：Figma、PhotoShop",
          "影片處理：Adobe Premiere",
          "Office：Excel、PowerPoint、Word",
        ]
      }


      ]
    }
  }
})

skill.mount('#skill')

const portfolio = Vue.createApp({
  data() {
    return {
      types: ['商業數據/文字分析', '前端開發|資料視覺化', '機器學習/深度學習', '活動規劃'],
      typesEnglish: [{ name: 'analysis', current: true }, { name: 'frontend', current: false }, { name: 'ML/DL', current: false }, { name: 'activity', current: false }],
      selectedType: "analysis",
      portfolioList: [
        {
          type: "analysis",
          link: "https://rpubs.com/ZH_Lin/SMA_MidtermReport",
          img: "analysis1.jpg",
          title: "核電議題於PTT政黑版和八卦版比較分析",
          time: "2021/04",
          content: "本專案探討PTT八卦板與政黑版對於核四議題的差異，找出兩版使用用詞的差異，並且分析鄉民討論各政黨的相關用詞，了解PTT這兩版在討論核四議題的不同。",
          subtitle: "※  專案特色：",
          list: ["利用文字雲找出關鍵用詞", "利用情緒分析找出鄉民對於議題的情緒轉折", "利用關聯字詞找出各政黨的相關字詞", "計算各詞的相關性製作詞彙關係圖"],
          keyword: ["社群媒體分析", "情緒分析", "文字雲", "詞彙關係"]
        },
        {
          type: "analysis",
          link: "https://rpubs.com/ZH_Lin/SMA_MidtermReport",
          img: "analysis2.jpg",
          title: "探討ptt八卦板對於核四議題的看法",
          time: "2021/06",
          content: "本專案延續期中專案，將分析聚焦在PTT八卦版上，將PTT討論核電主題分群，並且找出在PTT上討論核能議題中的相關意見領袖。。",
          subtitle: "※ 專案特色：",
          list: ["利用情緒分析找出PTT鄉民對於核四議題的情緒轉折", "利用LDA主題模型找出核能議題的討論主題", "利用網路圖找出PTT上的意見領袖", "利用word2vec找出相關聯之字詞"],
          keyword: ["社群媒體分析", "LDA主題模型", "網路關係圖", "word2vec"]
        },
        {
          type: "analysis",
          link: "https://drive.google.com/file/d/1Hv_-RHxrw9kZsECQPsklgFpYLyOna3zm/view?usp=sharing",
          img: "analysis3.jpg",
          title: "高雄市房價分析",
          time: "2021/10",
          content: "利用高雄市所公布的open data，蒐集2015年至2021年上半年之高雄市實價登陸之資料，找出不同房價、建物型態、不同地區等房價特徵，並將這些資料視覺化呈現趨勢",
          subtitle: "※ 專案特色：",
          list: ["不同門牌號碼尾數的購買數量差異", "不同地區每年房齡分析", "不同地區每年價格走勢分析", "不同地區購買物件種類之分析"],
          keyword: ["資料處理與分析", "open data", "資料視覺化"]
        },
        {
          type: "analysis",
          link: "https://rpubs.com/ZH_Lin/business_data_analysis",
          img: "analysis4.jpg",
          title: "Tafeng資料集資料分析及行銷計畫擬定",
          time: "2022/04",
          content: "Tafeng為一賣場的銷售資料之資料集，內容包括顧客之銷售資料以及產品的銷售資料，並且透過分析這些資料，將顧客分群以及找出產品類型，進而擬定相對應的行銷策略，並獲得期中競賽第三名",
          subtitle: "※ 專案特色：",
          list: ["將顧客利用RFM分類成不同客群", "將資料視覺化進行資料呈現", "找出特定族群購買特定產品比例最高的前十品類", "分析毛利最高的前十項產品顧客族群", "針對不同的客群設計相對應的行銷策略"],
          keyword: ["資料處理與分析", "K-means顧客分群", "RFM顧客模型", "資料視覺化"]
        },
        {
          type: "frontend",
          link: "https://zihong518.github.io/Hexschool/week7/index.html",
          img: "web1.jpg",
          title: "香水電商平台",
          time: "2020/08",
          content: "參與六角學院所舉辦的前端工程師體驗營，於兩個月內學習前端開發之技能，課程完課率達95%(平均為71%)，並在最後一週完成香水電商平台之開發，利用Bootstrap開發，並使用SCSS與JQuery製作",
          subtitle: "※ 使用工具：",
          list: ["Bootstrap", "RWD", "SCSS", "JQuery"],
          keyword: ["Bootstrap", "RWD", "SCSS", "JQuery"]
        },
        {
          type: "frontend",
          link: "https://zihong518.github.io/NSYSU_GO/index.html",
          img: "web2.jpg",
          title: "中山GO",
          time: "2021/03~2021/08",
          content: "中山GO為中山大學新創團隊，核心理念是結合電商與群募聯繫校友與在校生之情感，於7月營運時已突破1000人註冊，在團隊負責平台的開發、維護及內容更新，配合後端與設計進行前端頁面開發。",
          subtitle: "※ 使用工具：",
          list: ["Bootstrap", "RWD", "SCSS", "JavaScript", "Vue.js"],
          keyword: ["Bootstrap", "RWD", "SCSS", "JavaScript", "Vue.js"]
        },
        {
          type: "frontend",
          link: "https://nsysu-health.github.io/freshman-health-check/index",
          img: "web3.jpg",
          title: "新生健檢查詢系統",
          time: "2021/07~2021/08",
          content: "因應以往新生健檢流程繁雜並且以紙本處理以及人工登記為主。擔任衛保組工讀生主動提出將流程電子化，減少人力支出並且減少因人工登記造成資料出錯的機會，在今年達到零錯誤的成果",
          subtitle: "※ 系統特色：",
          list: ["利用google sheet配合google script作為簡易之資料庫", "搭配github page完成系統建置"],
          keyword: ["Google script", "API串接資料"]
        },
        {
          type: "frontend",
          link: "https://hackmd.io/@ZHLin/rknkxldEt",
          img: "web4.jpg",
          title: "網路程式設計研究社 - WEB講師",
          time: "2021/09~2022/01",
          content: "擔任本校網路程式設計研究社一學期的WEB講師，自己編寫教材帶領30位社員學習HTML、CSS等技能，在10堂課內讓社員能夠從0基礎達到業界切版能力",
          subtitle: "",
          list: "",
          keyword: []
        },
        {
          type: "ML/DL",
          link: "https://drive.google.com/file/d/1M43SVeS8Pc-1unbO0m12TC3LuIXQICo0/view?usp=sharing",
          img: "ml1.jpg",
          title: "高雄市房價預測",
          time: "2022/01",
          content: "利用Xgboost、線性回歸以及隨機森林進行高雄市房價的預測，並且加入街景圖片以及利用google api 抓取目標地址附近是否有餐廳、公園等資訊等外部變數",
          subtitle: "※負責內容",
          list: ["利用街景圖片預測房價","將模型加入街景圖片向量變數"],
          keyword: ["Xgboost", "隨機森林", "機器學習"]
        },
        {
          type: "ML/DL",
          link: "https://private-bobolink-22c.notion.site/d9245458ece349eb8e95822d457363b6",
          img: "ml2.jpg",
          title: "深度學習應用實作",
          time: "2021/09~2022/01",
          content: "修習本校研究所課程深度學習，完成多項神經網路應用之實作",
          subtitle: "※ 應用包括：",
          list: ["利用CNN進行圖片分類", "利用CNN結合RNN將圖片轉文字", "將圖片轉文字應用加入Attention", "利用Bert進行twitter推文情緒分析", "利用GAN生成人臉"],
          keyword: ["Pytorch", "Deep Learning", "CNN", "RNN", "GAN", "Bert"]
        },
        {
          type: "ML/DL",
          link: "https://drive.google.com/file/d/1VoqJbk5bQMCn6-5xdY-BDX0l4IjwYvv5/view?usp=sharing",
          img: "ml3.jpg",
          title: "BeautyGAN之實作",
          time: "2022/01",
          content: "在深度學期期末實作風格轉移GAN之運用，BeautyGAN為風格轉移的應用之一，使用者輸入一上妝以及一素顏的照片能夠將其進行妝容交換",
          subtitle: "",
          list: "",
          keyword: ["GAN", "人臉解析", "Deep Learning"]
        },
        {
          type: "activity",
          link: "",
          img: "activity1.jpg",
          title: "中山大學資管系學會 - 副會長",
          time: "2020/07~2021/06",
          content: "在一年內舉辦九項系內活動，兩項跨系活動，帶領14位幹部以及超過30位以上成員，熟悉統籌、決策處理以及凝聚團隊成員",
          subtitle: "※ 舉辦活動：",
          list: ["期初大會、捷運趴趴走、專案展、資管週、聖誕趴、冬至趴、系運、系烤、K歌大賽、主任盃、畢業典禮"],
          keyword: ["活動規劃", "團隊領導", "跨領域合作"]
        },
        {
          type: "activity",
          link: "",
          img: "activity2.jpg",
          title: "中山大學資管週 - 總籌",
          time: "2020/09~2020/12",
          content: "擔任為期一個禮拜的活動資管週總籌，共籌備了4個月，協調4個部門與15位幹部，並與4家贊助廠商洽談公關事宜，與Garena和acer合作舉辦電玩大賽吸引超過250位同學參與，粉絲專頁觸及人數達18000人",
          subtitle: "※ 關鍵指標：",
          list: ["協調4個部門與15位幹部", "與4家贊助廠商協調公關", "舉辦電玩大賽吸引250位以上同學"],
          keyword: ["活動規劃", "團隊領導", "公關洽談"]
        },
        {
          type: "activity",
          link: "",
          img: "activity3.jpg",
          title: "中山大學資管系學會 - 活動長",
          time: "2019/07~2021/06",
          content: "在一年內舉辦九項系級活動，擔任3項活動主持人、2項活動總籌，具有良好的表達能力，頭腦清晰以及快速的臨場反應能力",
          subtitle: "※ 關鍵指標：",
          list: ["擔任3項活動主持人", "2項活動總籌", "帶領10位活動組組員"],
          keyword: ["活動規劃", "活動主持", "團隊合作"]
        },
        {
          type: "activity",
          link: "",
          img: "activity4.jpg",
          title: "中山大學資管系迎新宿營 - 活動長",
          time: "2019/02~2019/09",
          content: "負責迎新宿營中的五大活動發想、籌備，並協調系上30人擔任活動工作人員",
          subtitle: "",
          list: "",
          keyword: ""
        }
      ]
    }
  },
  methods: {
    changeContent(x) {
      this.selectedType = x
      this.typesEnglish.forEach(e => {
        e.current = false
        if (e.name == x) {
          e.current = true
        }
      });

    }
  },
  computed: {
    filteredItems() {
      return this.portfolioList.filter((x) => x.type == this.selectedType)
    }
  }
})

portfolio.mount('#portfolio')
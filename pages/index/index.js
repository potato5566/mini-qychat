//index.js
//获取应用实例
const app = getApp()
var arr2 = [];
var arr3 = [];
Page({
  data: {
    array: ['什么是栖云会？', '如何报名参加栖云会活动？', '栖云会有哪些活动？', '如何成为栖云会会员？', '成为栖云会会员有什么好处？', '活动照片什么时候可以拿到？', '在哪里获取参与活动时拍摄的我的照片？', '我可以带亲朋好友参加栖云会的活动吗？', '参加栖云会活动收费吗？','我有交房/物业/房屋质量等问题可以向栖云会反馈吗？'],
    
    index:'',
    
  },
  sendQus:function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log(e)
    wx.navigateTo({
      url: '/pages/answer/answer?id=' + id
    })
  }
})

import * as req from './module.js'

Page({
  data: {
    image: '',
    content: '',
    type: 0,
    id: 0,
    index: 0,
    title: '',
    fav_nums: 0
  },

  onLoad: function (options) {
    req.getLatest((res) => {
      this.setData({
        ...res
      })
    })
  },

  onLike: function (event) {
    let behavior = event.detail.behavior
    let { id, type } = this.data
    req.like(behavior, id, type)
  },

  onPrev: function (event) {
    let { index } = this.data
    req.getPrevious(index, (res) => {
      this.setData({
        ...res
      })
    })
  },

  onNext: function (event) {

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})
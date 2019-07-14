Component({
  properties: {
    like: Number,
    count: Number
  },

  data: {
    likeImg: 'images/like.png',
    unlikeImg: 'images/unlike.png'
  },

  // attached() {
  //   console.log(this.properties.count)
  // },

  methods: {
    onLike: function(event) {
      let { like, count } = this.properties
      this.setData({
        like: like ? 0 : 1,
        count: like ? --count : ++count
      })
      //点赞
      let behavior = like ? false : true
      this.triggerEvent('like', {
        behavior
      })
    }
  }
})

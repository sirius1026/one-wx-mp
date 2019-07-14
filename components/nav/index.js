// components/navi/index.js
Component({
  properties: {
    title: String,
    id: Number
  },

  data: {
    left: './images/triangle@left.png',
    leftDis: './images/triangle.dis@left.png',
    right: './images/triangle@right.png',
    rightDis: './images/triangle.dis@right.png'
  },

  methods: {
    onLeft: function () {
      if (this.properties.id === 0) return
      this.triggerEvent('left', {

      })
    },

    onRight: function () {
      if (this.properties.id === 10) return
      this.triggerEvent('right', {

      })
    }
  }
})

import { months } from '../../const.js'

Component({
  properties: {
    index: {
      type: Number,
      observer: function (newVal, preVal) {
        let val = newVal<10 ? '0'+newVal : newVal
        this.setData({
          _index: val
        })
      }
    }
  },

  data: {
    _index: '',
    month: '',
    year: 0,
  },

  attached() {
    this.setData({
      month: months[new Date().getMonth()],
      year: new Date().getFullYear()
    })
  },

  methods: {

  }
})

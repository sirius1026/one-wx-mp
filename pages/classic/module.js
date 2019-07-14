import { HTTP } from '../../utils/http.js'
let http = new HTTP()

export function getLatest(showLatest) {
  http.request({
    url: '/classic/latest',
    success: showLatest
  })
}

export function like(behavior, artId, category) {
  http.request({
    url: behavior ? '/like' : '/like/cancel',
    data: {
      art_id: artId,
      type: category
    },
    method: 'POST'
  })
}

export function getPrevious(index, showPrevious) {
  http.request({
    url: '/classic/'+ index +'/previous',
    success: showPrevious
  })
}

function _setLatestIndex(index) {
  
}
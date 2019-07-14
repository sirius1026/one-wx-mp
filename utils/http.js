import { reqConfig } from '../config.js'

export class HTTP {
   request(params) {
     wx.request({
       url: reqConfig.url + params.url,
       method: params.method,
       header: {
         'appkey': reqConfig.appkey
       },
       data: params.data,
       success: (res) => {
         let code = res.statusCode + ''
         if (code.startsWith('2')) {
           params.success && params.success(res.data)
         } else {
           let {error_code} = res.data
           this._showError(error_code)
         }
       },
       fail: (err) => {
         this._showError(1)
       }
     })
   }

   _showError(code) {
     if (!code) code=1
     wx.showToast({
       title: 'error',
       mask: true
     })
   }
}
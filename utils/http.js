function request(url, cb) {
  wx.request({
    url: url,
    header:{
      'content-type':'json'
    },
    success(res) {
      cb(res.data)
    }
  })
}

function requestMovie(url,key,title,cb){
  wx.request({
    url: url,
    header:{
      'content-type':'json'
    },
    success(res) {
      cb(res.data,key,title)
    }
  })
}
module.exports = {
  request,
  requestMovie
}
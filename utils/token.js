const md5=require('blueimp-md5')
const {token_key}=require('../config')

module.exports= function(str){
    return md5(str,token_key)
  }
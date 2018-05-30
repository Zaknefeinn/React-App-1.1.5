const keys ={
  workPlaceToken :'DQVJ0NVVKNENablNhT3BmYXhiOEZAoekdBRHFJUDlTdzRDUkFLRUZARS29OUUNYNzA0VlowMjlCbFN4QzhOWjJmcFlKMVZArTDFRMEtzeWZAocTZAybnhZAWUpJSmRaUHAzTTlvczdXYnpHZAkxKQTRfMHA3bTdBWGk0dk5hSENqaWo0WkNUeld1a2NKV0w0LTQ1THYzd21mMnZArZAkluWTBxam5EaU1vRENBV21wWUQ1SjZANSFVpTmExV19WcWc3SlBDd0duZA09LQ0Fnd05RdmJOSEgtLQZDZD',
  groupId:'1827776987449736',
  fbFields:'id,name,picture.type(normal),description,feed{from{picture,name},full_picture,message,created_time}',
  evntGroupId : '311903265902913'
}

export default keys;

const FB_API = "https://graph.facebook.com/"+keys.groupId+"?fields="+keys.fbFields+"&access_token="+keys.workPlaceToken
const WORK_PLACE_API = "https://graph.facebook.com/"+keys.evntGroupId+"?fields="+keys.fbFields+"&access_token="+keys.workPlaceToken
const TWITTER_API = "http://localhost:8080/tweets_json"
export { FB_API , WORK_PLACE_API , TWITTER_API }
var moment = require('moment')
var moment_timezone = require('moment-timezone')

let TIMEZONE_SEOUL = "Asia/Seoul"
let TIMEZONE_NY = "America/New_York"

var today = moment()

var ko_time = moment_timezone.tz(today, TIMEZONE_SEOUL).format('YYYY-MM-DD HH:mm:ss')
var us_time = moment_timezone.tz(today, TIMEZONE_NY).format('YYYY-MM-DD HH:mm:ss')


console.log('standard_date: '+today.format()+'\n'+
            TIMEZONE_SEOUL +":"+ ko_time+'\n' + 
            TIMEZONE_NY +":" +us_time)
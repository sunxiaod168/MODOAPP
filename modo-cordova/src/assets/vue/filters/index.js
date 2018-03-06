import Vue from 'vue'
import { convertJsonDate, moneyString } from 'common'
import CurrencyFormatter from 'currency-formatter'


Vue.filter('date', function (value) {    
    var date = convertJsonDate(value);
    if (date != null) {        
        return date.toLocaleDateString();
    } else {
        return ''
    }
})
Vue.filter('datetime', function (value, withSecond) {

    var date = convertJsonDate(value);
    if (date != null) {       
        var localDate =  date.toLocaleDateString().replace(/\//g, '-');
        var time = date.toLocaleTimeString('zh',{hour12:false});
        if (!withSecond) {
            time = time.substr(0, time.length - 3);
        }
        return localDate + ' ' + time;
    } else {
        return ''
    }
})
Vue.filter('money', function (value) {
    return moneyString(value);
})

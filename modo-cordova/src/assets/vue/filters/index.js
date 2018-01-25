import Vue from 'vue'
import { convertJsonDate } from 'common'
import CurrencyFormatter from 'currency-formatter'

Vue.filter('date', function (value) {

    var date = convertJsonDate(value);
    if (date != null) {
        return date.toLocaleDateString();
    } else {
        return '无效的日期'
    }
})
Vue.filter('datetime', function (value) {

    var date = convertJsonDate(value)
    if (date != null) {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    } else {
        return '无效的日期'
    }
})
Vue.filter('money', function (value) {
        
    if (value === null) {
        return ''
    } else {        
        return CurrencyFormatter.format(value, { code: 'CNY' });
    }
})

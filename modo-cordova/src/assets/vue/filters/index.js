import Vue from 'vue'
import { convertJsonDate, moneyString} from 'common'
import CurrencyFormatter from 'currency-formatter'

Vue.filter('date', function (value) {

    var date = convertJsonDate(value);
    if (date != null) {
        return date.toLocaleDateString();
    } else {
        return ''
    }
})
Vue.filter('datetime', function (value) {

    var date = convertJsonDate(value)
    if (date != null) {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    } else {
        return ''
    }
})
Vue.filter('money', function (value) {
    return moneyString(value);   
})

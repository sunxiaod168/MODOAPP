<template>
    <div>
       <p class="right-navbar">选择组织</p>
        <f7-list>

            <f7-list-item v-for="org in orgList" checkbox name="org" :value="org.zzid" :title="org.zzname" :key="org.zzid"></f7-list-item>

        </f7-list>
    </div>
</template>

<script>
import {bus} from 'common'
var $$ = Dom7

export default {
  data() {
    return {
      orgList: [
        {
          zzid: '40008001',
          zzname: '红星1店'        
        },
        {
          zzid: '40008002',
          zzname: '红星2店'     
        }
      ]
    }
  },
  mounted(){
    bus.$on('rightPanelClosed', function(){
      var orgs = $$('input[name=org]:checked')
      
      
    })
  }
}
</script>

<style>

</style>


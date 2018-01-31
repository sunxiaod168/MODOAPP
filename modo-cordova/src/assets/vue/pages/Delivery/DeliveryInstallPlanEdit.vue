<template>
  <f7-page nav-title="" @page:beforeinit="initHandle" @page:back="backHandler">
    <f7-list>
      <f7-list-item smart-select title="送货人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="deliveryStaffs" multiple="multiple" v-model="deliveryStaffs">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID">{{staff.Name}}</option>
        </select>
      </f7-list-item>
      <f7-list-item smart-select title="安装负责人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="installMasterStaff" v-model="installMasterStaff">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID">{{staff.Name}}</option>
        </select>
      </f7-list-item>
      <f7-list-item smart-select title="安装人" smart-select-open-in="popup" smart-select-searchbar smart-select-searchbar-cancel="取消" smart-select-searchbar-placeholder="查找" smart-select-back-text="关闭">
        <select name="installStaffs" multiple="multiple" v-model="installStaffs">
          <option v-for="staff in staffs" :value="staff.ID" :key="staff.ID">{{staff.Name}}</option>
        </select>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<style scoped>

</style>
<script>
import { bus } from "common";

export default {
  data() {
    return {
      staffs: [{ ID: 1, Name: "AAA" }, { ID: 2, Name: "BBB" }],
      deliveryStaffs: [],
      installStaffs: [],
      installMasterStaff: 0
    };
  },
  mounted() {
    bus.$on("navRightButtonClicked", this.save);
  },
  methods: {
    initHandle(e) {
      this.$store.state.navRightPanelEnabled = false;
      this.$store.state.navRightTitle = "保存";
      this.$store.state.navRightIcon = "";
      var page = e.detail.page;
      page.container.setAttribute("nav-title", page.query.title);
    },
    backHandler() {
      this.$store.state.navRightPanelEnabled = true;
      this.$store.state.navRightTitle = "";
      this.$store.state.navRightIcon = "fas fa-filter";
    },
    save() {}
  }
};
</script>
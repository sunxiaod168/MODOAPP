<template>
  <f7-page nav-title="关于墨斗云">
    <f7-card>
      <f7-card-header>

        <img src="../../../images/mine/modou.jpg" width="100%" />
        <p class="version">当前版本：V{{version}}</p>

      </f7-card-header>
      <f7-card-content>
        <p>墨斗云家居销售运营管理服务平台是一个专注于家居建材行业，为家居建材企业或经销商提供销售运营管理服务的在线租用型的信息化平台。</p>
        <p>旨在帮助家居企业或经销商建立起规范的销售运营管理体系。提升其规模化运营能力，构建互联网时代下的新型客户关系。</p>
      </f7-card-content>
     
    </f7-card>

  </f7-page>
</template>
<style scoped>
.version {
  margin: 10px 0 0;
  text-align: center;
  width: 100%;
}
.card-header {
  flex-wrap: wrap;
}
.card-content>>>p {
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  text-indent: 30px;
}
</style>
<script>
import CONST from "const";

export default {
  data() {
    return {
      version: CONST.VERSION
    };
  }
};
</script>

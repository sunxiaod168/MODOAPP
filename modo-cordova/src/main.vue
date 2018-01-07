<template>
  <!-- App -->
  
  <div id="app">
    <!-- Statusbar -->  
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <!-- Views -->
      <f7-views>
        <!-- Your main view, should have "main" prop -->
        <f7-view main>
          <!-- Pages container, because we use fixed navbar and toolbar, it has additional appropriate props -->
          <f7-pages>
            <!-- Initial Page -->
            <f7-page name="index">
              
              
                <h1>墨斗云</h1>
                <f7-link href="/Query">开始使用</f7-link>                           
            </f7-page>
          </f7-pages>
        </f7-view>
      </f7-views>  
  </div>
</template>
<style scoped>

</style>

<script>
export default {
  methods:{
    
  }
}
</script>

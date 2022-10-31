<template>
  <div class="container-fluid page-body-wrapper">
    <Navbar />
    <Sidebar />
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <Truck />
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Truck from '@/components/form/Truck.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Sidebar,
    Truck
  }
}
</script>
<style scoped lang="scss">
.page-body-wrapper {
  padding-top: 17px;
}
</style>

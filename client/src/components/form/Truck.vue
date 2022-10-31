<script>
import { mapActions, mapMutations } from 'vuex'
import Popups from '@/components/form/Popups.vue'

export default {
  /* eslint-disable */
  name: 'Truck',
  components: {
    Popups
  },
  data() {
    return {
      selected: '',
      number: '',
      OneTruck: []
    }
  },
  methods: {
    ...mapActions(['GetTruckNumber','GetX']),
    ...mapMutations(['ModalIsActive']),
    form: async function (e) {
      e.preventDefault();
      this.OneTruck = await this.GetTruckNumber(this.number)
      if (this.OneTruck.length > 0){
        this.OneTruck = this.OneTruck.shift()
      }
    }
  }
}
</script>
<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title" v-if="selected != ''">Maşını <span>{{ selected }}.</span>
        </h4>
        <p class="card-description">
          Qaraja daxil olan və yaxud qarajdan çıxan maşını qeyd etmə formu.
        </p>
        <form class="forms-sample" @submit="form">
          <div class="form-group">
            <label>Maşının nömrəsi {{ number }}</label>
            <input type="text" class="form-control" placeholder="Number" v-model="number">
          </div>
          <div class="form-group">
            <label>Maşını</label>
            <select class="form-control" v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Əlavə et</option>
              <option>Yoxla</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary me-2" @click="ModalIsActive()" >Submit</button>
        </form>
      </div>
    </div>
  </div>
  <Popups :number=OneTruck.number />
</template>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  text-align: left;
}
</style>
  
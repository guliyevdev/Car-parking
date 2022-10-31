<script>
import { mapMutations, mapState } from 'vuex'

export default {
  /* eslint-disable */
    name: 'Popups',
    props: ['number'],
    computed: {
        ...mapState(['ModalStatus']),
        ...mapMutations(['ModalIsActive'])
    }

}
</script>
<template>
    <div class="modal fade" :class="{show : ModalStatus}" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class=" modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <p v-if="number">{{ number }} nömrəli maşın qarajdadır.</p>
                <p v-else >Sistemde bu nömrədə maşın tapılmadı.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="ModalIsActive()">Bağla</button>
                <button type="button" class="btn btn-primary">Sil</button>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.show {
    display: block;
}
</style>

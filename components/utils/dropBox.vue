<template>
  <div
    class="w-full flex flex-col rounded-[16px] p-6"
    :class="dropBox ? 'bg-[#5865F2] text-white' : 'bg-[#F6f6f6]'"
    @click="showDropBox"
  >
    <div class="flex justify-between items-center">
      <div class="text-[20px] font-semibold leading-[32px]" v-html="title">
      </div>
      <div v-if="dropBox ? 'hidden' : ''">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
      <div v-else><font-awesome-icon :icon="['fas', 'plus']" /></div>
    </div>
    <div class="mt-6" :class="dropBox ? 'block' : 'hidden'" v-html="desc">
    </div>
  </div>
</template> 

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        dropBoxList: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
            default: '',
        },
        desc: {
            type: String,
            default: '',
        }
    },
    setup() {
        
    },
    data(){
        return{
            dropBox: false,
        }
    },
  methods: {
    showDropBox() {
      this.dropBox = !this.dropBox;
    },
  },
})
</script>

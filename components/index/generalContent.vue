<template>
    <div class="w-full" :style="{ backgroundColor: bgColor }">
        <div class="max-w-[1260px] mx-auto py-[120px] px-[40px] flex justify-between" :class="reverse?'flex-row-reverse':'flex-row'">
            <div><img :src="contentImage"></div>
            <div class="max-w-[380px] flex flex-col items-center justify-center">
                <div class="text-[48px] font-bold leading-[120%]">{{ title }}</div>
                <div class="text-[20px] mt-5 leading-[1.625rem]">{{ desc }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    mounted(){
    },
    setup() {
        
    },
    data(){
        return{
        }
    },
    props: {
        contentImage: {
            type: String,
            default: null
        },
        title: {
            type: String,
            defualt: null,
        },
        desc: {
            type: String,
            default: null,
        },
        reverse: Boolean,
        bgColor: {
            type: String,
            default: null,
        },
    }
})
</script>


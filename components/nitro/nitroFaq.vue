<template>
    <div class="max-w-[1180px] mx-auto">
        <div class="flex flex-col items-center">
            <div class="text-[48px] leading-[58px] font-bold mb-4">คำถามที่พบบ่อย</div>
            <div class="flex">
                <template v-for="menu, i in menus" :key="i">
                    <div class="text-[#72767d] py-[9px] px-4">{{ menu.title }}</div>
                </template>
            </div>
            <!-- <div class="w-full bg-[#f6f6f6] rounded-[16px] p-6">
                <div class="flex justify-between items-center">
                    <div class="text-[20px] font-semibold leading-[32px]">Nitro คืออะไร?</div>
                    <div><font-awesome-icon :icon="['fas', 'xmark']" /></div>
                </div>
            </div> -->

        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    mounted() {
        console.log(this.menus[0].desc)
    },
    setup() {

    },
    data() {
        return {
            menus: [
                {
                    title: 'ทั่วไป',
                    desc: [
                        'Nitro คืออะไร?',
                        'Nitro ทำงานอย่างไร?',
                        'อะไรคือความแตกต่างระหว่าง Nitro กับ Nitro Basic?',
                        'Nitro มีค่าใช้จ่ายเท่าไหร่?',
                        'ฉันจะซื้อ Nitro ได้จากที่ใด?',
                    ],
                },
                { title: 'การชำระเงิน' },
                { title: 'การให้ของขวัญและการโปรโมท' },
                { title: 'อื่น ๆ' }
            ]
        }
    }
})
</script>

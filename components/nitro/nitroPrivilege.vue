<template>
    <div class="w-full">
        <div class="max-w-[1180px] mx-auto flex flex-col">
            <div class="text-center text-[48px] font-bold">สิทธิประโยชน์จาก Nitro ยอดนิยม</div>
            <div class="flex flex-row flex-wrap gap-5 mt-[76px]">
                <template v-for="item, i in content" :key="i">
                    <div class="w-[580px] flex flex-col items-center gap-y-8 bg-[#F6F6F6] rounded-[8px] p-10">
                        <div class="max-w-[380px] mx-auto text-[24px] font-bold text-center">{{ item.title }}</div>
                        <div><img :src="item.url"></div>
                    </div>
                </template>
            </div>
        </div>
        <div class="w-full flex justify-center mt-10">
            <button
                class="bg-black rounded-[28px] text-[20px] text-white font-bold py-3 px-8">แสดงสิทธิประโยชน์ทั้งหมด</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {

    },
    data() {
        return {
            content: [
                {
                    title: "ไม่ว่าจะเป็นคลิปหรือรูปภาพแชร์ไปเลยด้วยไฟล์อัปโหลดที่ใหญ่ขึ้น",
                    url: "/_nuxt/static/images/nitro/NitroPrevilageContent1.png",
                },
                {
                    title: "สตรีมแอปและเกมแบบ HD สวยสดงดงาม",
                    url: "/_nuxt/static/images/nitro/NitroPrevilageContent2.png",
                },
                {
                    title: "ไฮป์และมีมด้วยอีโมจิแบบกำหนดเองทุกที่",
                    url: "/_nuxt/static/images/nitro/NitroPrevilageContent3.png",
                },
                {
                    title: "ปลดล็อกสิทธิประโยชน์ให้แก่ชุมชนของคุณด้วย 2 บูสต์เซิร์ฟเวอร์",
                    url: "/_nuxt/static/images/nitro/NitroPrevilageContent4.png",
                },
            ]

        }
    }
})
</script>

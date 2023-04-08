<template>
    <div class="w-full">
        <div class="max-w-[1180px] mx-auto mt-[100px] mb-[120px] bg-[#F6F6F6] px-[100px] pt-[70px] pb-[80px]">
            <div class="max-w-[580px] mx-auto text-[48px] font-bold text-center mb-[80px]">
                เลือกแผนที่เหมาะสมกับคุณที่สุด
            </div>
            <div class="flex flex-col">
                <div class="flex justify-between pb-4 border-b-2">
                    <div class="text-[20px] font-bold">คุณสมบัตินำเสนอ</div>
                    <div class="flex">
                        <div class="w-[180px] flex justify-center"><img src="@/static/images/nitro/NitroPlan1.png"
                                class="w-[104px] h-[39px]"></div>
                        <div class="w-[210px] flex justify-center"><img src="@/static/images/nitro/NitroPlan2.png"
                                class="w-[100px] h-[24px]"></div>
                    </div>
                </div>

                <template v-for="item, i in content" :key="i">
                    <div class="h-[67px] flex items-center justify-between border-b-2">
                        <div class="text-[18px] text-[#2E3338]">{{ item.title }}</div>
                        <div class="flex">
                            <div class="w-[180px] flex items-center justify-center"><img :src="item.iconLeft"></div>
                            <div class="w-[210px] flex items-center justify-center"><img :src="item.iconRight"></div>
                        </div>
                    </div>
                </template>
            </div>
            <div class="flex justify-end gap-x-[30px] mt-6 text-white text-[14px] font-medium">
                <button class="w-[180px] bg-[#5865F2] rounded-[40px] py-[7px] px-4">สมัครสมาชิก Basic</button>
                <button class="w-[180px] bg-[#5865F2] rounded-[40px] py-[7px] px-4">สมัครสมาชิก Nitro</button>
            </div>
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
                    title: "กำหนดอีโมจิเองในทุกที่และทำให้อีโมจิเคลื่อนไหวได้",
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon1.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: "กำหนดสติ๊กเกอร์เองได้ทุกที่พร้อมเอ็กซ์คลูซีฟ Nitro 300+ แบบ",
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon1.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: "แชร์ไฟล์ได้ใหญ่ขึ้น",
                    iconLeft: "50MB",
                    iconRight: "500MB"
                },
                {
                    title: "เข้าถึงกิจกรรมได้มากยิ่งขึ้น",
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: "HD streaming",
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "ได้ถึง 4K และ 60fps"
                },
                {
                    title: '2 บูสต์ฟรี + 30% off extra Boosts',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: 'สัญลักษณ์ประจำตัวแบบเคลื่อนไหว แบนเนอร์ ธีมโปรไฟล์ และแท็กแบบกำหนดเอง',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: 'โปรไฟล์ของเซิร์ฟเวอร์แบบกำหนดเอง',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: 'แบดจ์ Nitro บนโปรไฟล์ของคุณ',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon1.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: 'พื้นหลังวิดีโอแบบกำหนดเอง',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon1.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: 'เข้าร่วมเซิร์ฟเวอร์ได้ถึง 200 เซิร์ฟเวอร์',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: 'ข้อความที่ยาวขึ้นสูงสุดถึง 4,000 ตัวอักขระ',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
                {
                    title: 'สีสำหรับธีม Discord ของคุณ',
                    iconLeft: "/_nuxt/static/images/nitro/TickIcon2.png",
                    iconRight: "/_nuxt/static/images/nitro/TickIcon1.png"
                },
            ],
        }
    }
})
</script>

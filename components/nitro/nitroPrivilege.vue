<template>
  <div class="w-full">
    <div class="max-w-[1180px] mx-auto flex flex-col">
      <div class="text-center text-[48px] font-bold">
        สิทธิประโยชน์จาก Nitro ยอดนิยม
      </div>
      <div class="flex flex-row flex-wrap gap-5 mt-[76px]">
        <template v-for="(item, i) in content" :key="i">
          <div
            v-if="i <= 3"
            class="w-[580px] flex flex-col items-center gap-y-8 bg-[#F6F6F6] rounded-[8px] p-10"
          >
            <div class="max-w-[405px]">
              <div class="text-[24px] font-bold text-center">
                {{ item.title }}
              </div>
              <div class="text-[14px] text-center">{{ item.desc }}</div>
            </div>
            <div><img :src="item.url" /></div>
          </div>
          <div
            v-if="i > 3"
            class="w-[380px] flex flex-col items-center gap-y-8 bg-[#F6F6F6] rounded-[8px] p-10"
            :class="showAll ? 'block' : 'hidden'"
          >
            <div><img :src="item.url" /></div>
            <div class="max-w-[230px]">
              <div class="text-[20px] font-bold text-center">
                {{ item.title }}
              </div>
              <div class="text-[14px] text-center">{{ item.desc }}</div>
            </div>
            <div></div>
          </div>
        </template>
      </div>
    </div>
    <div class="w-full flex justify-center mt-10">
      <button
        class="bg-black rounded-[28px] text-[20px] text-white font-bold py-3 px-8"
        @click="clickShow"
      >
        แสดงสิทธิประโยชน์ทั้งหมด
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return {
      showAll: false,
      content: [
        {
          title:
            "ไม่ว่าจะเป็นคลิปหรือรูปภาพแชร์ไปเลยด้วยไฟล์อัปโหลดที่ใหญ่ขึ้น",
          desc: "",
          url: "/images/nitro/NitroPrevilageContent1.png",
        },
        {
          title: "สตรีมแอปและเกมแบบ HD สวยสดงดงาม",
          desc: "",
          url: "/images/nitro/NitroPrevilageContent2.png",
        },
        {
          title: "ไฮป์และมีมด้วยอีโมจิแบบกำหนดเองทุกที่",
          desc: "",
          url: "/images/nitro/NitroPrevilageContent3.png",
        },
        {
          title: "ปลดล็อกสิทธิประโยชน์ให้แก่ชุมชนของคุณด้วย 2 บูสต์เซิร์ฟเวอร์",
          desc: "",
          url: "/images/nitro/NitroPrevilageContent4.png",
        },
        {
          title: "แฮงก์เอาต์ได้มากยิ่งขึ้น",
          desc: "เริ่มเกมแบบแคชวลหรือปาร์ตี้รับชมได้ทันทีด้วยกิจกรรม",
          url: "/images/nitro/NitroPrevilageContent5.png",
        },
        {
          title: "Special Stickers Access",
          desc: "ใช้สติกเกอร์แบบกำหนดเองได้ทุกที่และเข้าถึงสติกเกอร์พิเศษเฉพาะ Nitro กว่า 300 รายการ",
          url: "/images/nitro/NitroPrevilageContent6.png",
        },
        {
          title: "โปรไฟล์แบบกำหนดเอง",
          desc: "ใช้สัญลักษณ์ประจำตัว ธีมโปรไฟล์ แบนเนอร์ และข้อมูลส่วนตัวที่แตกต่างกันในแต่ละเซิร์ฟเวอร์ของคุณ",
          url: "/images/nitro/NitroPrevilageContent7.png",
        },
        {
          title: "Color Themes",
          desc: "Add your vibe to Discord with unique theme colors.",
          url: "/images/nitro/NitroPrevilageContent8.png",
        },
        {
          title: "ซูเปอร์รีแอคชั่น",
          desc: "Hype up the chat with action-packed, animated reactions.",
          url: "/images/nitro/NitroPrevilageContent9.png",
        },
        {
          title: "แบดจ์ Nitro",
          desc: "โชว์ออฟสมาชิก Nitro ของคุณด้วยแบดจ์ในโปรไฟล์",
          url: "/images/nitro/NitroPrevilageContent10.png",
        },
      ],
    };
  },
  methods: {
    clickShow() {
      this.showAll = !this.showAll;
    },
  },
});
</script>

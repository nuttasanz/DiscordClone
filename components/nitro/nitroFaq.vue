<template>
  <div class="max-w-[1180px] mx-auto">
    <div class="flex flex-col items-center">
      <div class="text-[48px] leading-[58px] font-bold mb-4">
        คำถามที่พบบ่อย
      </div>
      <div class="flex mb-8">
        <template v-for="(menu, i) in menus" :key="i">
          <div class="text-[#72767d] py-[9px] px-4">{{ menu.title }}</div>
        </template>
      </div>
      <div class="w-full flex flex-col gap-y-4">
        <template v-for="(list, i) in dropBoxList" :key="i">
          <drop-box :title="list.title" :desc="list.desc"></drop-box>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import dropBox from "../utils/dropBox.vue";

export default defineComponent({
  components: { dropBox },
  setup() {},
  data() {
    return {
      menus: [
        {
          title: "ทั่วไป",
          desc: [
            "Nitro คืออะไร?",
            "Nitro ทำงานอย่างไร?",
            "อะไรคือความแตกต่างระหว่าง Nitro กับ Nitro Basic?",
            "Nitro มีค่าใช้จ่ายเท่าไหร่?",
            "ฉันจะซื้อ Nitro ได้จากที่ใด?",
          ],
        },
        { title: "การชำระเงิน" },
        { title: "การให้ของขวัญและการโปรโมท" },
        { title: "อื่น ๆ" },
      ],
      dropBoxList: [
        {
          title: "ของขวัญ Nitro เป็นของจริงหรือเปล่า?",
          desc: "จริงสิ! คุณสามารถซื้อของขวัญ Nitro ผ่านทางหน้า Nitro ได้ในเดสก์ท็อปหรือในแท็บให้ของขวัญ Nitro ที่อยู่ในมือถือใต้การตั้งค่าผู้ใช้งาน นอกจากนั้นคุณยังสามารถส่งของขวัญแบบเร่งด่วนในช่องได้ด้วยการเลือกที่ไอคอนของขวัญในเดสก์ท็อปหรือมือถือ หากมีคนส่งของขวัญให้คุณ คุณก็สามารถดูหน้าตาได้",
        },
        {
          title: "จะแลกรับรหัสสมนาคุณ Nitro ได้ที่ใด?",
          desc: "คุณสามารถแลกรับรหัสสมนาคุณ Nitro ได้ในเดสก์ท็อปและในเว็บแอป ผ่านทางหน้าห้องเก็บของขวัญที่อยู่ในการตั้งค่าผู้ใช้งาน ",
        },
        {
          title: "ฉันจะรับ Nitro ฟรีจากบอทหรือการให้ของฟรีได้หรือไม่?",
          desc: "วิธีที่เป็นทางการเพียงวิธีเดียวในการรับ Nitro ผ่านของขวัญที่ส่งถึงคุณในแชท หรือจากการรับรหัสที่สามารถแลกใช้ภายใต้ห้องเก็บของขวัญในการตั้งค่าผู้ใช้บนแอปเดสก์ท็อปและบนเว็บ เราไม่แนะนำไม่ให้คุณคลิกลิงก์ใดก็ตามจากบุคคลที่ไม่รู้จัก สำหรับเคล็ดลับเพิ่มเติมในการสร้างความปลอดภัยบน Discord ให้ไปที่หน้าความปลอดภัยของเรา",
        },
        {
          title: "Discord นำเสนอการโปรโมท Nitro หรือไม่?",
          desc: "เราทำงานอยู่อย่างตลอดเวลาเพื่อหาวิธีการให้ประโยชน์คุณมากยิ่งขึ้นด้วย Nitro! เพราะฉะนั้นขอให้โปรดจับตามองแอป, Twitter, Instagram หรือบล็อกของเราให้ดีเพื่อดูว่ามีโปรโมชั่นอยู่หรือเปล่า :)",
        },
      ],
    };
  },
});
</script>

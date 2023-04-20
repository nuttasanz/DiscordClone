<template>
  <div class="max-w-[1260px] mx-auto py-[120px]">
    <div class="flex gap-5 justify-center">
      <div class="flex flex-col">
        <div
          class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px]"
        >
          <div class="text-[32px] font-semibold">iOS</div>
          <div
            class="py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4"
          >
            ดาวน์โหลด
          </div>
          <img src="\images\download\1.png" class="relative mt-14" />
        </div>

        <div
          class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px] my-5"
        >
          <div class="flex flex-col items-center">
            <div class="text-[32px] font-semibold">Linux</div>
            <div class="flex flex-col">
              <button
                class="relative flex gap-x-2 items-center py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4"
                @click="showLinux"
              >
                <div>ดาวน์โหลด</div>
                <div><font-awesome-icon :icon="['fas', 'angle-down']" /></div>
              </button>
              <div class="relative" :class="linuxDropDown ? 'block' : 'hidden'">
                <div
                  class="absolute z-10 w-full bg-[#FFFFFF] rounded-[8px] mt-2 p-4"
                >
                  <div class="flex-col">
                    <div
                      class="text-[20px] py-1 px-2 hover:bg-[#F6F6F6] hover:rounded-[8px] hover:text-[#5865F2] hover:underline"
                    >
                      deb
                    </div>
                    <div
                      class="text-[20px] py-1 px-2 hover:bg-[#F6F6F6] hover:rounded-[8px] hover:text-[#5865F2] hover:underline"
                    >
                      tar.gz
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="\images\download\2.png" class="relative mt-14" />
        </div>

        <div
          class="relative bg-[#F6F6F6] max-w-[580px] flex flex-col py-12 px-10"
        >
          <div class="text-[32px] font-semibold">อยากทดลองอะไรใหม่ ๆ ไหม</div>
          <div class="text-[20px] my-4">
            ลองดูเวอร์ชั่นทดสอบสาธารณะของเราแล้วทดลองใช้ฟีเจอร์ใหม่ก่อนเปิดตัวสิ
          </div>
          <button
            class="w-fit flex gap-x-2 items-center py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4"
            @click="showPublic"
          >
            <div>ดาวน์โหลด Public Test Build</div>
            <div><font-awesome-icon :icon="['fas', 'angle-down']" /></div>
          </button>
          <div class="relative">
            <div
              class="absolute z-10 w-full bg-[#FFFFFF] rounded-[8px] mt-2 p-4"
              v-if="publicDropDown"
            >
              <div class="flex-col">
                <div
                  class="text-[20px] py-1 px-2 hover:bg-[#F6F6F6] hover:rounded-[8px] hover:text-[#5865F2] hover:underline"
                >
                  Windows
                </div>
                <div
                  class="text-[20px] py-1 px-2 hover:bg-[#F6F6F6] hover:rounded-[8px] hover:text-[#5865F2] hover:underline"
                >
                  Linux deb
                </div>
                <div
                  class="text-[20px] py-1 px-2 hover:bg-[#F6F6F6] hover:rounded-[8px] hover:text-[#5865F2] hover:underline"
                >
                  Linux tar.gz
                </div>
                <div
                  class="text-[20px] py-1 px-2 hover:bg-[#F6F6F6] hover:rounded-[8px] hover:text-[#5865F2] hover:underline"
                >
                  Mac
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center">
        <div
          class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px]"
        >
          <div class="text-[32px] font-semibold">Andriod</div>
          <div
            class="py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4"
          >
            ดาวน์โหลด
          </div>
          <img
            src="\images\download\5.png"
            class="relative mt-14 objec"
          />
        </div>

        <div
          class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px] my-5"
        >
          <div class="text-[32px] font-semibold">Mac</div>
          <div
            class="flex gap-x-2 items-center py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4"
          >
            <div>ดาวน์โหลด</div>
          </div>
          <img src="\images\download\3.png" class="relative mt-14" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return {
      linuxDropDown: false,
      publicDropDown: false,
    };
  },
  methods: {
    showLinux() {
      this.linuxDropDown = !this.linuxDropDown;
    },
    showPublic() {
      this.publicDropDown = !this.publicDropDown;
    },
  },
});
</script>

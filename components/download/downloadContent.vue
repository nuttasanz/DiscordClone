<template>
    <div class="max-w-[1260px] mx-auto py-[120px]">
        <div class="flex gap-5 justify-center">
            <div class="flex flex-col">

                <div class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px]">
                    <div class="text-[32px] font-semibold">iOS</div>
                    <div class="py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4">ดาวน์โหลด</div>
                    <img src="@\static\images\download\1.png" class="relative mt-14">
                </div>

                <div class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px] my-5">
                    <div class="text-[32px] font-semibold">Linux</div>
                    <div class="flex gap-x-2 items-center py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4">
                        <div>ดาวน์โหลด</div>
                        <div><font-awesome-icon :icon="['fas', 'angle-down']" /></div>
                    </div>
                    <img src="@\static\images\download\2.png" class="relative mt-14">
                </div>

                    <div class="relative bg-[#F6F6F6] max-w-[580px] flex flex-col py-12 px-10">
                    <div class="text-[32px] font-semibold">อยากทดลองอะไรใหม่ ๆ ไหม</div>
                    <div class="text-[20px] my-4">ลองดูเวอร์ชั่นทดสอบสาธารณะของเราแล้วทดลองใช้ฟีเจอร์ใหม่ก่อนเปิดตัวสิ</div>
                    <div class="w-fit flex gap-x-2 items-center py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4">
                        <div>ดาวน์โหลด Public Test Build</div>
                        <div><font-awesome-icon :icon="['fas', 'angle-down']" /></div>
                    </div>
                </div>

            </div>

            <div class="flex flex-col justify-center">

                <div class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px]">
                    <div class="text-[32px] font-semibold">Andriod</div>
                    <div class="py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4">ดาวน์โหลด</div>
                    <img src="@\static\images\download\5.png" class="relative mt-14 objec">
                </div>

                <div class="relative bg-[#F6F6F6] max-w-[580px] h-[600px] flex flex-col items-center p-[56px] rounded-[28px] my-5">
                    <div class="text-[32px] font-semibold">Mac</div>
                    <div class="flex gap-x-2 items-center py-4 px-8 bg-[#23272A] rounded-full text-white text-[20px] mt-4">
                        <div>ดาวน์โหลด</div>
                        <div><font-awesome-icon :icon="['fas', 'angle-down']" /></div>
                    </div>
                    <img src="@\static\images\download\3.png" class="relative mt-14">
                </div>

            </div>

        </div>
    </div>
</template>
<script lang="ts">
import HeaderSection from '../components/HeaderSection.vue'
import FooterSection from '../components/FooterSection.vue'
import InputText from '../components/InputText.vue'
import InputArea from '../components/InputArea.vue'
import InputNumber from '../components/InputNumber.vue'

export default {
  components: {
    HeaderSection, FooterSection, InputText, InputArea, InputNumber
  },
  data() {
    return {
      form: {
        name: '',
        address: null,
        familyMember: null,
      }
    }
  },
}
</script>

<template>
  <main>
    <header-section/>
    <div class="min-h-screen py-12 px-5 max-w-2xl mx-auto text-2xl">
      <div class="pb-10 border-b-4">
        <input-text label="Name" v-model="form.name" />
        <input-number type="number" label="Number of Family Member" v-model="form.familyMember" class="mt-3" />
        <input-area label="Address" v-model="form.address" class="mt-3" />
        <div class="flex justify-center mt-10">
          <div class="py-2 px-5 rounded-xl text-sm text-white font-medium bg-red-600 hover:bg-red-700 duration-100">Submit</div>
        </div>
      </div>
      <div class="mt-10">
        <h2 class="font-2xl">List Data</h2>
        <div>
          <div class="flex py-2 bg-white shadow-lg mt-5 rounded">
            <div class="min-w-[50px] text-[20px] flex justify-center items-center border-r-2">
              1.
            </div>
            <div class="w-full">
              <div class="flex w-full text-[20px]">
                <div class="w-3/4 px-4 font-medium leading-tight">Mr. John Doe</div>
                <div class="w-1/4 pr-4 font-semibold text-end">[ 55 ]</div>
              </div>
              <div class="px-4 text-[18px] leading-tight">
                New York City, New York, United States
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-section/>
  </main>
</template>

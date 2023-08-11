<script lang="ts">
import HeaderSection from "../components/HeaderSection.vue";
import FooterSection from "../components/FooterSection.vue";
import InputText from "../components/InputText.vue";
import InputArea from "../components/InputArea.vue";
import InputNumber from "../components/InputNumber.vue";
import { Amplify, DataStore, Predicates } from "aws-amplify";
import { Family } from "../models";

import awsconfig from "../aws-exports.js";
Amplify.configure(awsconfig);

export default {
  components: {
    HeaderSection,
    FooterSection,
    InputText,
    InputArea,
    InputNumber,
  },
  created() {
    this.subscription = DataStore.observe(Family).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
      this.onQuery();
    });
    this.onQuery();
  },
  unmounted() {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  },
  data() {
    return {
      form: {
        headName: "",
        address: "",
        memberCount: 1,
        createdAt: null,
      },
      benefactors: [] as Family[],
      subscription: {} as any,
    };
  },
  methods: {
    async onQuery() {
      try {
        this.benefactors = await DataStore.query(Family);
        // console.log("All Family data loaded as benefactors");
      } catch (error) {
        console.log("Error retrieving data", error);
      }
    },
    onCreate() {
      DataStore.save(
        new Family({
          headName: this.form.headName,
          address: this.form.address,
          memberCount: this.form.memberCount,
          createdAt: new Date().toISOString(),
        })
      );
      this.clearInput();
    },
    clearInput() {
      this.form.headName = "";
      this.form.address = "";
      this.form.memberCount = 1;
      this.form.createdAt = null;
    },
    deleteAll() {
      DataStore.delete(Family, Predicates.ALL);
    },
  },
};
</script>

<template>
  <main>
    <header-section />
    <div class="py-12 px-5 mx-auto max-w-2xl min-h-screen text-2xl">
      <div class="pb-10 border-b-4">
        <input-text label="Name" v-model="form.headName" />
        <input-number
          type="number"
          label="Number of Family Member"
          v-model="form.memberCount"
          class="mt-3"
        />
        <input-area label="Address" v-model="form.address" class="mt-3" />
        <div class="flex justify-center mt-10">
          <button
            class="py-2 px-5 text-sm font-medium text-white bg-red-600 rounded-xl duration-100 hover:bg-red-700"
            @click.prevent="onCreate"
          >
            Submit
          </button>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex justify-between">
          <h2 class="font-2xl">List Data</h2>
          <button
            class="py-2 px-5 text-sm font-medium text-white bg-red-600 rounded-xl duration-100 hover:bg-red-700"
            @click.prevent="deleteAll"
          >
            DELETE ALL!
          </button>
        </div>

        <div v-for="(benefactor, index) in benefactors" :key="benefactor.id">
          <div class="flex py-2 mt-5 bg-white rounded shadow-lg">
            <div
              class="flex justify-center items-center border-r-2 min-w-[50px] text-[20px]"
            >
              {{ index + 1 }}
            </div>
            <div class="w-full">
              <div class="flex w-full text-[20px]">
                <div class="px-4 w-3/4 font-medium leading-tight">
                  {{ benefactor.headName }}
                </div>
                <div class="pr-4 w-1/4 font-semibold text-end">
                  [ {{ benefactor.memberCount }} ]
                </div>
              </div>
              <div class="px-4 leading-tight text-[18px]">
                {{ benefactor.address }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-section />
  </main>
</template>

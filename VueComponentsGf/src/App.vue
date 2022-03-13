<template>
  <section>
    <GfFilter @filter="filter" />
    <GfList :records="records" v-if="nhits > 0" />
    <p v-else-if="error" class="error">
      Geen resultaten gevonden... <br />(● ︵ ●)
    </p>
    <GfPagination
      :modelValue="start"
      :nhits="nhits"
      @update:modelValue="modelValue"
    />
  </section>
</template>
<script>
import GfFilter from "./components/organisms/GfFilter.vue";
import GfList from "./components/organisms/GfList.vue";
import GfPagination from "./components/molecules/GfPagination.vue";
export default {
  components: { GfList, GfFilter, GfPagination },
  methods: {
    fetchData() {
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          this.records = data.records;
          this.nhits = data.nhits;
        })
        .catch((error) => (this.error = error));
    },
    filter(q) {
      this.q = q;
      this.start = 0;
      // console.log(q);
      this.fetchData();
    },
    modelValue(start) {
      this.start = this.start + start;
      // console.log(this.start);
      // this.fetchData();
    },
  },
  computed: {
    url() {
      let url = "https://data.stad.gent/api/records/1.0/search/?";
      url += "dataset=gentse-feesten-evenementen-2019";
      url += "&sort=-startdate";
      url += "&q=" + this.q;
      url += "&start=" + this.start;
      return encodeURI(url);
    },
  },
  data() {
    return {
      nhits: null,
      records: null,
      q: "",
      error: "er is een error",
      start: 0,
    };
  },
  watch: {
    start(newStart, oldStart) {
      if (oldStart != newStart) {
        this.fetchData();
      }
    },
  },
  mounted() {
    console.log("Retrieving the first data...");
    this.fetchData();
  },
};
</script>
<style lang="scss">
@import "./assets/base.css";
</style>

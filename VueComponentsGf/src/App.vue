<template>
  <section>
    <h1>Gentse Feesten</h1>
    <GfFilter :query="q" @filter="filter" />
    <GfList :records="records" v-if="nhits > 0" />
    <p v-else-if="error" class="error">
      {{ error }}
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
      fetch(this.url, {
        headers: {
          Authorization: `apikey ${import.meta.env.VITE_API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.records = data.records;
          this.nhits = data.nhits;
          this.setURLSearchParams();
        })
        .catch((error) => (this.error = error));
    },
    filter(q) {
      this.q = q;
      this.start = 0;
      this.fetchData();
    },
    modelValue(start) {
      this.start = this.start + start;
      // console.log(this.start);
      // this.fetchData();
    },
    setURLSearchParams() {
      let searchParams = new URLSearchParams(
        "q=" + this.q + "&start=" + this.start
      );
      window.history.pushState({}, "", "?" + searchParams);
      return searchParams;
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
      // searchParams: new URLSearchParams(),
      q: "",
      error: "Geen resultaten gevonden... (● ︵ ●)",
      start: 0,
      params: "",
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
    let searchParams = new URLSearchParams(location.search);
    if (searchParams.has("q")) this.q = searchParams.get("q");
    if (searchParams.has("start")) this.start = searchParams.get("start");

    console.log("Retrieving the first data...");
    this.fetchData();
  },
};
</script>
<style lang="scss">
@import "./assets/base.css";
@import "./assets/colors.scss";
h1 {
  text-align: center;
  font-weight: bolder;
  font-size: 5em;
  color: $Basewhite;
  padding: 0.5em;
}
</style>

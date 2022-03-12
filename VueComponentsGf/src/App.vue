<template>
  <section>
    <GfFilter @filter="filter" />
    <GfList :records="records" v-if="nhits > 0" />
    <p v-else-if="error" class="error">
      Geen resultaten gevonden... <br />(● ︵ ●)
    </p>
  </section>
</template>
<script>
import GfFilter from "./components/organisms/GfFilter.vue";
import GfList from "./components/organisms/GfList.vue";
export default {
  components: { GfList, GfFilter },
  // define methods under the `methods` object
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
      // console.log(q);
      this.fetchData();
    },
  },
  computed: {
    // a computed getter
    url() {
      let url = "https://data.stad.gent/api/records/1.0/search/?";
      url += "dataset=gentse-feesten-evenementen-2019";
      url += "&sort=-startdate";
      url += "&q=" + this.q;
      return encodeURI(url);
    },
  },
  // props: {
  //   text: {
  //     type: String,
  //   },
  //   nhits: {},
  //   records: { type: Array, required: true },
  //   error: {
  //     type: String,
  //     default: "er is een error",
  //   },
  // },
  data() {
    return {
      nhits: null,
      records: null,
      q: "",
      error: "er is een error",
    };
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

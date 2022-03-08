<template>
  <section>
    <GfFilter />
    <GfList v-if="records" />
    <p v-else-if="error" class="error">
      Geen resultaten gevonden...<br />(● ︵ ●)
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
    fetchData: function () {
      fetch(this.url)
        .then((res) => res.json())
        .then((nhits, records) => {
          nhits = nhits;
          records = records;
          console.log(nhits);
        })
        .catch(/* ...this.error ...*/);
    },
  },
  computed: {
    // a computed getter
    url() {
      let url = "https://data.stad.gent/api/records/1.0/search/?";
      url += "dataset=gentse-feesten-evenementen-2019";
      url += "&sort=-startdate";
      return encodeURI(url);
    },
  },
  props: {
    text: {
      type: String,
    },
    nhits: {},
    records: {},
    error: {
      type: String,
      default: "er is een error",
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

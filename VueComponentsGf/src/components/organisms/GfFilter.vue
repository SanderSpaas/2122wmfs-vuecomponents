<template>
  <form
    v-on:change="
      $emit(
        'filter',
        `enddate>=${this.startDate} and startdate <=${this.startDate}`
      )
    "
  >
    <div>
      <input
        type="radio"
        value="2019-07-19"
        v-model="startDate"
        id="1907"
      /><label for="1907"><span>Vr </span>19 Jul</label>
      <input
        type="radio"
        value="2019-07-20"
        v-model="startDate"
        id="2007"
      /><label for="2007"><span>Za </span>20 Jul</label>
      <input
        type="radio"
        value="2019-07-21"
        v-model="startDate"
        id="2107"
      /><label for="2107"><span>Zo </span>21 Jul</label>
      <input
        type="radio"
        value="2019-07-22"
        v-model="startDate"
        id="2207"
      /><label for="2207"><span>Ma </span>22 Jul</label>
      <input
        type="radio"
        value="2019-07-23"
        v-model="startDate"
        id="2307"
      /><label for="2307"><span>Di </span>23 Jul</label>
      <input
        type="radio"
        value="2019-07-24"
        v-model="startDate"
        id="2407"
      /><label for="2407"><span>Wo </span>24 Jul</label>
      <input
        type="radio"
        value="2019-07-25"
        v-model="startDate"
        id="2507"
      /><label for="2507"><span>Do </span>25 Jul</label>
      <input
        type="radio"
        value="2019-07-26"
        v-model="startDate"
        id="2607"
      /><label for="2607"><span>Vr </span>26 Jul</label>
      <input
        type="radio"
        value="2019-07-27"
        v-model="startDate"
        id="2707"
      /><label for="2707"><span>Za </span>27 Jul</label>
      <input
        type="radio"
        value="2019-07-28"
        v-model="startDate"
        id="2807"
      /><label for="2807"><span>Zo </span>28 Jul</label>
      <!-- <span>Picked: {{ startDate }}</span> -->
    </div>
  </form>
</template>
<script>
export default {
  props: ["query"],
  default: {},
  data() {
    return {
      startDate: "",
    };
  },
  emits: ["filter"],
  watch: {
    question: {
      query() {
        // this will be run immediately on component creation.
        const params = this.query.split(/ ?and ?/).reduce((acc, v) => {
          if (!v) {
            return acc;
          }
          const [key, value] = v.split(/ ?(?:=|<=|>=|!=|<|>) ?/);
          acc[key] = value;
          return acc;
        }, {});
        this.startDate = params.startdate;
      },
      // force eager callback execution
      immediate: true,
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/colors.scss";
form {
  display: flex;
  justify-content: space-around;
}
input[type="radio"] {
  // mixin toepassen
  @include visually-hidden;
  + label {
    // labels stylen
    font-weight: bolder;
    padding: 2em;
    color: $Basewhite;
    background-color: $darkBlack;
    border: solid 1px white;
    span {
      // in dat label zit een span
      font-weight: bolder;
    }
  }
  + label:hover,
  &:checked + label,
  &:focus + label {
    // styling voor hover, checked en focus!
    background-color: $Basewhite;
    color: $darkBlack;
  }
}
</style>

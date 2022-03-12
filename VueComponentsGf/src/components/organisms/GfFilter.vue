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
      /><label for="1907"><span>Vr</span>19 Jul</label>
      <input
        type="radio"
        value="2019-07-20"
        v-model="startDate"
        id="2007"
      /><label for="2007"><span>Vr</span>20 Jul</label>
      <input
        type="radio"
        value="2019-07-21"
        v-model="startDate"
        id="2107"
      /><label for="2107"><span>Vr</span>21 Jul</label>
      <input
        type="radio"
        value="2019-07-22"
        v-model="startDate"
        id="2207"
      /><label for="2207"><span>Vr</span>22 Jul</label>
      <input
        type="radio"
        value="2019-07-23"
        v-model="startDate"
        id="2307"
      /><label for="2307"><span>Vr</span>23 Jul</label>
      <input
        type="radio"
        value="2019-07-24"
        v-model="startDate"
        id="2407"
      /><label for="2407"><span>Vr</span>24 Jul</label>
      <input
        type="radio"
        value="2019-07-25"
        v-model="startDate"
        id="2507"
      /><label for="2507"><span>Vr</span>25 Jul</label>
      <input
        type="radio"
        value="2019-07-26"
        v-model="startDate"
        id="2607"
      /><label for="2607"><span>Vr</span>26 Jul</label>
      <input
        type="radio"
        value="2019-07-27"
        v-model="startDate"
        id="2707"
      /><label for="2707"><span>Vr</span>27 Jul</label>
      <input
        type="radio"
        value="2019-07-28"
        v-model="startDate"
        id="2807"
      /><label for="2807"><span>Vr</span>28 Jul</label>
      <span>Picked: {{ startDate }}</span>
    </div>
  </form>
</template>
<script>
export default {
  default: {},
  data() {
    return {
      startDate: "",
    };
  },
  emits: ["filter"],
};
</script>

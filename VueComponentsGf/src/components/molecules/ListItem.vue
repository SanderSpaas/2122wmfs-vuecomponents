<template>
  <div class="card">
    <h3>{{ event.name_nl }}</h3>
    <div class="dates">
      {{ toGhentTime(event.startdate, event.enddate) }}
    </div>
    <p>{{ ellipsis(event.description_nl, 200) }}</p>
  </div>
</template>
<script>
import { toGhentTime } from "../../composables/filters.js";
// import { ellipsis } from '../../composables/filters.js';
export default {
  props: { event: { type: Object, required: true } },
  default: {},
};
</script>

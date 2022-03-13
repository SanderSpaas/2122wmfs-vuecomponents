<template>
  <div class="card">
    <h3>{{ event.name_nl }}</h3>
    <div class="dates">
      {{ toGhentTime(event.startdate, event.enddate) }}
    </div>
    <p>{{ ellipsis(event.description_nl, 200) }}</p>
    <div class="tags">
      <div class="tag" v-if="event.outdoors == true">
        buiten<!-- slot content -->
      </div>
      <div class="tag" v-else>binnen<!-- slot content --></div>
      <div class="tag" v-if="event.isaccessibleforfree == true">
        gratis<!-- slot content -->
      </div>
      <div class="tag" v-else>betalend<!-- slot content --></div>
    </div>
  </div>
</template>
<script>
import { useFilters } from "../../composables/filters.js";

export default {
  setup() {
    const { toGhentTime } = useFilters();
    const { ellipsis } = useFilters();
    return { toGhentTime, ellipsis };
  },
  props: { event: { type: Object, required: true } },
  default: {},
};
</script>
<style scoped lang="scss">
$Basewhite: rgb(219, 219, 219);
$BasewhiteDarker: rgba($Basewhite, 0.88);
$darkBlack: rgb(31, 31, 31);
$darkBlackDarker: rgb($darkBlack, 10);
.tags {
  display: flex;
  padding: 0.6em;
}
.tag {
  background-color: $darkBlack;
  border: 1px solid $Basewhite;
  border-radius: 15px;
  color: $Basewhite;
  width: fit-content;
  padding: 0.3em;
  padding-left: 1.3em;
  padding-right: 1.3em;
  margin-right: 1em;
}
</style>

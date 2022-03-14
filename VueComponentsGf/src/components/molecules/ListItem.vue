<template>
  <div class="card">
    <h3>{{ event.name_nl }}</h3>
    <div class="dates">
      {{ toGhentTime(event.startdate, event.enddate) }}
    </div>
    <p>{{ ellipsis(event.description_nl, 200) }}</p>
    <ItemTag :event="event"> </ItemTag>
  </div>
</template>
<script>
import { useFilters } from "../../composables/filters.js";
import ItemTag from "../atoms/ItemTag.vue";
export default {
  setup() {
    const { toGhentTime } = useFilters();
    const { ellipsis } = useFilters();
    return { toGhentTime, ellipsis };
  },
  props: { event: { type: Object, required: true } },
  components: {
    ItemTag,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/colors.scss";
h3 {
  font-weight: bolder;
}
</style>

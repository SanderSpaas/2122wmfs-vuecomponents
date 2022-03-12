<template>
  <ul class="no-style">
    <li v-for="r in records" :key="r.recordid">
      <ListItem :event="r.fields"></ListItem>
    </li>
  </ul>
</template>
<script>
import ListItem from "../molecules/ListItem.vue";
export default {
  props: { records: { type: Array, required: true } },
  components: { ListItem },
};
</script>

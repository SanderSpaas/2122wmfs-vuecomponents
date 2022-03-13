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
<style scoped lang="scss">
@import "../../assets/mixins.scss";
$Basewhite: rgb(219, 219, 219);
$BasewhiteDarker: rgba($Basewhite, 0.88);
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 3em;
}
ul li {
  display: list-item;
  list-style: none;
  gap: 2em;
  width: 50%;
  padding: 5px 10px;
  color: white;
  background-color: rgb(31, 31, 31);
  border: 1px solid white;
}
</style>

<template>
  <section>
    <div class="tags">
      <div class="tag">
        <slot v-if="parseInt(event.isaccessibleforfree)">Gratis</slot>
        <slot v-else>Betalend</slot>
      </div>
      <div class="tag">
        <slot v-if="parseInt(event.outdoors)">Buiten</slot>
        <slot v-else>Binnen</slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { event: { type: Object, required: true } },
};
</script>
<style scoped lang="scss">
@import "../../assets/colors.scss";
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

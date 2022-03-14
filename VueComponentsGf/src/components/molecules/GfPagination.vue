<template>
  <div class="pagination">
    <button
      :disabled="modelValue < 10"
      v-on:click="$emit('update:modelValue', -10)"
    >
      Back
    </button>
    <p aria-live="polite">
      pagina {{ modelValue / 10 + 1 }}/{{ Math.round(nhits / 10) }}
    </p>
    <button
      :disabled="modelValue >= nhits - 10"
      v-on:click="$emit('update:modelValue', +10)"
    >
      Next
    </button>
  </div>
</template>
<script>
export default {
  props: ["modelValue", "nhits"],
  default: {},
  emits: ["update:modelValue"],
};
</script>
<style scoped lang="scss">
@import "../../assets/colors.scss";
.pagination {
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 0.6em;
}
button {
  background-color: $darkBlack;
  color: $Basewhite;
  border: solid 1px $Basewhite;
  padding: 1.5em;
}
button:hover {
  background-color: $Basewhite;
  border: solid 1px $darkBlackDarker;
  color: $darkBlackDarker;
}
button:disabled {
  border: solid 1px $darkBlackDarker;
  color: $darkBlackDarker;
  background-color: $BasewhiteDarker;
  text-decoration: line-through;
}
p {
  color: $Basewhite;
  font-weight: bolder;
  margin-right: 4em;
  margin-left: 4em;
}
</style>

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
$Basewhite: rgb(219, 219, 219);
$BasewhiteDarker: rgba($Basewhite, 0.88);
$darkBlack: rgb(31, 31, 31);
$darkBlackDarker: rgb($darkBlack, 10);
.pagination {
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding-left: 25%;
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
}
p {
  color: $Basewhite;
  font-weight: bolder;
  margin-right: 4em;
  margin-left: 4em;
}
</style>

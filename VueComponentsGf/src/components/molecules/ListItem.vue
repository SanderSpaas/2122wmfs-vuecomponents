<template>
  <div class="card">
    <h3>{{ event.name_nl }}</h3>
    <p>{{ event.description_nl }}</p>
  </div>
</template>
<script>
export default {
  props: { event: { type: Array, required: true } },
  default: {},
};
</script>

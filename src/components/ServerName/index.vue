<template>
  <div class="container">
    <h1 class="title">Servidor Vue</h1>
    <div class="icon">
      <Expand :size="28"/>
    </div>
  </div>
</template>

<script>
import Expand from "vue-material-design-icons/ChevronDown";

export default {
  components: {
    Expand
  }
};
</script>

<style scoped>
.container {
  grid-area: SN;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary);
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.9) 0 1px 0 0;
  z-index: 2;
}

.title {
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
}


.icon {
  color: var(--white);
  cursor: pointer;
}
</style>

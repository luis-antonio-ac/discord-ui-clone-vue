<template>
  <div class="container">
    <ServerButton isHome />
    <div class="separator"></div>
    <ServerButton :mentions="3" />
    <ServerButton hasNottification />
    <ServerButton />
    <ServerButton hasNottification :mentions="32" />
    <ServerButton hasNottification />
    <ServerButton v-for="servers in 18" :key="servers.id" />
  </div>
</template>

<script>
import ServerButton from "./ServerButton";
export default {
  components: {
    ServerButton
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);
  padding: 11px 0;
  max-height: 100vh;
  grid-area: SL;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

.separator {
  width: 32px;
  border-bottom: solid var(--quaternary);
  margin-bottom: 8px;
}
</style>

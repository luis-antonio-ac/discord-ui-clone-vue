<template>
  <div class="container">
    <div class="category">
      <div>Canais de texto</div>
      <div class="category-icon">
        <AddCategoryIcon :size="21" />
      </div>
    </div>

    <ChannelButton selected channelName="chat-livre" />
    <ChannelButton channelName="vue-js" />
    <ChannelButton channelName="react" />
    <ChannelButton channelName="react native" />
    <ChannelButton channelName="angular" />
    <ChannelButton channelName="electron" />
  </div>
</template>

<script>
import ChannelButton from "./ChannelButton";
import AddCategoryIcon from "vue-material-design-icons/Plus";

export default {
  components: {
    ChannelButton,
    AddCategoryIcon
  }
};
</script>

<style scoped lang="scss">
.container {
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 0 16px;
  background-color: var(--secondary);
}

.category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  color: var(--grey);
  font-size: 12px;
  text-transform: uppercase;

  .category-icon {
    color: var(--symbol);
  }
}
</style>

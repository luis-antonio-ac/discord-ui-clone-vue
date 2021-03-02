<template>
  <div class="channel-message" :class="{ hasMention: hasMention }">
    <div class="avatar"></div>
    <div class="message">
      <div class="user">
        <strong>{{ author }}</strong>
        <span class="date">{{ date }}</span>
      </div>

      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    date: String,
    hasMention: Boolean,
    isBot: Boolean
  }
};
</script>

<style scoped lang="scss">
.channel-message {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-right: 4px;
  background-color: transparent;
  margin-top: 13px;

  &:hover {
    background-color: var(--quaternary);
  }
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary);
  flex-shrink: 0;
}

.message {
  margin-left: 17px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    color: var(--white);
    font-size: 16px;
  }

  .date {
    margin-left: 6px;
    color: var(--grey);
    font-size: 13px;
  }

  .body {
    color: var(--white);
    text-align: left;
    font-size: 16px;
  }
}
</style>

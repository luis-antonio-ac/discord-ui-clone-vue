<template>
  <div
    class="severButton"
    :class="{ isHome: isHome, hasNottifications: hasNottification }"
  >
    <img src="../../assets/discord.svg" alt="Discord logo" v-if="isHome" />
    <div class="mentions" v-if="mentions > 0">
      {{ mentions }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: Boolean,
    isHome: Boolean,
    hasNottification: Boolean,
    mentions: Number
  }
};
</script>

<style scoped lang="scss">
.severButton {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background-color: var(--primary);
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  transition: all 0.1s linear;

  &.active,
  &:hover {
    background-color: var(--discord);
    border-radius: 16px;
  }

  img {
    width: 24px;
    height: 24px;
    color: #fff;
  }
}

.isHome {
  background-color: var(--rocketseat);

  &.active,
  &:hover {
    border-radius: 26px;
    background-color: var(--rocketseat);
  }
}

.hasNottifications {
  &::before {
    content: "";
    width: 9px;
    height: 9px;
    background-color: var(--white);
    position: absolute;
    left: -17px;
    top: calc(50% -4.5px);
    border-radius: 50%;
    display: block;
  }
}

.mentions {
  background-color: var(--notification);
  width: auto;
  height: 24px;
  padding: 0px 4px;
  position: absolute;
  border-radius: 12px;
  bottom: -4px;
  right: -4px;
  text-align: right;
  font-size: 13px;
  font-weight: bold;
  color: var(--white);
  border: 4px solid var(--quaternary);
}
</style>

<template>
  <div class="channel-button" :class="{ active: selected }">
    <div class="channel-info">
      <HashTagIcon class="hashIcon" :size="20" />
      <div>{{ channelName }}</div>
    </div>

    <div class="channel-actions">
      <InviteIcon class="icon-actions" :size="16" />
      <SettingsIcon class="icon-actions" :size="16" />
    </div>
  </div>
</template>

<script>
import HashTagIcon from "vue-material-design-icons/Pound";
import InviteIcon from "vue-material-design-icons/AccountPlus";
import SettingsIcon from "vue-material-design-icons/CogOutline";

export default {
  components: {
    HashTagIcon,
    InviteIcon,
    SettingsIcon
  },

  props: {
    channelName: String,
    selected: Boolean
  }
};
</script>

<style scoped lang="scss">
.channel-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;

  div {
    display: flex;
    align-items: center;
  }

  .channel-info {
    div {
      color: var(--senary);
      margin-left: 5px;
    }

    .hashIcon {
      color: var(--symbol);
    }
  }

  .channel-actions {
    display: none;
    .icon-actions {
      color: var(--symbol);
      margin-left: 4px;
      transition: 0.2s;
      &:hover {
        color: var(--white);
      }
    }
  }

  &:hover,
  &.active {
    background-color: var(--quinary);
    .channel-info {
      div {
        color: var(--white);
      }
    }

    .channel-actions {
      display: flex;
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="profile">
      <div class="avatar"></div>
      <div class="userdata">
        <strong>Luis Antônio</strong>
        <span>#4567</span>
      </div>
    </div>

    <div class="actions">
      <Mic :size="20" />
      <HeadPhones :size="20" />
      <Settings :size="20" />
    </div>
  </div>
</template>

<script>
import Mic from "vue-material-design-icons/Microphone";
import HeadPhones from "vue-material-design-icons/Headphones";
import Settings from "vue-material-design-icons/CogOutline";

export default {
  components: {
    Mic,
    HeadPhones,
    Settings
  }
};
</script>

<style scoped lang="scss">
.container {
  grid-area: UI;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
}

.profile {
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--grey);
}

.userdata {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  font-size: 13px;

  strong {
    display: block;
    color: var(--white);
  }

  span {
    color: var(--grey);
  }
}

.actions {
  color: var(--grey);

  span {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: var(--white);
    }
  }
}
</style>

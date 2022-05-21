<template>
  <div class="chat-details">
    <div class="chat-details__wrapper">
      <div class="chat-details__header"> 
        <button id="go-back-button" class="button button--mobile" @click="goBack">
          <i class="fa fa-chevron-left"></i>
        </button>
        <div id="secondary-buttons"> 
          <button class="button button--secondary">
            <i class="fa fa-star"></i>
          </button>
          <button class="button button--secondary">
            <i class="fa fa-print"></i>
          </button>
          <button class="button button--secondary">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="chat-details__main"> 
        {{chat.body}}
      </div>
      <div class="chat-details__textarea"> 
        <textarea placeholder="Write your message..." ></textarea>
      </div>
      <div class="chat-details__sendarea"> 
        <button class="button button--primary">Send <i class="fa fa-send"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js"

export default {
  name: 'Chat',
  props: {
    chatId: {
      required: true,
      type: Number
    }
  },
  methods: {
    goBack() {
      router.push({path: "/"});
    }
  },
  beforeRouteEnter(to, from) {
    if(!from.name) return { path: "/" }
  },
  computed: {
    chat () {
      return this.$store.getters.chat(this.chatId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.chat-details {
  padding-right: 12px;
  flex-grow: 1;
  width: 60%;

  &__wrapper {
  padding: 12px;
  flex-grow: 1;
  flex-direction: column;
  background-color: white;
    
  }
  &__header {
    border-top-color: $grey-lighter;
    border-top-style: solid;
    border-top-width: 1px;
    border-bottom-color: $grey-lighter;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    padding-top: 12px;
    padding-bottom: 12px;
    align-items: center;
    width: 100%;
    height: 40px;
    #secondary-buttons {
      width: 100%;
      justify-content: end;
    }
  }
  &__main {
    flex-grow: 1;
    background-color: $grey-lightest;
    border-radius: 0px 0px 8px 8px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 14pt;
  }
  &__textarea {
    height: 20%;
    > textarea {
      width: 100%;
      border-width: 1px;
      border-style: solid;
      border-color: $grey-darker;
      border-radius: 8px;
      resize: none;
      justify-content: center;
      padding: 16px;
      font-weight: bold;
      color: $font-secondary;
      &:focus {
          outline: none;
          color: $font-primary;
      }
    }
  }
  &__sendarea {
    padding-top: 12px;
    justify-content: end;
  }
}

@media screen and (max-width: 600px) {
  .chat-details {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #go-back-button {
    display: flex;
  }
}

@media screen and (min-width: 600px) {
  .chat-details {
    position: relative;
  }
  #go-back-button {
    display: none;
  }
}

</style>

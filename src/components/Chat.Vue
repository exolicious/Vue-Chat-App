<template>
    <div @click="openChat" class="chat" :class="{ 'chat--highlighted': isActiveChat }">
        <div class="chat__section chat__profile-pic">
            <img src="https://i.pravatar.cc/150?img=3">
        </div>
        <div class="chat__section chat__info">
            <div class="chat__info__username"> Berthold Brecht </div>
            <div class="chat__info__preview"> {{ this.truncatedText }} </div>
        </div>
        <div class="chat__section chat__time">
            11:22
        </div>
    </div>
</template>

<script>
import router from "@/router/index.js"

export default {
  name: 'Chat',
  data() {
    return {
      name: "asda",
    }
  },

  props: {
      chatObject: {
          required: true,
          type: Object
      }
  },

  methods: {
      openChat() {
        router.push({ name: 'ChatDetails', params: { chat_id: this.chatObject.id} })
      }
  },

  computed: {
      truncatedText() {
          return this.chatObject.body.substring(0, 30) + "...";
      },
      isActiveChat() {
          return this.chatObject.id == this.$route.params.chat_id;
      }
  }
}
</script>

<style scoped lang="scss">
.chat {
    color: $font-primary;
    flex-direction: row;
    cursor: pointer;
    background-color: $grey-lightest;
    height: 80px;
    width: 100%;
    margin-top: 6px;
    margin-bottom: 6px;
    border-radius: 4px;
    flex-shrink: 0;
    box-shadow: 2px 2px 2px rgba(25,25,25,0.2);

    &--highlighted {
        background-color: $primary-lighter;
    }

    &__section {
        padding: 8px;
    }
    &__profile-pic {
        width: 25%;
        img {
            border-radius: 50%;
        }
    }
    &__info {
        text-align: start;
        flex-direction: column;
        width: 60%;
        justify-content: center;
        &__username {
            font-size: 12pt;
            font-weight: bold;
        }
        &__preview {
            overflow: hidden;
            margin-top: 8px;
            font-size: 10pt;
            text-overflow: ellipsis;
        }
    }
    &__time {
        justify-content: center;
        width: 15%;
        font-size: 8pt;
    }
}
@media screen and (max-width: 300px) {
    .chat__info {
        &__username {
            font-size: 9pt;
        }
        &__preview {
            font-size: 7pt;
            text-overflow: ellipsis;
        }
    }
}

@media screen and (min-width: 600px) {
    .chat__info {
        &__username {
            font-size: 10pt;
        }
        &__preview {
            font-size: 8pt;
            text-overflow: ellipsis;
        }
    }
}

@media screen and (min-width: 900px) {
    .chat__info {
        &__username {
            font-size: 12pt;
        }
        &__preview {
            font-size: 10pt;
            text-overflow: ellipsis;
        }

    }
}


@media screen and (min-width: 900px) {
    .chat__info {
        &__username {
            font-size: 14pt;
        }
        &__preview {
            font-size: 12pt;
            text-overflow: ellipsis;
        }

    }
}

</style>

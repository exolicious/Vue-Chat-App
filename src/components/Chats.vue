<template>
  <div class="chats">
    <Chat 
    v-for="(chat) in filteredChats" 
    :key="chat"
    :chatObject="chat"> </Chat>
  </div>
</template>

<script>
import Chat from '@/components/Chat.vue'
import {mapGetters, mapActions} from "vuex"

export default {
  components: {
    Chat,
  },
  name: 'Chats',
  data() {
    return {
    }
  },
  props: {

  },
  created() {
    this.fetchChats();
  },
  methods: {
    ...mapActions(["fetchChats"]),
  },

  computed: {
      ...mapGetters(["filteredChats"]),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chats {
  flex-direction: column;
  background-color: $grey-lighter;
  height: 100%;
  padding: 12px;
  border-radius: 0px 0px 8px 8px;
  overflow: auto;
}


</style>

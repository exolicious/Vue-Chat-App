<template>
  <div class="app-wrapper">
    <div class="chatlist-and-search-wrapper">
      <Search></Search>
      <Chats></Chats>
        
    </div>
    <router-view/>
  </div>
</template>


<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Chats from '@/components/Chats.vue'


export default {
  name: 'App',
  components: {
    Search,
    Chats
  },
}
</script>


<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  display: flex;
  
  div {
    display: flex;
  }
}

.app-wrapper {
  flex-direction: row;  
  width: 100%;
}

.chatlist-and-search-wrapper {
  width: 100%;
  padding: 12px;
  flex-direction: column;
}

.button {
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 0px;
    font-size: 14pt;

    &:hover {
      cursor: pointer;
    }

    &--primary {
      font-size: 12pt;
      font-weight: bold;
      padding: 12px;
      width: 85px;
      height: 55px;
      background-color: $primary;
      color: $grey-lightest;
      &:hover {
        background-color: $grey-darker;
      }
      &:active {
        background-color: $primary-lighter;
      }
    }

    &--secondary {
    background-color: rgba(0,0,0,0);
    color: $primary;
      &:hover {
        background-color: $grey;
        color: $primary;
      }
      &:active {
        background-color: $grey-darker;
      }
    }

    &--mobile {
      color: $primary;
      background-color: rgba(0,0,0,0);
      font-size: 18pt;
    }
}

@media screen and (min-width: 600px) {
  .chatlist-and-search-wrapper {
    width: 40%;
  }
}

</style>

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        chats: [],
        search: ""
      }
    },
    getters: {
        allChats (state) {
            return state.chats;
        },
        filteredChats (state) {
          return state.chats.filter(chat => chat.body.includes(state.search));
        },
        chat: (state) => (id) => {
            return state.chats.find(chat => chat.id === id)
        }
    },
    actions: {
        fetchChats() {
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.commit("setChats", res.data)
            })
        },
        updateSearch(context, search) {
            this.commit("setSearch", search);
        }
    },
    mutations: {
      setChats (state, chats) {
        state.chats = chats;
      },
      setSearch(state, search) {
        state.search = search;
      }
    }
  })


createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app')

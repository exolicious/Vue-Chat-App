<template>
  <div class="search">
     <input v-model="search" @input="updateSearch(this.search)" class="search__input" type="text" placeholder="Search">
  </div>
</template>

<script>
import {mapActions} from "vuex"


export default {
  name: 'Search',
  props: {
    msg: String,
  },
  data() {
    return {
      search: "",
    }
  },
  methods: {
    ...mapActions(["updateSearch"])
  }
}
</script>


<style scoped lang="scss">
.search {
    background-color: $grey-lighter;
    padding: 12px;

    height: 60px;
    border-radius: 8px 8px 0px 0px;
    justify-content: center;

    &__input {
        border: none;
        border-radius: 8px;

        padding-left: 16px;
        padding-right: 16px;
        
        width: 100%;
        
        font-weight: bold;
        color: $font-secondary;

        background-color: $grey-lightest;
  
        &:focus {
            outline: none;
            color: $font-primary;
        }
    }   
}

</style>

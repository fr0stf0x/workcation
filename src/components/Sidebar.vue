<template>
  <section class="xl:w-72 bg-gray-800">
    <!-- search and filter on small screen -->
    <div class="flex items-center px-4 py-2 justify-between xl:hidden">
      <div class="relative flex items-center w-full max-w-xs">
        <div class="absolute ml-2">
          <svg
            class="w-5 h-5 fill-current text-gray-500 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          type="text"
          class="form-input form-input-dark w-full shadow-inner bg-gray-900 pl-8"
          placeholder="Search by keywords"
        />
      </div>
      <button
        class="ml-4 focus:outline-none text-white flex items-center px-3 py-2 shadow-lg rounded-md"
        :class="isOpen ? 'bg-gray-600' : 'bg-gray-700'"
        @click="isOpen = !isOpen"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 fill-current text-gray-500 mr-2"
        >
          <path
            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"
          />
        </svg>
        Filters
      </button>
    </div>
    <form
      @submit="onSubmit"
      :class="isOpen ? '' : 'hidden'"
      class="xl:flex flex-col h-full justify-between"
    >
      <RoomFilter ref="roomFilter" />
      <div class="px-4 py-4 bg-gray-900 flex justify-center items-center">
        <button
          @click="updateResults"
          class="px-4 py-2 font-semibold w-full rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white"
        >Update results</button>
      </div>
    </form>
  </section>
</template>

<script>
import RoomFilter from "./RoomFilter.vue";

export default {
  components: {
    RoomFilter
  },
  data() {
    return {
      isOpen: false,
      form: {}
    };
  },
  methods: {
    updateResults() {
      this.form = this.$refs.roomFilter.selected;
    },
    onSubmit(e) {
      e.preventDefault();
      console.log(this.form);
    }
  }
};
</script>

<style>
</style>
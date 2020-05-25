<template>
  <header
    class="flex flex-col sm:flex-row bg-gray-900 xl:bg-white text-white xl:text-gray-800 sm:flex sm:items-center sm:justify-between"
  >
    <div class="xl:w-72 bg-gray-900 h-full flex justify-between items-center px-4 py-3">
      <!-- logo -->
      <div class>
        <img class="h-10" src="img/logo-inverted.svg" alt="Logo" />
      </div>
      <!-- menu toggler -->
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-gray-400"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- menu dropdown -->
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="sm:flex xl:flex-1 sm:pr-4 z-20"
    >
      <!-- search on desktop -->
      <div
        class="hidden xl:flex xl:relative xl:items-center xl:justify-start xl:flex-1 xl:py-4 xl:pl-8 xl:pr-2"
      >
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
          :class="isSearch ? ' w-full' : 'w-1/3'"
          class="form-input pl-8 bg-gray-300 text-gray-900 transition-width duration-500 ease-in-out"
          type="text"
          @focus="isSearch = true"
          @blur="isSearch = false"
          placeholder="Search by keywords"
        />
      </div>
      <!-- links -->
      <div class="relative px-2 pt-2 pb-4 sm:flex sm:items-center sm:p-0">
        <a
          class="block font-semibold mt-1 text-gray-100 hover:bg-gray-700 sm:hover:bg-gray-800 xl:hover:bg-gray-300 xl:text-gray-800 rounded-sm px-2 py-1 sm:mt-0 sm:ml-2"
          v-for="link of links"
          :key="link.id"
          :href="link.to"
        >{{ link.text }}</a>
        <AccountDropdown class="hidden sm:block sm:ml-4" />
        <!-- dropdown menu mobile -->
        <div class="sm:hidden border-t border-gray-900 mt-3 px-2 py-4">
          <div class="flex items-center cursor-pointer">
            <img
              class="h-12 w-12 border-2 border-gray-600 rounded-full object-cover"
              src="/img/thao.jpg"
              alt
            />
            <span class="text-white ml-3 font-semibold">Thao</span>
          </div>
          <div class="mt-4">
            <a
              class="block text-gray-400 mt-2 hover:text-white"
              v-for="link of accountLinks"
              :key="link.id"
              :href="link.to"
            >{{link.text}}</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import AccountDropdown from "./AccountDropdown.vue";

export default {
  components: {
    AccountDropdown
  },
  data() {
    return {
      isOpen: false,
      isSearch: false,
      links: [
        {
          id: 1,
          to: "#",
          text: "List your properties"
        },
        {
          id: 2,
          to: "#",
          text: "Trips"
        },
        {
          id: 3,
          to: "#",
          text: "Messages"
        }
      ],
      accountLinks: [
        {
          id: 1,
          to: "#",
          text: "Account settings"
        },
        {
          id: 2,
          to: "#",
          text: "Support"
        },
        {
          id: 3,
          to: "#",
          text: "Logout"
        }
      ]
    };
  }
};
</script>
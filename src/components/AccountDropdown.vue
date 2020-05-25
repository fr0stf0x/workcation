<template>
  <div class="relative">
    <button
      class="relative z-20 block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-600 focus:border-gray-700 focus:outline-none"
      @click="isOpen = !isOpen"
    >
      <img class="w-full h-full object-cover" src="/img/thao.jpg" alt />
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 bg-black z-10 h-full w-full opacity-25 cursor-default"
    ></button>
    <div v-if="isOpen" class="absolute right-0 z-50 shadow-lg w-48 bg-white rounded-lg mt-2 py-2">
      <a
        class="block py-2 px-4 text-gray-800 hover:text-gray-400 hover:bg-indigo-600 transition-all duration-500 ease-in-out"
        v-for="link of links"
        :key="link.id"
        :href="link.to"
      >{{link.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
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
    ],
    isOpen: false
  }),
  created() {
    const handleEscape = e => {
      if (e.key === "est" || e.key === "Escape") {
        this.isOpen = false;
      }
    };

    document.addEventListener("keydown", handleEscape);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  }
};
</script>

<style>
</style>
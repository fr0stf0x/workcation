<template>
  <div>
    <div class="px-4 xl:px-8">
      <h3 class="text-gray-900 text-xl">{{list.intro.title}}</h3>
      <p class="text-gray-600">{{list.intro.subtitle}}</p>
    </div>
    <div class="mt-6 sm:overflow-y-hidden sm:overflow-x-auto">
      <div class="sm:inline-flex px-4 sm:pt-2 sm:pb-8 xl:px-8">
        <PropertyCard
          :class="index === 0 ? '' : 'sm:ml-4'"
          class="sm:mt-0 mt-10 sm:w-80 sm:flex-shrink-0"
          v-for="(property, index) of list.properties"
          :key="property.id"
          :property="property"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PropertyCard from "./PropertyCard.vue";

export default {
  components: {
    PropertyCard
  },
  props: ['list']
};
</script>

<style>
</style>
<template>
  <div class="lg:flex xl:block xl:overflow-y-auto">
    <!-- First part -->
    <div class="px-4 py-4 border-t xl:border-t-0 lg:w-1/3 xl:w-full border-gray-900">
      <div class="flex flex-wrap -mx-2">
        <!-- Beds -->
        <label class="w-1/2 sm:w-1/4 lg:w-1/2 px-2">
          <span class="block text-sm text-gray-500 font-semibold">Bedrooms</span>
          <select class="form-select form-select-dark w-full mt-1" v-model="selected.beds">
            <option
              v-for="option of options.beds"
              v-bind:key="option.value"
              v-bind:value="option.value"
            >{{ option.title }}</option>
          </select>
        </label>
        <!-- Baths -->
        <label class="w-1/2 sm:w-1/4 lg:w-1/2 px-2">
          <span class="text-sm text-gray-500 font-semibold">Bathrooms</span>
          <select class="form-select form-select-dark w-full mt-1" v-model="selected.baths">
            <option
              v-for="option of options.baths"
              v-bind:key="option.value"
              v-bind:value="option.value"
            >{{ option.title }}</option>
          </select>
        </label>
        <!-- Price range -->
        <label class="w-1/2 px-2 flex-1">
          <span class="mt-4 text-sm text-gray-500 font-semibold">Price Range</span>
          <select
            class="w-full form-select form-select-dark mt-1"
            v-model="selected.priceRange"
          >
            <option
              v-for="option of options.priceRanges"
              v-bind:key="option.value"
              v-bind:value="option.value"
            >{{ option.title }}</option>
          </select>
        </label>
      </div>
    </div>
    <!-- Second part -->
    <div class="px-4 py-4 border-t lg:border-l xl:border-r-0 lg:w-1/3 xl:w-full border-gray-900">
      <span class="block text-sm text-gray-500 font-semibold">Property Type</span>
      <!-- Radios -->
      <div class="sm:flex lg:block">
        <label
          class="flex mt-3 items-center sm:w-1/4 lg:w-full"
          v-for="option of options.propertyTypes"
          :key="option.value"
        >
          <input
            class="form-radio form-radio-dark w-6 h-6 text-indigo-500"
            v-model="selected.propertyType"
            type="radio"
            :value="option.value"
          />
          <span class="ml-2 text-white">{{option.title}}</span>
        </label>
      </div>
    </div>
    <!-- Third part -->
    <div class="px-4 py-4 border-t lg:border-l xl:border-r-0 lg:w-1/3 xl:w-full w-full border-gray-900">
      <span class="block text-sm text-gray-500 font-semibold">Amenities</span>
      <!-- Checkboxes -->
      <div class="sm:flex sm:flex-wrap">
        <label
          class="flex mt-3 items-center sm:w-1/4 lg:w-1/2 xl:w-full"
          v-for="option of options.amentities"
          :key="option.value"
        >
          <input
            class="form-checkbox form-checkbox-dark text-indigo-500 w-6 h-6"
            v-model="selected.amentities"
            :value="option.value"
            type="checkbox"
          />
          <span class="ml-2 text-white">{{option.title}}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: {
      beds: 4,
      baths: 2,
      priceRange: "upTo2000",
      propertyType: {},
      amentities: []
    },
    options: {
      beds: [
        {
          title: "4",
          value: 4
        },
        {
          title: "2",
          value: 2
        }
      ],
      baths: [
        {
          title: "2",
          value: 2
        },
        {
          title: "1",
          value: 1
        }
      ],
      priceRanges: [
        {
          title: "Up to $2,000/wk",
          value: "upTo2000"
        }
      ],
      propertyTypes: [
        {
          title: "House",
          value: "house"
        },
        {
          title: "Apartment",
          value: "apartment"
        },
        {
          title: "Loft",
          value: "loft"
        },
        {
          title: "Townhouse",
          value: "townhouse"
        }
      ],
      amentities: [
        {
          title: "Balcony",
          value: "balcony"
        },
        {
          title: "Pool",
          value: "pool"
        },
        {
          title: "Beach",
          value: "beach"
        },
        {
          title: "Pet friendly",
          value: "petFriendly"
        },
        {
          title: "Kid friendly",
          value: "kidFriendly"
        },
        {
          title: "Parking",
          value: "parking"
        },
        {
          title: "Air conditioning",
          value: "airConditioning"
        }
      ]
    }
  })
};
</script>

<style>
</style>
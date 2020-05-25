<template>
  <div class="">
    <div class="absolute inset-0 h-full w-full bg-black opacity-25"></div>
    <div class="absolute flex items-center justify-center h-full w-full cursor-pointer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mask-slot'
};
</script>

<style>
</style>



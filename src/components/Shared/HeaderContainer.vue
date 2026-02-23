<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot>
        <h1 class="w-full text-4xl font-normal">Sample title</h1>
      </slot>
      <slot name="subtitle">
        <h2 class="my-4 w-full text-base font-light">
          Sample subtitle
        </h2>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderContainer",
}
</script>

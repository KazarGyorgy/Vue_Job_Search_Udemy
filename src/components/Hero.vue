<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12 mx-2">
        <div class="col-span-1 col-start-1 border border-blue-700">
          1 col
        </div>
        <div class="col-start-2 col-span-5 border border-green-700">
          <HeadLine />
        </div>
        <div class="col-start-7 col-span-5 border border-yellow-500">
          5col
        </div>
        <div class="col-span-1 col-start-12 border border-red-700">
          1
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import HeadLine from "@/components/HeadLine.vue"
export default {
  name: "Hero",
  components: {
    HeadLine,
  },
}
</script>

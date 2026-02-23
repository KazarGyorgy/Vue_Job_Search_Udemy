<template>
    <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li
                v-for="element in elements"
                :key="element"
                class="flex h-8 w-1/2 items-center gap-2"
              >
                <input
                  :id="element"
                  type="checkbox"
                  :value="element"
                />
                <label :for="element">{{ element }}</label>
              </li>
            </ul>
          </fieldset>
        </div>

</template>

<script>
export default {
  name: "CheckboxListWithOptionsName",
  props: {
    elements: {
      type: Array,
      required: true,
    },
  },
}
</script>

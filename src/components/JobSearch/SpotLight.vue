<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Spotlight } from "@/api/types"
import axios, { type AxiosResponse } from "axios"
import { onMounted, ref } from "vue"

const spotlights = ref<Spotlight[]>([])

const getSpotlights = async (): Promise<void> => {
  const baseUrl: string = import.meta.env.VITE_APP_API_URL
  const url: string = `${baseUrl}/spotlights`

  const response: AxiosResponse<Spotlight[]> =
    await axios.get<Spotlight[]>(url)
  spotlights.value = response.data
}

onMounted(getSpotlights)
</script>

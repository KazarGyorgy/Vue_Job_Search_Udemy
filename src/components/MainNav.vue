<template>
  <header :class="['w-full', 'pt-2', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-2 flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a class="flex h-full items-center text-xl" :href="url">
          {{ company }}
        </a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="(menuItem, index) in navItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" v-on:click="handleClick" />
          <ActionButton
            v-else
            @click="handleClick"
            :label="'Sign in'"
            type="primary"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ui/ActionButton.vue"
import ProfileImage from "@/components/ui/ProfileImage.vue"
import SubNav from "./SubNav.vue"

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  computed: {
    headerHeightClass() {
      return this.isLoggedIn ? "h-32" : "h-16"
    },
  },
  methods: {
    handleClick() {
      this.isLoggedIn = !this.isLoggedIn
    },
  },
  data() {
    return {
      company: "Bobo Careers",
      url: "https://careers.google.com",
      navItems: [
        "Teams",
        "Location",
        "Life at Bobo Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    }
  },
}
</script>

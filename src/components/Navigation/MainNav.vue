<template>
  <header :class="['w-full', 'pt-2', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-2 flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full cursor-pointer items-center text-xl"
        >
          Bobo Careers
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="(menuItem, index) in navItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex h-full items-center py-2.5"
              >
                {{ menuItem.text }}
              </router-link>
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
import ActionButton from "@/components/Shared/ActionButton.vue"
import ProfileImage from "@/components/Navigation/ProfileImage.vue"
import SubNav from "@/components/Navigation/SubNav.vue"

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
      navItems: [
        { text: "Teams", url: "/teams" },
        { text: "Location", url: "/location" },
        { text: "Life at Bobo Corp", url: "/life-at-bobo-corp" },
        { text: "How we hire", url: "/how-we-hire" },
        { text: "Students", url: "/students" },
        { text: "Jobs", url: "/jobs" },
      ],
      isLoggedIn: false,
    }
  },
}
</script>

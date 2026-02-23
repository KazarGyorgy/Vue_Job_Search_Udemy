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
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton
            v-else
            @click="loginUser"
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
import { mapStores,mapActions, mapState } from "pinia"
import { useUserStore } from "@/stores/user"

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  computed: {
    //...mapStores(useUserStore), // Betölt mindent a sroreból
    ...mapState(useUserStore, ["isLoggedIn"]), // Csak az isLoggedIn state-t tölti be, nem az egész objectet
    ...mapActions(useUserStore, ["loginUser", "logoutUser"]),// Csak a login és logoutot tölti be nem az egés store-t, felesleges actionökekkel nem terheljük
    headerHeightClass() {
      return this.isLoggedIn ? "h-32" : "h-16"
    },
  },
  methods: {},
  data() {
    return {
      navItems: [
        { text: "Teams", url: "/teams" },
        { text: "Location", url: "/location" },
        { text: "Life at Bobo Corp", url: "/life-at-bobo-corp" },
        { text: "How we hire", url: "/how-we-hire" },
        { text: "Students", url: "/students" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    }
  },
}
</script>

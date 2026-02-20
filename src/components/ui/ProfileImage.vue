<template>
  <img
    class="h-8 w-8 rounded-3xl object-contain"
    :src="imageLink"
    alt="profilePicture"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://wallpapers.com/images/high/weird-profile-pictures-k7dzvlzmlq8q6eib.webp",
    }
  },
}
</script>

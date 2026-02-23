<template>
    <header-container>
        <template #default>
            <h1 class="text-5xl font-bold">Teams</h1>
        </template>
        <template #subtitle>
            <h2 class="text-2xl">Find your dream job</h2>
        </template>
    </header-container>
</template>
<script>
import HeaderContainer from "../Shared/HeaderContainer.vue";
export default {
    name: "TeamsView",
    components: {
        HeaderContainer,
    },
}
</script>

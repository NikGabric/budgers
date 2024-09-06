<script setup lang="ts">
const router = useRouter();
const layoutName = computed(() => {
  const fullPath: string = router.currentRoute.value.fullPath;
  return fullPath.includes("auth") ? "auth" : "default";
});
</script>

<template>
  <div>
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

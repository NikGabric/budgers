<script setup lang="ts">
import { Lock, LockIcon, User } from "lucide-vue-next";
</script>

<template>
  <div class="flex h-full w-full items-center justify-center text-center">
    <div
      class="artboard phone-2 flex flex-col gap-6 items-center justify-center"
    >
      <h1 class="text-2xl text-primary">Login to Budgy</h1>

      <label class="input input-bordered w-full flex items-center gap-2">
        <User />
        <input type="text" class="grow" placeholder="Username" />
      </label>
      <label class="input input-bordered w-full flex items-center gap-2">
        <LockIcon />
        <input type="password" class="grow" placeholder="Password" />
      </label>

      <button class="btn btn-neutral">Login</button>
      <div>
        New user?
        <NuxtLink to="/auth/register" class="underline text-primary"
          >Register here.</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockIcon, User } from "lucide-vue-next";
import type { LoginUserDto } from "~/stores/user";
import { validateLoginUserDto } from "~/utils/formValidators";

const loading: Ref<boolean> = ref(false);
const username: Ref<string> = ref("");
const password: Ref<string> = ref("");
const validationError: Ref<string | undefined> = ref();
const clearError = () => (validationError.value = undefined);

const { login } = useUserStore();
const handleLogin = async () => {
  loading.value = true;
  const loginUserDto: LoginUserDto = {
    username: username.value,
    password: password.value,
  };
  const loginDataValidation = validateLoginUserDto(loginUserDto);

  if (!loginDataValidation.isSuccess) {
    validationError.value = loginDataValidation.error?.description;
    loading.value = false;
    return;
  }

  await login(loginUserDto);
  loading.value = false;
};
</script>

<template>
  <div class="flex h-full w-full items-center justify-center text-center">
    <div
      class="artboard phone-2 flex flex-col gap-6 items-center justify-center"
    >
      <h1 class="text-2xl text-primary">Login to Budgy</h1>

      <label class="input input-bordered w-full flex items-center gap-2">
        <User />
        <input
          type="text"
          class="grow"
          placeholder="Username"
          v-model="username"
          @input="clearError"
        />
      </label>
      <label class="input input-bordered w-full flex items-center gap-2">
        <LockIcon />
        <input
          type="password"
          class="grow"
          placeholder="Password"
          v-model="password"
          @input="clearError"
        />
      </label>

      <Transition name="scale">
        <div class="text-error" v-if="validationError">
          {{ validationError }}
        </div>
      </Transition>

      <button class="btn btn-neutral" @click="handleLogin" :disabled="loading">
        Login
      </button>
      <div>
        New user?
        <NuxtLink to="/auth/register" class="underline text-primary"
          >Register here.</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

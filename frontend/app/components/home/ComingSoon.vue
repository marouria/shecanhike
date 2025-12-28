<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const { t } = useI18n();

const open = ref(false);
const email = ref("");
const toast = useToast();

const schema = z.object({
  email: z.email("Invalid email"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await $fetch("/api/hubspot/contact", {
      method: "POST",
      body: {
        email: event.data.email,
      },
    });

    toast.add({
      title: "Thank you!",
      description: "We well received your email.",
      color: "success",
    });

    open.value = false;
  } catch (error) {
    console.error("Error saving email:", error);
    toast.add({
      title: "Error",
      description: "Failed to save your email. Please try again.",
      color: "error",
    });
  }
}
</script>

<template>
  <UContainer
    as="section"
    class="max-w-full m-0 relative min-h-screen flex items-center justify-center bg-[url('/img/coming-soon.jpg')] bg-cover bg-center bg-scroll md:bg-fixed"
  >
    <div class="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
    <div
      class="relative max-w-[800px] mx-auto py-16 text-center flex flex-col items-center gap-8 z-[1]"
    >
      <div
        class="w-[100px] h-[100px] md:w-[120px] md:h-[120px] border-2 border-white rounded-full flex flex-col items-center justify-center gap-2 flex-shrink-0"
      >
        <span class="text-[0.65rem] text-white text-center leading-tight px-4"
          >destinations explorations</span
        >
        <svg
          class="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>

      <h2
        class="text-2xl md:text-[3rem] font-bold text-white m-0 leading-tight"
      >
        {{ $t("home.coming_soon.title") }}
      </h2>

      <p
        class="text-base md:text-lg leading-relaxed text-white m-0 max-w-[650px]"
      >
        {{ $t("home.coming_soon.description") }}
      </p>

      <p class="text-base text-white m-0">
        {{ $t("home.coming_soon.question") }}
      </p>
      <UModal
        v-model:open="open"
        :title="t('home.coming_soon.button')"
        :ui="{ footer: 'justify-end' }"
      >
        <UButton
          size="xl"
          :label="$t('home.coming_soon.button')"
          color="neutral"
          variant="outline"
        />
        <template #body>
          <p class="mb-4">
            We’re building a space where women who love hiking can connect,
            share experiences, and inspire each other. Leave your email, and
            we’ll keep you updated on the launch of our app!
          </p>
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormField name="email">
              <UInput
                v-model="state.email"
                class="w-full"
                placeholder=""
                :ui="{ base: 'peer' }"
              >
                <label
                  class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
                >
                  <span class="inline-flex bg-default px-1">Email address</span>
                </label>
              </UInput>
            </UFormField>

            <UButton type="submit" class="text-white"> Submit </UButton>
          </UForm>
        </template>
      </UModal>
    </div>
  </UContainer>
</template>

<style scoped>
section {
  margin: 0;
  max-width: 100%;
}
</style>

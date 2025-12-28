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
  <UPage>
    <UContainer as="section" class="py-24">
      <div
        class="relative rounded-xl overflow-hidden min-h-[420px] flex items-center"
      >
        <NuxtImg
          src="/img/brand-main.png"
          format="webp"
          loading="lazy"
          fetch-priority="low"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div
          class="absolute inset-0"
          style="
            background: linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.1)
            );
          "
        ></div>
        <div class="relative z-10 w-full px-6 lg:px-12">
          <UPageHeader
            :title="$t('hygiene_rituals.title')"
            :description="$t('hygiene_rituals.subtitle')"
            :ui="{
              title: 'text-white',
              description: 'text-white w-fit mx-auto',
              wrapper: 'lg:justify-center',
            }"
          />
        </div>
      </div>

      <div class="max-w-7xl mx-auto mt-16">
        <div class="flex flex-col items-start gap-4">
          <MDC
            :value="$t('hygiene_rituals.content')"
            class="text-base leading-relaxed m-0"
          />
          <UModal
            v-model:open="open"
            :title="$t('hygiene_rituals.button')"
            :ui="{ footer: 'justify-end' }"
          >
            <UButton
              size="xl"
              :label="$t('hygiene_rituals.button')"
              color="neutral"
              variant="outline"
              class="m-auto"
            />
            <template #body>
              <p class="mb-4">
                {{ $t("hygiene_rituals.form.description") }}
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
                      <span class="inline-flex bg-default px-1"
                        >Email address</span
                      >
                    </label>
                  </UInput>
                </UFormField>

                <UButton type="submit" class="text-white">
                  {{ $t("hygiene_rituals.form.button") }}
                </UButton>
              </UForm>
            </template>
          </UModal>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>

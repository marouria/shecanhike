<script setup lang="ts"></script>

<template>
  <UFooter>
    <template #default>
      <div class="flex flex-col items-center gap-5">
        <div>
          <UButton
            icon="i-simple-icons-instagram"
            color="neutral"
            variant="ghost"
            to="/"
            target="_blank"
            aria-label="Instagram"
          />
          <UButton
            icon="i-simple-icons-tiktok"
            color="neutral"
            variant="ghost"
            to="/"
            target="_blank"
            aria-label="TikTok"
          />
          <UButton
            icon="i-simple-icons-youtube"
            color="neutral"
            variant="ghost"
            to="/"
            target="_blank"
            aria-label="Youtube"
          />
        </div>
        <div>
          <div class="flex flex-wrap justify-center gap-4 items-center mb-2">
            <a
              href="#"
              class="text-sm text-white no-underline transition-opacity duration-200 hover:opacity-70"
              >Privacy Policy</a
            >
            <span class="text-white text-sm">|</span>
            <a
              href="#"
              class="text-sm text-white no-underline transition-opacity duration-200 hover:opacity-70"
              >Terms and Conditions</a
            >
          </div>
          <p class="text-muted text-sm">
            Copyright © {{ new Date().getFullYear() }} Shecanhike. All rights
            reserved.
          </p>
        </div>
      </div>
    </template>
  </UFooter>
</template>

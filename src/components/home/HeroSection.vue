<!-- src/components/home/HeroSection.vue -->
<script setup lang="ts">
import { getImgPath } from '@/utils/image';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, tm } = useI18n()

const features = computed(() => tm('hero.features') as Array<{ title: string; description: string }>)
const imageInfo = computed(() => tm('hero.image') as { src: string; alt: string; badgeTitle: string; badgeDescription: string })

</script>

<template>
    <section class="relative overflow-hidden bg-white pt-28 dark:bg-darklight md:pt-44">
        <div class="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.10),_transparent_50%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_42%)]"></div>

        <div class="container mx-auto max-w-6xl px-4 relative z-10 grid grid-cols-12 gap-y-10 gap-x-6 md:gap-10">
            <!-- Left column -->
            <div class="md:col-span-6 col-span-12 min-w-0 flex flex-col justify-center gap-6" data-aos="fade-right"
                data-aos-delay="200" data-aos-duration="1000">
                <div class="inline-flex w-fit items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-white/10 dark:text-white/80">
                    <span class="h-2.5 w-2.5 rounded-full bg-success"></span>
                    {{ t('hero.badge') }}
                </div>

                <div class="space-y-4">
                    <h1 class="text-2xl font-bold leading-tight text-midnight_text dark:text-white sm:text-3xl md:text-4xl lg:text-5xl md:leading-[1.15]">
                        {{ t('hero.title') }}
                    </h1>

                    <p class="max-w-xl text-lg text-grey dark:text-white/70 md:text-xl">
                        {{ t('hero.subtitle') }}
                    </p>
                </div>

                <div class="flex w-full flex-col gap-3 sm:flex-row">
                    <a href="#contact"
                        class="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 sm:w-auto">
                        {{ t('hero.buttonPrimary') }}
                    </a>

                    <a href="#services"
                        class="inline-flex w-full items-center justify-center rounded-md border border-border bg-white px-8 py-3 font-semibold text-midnight_text transition duration-300 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-transparent dark:text-white sm:w-auto">
                        {{ t('hero.buttonSecondary') }}
                    </a>
                </div>

                <ul class="grid gap-3 pt-2 text-sm text-grey dark:text-white/60 sm:grid-cols-3">
                    <li v-for="(f, i) in features" :key="i" class="flex items-start gap-2">
                        <span class="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                        <span>{{ f.title }}</span>
                    </li>
                </ul>
            </div>

            <!-- Right column (hero image) -->
            <div
                class="md:col-span-6 col-span-12 min-w-0 relative flex items-center justify-center before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-[70%] before:-translate-y-[40%] lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-[6.25rem] after:w-[6.25rem] after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
                <div class="relative w-full max-w-[34rem]">
                    <div class="absolute -left-4 top-8 h-28 w-28 rounded-full bg-primary/10 blur-3xl"></div>
                    <div class="absolute bottom-8 right-0 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl"></div>

                    <img :src="getImgPath(imageInfo.src)" :alt="imageInfo.alt"
                        width="350" height="150" style="width: 100%; height: 750px; object-fit: cover;"
                        class="relative z-10 drop-shadow-[0_24px_50px_rgba(15,23,42,0.14)] rounded-lg" />

                    <div class="absolute bottom-6 left-4 z-20 max-w-60 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur dark:bg-darkmode/90">
                        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            {{ imageInfo.badgeTitle }}
                        </p>
                        <p class="mt-1 text-sm text-midnight_text dark:text-white">
                            {{ imageInfo.badgeDescription }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
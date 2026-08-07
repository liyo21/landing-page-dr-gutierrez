<script setup lang="ts">
import { Servicebox } from '@/data'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, tm } = useI18n()

const servicesDescription = computed(
    () => tm('about.description') as Array<{ text: string }>,
)
</script>

<template>
    <section class="bg-section dark:bg-darklight" id="about">
        <div class="container mx-auto max-w-6xl px-4">
            <div class="flex gap-2 items-center justify-center" data-aos="fade-up" data-aos-delay="200"
                data-aos-duration="1000">
                <span class="w-3 h-3 rounded-full bg-success"></span>
                <span class="font-medium text-midnight_text text-lg dark:text-white/50">
                    {{ t('about.badge') }}
                </span>
            </div>

            <h2 class="text-xl sm:text-2xl md:text-4xl leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white"
                data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                {{ t('about.title') }}
            </h2>

            <p 
                v-for="(description, index) in servicesDescription" :key="index"
                class="md:w-3/5 w-full m-auto md:text-center text-start text-grey dark:text-white/70 pb-8 text-base sm:text-lg"
                data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                {{ description.text }}
            </p>

            <div class="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7">
                <div v-for="(item, index) in Servicebox" :key="index"
                    class="col-span-4 min-w-0 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode"
                    data-aos="fade-up" :data-aos-delay="`${index * 200}`" data-aos-duration="1000"
                    data-aos-offset="300">
                    <img :src="item.icon" alt="Service Box" class="w-10 h-10 bg-no-repeat inline-block bg-contain" />
                    <h3 class="max-w-44 mx-auto text-2xl font-bold dark:text-white">
                        {{ item.title }}
                    </h3>
                    <p class="dark:text-white/50 text-base font-normal">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

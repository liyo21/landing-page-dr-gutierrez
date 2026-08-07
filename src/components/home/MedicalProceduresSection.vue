<script setup lang="ts">
import { getImgPath } from '@/utils/image';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const { t, tm } = useI18n()
const imageProceduresInfo = computed(() => tm('procedures.image') as { src: string; alt: string; })
const proceduresAreas = computed(() => tm('procedures.areas') as Array<{
    title: string
    items: Array<{ text: string }>
}>)

</script>

<template>
    <section class="bg-section dark:bg-darklight" id="procedures">
        <div 
            class="flex gap-2 items-center justify-center" 
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="1000"
        >
            <span class="w-3 h-3 rounded-full bg-success"></span>
            <span class="font-medium text-midnight_text text-lg dark:text-white/50">
                {{ t('procedures.badge') }}
            </span>
        </div>
        <div 
            class="container mx-auto max-w-6xl px-4 relative z-10 grid grid-cols-12 gap-y-10 gap-x-6 md:gap-10 pt-7"
        >
            <!-- Left column -->
            <div 
                class="col-span-12 hidden min-w-0 flex-col justify-center gap-6 md:col-span-6 md:flex" 
            >
                <img 
                    :src="getImgPath(imageProceduresInfo.src)" 
                    :alt="imageProceduresInfo.alt"
                    width="350" height="150" 
                    style="width: 100%; height: 750px; 
                    object-fit: cover;"
                    class="relative z-10 drop-shadow-[0_24px_50px_rgba(15,23,42,0.14)] rounded-lg" 
                />
            </div>
            <!-- Right column -->
            <div
                class="md:col-span-6 col-span-12 min-w-0 relative flex items-center justify-center">
                <div class="relative w-full max-w-[34rem]">
                    <Carousel 
                        class="w-full max-w-xl"
                    >
                        <CarouselContent>
                            <CarouselItem v-for="(area, index) in proceduresAreas" :key="index">
                                <div class="p-1">
                                <Card class="h-[40rem] bg-white dark:bg-darkmode">
                                    <CardHeader>
                                        <CardTitle 
                                            class="text-center text-xl font-semibold"
                                        >
                                            {{ area.title }}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent 
                                        class="min-h-0 flex-1 overflow-y-auto pb-4 sm:px-8 sm:pb-6"
                                    >
                                        <ul class="flex flex-col gap-2.5" role="list">
                                            <li
                                                v-for="(item, itemIndex) in area.items"
                                                :key="itemIndex"
                                                class="group/item flex items-start gap-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-success/5 dark:hover:bg-white/5"
                                            >
                                                <span
                                                    class="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15"
                                                    aria-hidden="true"
                                                >
                                                    <span class="size-2 rounded-full bg-success"></span>
                                                </span>
                                                <span
                                                    class="text-base font-medium leading-relaxed text-midnight_text sm:text-[17px] dark:text-white/70"
                                                >
                                                    {{ item.text }}
                                                </span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    </section>
</template>

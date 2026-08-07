<!-- src/components/layout/AppFooter.vue -->
<script setup lang="ts">
import { getImgPath } from '@/utils/image'
</script>

<template>
    <footer class="bg-darkmode relative z-1 border-t border-dark_border px-6">
        <div class="container mx-auto max-w-6xl px-4">
            <div class="grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12">
                <!-- Logo + CTA -->
                <div
                    class="md:col-span-6 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0">
                    <div class="sm:content-normal sm:text-start text-center content-center sm:w-auto w-full">
                        <router-link to="/" class="md:block flex justify-center">
                            <img :src="getImgPath('/images/logo/logo-white.svg')" alt="logo" width="160" height="50"
                                style="width: auto; height: auto" />
                        </router-link>
                        <h2 class="text-white py-10 text-2xl sm:text-3xl md:text-[40px] leading-tight font-bold">
                            Atención oncológica con trato humano.
                        </h2>
                    </div>
                </div>

                <!-- Support -->
                <div
                    class="md:col-span-6 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0">
                    <div class="flex flex-col md:items-start items-center">
                        <span class="text-lg font-bold text-white pb-4 inline-block">Contacto directo</span>
                        <p class="text-white/50 text-base pb-5 max-w-xs md:text-start text-center">
                            Si necesitas orientación, escríbenos o llámanos. Estamos para ayudarte a dar el siguiente paso.
                        </p>
                        <div class="pb-5 sm:block flex">
                            <p class="text-base font-bold text-white">Teléfono</p>
                            <a href="tel:+584121725596" class="text-white/50 hover:text-white">
                                +58 412 1725596
                            </a>
                        </div>
                        <div class="pb-5 sm:block flex items-center gap-3">
                            <p class="text-base font-bold text-white">Email</p>
                            <a href="mailto:drjosegutierrezf@gmail.com" class="text-white/50 hover:text-white">
                                drjosegutierrezf@gmail.com
                            </a>
                        </div>
                        <div class="sm:block flex items-center gap-3">
                            <p class="text-base font-bold text-white">Ubicación</p>
                            <a href="https://goo.gl/maps/your-location" class="text-white/50 hover:text-white">
                                Caracas | Maracaibo, Venezuela
                            </a>
                        </div>
                        <div>
                            <ul class="flex items-center gap-3 mt-[1.875rem]">
                                <!-- LinkedIn -->
                                <li class="group">
                                    <a href="https://www.linkedin.com/in/jdrjosegutierrezf" aria-label="LinkedIn">
                                        <svg width="22" height="23" viewBox="0 0 22 23" fill="#A3BBD1"
                                            xmlns="http://www.w3.org/2000/svg" class="group-hover:fill-primary">
                                            <g clip-path="url(#clip_li)">
                                                <path
                                                    d="M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip_li">
                                                    <rect width="22" height="23" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <!-- Instagram -->
                                <li class="group">
                                    <a href="https://instagram.com/drjosegutierrezf" aria-label="Instagram">
                                        <svg width="23" height="23" viewBox="0 0 24 24" fill="#A3BBD1"
                                            xmlns="http://www.w3.org/2000/svg" class="group-hover:fill-primary"
                                            aria-hidden="true">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7.2 2H16.8C19.6719 2 22 4.32812 22 7.2V16.8C22 19.6719 19.6719 22 16.8 22H7.2C4.32812 22 2 19.6719 2 16.8V7.2C2 4.32812 4.32812 2 7.2 2ZM16.8 4H7.2C5.43269 4 4 5.43269 4 7.2V16.8C4 18.5673 5.43269 20 7.2 20H16.8C18.5673 20 20 18.5673 20 16.8V7.2C20 5.43269 18.5673 4 16.8 4ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM18.5 6.5C18.5 7.05228 18.0523 7.5 17.5 7.5C16.9477 7.5 16.5 7.05228 16.5 6.5C16.5 5.94772 16.9477 5.5 17.5 5.5C18.0523 5.5 18.5 5.94772 18.5 6.5Z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom bar -->
        <div class="text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border">
            <div>
                <ul class="flex justify-center mb-4 items-center sm:gap-7 gap-3">
                    <li class="text-base text-white/50">
                        <router-link to="/#services" class="hover:text-primary">Servicios</router-link>
                    </li>
                    <li class="text-base text-white/50">
                        <router-link to="/#blog" class="hover:text-primary">Blog</router-link>
                    </li>
                    <li class="text-base text-white/50">
                        <router-link to="/#contact" class="hover:text-primary">Contacto</router-link>
                    </li>
                    <li class="text-base text-white/50">
                        <a href="#" class="hover:text-primary">Aviso de privacidad</a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="text-base text-white/50">© 2026 Sitio desarrollado por 
                    <a href="https://liyo21.github.io/portfolio/" class="hover:text-primary">Eliyonai Molero</a>.
                </p>
            </div>
        </div>
    </footer>
</template>

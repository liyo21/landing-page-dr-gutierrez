<!-- src/components/home/ContactSection.vue -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import { useI18n } from 'vue-i18n';
const { t, tm } = useI18n()

const features = computed(() => tm('contact.features') as Array<{ title: string; description: string }>)

const { handleSubmit } = useForm();

const { value: firstName, errorMessage: firstNameError } = useField<string>('firstName', (val) => {
    if (!val) return 'El nombre es requerido';
    return true;
});

const { value: lastName, errorMessage: lastNameError } = useField<string>('lastName', (val) => {
    if (!val) return 'El apellido es requerido';
    return true;
});

const { value: message, errorMessage: messageError } = useField<string>('message', (val) => {
    if (!val) return 'Debe especificar el motivo de su consulta.';
    if ((val as string).length < 10) return 'Debe especificar el motivo de su consulta con al menos 10 caracteres.';
    return true;
});

const isSubmitting = ref(false);

const sendWhatsappMessage = handleSubmit(() => {
    try {
        isSubmitting.value = true;

        const fullMessage = `Hola Dr. José Gutiérrez, mi nombre es ${firstName.value} ${lastName.value}. ${message.value}`;
        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappUrl = `https://wa.me/584121725596?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error('Error al enviar el mensaje de WhatsApp:', error);
    } finally {
        isSubmitting.value = false;
    }
    resetFields();
});

const resetFields = () => {
    firstName.value = '';
    lastName.value = '';
    message.value = '';
};

</script>

<template>
    <section id="contact" class="overflow-x-hidden bg-darkmode dark:bg-darklight">
        <div class="container mx-auto max-w-6xl px-4">
            <div class="grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0">
                <!-- Left column: Info -->
                <div class="row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12" data-aos="fade-left"
                    data-aos-delay="200" data-aos-duration="1000">
                    <div class="flex gap-2 items-center justify-start">
                        <span class="w-3 h-3 rounded-full bg-success"></span>
                        <span class="font-medium text-sm text-white">Estamos para orientarte</span>
                    </div>

                    <h2 class="sm:text-4xl text-[28px] leading-tight font-bold text-white py-12">
                        {{ t('contact.title') }}
                    </h2>

                    <p class="text-white/70 text-base sm:text-lg max-w-xl pb-10">
                        {{ t('contact.description') }}
                    </p>

                    <div class="grid grid-cols-6 pb-12">
                        <div 
                            v-for="(f, i) in features" :key="i"
                            class="col-span-12"
                            :class="i > 0 ? 'pt-8' : ''"
                        >
                            <span class="text-white/50 text-lg">{{ f.title }}</span>
                            <p class="bg-transparent border-0 text-white text-lg">{{ f.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Right column: Form -->
                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000"
                    class="relative before:content-[''] before:absolute before:bg-[url('/images/contact/form-line.png')] before:bg-no-repeat before:w-[13rem] before:h-24 before:top-[5%] before:bg-contain before:left-[35%] before:z-[1] before:translate-x-full lg:before:inline-block before:hidden after:content-[''] after:absolute after:bg-[url('/images/contact/from-round-line.png')] after:bg-no-repeat after:w-[6.3125rem] after:h-[6.3125rem] after:bg-contain after:top-1/2 after:-left-[25%] after:z-[1] after:translate-x-1/2 after:translate-y-1/2 md:after:inline-block after:hidden md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13">
                    <div
                        class="lg:mt-0 mt-8 bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10">
                        <h2 class="sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white">
                            {{ t('contact.form.title') }}
                        </h2>

                        <form class="flex w-full m-auto justify-between flex-wrap gap-4" @submit.prevent="sendWhatsappMessage">
                            <!-- Name -->
                            <div class="w-full">
                                <input
                                    v-model="firstName"
                                    :class="['text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-solid placeholder:text-grey rounded-lg focus-visible:outline-0', firstNameError ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary dark:border-dark_border dark:focus:border-primary']"
                                    type="text" :placeholder="t('contact.form.nameLabel')" />
                                <p v-if="firstNameError" class="text-red-500 text-xs mt-1">{{ firstNameError }}</p>
                            </div>

                            <!-- Last Name -->
                            <div class="w-full">
                                <input
                                    v-model="lastName"
                                    :class="['text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-solid placeholder:text-grey rounded-lg focus-visible:outline-0', lastNameError ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary dark:border-dark_border dark:focus:border-primary']"
                                    type="text" :placeholder="t('contact.form.lastNameLabel')" />
                                <p v-if="lastNameError" class="text-red-500 text-xs mt-1">{{ lastNameError }}</p>
                            </div>

                            <!-- Mensaje -->
                            <div class="w-full">
                                <textarea
                                    v-model="message"
                                    :class="['text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] !border !border-solid placeholder:text-grey rounded-lg focus-visible:outline-0', messageError ? '!border-red-500 focus:!border-red-500' : '!border-border focus:!border-primary dark:!border-dark_border dark:focus:!border-primary']"
                                    :placeholder="t('contact.form.messageLabel')"></textarea>
                                <p v-if="messageError" class="text-red-500 text-xs mt-1">{{ messageError }}</p>
                            </div>

                            <div class="w-full">
                                <button 
                                    :disabled="isSubmitting"
                                    class="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg cursor-pointer font-semibold transition disabled:bg-primary/70 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    {{ t('contact.form.submitButton') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
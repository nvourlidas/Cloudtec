<template>
<ServicesStack></ServicesStack>
<DataSection></DataSection>
<AboutUs></AboutUs>
<ContsctSection></ContsctSection>

</template>

<script>
import ServicesStack from './ServicesStack.vue';
import DataSection from './DataSection.vue';
import ContsctSection from './ContsctSection.vue';
import AboutUs from './AboutUs.vue';
export default {
    name: 'MainPage',

    components: {
        ServicesStack,
        DataSection,
        ContsctSection,
        AboutUs
    }
}
</script>
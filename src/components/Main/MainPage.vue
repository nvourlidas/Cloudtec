<template>
<ServicesStack></ServicesStack>
<DataSection></DataSection>
<ContsctSection></ContsctSection>
</template>

<script>
import ServicesStack from './ServicesStack.vue';
import DataSection from './DataSection.vue';
import ContsctSection from './ContsctSection.vue';
export default {
    name: 'MainPage',

    components: {
        ServicesStack,
        DataSection,
        ContsctSection
    }
}
</script>
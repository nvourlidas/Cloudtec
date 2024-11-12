<template>
<ServicesStack></ServicesStack>
<DataSection></DataSection>
</template>

<script>
import ServicesStack from './ServicesStack.vue';
import DataSection from './DataSection.vue';
export default {
    name: 'MainPage',

    components: {
        ServicesStack,
        DataSection
    }
}
</script>
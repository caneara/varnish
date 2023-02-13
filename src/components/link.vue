<template>
    <Link rel="noopener"
          :title="title"
          :target="target"
          class="font-sans">

        <!-- Slot -->
        <slot></slot>

    </Link>
</template>

<script>
    import { Link } from '@inertiajs/vue3';

    export default
    {
        /**
         * Define the components.
         *
         */
        components : {
            Link,
        },

        /**
         * Define the public properties.
         *
         */
        props : {
            'target' : { type : String, default : '_self' },
            'title'  : { type : String, default : '' },
        },
    }
</script>
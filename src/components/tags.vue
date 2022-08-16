<template>
    <div class="varnish-tags varnish-font w-full">

        <!-- Container -->
        <div :dusk="name"
             class="varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 w-full min-h-[52px] flex items-start rounded relative transition duration-300">

            <!-- Input -->
            <input type="text"
                   ref="input"
                   placeholder="Tags"
                   @change="process($event.target.value)"
                   class="varnish-input bg-inherit font-[470] text-gray-900 dark:text-gray-400 -tracking-[.2px] rounded appearance-none" />

            <!-- Optional -->
            <v-optional :value="optionalText"
                        class="-ml-[20px] mt-[19.5px]"
                        v-if="optional && blank(modelValue)">
            </v-optional>

        </div>

        <!-- Error -->
        <v-error :value="fault"></v-error>

    </div>
</template>

<script>
    import Tagify from '@yaireo/tagify';
    import '@yaireo/tagify/dist/tagify.css';
    import ErrorComponent from './error.vue';
    import Utilities from '../mixins/Utilities';
    import Foundation from '../mixins/Foundation';
    import OptionalComponent from './optional.vue';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Utilities,
            Foundation,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-error'    : ErrorComponent,
            'v-optional' : OptionalComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            tagify : null,
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'characters' : { type : Number, default : 20 },
            'limit'      : { type : Number, default : 4 },
        },

		/**
		 * Execute actions when the component is mounted to the DOM.
		 *
		 */
		mounted()
		{
            this.tagify = new Tagify(this.$refs.input, {
                pattern      : `/^.{0,${this.characters}}$/`,
                maxTags      : this.limit,
                transformTag : (tag) => this.transform(tag),
            });

            this.format(this.modelValue);
		},

		/**
		 * Define the supporting methods.
		 *
		 */
		methods:
        {
            /**
             * Convert the given input source into tags.
             *
             */
            format(source)
            {
                this.tagify.removeAllTags();

                this.tagify.addTags(source.filter(item => item));
            },

            /**
             * Prepare the tags for two-way data binding.
             *
             */
            process(tags)
            {
                tags = this.blank(tags) ? [] : JSON.parse(tags);

                this.change(tags.map(item => item.value));
            },

            /**
             * Enforce the character limit for each tag.
             *
             */
            transform(tag)
            {
                if (tag.value.length >= this.characters) {
                    tag.value = tag.value.slice(0, this.characters);
                }

                return tag;
            }
        },
    }
</script>

<style>
    .varnish-tags .varnish-container .varnish-input.tagify { @apply border-none pb-3 }
    .varnish-tags .varnish-container .varnish-input.tagify.tagify--focus + input + .varnish-optional { @apply hidden }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__input { @apply relative top-[6px] left-[6px] }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__input:before { @apply text-gray-600 dark:text-gray-400 top-[7px] pl-[28px] }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__input:after { @apply inline font-bold text-[14px] text-gray-700/[.80] dark:text-gray-300 relative -left-[64px] ; font-family: 'Font Awesome 6 Free'; content: '\f02c' }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag { @apply bg-sky-600/[.10] hover:bg-sky-600/[.10] dark:bg-sky-400/[.50] dark:hover:bg-sky-400/[.50] rounded top-[6px] left-[6px] m-[5px] px-1 }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag div:before { @apply shadow-none }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag:hover div:before { @apply shadow-none }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag .tagify__tag__removeBtn { @apply bg-transparent relative top-[0.5px] }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag .tagify__tag__removeBtn:after { @apply text-gray-700 dark:text-gray-400 }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag .tagify__tag__removeBtn:hover { @apply bg-transparent }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag .tagify__tag__removeBtn:hover:after { @apply text-red-700 }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag .tagify__tag__removeBtn:hover + div:before { box-shadow: 0 0 #0000 !important }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag .tagify__tag__removeBtn:hover + div > span.tagify__tag-text { @apply opacity-100 }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag .tagify__tag-text { @apply text-[15px] text-gray-700 dark:text-gray-300 overflow-visible relative top-0 }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag + .tagify__input { @apply relative top-[6px] left-[6px] }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag + .tagify__input:before { @apply hidden }
    .varnish-tags .varnish-container .varnish-input.tagify .tagify__tag + .tagify__input:after { @apply hidden }
    .varnish-tags .varnish-container .varnish-input.tagify.tagify--focus .tagify__input:before { @apply hidden }
    .varnish-tags .varnish-container .varnish-input.tagify.tagify--focus .tagify__input:after { @apply hidden }
</style>
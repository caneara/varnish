<template>
    <div class="varnish-upload varnish-font relative">

        <!-- Control -->
        <div @mouseover="hover = true"
             @mouseout="hover = false"
             class="varnish-container rounded relative transition duration-300"
             :class="minimal ? '' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 overflow-hidden'">

            <!-- Hidden -->
            <input type="hidden"
                   :value="modelValue"
                   :id="`${name}_file_value`"
                   :name="`${name}_file_value`" />

            <!-- Input -->
            <input :id="name"
                   ref="file"
                   type="file"
                   :name="name"
                   :dusk="name"
				   :accept="types"
                   @change="upload()"
                   :class="automated() ? '' : 'hidden'" />

			<!-- File Name -->
			<input readonly
                   type="text"
				   :value="display"
                   :id="`${name}_file_name`"
                   :name="`${name}_file_name`"
				   @click="disabled ? null : selectNew()"
                   :class="[minimal ? 'hidden' : '', hover || focus ? 'pr-[50px]' : 'pr-3']"
				   class="bg-inherit text-gray-900 dark:text-gray-400 w-full text-ellipsis overflow-hidden rounded appearance-none cursor-pointer pl-3 pt-[25px] pb-[7px]" />

            <!-- Label -->
            <v-label :icon="icon"
                     :value="label"
                     :focus="focus"
                     :optional="optional"
                     :filled="! blank(display)"
                     :class="minimal ? 'hidden' : ''">
            </v-label>

            <!-- Clear -->
            <v-clear :focus="focus"
                     :hover="hover"
                     @click="reset()"
                     v-if="! minimal"
                     :filled="! blank(display)">
            </v-clear>

            <!-- Minimal -->
            <label v-if="minimal"
                   @click="disabled || display ? null : selectNew()"
                   class="font-semibold text-[13px] uppercase flex justify-center items-center select-none transition duration-300"
                   :class="disabled || display ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'text-sky-600 dark:text-sky-500 hover:text-rose-700 dark:hover:text-rose-400 cursor-pointer'">

                <!-- Value -->
                {{ label }}

            </label>

        </div>

        <!-- Progress Bar -->
        <div ref="bar"
             :class="minimal ? 'opacity-0' : ''"
             class="w-full h-[5px] overflow-hidden rounded-t hidden absolute top-0">

            <!-- Progress -->
            <div ref="progress"
                 class="bg-sky-600/[.70] dark:bg-sky-400 h-[5px] rounded-t absolute top-0 left-0 transition-all duration-300">
            </div>

        </div>

        <!-- Error -->
        <v-error :value="fault"></v-error>

    </div>
</template>

<script>
    import Vapor from '../support/vapor';
    import ClearComponent from './clear.vue';
    import ErrorComponent from './error.vue';
    import LabelComponent from './label.vue';
    import Utilities from '../mixins/Utilities';
    import Foundation from '../mixins/Foundation';

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
            'v-clear' : ClearComponent,
            'v-error' : ErrorComponent,
            'v-label' : LabelComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            display : '',
        }},

        /**
         * Define the events.
         *
         */
        emits : ['reset', 'uploading', 'uploaded'],

        /**
         * Define the public properties.
         *
         */
        props : {
            'disabled' : { type : Boolean, default : false },
            'minimal'  : { type : Boolean, default : false },
            'size'     : { type : Number,  default : 1048576 },
            'types'    : { type : String,  default : 'image/png, image/jpeg' },
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Update the user interface after completion.
             *
             */
            finish()
            {
                this.$refs.file.value = null;
                this.$refs.bar.classList.add('hidden');
                this.$refs.progress.style.width = '0px';
            },

            /**
             * Clear the state of the component.
             *
             */
            reset(error = '')
            {
                this.display = '';

                this.fault = error;

                this.$emit('reset');

                this.finish();
            },

            /**
             * Remove the selected file and allow for the selection of a new one.
             *
             */
            selectNew()
            {
                this.reset();

                this.$refs.file.click();
            },

            /**
             * Update the current upload progress.
             *
             */
            setProgress(progress)
            {
                this.$refs.progress.style.width = `${Math.round(progress * 100)}%`;
            },

            /**
             * Stream the chosen file to the server.
             *
             */
            upload()
            {
                let file = this.$refs.file.files[0];

				if (file.size > this.size) {
                    return this.reset('The file must be less than 1 MB.');
				}

				if (! this.types.replaceAll(' ', '').split(',').includes(file.type.toLowerCase())) {
                    return this.reset('The file must in a JPEG or PNG format.');
				}

                this.fault    = '';
                this.display = file.name;

                this.$emit('uploading', file);

                this.$refs.bar.classList.remove('hidden');

                Vapor.store(file, { progress : progress => this.setProgress(progress) })
                     .then(response => { this.$emit('uploaded', response.uuid); this.finish() });
            },
        }
    }
</script>
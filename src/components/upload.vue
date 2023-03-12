<template>
    <div class="varnish-upload varnish-font relative">

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

        <!-- Button -->
        <label v-if="format === 'button'"
               @click="disabled || display ? null : selectNew()"
               class="font-semibold text-[13px] uppercase flex justify-center items-center select-none transition duration-300"
               :class="disabled || display ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'text-sky-600 dark:text-sky-500 hover:text-rose-700 dark:hover:text-rose-400 cursor-pointer'">

            <!-- Value -->
            {{ label }}

        </label>

        <!-- Field -->
        <div v-if="format === 'field'"
             @mouseover="hover = true"
             @mouseout="hover = false"
             class="varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative overflow-hidden transition duration-300">

			<!-- File Name -->
			<input readonly
                   type="text"
				   :value="display"
                   :id="`${name}_file_name`"
                   :name="`${name}_file_name`"
                   :class="hover || focus ? 'pr-[50px]' : 'pr-3'"
				   @click="disabled || display ? null : selectNew()"
				   class="bg-inherit text-gray-900 dark:text-gray-400 w-full text-ellipsis overflow-hidden rounded appearance-none cursor-pointer pl-3 pt-[25px] pb-[7px]" />

            <!-- Label -->
            <v-label :icon="icon"
                     :value="label"
                     :focus="focus"
                     :optional="optional"
                     :filled="! blank(display)">
            </v-label>

            <!-- Clear -->
            <v-clear :focus="focus"
                     :hover="hover"
                     @click="reset()"
                     :filled="! blank(display)">
            </v-clear>

        </div>

        <!-- Drag and Drop -->
        <div @dragover.prevent
             v-if="format === 'drag'"
             @click="disabled || display ? null : selectNew()"
             @drop.prevent="disabled || display ? null : uploadMany($event.dataTransfer.files)"
             class="bg-gray-50/[.60] border-[1.5px] border-dashed border-gray-300 flex flex-col justify-center items-center rounded-md cursor-pointer p-14 pb-11">

            <!-- Icon -->
            <i class="fas text-[35px] text-gray-400/[.80] mb-5"
               :class="display ? 'fa-cog fa-spin' : 'fa-file-upload'">
            </i>

            <!-- Instructions -->
            <div class="text-gray-600/[.90] text-center leading-normal max-w-[230px]">

                <!-- Uploading -->
                <span v-if="display">
                    The selected {{ multiple ? 'file(s) are' : 'file is now'}} being uploaded. Just one moment&hellip;
                </span>

                <!-- Waiting -->
                <span v-if="! display">
                    Drag and drop {{ multiple ? 'file(s)' : 'a file'}} to upload, or click here to select one.
                </span>

            </div>

        </div>

        <!-- Progress -->
        <v-progress class="mt-4"
                    :value="current"
                    v-if="format !== 'button' && current !== 0">
        </v-progress>

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
    import ProgressBarComponent from './progress.vue';

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
            'v-clear'    : ClearComponent,
            'v-error'    : ErrorComponent,
            'v-label'    : LabelComponent,
            'v-progress' : ProgressBarComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            display : '',
            current : 0,
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
            'format'   : { type : String,  default : 'field' },
            'multiple' : { type : Boolean, default : false },
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
                this.current = 0;

                this.$refs.file.value = null;
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
             * Stream the chosen file to the server.
             *
             */
            async upload(file = null)
            {
                file = file ?? this.$refs.file.files[0];

				if (file.size > this.size) {
                    return this.reset(`The file must be less than ${this.size / 1048576} MB.`);
				}

				if (! this.types.replaceAll(' ', '').split(',').includes(file.type.toLowerCase())) {
                    return this.reset('The file must be in the correct format.');
				}

                this.fault   = '';
                this.display = file.name;

                this.$emit('uploading', file);

                await Vapor.store(file, { progress : progress => this.current = Math.round(progress) })
                     .then(response => { this.$emit('uploaded', { uuid : response.uuid, file : file }); this.finish() });
            },

            /**
             * Stream one or more files to the server.
             *
             */
            async uploadMany(files)
            {
                if (! this.multiple) {
                    return await this.upload(files[0]);
                }

                for (const file of files) {
                    await this.upload(file);
                }
            },
        }
    }
</script>
<template>
    <div class="varnish-textbox varnish-font w-full">

        <!-- Container -->
        <div @mouseover="hover = true"
             @mouseout="hover = false"
             class="varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300">

            <!-- Input -->
            <input :id="name"
                   type="text"
                   :name="name"
                   v-if="lines === 1"
                   :value="modelValue"
                   @focus="focus = true"
                   @focusout="focus = false"
                   :placeholder="placeholder"
                   :autocomplete="autocomplete"
                   @input="change($event.target.value)"
                   :readonly="readOnly ? 'readonly' : ''"
                   :class="hover || focus ? 'pr-[50px]' : 'pr-3'"
                   class="varnish-control varnish-input w-full bg-inherit font-[470] text-gray-900 dark:text-gray-400 -tracking-[.2px] text-ellipsis overflow-hidden rounded appearance-none pl-3 pt-[25px] pb-[7px]" />

            <!-- Textarea -->
            <textarea :id="name"
                      :name="name"
                      :rows="lines"
                      v-if="lines !== 1"
                      :value="modelValue"
                      @focus="focus = true"
                      @focusout="focus = false"
                      :placeholder="placeholder"
                      :autocomplete="autocomplete"
                      @input="change($event.target.value)"
                      class="varnish-control varnish-textarea w-full bg-inherit font-470 text-gray-900 dark:text-gray-400 leading-[24px] -tracking-[.2px] rounded appearance-none resize-none pl-3 pr-11 pt-[25px]">
            </textarea>

            <!-- Label -->
            <v-label :icon="icon"
                     :value="label"
                     :optional="optional"
                     :optionalText="optionalText"
                     :filled="! blank(modelValue)"
                     :focus="readOnly ? false : focus">
            </v-label>

            <!-- Clear -->
            <v-clear :focus="focus"
                     :hover="hover"
                     @click="change('')"
                     :filled="! blank(modelValue)">
            </v-clear>

        </div>

        <!-- Error -->
        <v-error :value="fault"></v-error>

    </div>
</template>

<script>
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
         * Define the public properties.
         *
         */
        props : {
            'lines'    : { type : Number,  default : 1 },
            'readOnly' : { type : Boolean, default : false },
        },
    }
</script>
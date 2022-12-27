<template>
	<div class="varnish-dropdown varnish-font w-full">

        <!-- Container -->
        <div @mouseover="hover = true"
             @mouseout="hover = false"
             class="varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300">

			<!-- Input -->
			<select :id="name"
                    ref="input"
					:name="name"
					:value="modelValue"
                    @focus="focus = true"
                    @focusout="focus = false"
					@change="change($event.target.value)"
                    :class="blank(modelValue) ? '' : 'pt-[24px] pb-[7px]'"
					style="line-height: 1.3; padding-right: 50px; -webkit-padding-end: 50px !important"
					class="varnish-input w-full h-[51px] bg-inherit text-[17px] text-gray-900 dark:text-gray-400 align-middle text-ellipsis overflow-hidden rounded appearance-none cursor-pointer pl-3">

				<!-- Items -->
				<option v-for="item in items"
                        :value="item[itemValueKey]"
                        :selected="modelValue === item[itemValueKey] ? 'selected' : ''">

                    <!-- Text -->
                    {{ item[itemTextKey] }}

				</option>

			</select>

            <!-- Label -->
            <v-label :icon="icon"
                     :value="label"
                     :optional="optional"
                     :optionalText="optionalText"
                     :focus="! blank(modelValue)"
                     :filled="! blank(modelValue)">
            </v-label>

			<!-- Caret -->
			<i :class="blank(modelValue) || (! blank(modelValue) && ! hover) ? 'opacity-100' : 'opacity-0'"
               class="varnish-caret fas fa-caret-down text-gray-400 dark:text-gray-500 cursor-pointer pointer-events-none absolute top-[18px] right-[19px]">
            </i>

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
         * Define the events.
         *
         */
        emits : ['change'],

		/**
		 * Define the public properties.
		 *
		 */
		props : {
			'items'        : { type : [Array, Object], default : [] },
			'itemTextKey'  : { type : String,          default : '' },
			'itemValueKey' : { type : String,          default : '' },
		},

        /**
         * Execute actions when the component is mounted to the DOM.
         *
         */
        mounted()
        {
            if (typeof this.modelValue === 'boolean') {
                this.$emit('update:modelValue', this.modelValue ? 1 : 0);
            }

            let selected = this.items.find(item => item[this.itemValueKey] === this.modelValue);

            if (selected === undefined || [null, undefined].includes(this.modelValue)) {
                this.change('');

                return this.$refs.input.selectedIndex = -1;
            }

            if (this.modelValue.toString() === '') {
                this.$refs.input.selectedIndex = -1;
            }
        },

		/**
		 * Define the supporting methods.
		 *
		 */
		methods :
        {
			/**
			 * Set the component's value.
			 *
			 */
			change(payload = undefined)
			{
                this.$refs.input.blur();

				this.fault = '';

                if (payload === undefined) return;

                if (! ['', null].includes(payload) && ! isNaN(payload)) {
                    payload = Number(payload);
                }

                this.$emit('update:modelValue', payload);

                this.$emit('change', {
                    text  : this.$refs.input[this.$refs.input.selectedIndex]?.text ?? '',
                    value : payload,
                });
			},
		}
	}
</script>
<template>
    <div class="varnish-password varnish-font w-full">

        <!-- Container -->
        <div @mouseover="hover = true"
             @mouseout="hover = false"
             class="varnish-container bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded relative transition duration-300">

            <!-- Input -->
            <input :id="name"
                   :name="name"
                   type="password"
                   :value="modelValue"
                   @focus="focus = true"
                   @focusout="focus = false"
                   :placeholder="placeholder"
                   :autocomplete="autocomplete"
                   @input="change($event.target.value)"
                   :class="hover || focus ? 'pr-[50px]' : 'pr-3'"
                   class="varnish-input w-full bg-inherit font-[470] text-gray-900 dark:text-gray-400 text-ellipsis overflow-hidden rounded appearance-none pl-3 pt-[25px] pb-[7px]" />

            <!-- Label -->
            <v-label :icon="icon"
                     :value="label"
                     :focus="focus"
                     :optional="optional"
                     :optionalText="optionalText"
                     :filled="! blank(modelValue)">
            </v-label>

            <!-- Clear -->
            <v-clear :focus="focus"
                     :hover="hover"
                     @click="clear()"
                     :filled="! blank(modelValue)">
            </v-clear>

			<!-- Generate -->
            <div v-if="generate && ! automated()"
                 style="transition: all 0.4s ease, background-color 0s"
                 class="varnish-generate w-[50px] h-[51px] flex justify-center items-center absolute top-0 right-0 rounded-r"
                 :class="(focus && blank(modelValue)) || (hover && blank(modelValue)) ? 'opacity-100 z-[2]' : 'opacity-0 pointer-events-none'">

                <!-- Icon -->
                <i title="Generate a random password"
                   @click.stop="createRandomPassword()"
                   class="varnish-icon fas fa-cog text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 relative top-[1.5px] left-[1.5px] cursor-pointer transition duration-300">
                </i>

            </div>

        </div>

        <!-- Generated -->
        <div v-if="! blank(password)"
             class="varnish-generated font-[650] text-[14px] text-emerald-700 dark:text-emerald-300 -tracking-[0.2px] mt-2">

            <!-- Text -->
            <span class="mr-1">
                Password:
            </span>

            <!-- Password -->
            {{ password }}

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
         * Define the data model.
         *
         */
        data() { return {
            characters : ['abcdefghijklm', '0123456789', '!@%^&*_-+=', 'NOPQRSTUVWXYZ'],
            password   : '',
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'generate' : { type : Boolean, default : true },
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Reset the component's value.
             *
             */
            clear()
            {
                this.password = '';

                this.change('');
            },

            /**
             * Generate a pseudo-random password.
             *
             */
            createRandomPassword()
            {
                this.clear();

                this.characters.forEach(type => {
                    for (var i = 0; i < 5; i++) {
                        this.password += type.charAt(Math.floor(Math.random() * type.length));
                    }
                });

                this.password = [...this.password].sort(() => Math.random() - 0.5).join('');

                this.change(this.password);
            },
        },
    }
</script>
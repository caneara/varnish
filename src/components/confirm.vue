<template>
    <v-modal :dismiss="false"
             :visible="visible"
             class="varnish-confirm">

        <!-- Circle -->
        <div class="varnish-circle bg-yellow-500/[.30] dark:bg-yellow-800/[.50] h-[60px] w-[60px] flex justify-center items-center rounded-full mx-auto mb-8">
            <i class="varnish-icon fas fa-exclamation text-[30px] text-yellow-600"></i>
        </div>

        <!-- Title -->
        <div class="varnish-font-native varnish-title font-bold text-[21px] text-gray-900 dark:text-white text-center leading-snug mb-5">
            {{ title }}
        </div>

        <!-- Information -->
        <div class="varnish-summary font-medium text-[17px] text-gray-500 dark:text-gray-400 text-center leading-[1.6rem] px-6 mb-8">
            {{ summary }}
        </div>

        <!-- Actions -->
        <div class="varnish-actions flex justify-center gap-x-4">

            <!-- Cancel -->
            <v-button color="gray"
                      mode="outline"
                      label="Cancel"
                      @click="$emit('cancel')"
                      id="dialog_confirm_cancel">
            </v-button>

            <!-- Continue -->
            <v-button color="blue"
                      label="Continue"
                      @click="$emit('continue')"
                      id="dialog_confirm_continue">
            </v-button>

        </div>

    </v-modal>
</template>

<script>
    import ModalComponent from './modal.vue';
    import ButtonComponent from './button.vue';
    import Utilities from '../mixins/Utilities';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Utilities,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-button' : ButtonComponent,
            'v-modal'  : ModalComponent,
        },

        /**
         * Define the events.
         *
         */
        emits : ['cancel', 'continue'],

        /**
         * Define the public properties.
         *
         */
        props : {
            'summary' : { type : String,  default : 'Note that in most cases, this action is not reversible. If you need some help, then please contact support.' },
            'title'   : { type : String,  default : 'Are you sure you wish to proceed?' },
			'visible' : { type : Boolean, default : false },
        },
    }
</script>
<template>
    <v-modal :dismiss="false"
             :visible="visible"
             class="varnish-tip">

        <!-- Container -->
        <div class="flex flex-col md:flex-row md:-m-6 md:-mb-7">

            <!-- Circle -->
            <div class="varnish-circle bg-purple-500/[.30] dark:bg-purple-600/[.50] h-[60px] w-[60px] min-w-[60px] flex justify-center items-center mx-auto md:mx-0 rounded-full">
                <i class="varnish-icon fas fa-info text-[30px] text-purple-600 dark:text-purple-400 relative left-[0.5px] -top-[1px]"></i>
            </div>

            <!-- Content -->
            <div class="w-full mt-6 md:ml-7 md:mt-0">

                <!-- Information -->
                <div v-html="message"
                     class="varnish-message text-[17px] text-gray-500 dark:text-gray-400 text-center md:text-left leading-[1.6rem] md:mr-7 mb-8">
                </div>

                <!-- Actions -->
                <div class="varnish-actions flex flex-col-reverse md:flex-row justify-end gap-x-4">
                    <v-button color="blue"
                              label="Close"
                              mode="outline"
                              id="dialog_tip_close"
                              @click="$emit('close')">
                    </v-button>
                </div>

            </div>

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
        emits : ['close'],

        /**
         * Define the public properties.
         *
         */
        props : {
            'message' : { type : String,  default : '' },
			'visible' : { type : Boolean, default : false },
        },
    }
</script>
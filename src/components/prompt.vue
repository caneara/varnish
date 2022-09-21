<template>
    <v-modal :dismiss="false"
             :visible="visible"
             class="varnish-prompt">

        <!-- Circle -->
        <div class="varnish-circle bg-purple-500/[.20] dark:bg-purple-600/[.30] h-[60px] w-[60px] flex justify-center items-center rounded-full mx-auto mb-8">
            <i class="varnish-icon fas fa-comment-dots text-[30px] text-purple-700/[.40] dark:text-purple-500"></i>
        </div>

        <!-- Title -->
        <div class="varnish-title font-bold text-[21px] text-gray-900 dark:text-white text-center leading-snug mb-5">
            {{ title }}
        </div>

        <!-- Information -->
        <div class="varnish-summary text-gray-700 dark:text-gray-400 text-center leading-[1.6rem] px-6 mb-8">
            {{ summary }}
        </div>

        <!-- Input -->
        <v-textbox class="mb-4"
                   :label="label"
                   :lines="lines"
                   v-model="content"
                   :maxLength="maxLength"
                   icon="fas fa-signature"
                   @return="$emit('continue', content)">
        </v-textbox>

        <!-- Actions -->
        <div class="varnish-actions flex justify-center gap-x-4">

            <!-- Cancel -->
            <v-button color="gray"
                      mode="outline"
                      label="Cancel"
                      @click="$emit('cancel')">
            </v-button>

            <!-- Continue -->
            <v-button color="blue"
                      label="Continue"
                      @click="$emit('continue', content)">
            </v-button>

        </div>

    </v-modal>
</template>

<script>
    import ModalComponent from './modal.vue';
    import ButtonComponent from './button.vue';
    import Utilities from '../mixins/Utilities';
    import TextBoxComponent from './textbox.vue';

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
            'v-button'  : ButtonComponent,
            'v-modal'   : ModalComponent,
            'v-textbox' : TextBoxComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() {
            return {
                content : '',
            }
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
            'label'     : { type : String,  default : 'Your response' },
            'lines'     : { type : Number,  default : 1 },
            'maxLength' : { type : Number,  default : null },
            'summary'   : { type : String,  default : 'In order to proceed, some input is required. Please enter it below, then press continue, or press cancel.' },
            'title'     : { type : String,  default : 'Awaiting your response...' },
			'visible'   : { type : Boolean, default : false },
        },
    }
</script>
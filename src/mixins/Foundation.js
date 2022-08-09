export default
{
    /**
     * Define the data model.
     *
     */
    data() { return {
        fault : this.error,
        focus : false,
        hover : false,
    }},

    /**
     * Define the events.
     *
     */
    emits : [
        'change',
        'update:modelValue',
    ],

    /**
     * Define the public properties.
     *
     */
    props : {
        'autocomplete' : { type : String,                    default : 'off' },
        'error'        : { type : String,                    default : '' },
        'icon'         : { type : String,                    default : '' },
        'id'           : { type : String,                    default : '' },
        'label'        : { type : String,                    default : 'Label' },
        'modelValue'   : { type : [String, Number, Boolean], default : '' },
        'optional'     : { type : Boolean,                   default : false },
        'optionalText' : { type : String,                    default : '' },
        'placeholder'  : { type : String,                    default : '' },
    },

    /**
     * Define the computed properties.
     *
     */
    computed :
    {
        /**
         * Create a unique identifier for the component.
         *
         */
        name()
        {
            return this.id ? this.id : `id-${parseInt(window.performance.now())}`;
        },
    },

    /**
     * Define the watch methods.
     *
     */
    watch :
    {
        /**
         * Watch the 'error' property.
         *
         */
        error : function(current, previous)
        {
            return this.fault = current;
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
            this.fault = '';

            if (payload === undefined) return;

            this.$emit('change', payload);
            this.$emit('update:modelValue', payload);
        }
    }
}
export default
{
    /**
     * Define the data model.
     *
     */
    data() { return {
        focus   : false,
        hover   : false,
        message : this.error,
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
        'id'         : { type : String,                    default : '' },
        'fill'       : { type : String,                    default : 'off' },
        'icon'       : { type : String,                    default : '' },
        'error'      : { type : String,                    default : '' },
        'label'      : { type : String,                    default : 'Component' },
        'modelValue' : { type : [String, Number, Boolean], default : '' },
    },

    /**
     * Define the computed properties.
     *
     */
    computed :
    {
        /**
         * Create an identifier for the component.
         *
         */
        name()
        {
            return this.id ? this.id : this.label.toLowerCase().replace(' ', '-');
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
            return this.message = current;
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
            this.message = '';

            if (payload === undefined) return;

            this.$emit('change', payload);
            this.$emit('update:modelValue', payload);
        }
    }
}
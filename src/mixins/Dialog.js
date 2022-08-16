import { createApp } from 'vue';
import PromptComponent from '../components/prompt.vue';
import ConfirmComponent from '../components/confirm.vue';
import NotificationComponent from '../components/notification.vue';

export default
{
    /**
     * Define the components.
     *
     */
    components : {
        'v-confirm'       : ConfirmComponent,
        'v-notification'  : NotificationComponent,
        'v-prompt'        : PromptComponent,
    },

    /**
     * Define the data model.
     *
     */
    data() {
        return {
            dialog : { container : null, id : null },
        }
    },

    /**
     * Define the supporting methods.
     *
     */
    methods :
    {
        /**
         * Insert a blank container into the DOM.
         *
         */
        createDialogElement()
        {
            this.dialog.id = `dialog-${parseInt(performance.now())}`;

            let div = document.createElement('div');

            div.id = this.dialog.id;

            document.body.appendChild(div);
        },

        /**
         * Remove the open dialog from the viewport.
         *
         */
        closeDialog()
        {
            this.dialog.container._instance.props.visible = false;

            setTimeout(() => {
                this.dialog.container.unmount();

                this.dialog.container = undefined;

                document.body.removeChild(document.getElementById(this.dialog.id));
            }, 300);
        },

        /**
         * Request that the user confirm a particular action.
         *
         */
        confirm(title, summary)
        {
            this.createDialogElement();

            return new Promise((resolve, reject) =>
            {
                this.dialog.container = createApp(ConfirmComponent, {
                    summary : summary,
                    title   : title,
                    visible : true,
                    onCancel : () => {
                        resolve(false);

                        this.closeDialog();
                    },
                    onContinue : () => {
                        resolve(true);

                        this.closeDialog();
                    },
                });

                this.dialog.container.mount(`#${this.dialog.id}`);
            });
        },

        /**
         * Advise the user that something has happened.
         *
         */
        notify(type, message)
        {
            this.createDialogElement();

            this.dialog.container = createApp(NotificationComponent, {
                message : message,
                type    : type,
            });

            this.dialog.container.mount(`#${this.dialog.id}`);

            setTimeout(() => this.closeDialog(), 3500);
        },

        /**
         * Request that the user provide some feedback.
         *
         */
        prompt(title, summary, label, fallback = '', lines = 1)
        {
            this.createDialogElement();

            return new Promise((resolve, reject) =>
            {
                this.dialog.container = createApp(PromptComponent, {
                    label   : label,
                    lines   : lines,
                    summary : summary,
                    title   : title,
                    visible : true,
                    onCancel : () => {
                        resolve(fallback);

                        this.closeDialog();
                    },
                    onContinue : (event) => {
                        resolve(['', null, undefined].includes(event) ? fallback : event);

                        this.closeDialog();
                    },
                });

                this.dialog.container.mount(`#${this.dialog.id}`);
            });
        },
    }
}
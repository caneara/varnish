import { createApp } from 'vue';
import ShareComponent from '../components/share.vue';
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
        'v-share'         : ShareComponent,
    },

    /**
     * Define the data model.
     *
     */
    data() {
        return {
            dialogs : [],
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
            let div = document.createElement('div');

            div.id = `dialog-${parseInt(performance.now())}`;

            document.body.appendChild(div);

            this.dialogs.push({ container : null, id : div.id })

            return this.dialogs.slice(-1)[0];
        },

        /**
         * Remove the open dialog from the viewport.
         *
         */
        closeDialog(dialog)
        {
            dialog.container._container._vnode.component.props.visible = false;

            setTimeout(() => {
                dialog.container.unmount();

                dialog.container = undefined;

                document.body.removeChild(document.getElementById(dialog.id));
            }, 300);
        },

        /**
         * Request that the user confirm a particular action.
         *
         */
        confirm(title = null, summary = null)
        {
            let dialog = this.createDialogElement();

            return new Promise((resolve, reject) =>
            {
                dialog.container = createApp(ConfirmComponent, {
                    summary : summary ?? 'Note that in most cases, this action is not reversible. If you need some help, then please contact support.',
                    title   : title ?? 'Are you sure you wish to proceed?',
                    visible : true,
                    onCancel : () => {
                        resolve(false);

                        this.closeDialog(dialog);
                    },
                    onContinue : () => {
                        resolve(true);

                        this.closeDialog(dialog);
                    },
                });

                dialog.container.mount(`#${dialog.id}`);
            });
        },

        /**
         * Advise the user that something has happened.
         *
         */
        notify(type, message)
        {
            let dialog = this.createDialogElement();

            dialog.container = createApp(NotificationComponent, {
                message : message,
                type    : type,
            });

            dialog.container.mount(`#${dialog.id}`);

            setTimeout(() => this.closeDialog(dialog), 3500);
        },

        /**
         * Request that the user provide some feedback.
         *
         */
        prompt(title = null, summary = null, label = null, fallback = '', lines = 1, maxLength = null)
        {
            let dialog = this.createDialogElement();

            return new Promise((resolve, reject) =>
            {
                dialog.container = createApp(PromptComponent, {
                    fallback  : fallback,
                    label     : label ?? 'Your response',
                    lines     : lines,
                    maxLength : maxLength,
                    summary   : summary ?? 'In order to proceed, some input is required. Please enter it below, then press continue, or press cancel.',
                    title     : title ?? 'Awaiting your response...',
                    visible   : true,
                    onCancel : () => {
                        resolve(fallback);

                        this.closeDialog(dialog);
                    },
                    onContinue : (event) => {
                        resolve(['', null, undefined].includes(event) ? fallback : event);

                        this.closeDialog(dialog);
                    },
                });

                dialog.container.mount(`#${dialog.id}`);
            });
        },

        /**
         * Allow the user to share the given link.
         *
         */
        share(url)
        {
            let dialog = this.createDialogElement();

            dialog.container = createApp(ShareComponent, {
                url     : url,
                visible : true,
            });

            dialog.container.mount(`#${dialog.id}`);
        },
    }
}
import { createApp } from 'vue';
import TipComponent from '../components/tip.vue';
import ShareComponent from '../components/share.vue';
import PromptComponent from '../components/prompt.vue';
import ConfirmComponent from '../components/confirm.vue';
import NotificationComponent from '../components/notification.vue';

export default class Dialog
{
    /**
     * Insert a blank container into the DOM.
     *
     */
    static #createDialogElement()
    {
        let div = document.createElement('div');

        div.id = `dialog-${parseInt(window.performance.now())}`;

        document.body.appendChild(div);

        return { container : null, id : div.id };
    }

    /**
     * Remove the open dialog from the viewport.
     *
     */
    static #closeDialog(element)
    {
        element.container._container._vnode.component.props.visible = false;

        setTimeout(() => {
            element.container.unmount();

            element.container = undefined;

            document.body.removeChild(document.getElementById(element.id));
        }, 300);
    }

    /**
     * Request that the user confirm a particular action.
     *
     */
    static confirm(title = null, summary = null)
    {
        let element = Dialog.#createDialogElement();

        return new Promise((resolve, reject) =>
        {
            element.container = createApp(ConfirmComponent, {
                summary : summary ?? 'Note that in most cases, this action is not reversible. If you need some help, then please contact support.',
                title   : title ?? 'Are you sure you wish to proceed?',
                visible : true,
                onCancel : () => {
                    resolve(false);

                    Dialog.#closeDialog(element);
                },
                onContinue : () => {
                    resolve(true);

                    Dialog.#closeDialog(element);
                },
            });

            element.container.mount(`#${element.id}`);
        });
    }

    /**
     * Advise the user that something has happened.
     *
     */
    static notification(type, message)
    {
        let element = Dialog.#createDialogElement();

        element.container = createApp(NotificationComponent, {
            message : message,
            type    : type,
        });

        element.container.mount(`#${element.id}`);

        setTimeout(() => Dialog.#closeDialog(element), 3500);
    }

    /**
     * Request that the user provide some feedback.
     *
     */
    static prompt(title = null, summary = null, label = null, fallback = '', lines = 1, maxLength = null)
    {
        let element = Dialog.#createDialogElement();

        return new Promise((resolve, reject) =>
        {
            element.container = createApp(PromptComponent, {
                fallback  : fallback,
                label     : label ?? 'Your response',
                lines     : lines,
                maxLength : maxLength,
                summary   : summary ?? 'In order to proceed, some input is required. Please enter it below, then press continue, or press cancel.',
                title     : title ?? 'Awaiting your response...',
                visible   : true,
                onCancel : () => {
                    resolve(fallback);

                    Dialog.#closeDialog(element);
                },
                onContinue : (event) => {
                    resolve(['', null, undefined].includes(event) ? fallback : event);

                    Dialog.#closeDialog(element);
                },
            });

            element.container.mount(`#${element.id}`);
        });
    }

    /**
     * Allow the user to share the given link.
     *
     */
    static share(url)
    {
        let element = Dialog.#createDialogElement();

        element.container = createApp(ShareComponent, {
            url     : url,
            visible : true,
        });

        element.container.mount(`#${element.id}`);
    }

    /**
     * Display some information to the user.
     *
     */
    static tip(message = '')
    {
        let element = Dialog.#createDialogElement();

        element.container = createApp(TipComponent, {
            message : message,
            visible : true,
            onClose : () => Dialog.#closeDialog(element),
        });

        element.container.mount(`#${element.id}`);
    }
}
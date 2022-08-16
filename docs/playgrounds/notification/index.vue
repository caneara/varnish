<template>
    <div class="flex flex-col gap-3">

        <!-- Info -->
        <button @click="notify('info', 'An info notification')"
                class="bg-sky-700 text-white px-3 py-1 rounded-md">
            Show Info Notification
        </button>

        <!-- Success -->
        <button @click="notify('success', 'A success notification')"
                class="bg-emerald-700 text-white px-3 py-1 rounded-md">
            Show Success Notification
        </button>

        <!-- Error -->
        <button @click="notify('error', 'An error notification')"
                class="bg-red-700 text-white px-3 py-1 rounded-md">
            Show Error Notification
        </button>

    </div>
</template>

<script>
    import Dialog from '../../../src/mixins/Dialog';

    export default
    {
        mixins : [
            Dialog,
        ],
    }
</script>
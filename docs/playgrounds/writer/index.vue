<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold tracking-[-0.7px] mb-10">
            Writer - Playground
        </h1>

        <!-- Writer -->
        <v-writer :html="true"
                  :height="600"
                  v-model="text"
                  :uploads="true"
                  :lineNumbers="true"
                  :progress="progress"
                  @upload="upload($event)">
        </v-writer>

    </div>
</template>

<script>
    import WriterComponent from '../../../src/components/writer.vue';

    export default
    {
        components : {
            'v-writer' : WriterComponent,
        },

        data() {
            return {
                progress : 0,
                text     : `# Writer\n\nA minimal, Markdown-based text editor with HTML rendering, fullscreen-mode and code syntax-highlighting.`,
            }
        },

        methods :
        {
            upload(callback)
            {
                [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach(
                    step => setTimeout(() => this.progress = step, step * 10)
                );

                setTimeout(() => callback('https://example.com/test.jpg'), 1500);
            }
        },
    }
</script>

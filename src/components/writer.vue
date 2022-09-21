<!-- Template -->
<template>
    <div class="varnish-writer varnish-font flex flex-col"
         :class="[fullscreen ? 'varnish-fullscreen fixed inset-0 z-[1000]' : '']">

        <!-- Toolbar -->
        <div v-if="toolbar && ! readingMode"
             :class="[editing ? 'justify-between' : 'justify-end', fullscreen ? 'border-t-0' : 'rounded-t']"
             class="varnish-toolbar bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none flex flex-col-reverse md:flex-row md:px-2">

            <!-- Left Side -->
            <div :class="editing ? '' : 'hidden md:flex invisible pointer-events-none'"
                 class="varnish-toolbar-left flex flex-wrap justify-start px-2 py-1 md:p-0">

                <!-- Undo -->
                <div title="Undo"
                     @click="history.hasUndo() ? history.undo() : null"
                     :class="history.hasUndo() ? 'text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white' : 'text-gray-300 dark:text-gray-500'"
                     class="fas fa-rotate-left text-[15px] md:text-[16px] varnish-toolbar-button varnish-toolbar-button-undo flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Redo -->
                <div title="Redo"
                     @click="history.hasRedo() ? history.redo() : null"
                     :class="history.hasRedo() ? 'text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white' : 'text-gray-300 dark:text-gray-500'"
                     class="fas fa-rotate-right text-[15px] md:text-[16px] varnish-toolbar-button varnish-toolbar-button-redo flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Divider -->
                <div class="varnish-toolbar-divider hidden md:block border-l border-gray-300/[.70] dark:border-gray-600 mx-3"></div>

                <!-- Headings -->
                <div title="Headings"
                     class="varnish-toolbar-button varnish-toolbar-button-headings flex items-center relative p-2 md:p-3">

                    <!-- Icon -->
                    <div title="Headings"
                        @click="headings = ! headings"
                        class="fas fa-heading text-[15px] md:text-[16px] text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white cursor-pointer transition duration-300">
                    </div>

                    <!-- Headings -->
                    <div ref="headings"
                         v-if="headings"
                         @click="headings = false"
                         class="headings absolute z-10 py-4 bg-white dark:bg-gray-900 dark:border-none border border-gray-300 border-t-0 rounded-b-md top-[36px] md:top-[41px] -left-[13px] whitespace-nowrap cursor-default">

                        <!-- Heading #1 -->
                        <h1 @click="prependText('\n\n# ')"
                            style="font-family: Arial, sans-serif"
                            class="text-[25px] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 font-bold cursor-pointer transition duration-300 px-6 py-1 mb-1">

                            <!-- Text -->
                            Heading One

                        </h1>

                        <!-- Heading #2 -->
                        <h2 @click="prependText('\n\n## ')"
                            style="font-family: Arial, sans-serif"
                            class="text-[23px] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 font-bold cursor-pointer transition duration-300 px-6 py-1 mb-1">

                            <!-- Text -->
                            Heading Two

                        </h2>

                        <!-- Heading #3 -->
                        <h3 @click="prependText('\n\n### ')"
                            style="font-family: Arial, sans-serif"
                            class="text-[21px] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 font-semibold cursor-pointer transition duration-300 px-6 py-1 mb-1">

                            <!-- Text -->
                            Heading Three

                        </h3>

                        <!-- Heading #4 -->
                        <h4 @click="prependText('\n\n#### ')"
                            style="font-family: Arial, sans-serif"
                            class="text-[19px] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 font-semibold cursor-pointer transition duration-300 px-6 py-1 mb-1">

                            <!-- Text -->
                            Heading Four

                        </h4>

                        <!-- Heading #5 -->
                        <h5 @click="prependText('\n\n##### ')"
                            style="font-family: Arial, sans-serif"
                            class="text-[17px] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 font-medium cursor-pointer transition duration-300 px-6 py-1 mb-1">

                            <!-- Text -->
                            Heading Five

                        </h5>

                        <!-- Heading #6 -->
                        <h6 @click="prependText('\n\n###### ')"
                            style="font-family: Arial, sans-serif"
                            class="text-[15px] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 font-medium cursor-pointer transition duration-300 px-6 py-1 mb-0">

                            <!-- Text -->
                            Heading Six

                        </h6>

                    </div>

                </div>

                <!-- Bold -->
                <div title="Bold"
                     @click="wrapText('**')"
                     class="fas fa-bold text-[15px] md:text-[16px] text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-bold flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Italic -->
                <div title="Italic"
                     @click="wrapText('*')"
                     class="fas fa-italic text-[15px] md:text-[16px] text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-italic flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- List -->
                <div title="List"
                     @click="prependText('\n\n* ')"
                     class="fas fa-list text-[15px] md:text-[16px] text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-list flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Divider -->
                <div class="varnish-toolbar-divider hidden md:block border-l border-gray-300/[.70] dark:border-gray-600 mx-3"></div>

                <!-- Blockquote -->
                <div title="Blockquote"
                     @click="prependText('\n\n> ')"
                     class="fas fa-quote-left text-[15px] md:text-[16px] text-gray-400 hover:text-sky-700 dark:text-gray-400 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-blockquote flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Code -->
                <div title="Code"
                     @click="insertCodeBlock()"
                     class="fas fa-code text-[15px] md:text-[16px] text-emerald-600 hover:text-emerald-700 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-code flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Link -->
                <div title="Insert Link"
                     @click="insertLink()"
                     class="fas fa-link text-[15px] md:text-[16px] text-sky-600 hover:text-sky-700 dark:text-sky-500/[.80] dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-link flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Image -->
                <div v-if="uploads"
                     title="Upload Image"
                     :class="step ? 'opacity-20 pointer-events-none' : ''"
                     @click="! step ? $emit('upload', (url) => uploaded(url)) : null"
                     class="fas fa-image text-[15px] md:text-[16px] text-purple-700/[.60] hover:text-purple-800 dark:text-purple-400/[.80] dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-upload-image flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

            </div>

            <!-- Right Side -->
            <div class="varnish-toolbar-right flex md:justify-end border-b md:border-b-0 border-gray-300/[.70] dark:border-gray-700/[.80] px-2 py-1 md:p-0">

                <!-- Max Length -->
                <div v-if="editing && remaining"
                     class="flex scale-[.60] md:scale-[.80] mr-[2px] md:mr-[6px]">

                    <!-- Remaining -->
                    <v-remaining :maximum="maxLength"
                                 :value="modelValue.length">
                    </v-remaining>

                </div>

                <!-- Divider -->
                <div v-if="editing"
                     class="varnish-toolbar-divider hidden md:block border-l border-gray-300/[.70] dark:border-gray-600 mx-3">
                </div>

                <!-- Edit -->
                <div title="Edit"
                     v-if="! editing"
                     @click="editing = true"
                     class="fas fa-edit text-[15px] md:text-[16px] text-sky-600 hover:text-sky-800 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-edit flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Preview -->
                <div v-if="editing"
                     title="Preview HTML"
                     @click="editing = false"
                     class="fas fa-eye text-[15px] md:text-[16px] text-emerald-600 hover:text-emerald-800 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-preview flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Fullscreen -->
                <div title="Fullscreen"
                     v-if="! fullscreen"
                     @click="fullScreenMode()"
                     class="fas fa-up-right-and-down-left-from-center text-[15px] md:text-[16px] text-gray-400 hover:text-gray-800 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-fullscreen flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

                <!-- Compact -->
                <div v-if="fullscreen"
                     @click="compactMode()"
                     title="Exit Fullscreen"
                     class="fas fa-down-left-and-up-right-to-center text-[15px] md:text-[16px] text-gray-400 hover:text-gray-800 dark:hover:text-white varnish-toolbar-button varnish-toolbar-button-fullscreen flex items-center cursor-pointer transition duration-300 p-2 md:p-3">
                </div>

            </div>

        </div>

        <!-- Container -->
        <div class="varnish-container flex flex-1 relative"
             :style="readingMode ? '' : `min-height: ${height}px`"
             :class="[fullscreen ? '' : 'rounded-b', readingMode ? '' : (toolbar ? 'border border-gray-300 dark:border-gray-700 border-t-0' : 'border border-gray-300 dark:border-gray-700 rounded-t')]">

            <!-- Progress Bar -->
            <div ref="progress"
                 v-show="step !== 0"
                 class="varnish-progress bg-gray-200 h-1 w-full absolute -top-[1px] left-0 right-0 z-1 overflow-hidden">

                <!-- Position -->
                <div ref="position"
                     :style="`width: ${step}%`"
                     class="varnish-position bg-teal-600 h-1 absolute top-0 left-0 transition-all duration-200">
                </div>

            </div>

            <!-- Editor -->
            <textarea :id="name"
                      :dusk="name"
                      :name="name"
                      ref="editor"
                      v-show="editing"
                      autocomplete="off"
                      :value="modelValue"
                      v-if="! readingMode"
                      :maxLength="maxLength"
                      @click="hideOverlays()"
                      :placeholder="placeholder"
                      @keydown="interceptKeystroke($event)"
                      @input="textChanged($event.target.value)"
                      :class="fullscreen ? '' : (toolbar ? 'rounded-b overflow-y-hidden' : 'rounded overflow-y-hidden')"
                      class="varnish-editor appearance-none outline-none focus:outline-none active:outline-none bg-white dark:bg-gray-800 w-full font-mono text-gray-900 dark:text-gray-400 leading-normal resize-none p-6">
            </textarea>

            <!-- Preview -->
            <div ref="preview"
                 v-show="! editing || readingMode"
                 :class="readingMode ? '' : 'p-6'"
                 class="varnish-preview w-full overflow-auto break-words rounded-b">

                <!-- Slot -->

            </div>

        </div>

        <!-- Error -->
        <v-error :value="fault"></v-error>

    </div>
</template>

<!-- Script -->
<script>
    import markdownit from 'markdown-it';
    import Dialog from '../mixins/Dialog';
    import UndoManager from 'undo-manager';
    import ErrorComponent from './error.vue';
    import hljs from 'highlight.js/lib/common';
    import Utilities from '../mixins/Utilities';
    import Foundation from '../mixins/Foundation';
    import RemainingComponent from './remaining.vue';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Dialog,
            Utilities,
            Foundation,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-error'     : ErrorComponent,
            'v-remaining' : RemainingComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            editing    : ! this.readingMode,
            fullscreen : false,
            headings   : false,
            history    : new UndoManager(),
            renderer   : null,
            selection  : { start : 0, end : 0 },
            step       : this.progress,
        }},

        /**
         * Define the events.
         *
         */
        emits : ['upload'],

        /**
         * Define the public properties.
         *
         */
        props : {
            'displayText'  : { type : String,  default : "Specify the display text e.g 'home'." },
            'height'       : { type : Number,  default : 300 },
            'html'         : { type : Boolean, default : false },
            'languageText' : { type : String,  default : "Specify the language e.g. 'js', 'php', 'json' etc." },
            'linkText'     : { type : String,  default : "Specify the url e.g. 'https://google.com'." },
            'maxLength'    : { type : Number,  default : null },
            'maxUndo'      : { type : Number,  default : 20 },
            'progress'     : { type : Number,  default : 0 },
            'remaining'    : { type : Boolean, default : false },
            'readingMode'  : { type : Boolean, default : false },
            'toolbar'      : { type : Boolean, default : true },
            'uploads'      : { type : Boolean, default : false },
        },

        /**
         * Execute actions when the component is instantiated.
         *
         */
        created()
        {
            this.history.setLimit(this.maxUndo);

            this.initializeMarkdownRenderer();
        },

        /**
         * Execute actions when the component is mounted to the DOM.
         *
         */
        mounted()
        {
            this.resizeEditorToContent();

            if (this.readingMode) this.renderMarkdown();
        },

        /**
         * Define the watch methods.
         *
         */
        watch :
        {
            /**
             * Watch the 'editing' data attribute.
             *
             */
            editing : function(current, previous)
            {
                if (current) return;

                this.renderMarkdown();
            },

            /**
             * Watch the 'modelValue' property.
             *
             */
            modelValue : function(current, previous)
            {
                if (this.readingMode) this.renderMarkdown();
            },

            /**
             * Watch the 'progress' property.
             *
             */
            progress : function(current, previous)
            {
                this.step = current;
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
            change(content = undefined)
            {
                this.fault = '';

                if (content === undefined) return;

                this.logHistoryState(this.modelValue, content);

                this.update(content);
            },

            /**
             * Switch to a compact view.
             *
             */
            compactMode()
            {
                this.fullscreen = false;

                document.body.style.overflow = 'auto';

                setTimeout(() => this.resizeEditorToContent(), 10);
            },

            /**
             * Switch to a full screen view.
             *
             */
            fullScreenMode()
            {
                this.fullscreen = true;

                document.body.style.overflow = 'hidden';

                this.$refs.editor.style.removeProperty('height');
            },

            /**
             * Remove any menus that are currently displayed.
             *
             */
            hideOverlays()
            {
                this.headings = false;
            },

            /**
             * Apply syntax-highlighting to the given source using the given language.
             *
             */
            highlightCodeBlock(source, language)
            {
                if (this.blank(language)) return source;

                if (this.blank(hljs.getLanguage(language))) return source;

                let width = this.$el.parentNode.getBoundingClientRect().width;

                return `<div class="hljs" style="max-width: ${width}px">${this.renderCodeBlock(source, language)}</div>`;
            },

            /**
             * Configure and initialize the Markdown renderer.
             *
             */
            initializeMarkdownRenderer()
            {
                let options = {
                    html        : this.html,
                    linkify     : true,
                    typographer : true,
                    quotes      : '“”‘’',
                    highlight   : (source, language) => this.highlightCodeBlock(source, language),
                };

                this.renderer = markdownit('commonmark', options).enable('table');
            },

            /**
             * Wrap the currently selected text within a code block.
             *
             */
            async insertCodeBlock()
            {
                let language = await this.prompt(
                    'Awaiting your response...', this.languageText, 'Your response'
                );

                this.wrapText(['\n\n```' + `${language}\n`, '\n```\n\n']);
            },

            /**
             * Insert a hyperlink into the editor.
             *
             */
            async insertLink()
            {
                this.saveSelectionRange(this.$refs.editor);

                let selected = this.modelValue.substring(this.selection.start, this.selection.end);

                let link = await this.prompt(
                    'Awaiting your response...', this.linkText, 'Your response'
                );

                let text = this.blank(selected) ? await this.prompt(
                    'Awaiting your response...', this.displayText, 'Your response'
                ) : null;

                text ? this.prependText(`[${text}](${link})`) : this.wrapText(['[', `](${link})`]);
            },

            /**
             * Intercept certain keyboard events and handle them accordingly.
             *
             */
            interceptKeystroke(event)
            {
                let shift   = event.shiftKey;
                let command = event.ctrlKey || event.metaKey;

                // Tabs
                if (event.keyCode === 9) {
                    event.preventDefault();

                    this.prependText('\t');
                }

                // Bold
                if (event.key === 'b' && command) {
                    event.preventDefault();

                    this.wrapText('**');
                }

                // Italics
                if (event.key === 'i' && command) {
                    event.preventDefault();

                    this.wrapText('*');
                }

                // Links
                if (event.key === 'k' && command) {
                    event.preventDefault();

                    this.insertLink();
                }

                // Undo
                if (event.key === 'z' && command && ! shift) {
                    if (this.history.hasUndo()) {
                        event.preventDefault();

                        this.history.undo();
                    }
                }

                // Redo
                if (['z', 'y'].includes(event.key) && command && shift) {
                    if (this.history.hasRedo()) {
                        event.preventDefault();

                        this.history.redo();
                    }
                }
            },

            /**
             * Record the given content within the history.
             *
             */
            logHistoryState(current, revised)
            {
                if (current === revised) return;

                this.history.add({
                    undo : () => this.update(current),
                    redo : () => this.update(revised),
                });
            },

            /**
             * Insert the given content before the current selection.
             *
             */
            prependText(content)
            {
                this.saveSelectionRange(this.$refs.editor);

                let preceeding = this.modelValue.substring(0, this.selection.start);
                let succeeding = this.modelValue.substring(this.selection.start, this.modelValue.length);

                this.change(`${preceeding}${content}${succeeding}`);

                this.setSelectionRange(this.selection.start + content.length);
            },

            /**
             * Attempt to convert the given source into highlighted code.
             *
             */
            renderCodeBlock(source, language)
            {
                try {
                    return hljs.highlight(source, { language : language }).value;
                } catch {
                    return source;
                }
            },

            /**
             * Convert the raw Markdown text into rendered HTML.
             *
             */
            renderMarkdown()
            {
                this.$refs.preview.innerHTML = this.renderer.render(this.modelValue);
            },

            /**
             * Adjust the textarea to fit its content.
             *
             */
            resizeEditorToContent()
            {
                if (this.fullscreen || this.readingMode) return;

                this.$nextTick(() => this.$refs.editor.style.height = `${this.$refs.editor.scrollHeight}px`);
            },

            /**
             * Store the current cursor selection range.
             *
             */
            saveSelectionRange(target)
            {
                this.selection = {
                    start : target.selectionStart,
                    end   : target.selectionEnd,
                };
            },

            /**
             * Adjust the currently selected text in the editor.
             *
             */
            setSelectionRange(start, finish = null)
            {
                this.$refs.editor.focus();

                setTimeout(() => this.$refs.editor.setSelectionRange(start, finish ?? start), 50);
            },

            /**
             * Respond to an alteration of the editor's content.
             *
             */
            textChanged(content)
            {
                this.change(content);

                if (this.fullscreen) return;

                this.$refs.editor.style.height = 'auto';
                this.$refs.editor.style.height = `${this.$refs.editor.scrollHeight}px`;
            },

            /**
             * Update the current height and content of the component.
             *
             */
            update(content)
            {
                this.resizeEditorToContent();

                this.$emit('change', content);
                this.$emit('update:modelValue', content);
            },

            /**
             * Register an upload hook and advise the parent.
             *
             */
            uploaded(url = null)
            {
                this.step = 0;

                if (this.blank(url)) return;

                this.prependText(`\n\n![](${url})\n\n`);
            },

            /**
             * Wrap the currently selected text with the given content.
             *
             */
            wrapText(content)
            {
                this.saveSelectionRange(this.$refs.editor);

                content = Array.isArray(content) ? content : [content, content];

                let preceeding = this.modelValue.substring(0, this.selection.start);
                let selected   = this.modelValue.substring(this.selection.start, this.selection.end);
                let succeeding = this.modelValue.substring(this.selection.end, this.modelValue.length);

                this.change(`${preceeding}${content[0]}${selected}${content[1]}${succeeding}`);

                this.setSelectionRange(this.selection.end + content.join('').length);
            },
        }
    }
</script>
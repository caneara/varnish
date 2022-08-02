<!-- Template -->
<template>
    <div class="varnish-writer varnish-font flex flex-col"
         :class="[fullscreen ? 'fullscreen fixed inset-0 z-[1000]' : '']">

        <!-- Toolbar -->
        <div v-if="! readingMode"
             :class="[editing ? 'justify-between' : 'justify-end', fullscreen ? 'border-t-0' : 'rounded-t']"
             class="toolbar bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none flex flex-wrap px-2">

            <!-- Left Side -->
            <div class="toolbar-left flex flex-wrap justify-start"
                 :class="editing ? '' : 'hidden md:flex invisible pointer-events-none'">

                <!-- Undo -->
                <div title="Undo"
                     @click="history.hasUndo() ? history.undo() : null"
                     class="fa-solid fa-rotate-left toolbar-button toolbar-button-undo flex items-center p-3 cursor-pointer transition duration-300"
                     :class="history.hasUndo() ? 'text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white' : 'text-gray-300 dark:text-gray-500'">
                </div>

                <!-- Redo -->
                <div title="Redo"
                     @click="history.hasRedo() ? history.red() : null"
                     class="fa-solid fa-rotate-right toolbar-button toolbar-button-redo flex items-center p-3 cursor-pointer transition duration-300"
                     :class="history.hasRedo() ? 'text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white' : 'text-gray-300 dark:text-gray-500'">
                </div>

                <!-- Divider -->
                <div class="toolbar-divider hidden md:block border-l border-gray-300/[.70] dark:border-gray-600 mx-3"></div>

                <!-- Headings -->
                <div title="Headings"
                     class="toolbar-button toolbar-button-headings flex items-center p-3 relative">

                    <!-- Icon -->
                    <div title="Headings"
                        @click="headings = ! headings"
                        class="fa-solid fa-heading cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">
                    </div>

                    <!-- Headings -->
                    <div ref="headings"
                         v-if="headings"
                         @click="headings = false"
                         class="headings absolute z-10 py-4 bg-white dark:bg-gray-600 dark:border-none border border-gray-300 border-t-0 rounded-b-md top-[41px] -left-[13px] whitespace-nowrap cursor-default">

                        <!-- Heading #1 -->
                        <h1 @click="prependText('\n\n# ')"
                            class="text-[25px] px-6 py-1 mb-1 font-bold cursor-pointer transition duration-300 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">

                            <!-- Text -->
                            Heading One

                        </h1>

                        <!-- Heading #2 -->
                        <h2 @click="prependText('\n\n## ')"
                            class="text-[23px] px-6 py-1 mb-1 font-bold cursor-pointer transition duration-300 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">

                            <!-- Text -->
                            Heading Two

                        </h2>

                        <!-- Heading #3 -->
                        <h3 @click="prependText('\n\n### ')"
                            class="text-[21px] px-6 py-1 mb-1 font-semibold cursor-pointer transition duration-300 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">

                            <!-- Text -->
                            Heading Three

                        </h3>

                        <!-- Heading #4 -->
                        <h4 @click="prependText('\n\n#### ')"
                            class="text-[19px] px-6 py-1 mb-1 font-semibold cursor-pointer transition duration-300 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">

                            <!-- Text -->
                            Heading Four

                        </h4>

                        <!-- Heading #5 -->
                        <h5 @click="prependText('\n\n##### ')"
                            class="text-[17px] px-6 py-1 mb-1 font-medium cursor-pointer transition duration-300 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">

                            <!-- Text -->
                            Heading Five

                        </h5>

                        <!-- Heading #6 -->
                        <h6 @click="prependText('\n\n###### ')"
                            class="text-[15px] px-6 py-1 font-medium cursor-pointer transition duration-300 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">

                            <!-- Text -->
                            Heading Six

                        </h6>

                    </div>

                </div>

                <!-- Bold -->
                <div title="Bold"
                     @click="wrapText('**')"
                     class="fa-solid fa-bold toolbar-button toolbar-button-bold flex items-center p-3 cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">
                </div>

                <!-- Italic -->
                <div title="Italic"
                     @click="wrapText('*')"
                     class="fa-solid fa-italic toolbar-button toolbar-button-italic flex items-center p-3 cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">
                </div>

                <!-- List -->
                <div title="List"
                     @click="prependText('\n\n* ')"
                     class="fa-solid fa-list toolbar-button toolbar-button-list flex items-center p-3 cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">
                </div>

                <!-- Divider -->
                <div class="toolbar-divider hidden md:block border-l border-gray-300/[.70] dark:border-gray-600 mx-3"></div>

                <!-- Blockquote -->
                <div title="Blockquote"
                     @click="prependText('\n\n> ')"
                     class="fa-solid fa-quote-left toolbar-button toolbar-button-blockquote flex items-center p-3 cursor-pointer transition duration-300 text-gray-400 hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">
                </div>

                <!-- Code -->
                <div title="Code"
                     @click="insertCodeBlock()"
                     class="fa-solid fa-code toolbar-button toolbar-button-code flex items-center p-3 cursor-pointer transition duration-300 text-emerald-600 hover:text-emerald-700 dark:hover:text-white">
                </div>

                <!-- Link -->
                <div title="Insert Link"
                     @click="insertLink()"
                     class="fa-solid fa-link toolbar-button toolbar-button-link flex items-center p-3 cursor-pointer transition duration-300 text-sky-600 hover:text-sky-700 dark:text-sky-500/[.80] dark:hover:text-white">
                </div>

                <!-- Image -->
                <div v-if="uploads"
                     title="Upload Image"
                     :class="step ? 'opacity-20 pointer-events-none' : ''"
                     @click="! step ? $emit('upload', (url) => uploaded(url)) : null"
                     class="fa-solid fa-image toolbar-button toolbar-button-upload-image flex items-center p-3 cursor-pointer transition duration-300 text-purple-700/[.60] hover:text-purple-800 dark:text-purple-400/[.80] dark:hover:text-white">
                </div>

            </div>

            <!-- Right Side -->
            <div class="toolbar-right flex justify-end">

                <!-- Divider -->
                <div v-if="editing"
                     class="toolbar-divider hidden md:block border-l border-gray-300/[.70] dark:border-gray-600 mx-3">
                </div>

                <!-- Edit -->
                <div title="Edit"
                     v-if="! editing"
                     @click="editing = true"
                     class="fa-solid fa-edit toolbar-button toolbar-button-edit flex items-center p-3 cursor-pointer transition duration-300 text-sky-600 hover:text-sky-800 dark:hover:text-white">
                </div>

                <!-- Preview -->
                <div v-if="editing"
                     title="Preview HTML"
                     @click="editing = false"
                     class="fa-solid fa-eye toolbar-button toolbar-button-preview flex items-center p-3 cursor-pointer transition duration-300 text-emerald-600 hover:text-emerald-800 dark:hover:text-white">
                </div>

                <!-- Fullscreen -->
                <div title="Fullscreen"
                     v-if="! fullscreen"
                     @click="fullScreenMode()"
                     class="fa-solid fa-up-right-and-down-left-from-center toolbar-button toolbar-button-fullscreen flex items-center p-3 cursor-pointer transition duration-300 text-gray-400 hover:text-gray-800 dark:hover:text-white">
                </div>

                <!-- Compact -->
                <div v-if="fullscreen"
                     @click="compactMode()"
                     title="Exit Fullscreen"
                     class="fa-solid fa-down-left-and-up-right-to-center toolbar-button toolbar-button-fullscreen flex items-center p-3 cursor-pointer transition duration-300 text-gray-400 hover:text-gray-800 dark:hover:text-white">
                </div>

            </div>

        </div>

        <!-- Content -->
        <div :style="`min-height: ${height}px`"
             class="content flex flex-1 relative bg-white dark:bg-gray-800"
             :class="[fullscreen ? '' : 'rounded-b', readingMode ? '' : 'border border-gray-300 border-t-0 dark:border-none']">

            <!-- Progress Bar -->
            <div ref="progress"
                 v-show="step !== 0"
                 class="progress bg-gray-200 h-1 w-full absolute -top-[1px] left-0 right-0 z-1 overflow-hidden">

                <!-- Position -->
                <div ref="position"
                     :style="`width: ${step}%`"
                     class="position bg-teal-600 h-1 absolute top-0 left-0 transition-all duration-200">
                </div>

            </div>

            <!-- Editor -->
            <textarea ref="editor"
                      v-show="editing"
                      autocomplete="off"
                      :value="modelValue"
                      v-if="! readingMode"
                      @click="hideOverlays()"
                      :placeholder="placeholder"
                      @input="change($event.target.value)"
                      @keydown="interceptKeystroke($event)"
                      :class="fullscreen ? '' : 'rounded-b'"
                      class="editor appearance-none outline-none focus:outline-none active:outline-none bg-inherit w-full text-gray-900 dark:text-gray-400 resize-none font-mono p-6">
            </textarea>

            <!-- Preview -->
            <div ref="preview"
                 v-show="! editing || readingMode"
                 :class="readingMode ? '' : 'p-6'"
                 class="preview overflow-scroll rounded-b">

                <!-- Slot -->

            </div>

        </div>

        <!-- Error -->
        <v-error :message="message"></v-error>

    </div>
</template>

<!-- Script -->
<script>
import markdownit from 'markdown-it';
import UndoManager from 'undo-manager';
import ErrorComponent from './error.vue';
import hljs from 'highlight.js/lib/common';
import Utilities from '../mixins/Utilities';
import Foundation from '../mixins/Foundation';

export default
{
    /**
     * Define the mixins.
     *
     */
    mixins : [
        Utilities,
        Foundation,
    ],

    /**
     * Define the components.
     *
     */
    components : {
        'v-error' : ErrorComponent,
    },

    /**
     * Define the data model.
     *
     */
    data() { return {
        editing    : true,
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
    emits : [
        'upload',
    ],

    /**
     * Define the public properties.
     *
     */
    props : {
        'displayText'  : { type : String,  default : "Specify the display text e.g 'home'." },
        'height'       : { type : Number,  default : 300 },
        'html'         : { type : Boolean, default : false },
        'languageText' : { type : String,  default : "Specify the language e.g. 'js', 'php', 'json' etc." },
        'lineNumbers'  : { type : Boolean, default : true },
        'linkText'     : { type : String,  default : "Specify the url e.g. 'https://google.com'." },
        'maxUndo'      : { type : Number,  default : 20 },
        'placeholder'  : { type : String,  default : 'Write something amazing...' },
        'progress'     : { type : Number,  default : 0 },
        'readingMode'  : { type : Boolean, default : false },
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
            this.message = '';

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

            setTimeout(() => this.resizeEditorToContent(), 10);
        },

        /**
         * Assign lines and numbers to the given highlighted code.
         *
         */
        convertToLines(code)
        {
            let formatted = code.trim().split('\n').map((line, index) =>
                `
                    <tr>
                        <td class="line-number${this.lineNumbers ? '' : '-hidden'}">${index + 1}</td>
                        <td class="code-line">${line}</td>
                    </tr>
                `
            );

	        return `
                <div class="hljs">
                    <table class="code-block">
                        <tbody>
                            ${formatted.join('')}
                        </tbody>
                    </table>
                </div>
            `;
        },

        /**
         * Switch to a full screen view.
         *
         */
        fullScreenMode()
        {
            this.fullscreen = true;

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

            return this.convertToLines(this.renderCodeBlock(source, language));
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
        insertCodeBlock()
        {
            let language = prompt(this.languageText, '')

            this.wrapText(['\n\n```' + `${language}\n`, '\n```\n\n']);
        },

        /**
         * Insert a hyperlink into the editor.
         *
         */
        insertLink()
        {
            this.saveSelectionRange(this.$refs.editor);

            let selected = this.modelValue.substring(this.selection.start, this.selection.end);

            let link = prompt(this.linkText, '');
            let text = this.filled(selected) ? null : prompt(this.displayText, '');

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
            if (this.fullscreen) return;

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
         * Update the current height and content of the component.
         *
         */
        update(content)
        {
            this.resizeEditorToContent();

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
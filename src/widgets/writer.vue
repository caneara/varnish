<!-- Template -->
<template>
    <div class="lumeno ui writer flex flex-col"
         :class="[mode, fullscreen ? 'fullscreen fixed inset-0 z-1000' : '']">

        <!-- Toolbar -->
        <div :class="[editing ? 'justify-between' : 'justify-end', fullscreen ? 'border-t-0' : 'rounded-t']"
             class="toolbar bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none flex flex-wrap px-2">

            <!-- Left Side -->
            <div class="toolbar-left flex flex-wrap justify-start"
                 :class="editing ? '' : 'hidden md:flex invisible pointer-events-none'">

                <!-- Undo -->
                <div title="Undo"
                     class="toolbar-button toolbar-button-undo flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 512 512"
                         @click="history.hasUndo() ? history.undo() : null"
                         class="h-[16px] fill-current cursor-pointer transition duration-300"
                         :class="history.hasUndo() ? 'text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white' : 'text-gray-300 dark:text-gray-500'">

                        <!-- Graphic -->
                        <path d="m480 256c0 123.4-100.5 223.9-223.9 223.9-48.84 0-95.17-15.58-134.2-44.86-14.12-10.59-16.97-30.66-6.375-44.81 10.59-14.12 30.62-16.94 44.81-6.375 27.84 20.91 61 31.94 95.88 31.94 88.085.005 159.785-71.695 159.785-159.795s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1h-145.75c-10.59.02-19.17-8.58-19.17-19.18v-145.86c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63c40.23-34.89 91.83-55.49 146.43-55.49 123.4 0 223.9 100.49 223.9 223.89z"/>

                    </svg>

                </div>

                <!-- Redo -->
                <div title="Redo"
                     class="toolbar-button toolbar-button-redo flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 512 512"
                         @click="history.hasRedo() ? history.redo() : null"
                         class="h-[16px] fill-current cursor-pointer transition duration-300"
                         :class="history.hasRedo() ? 'text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white' : 'text-gray-300 dark:text-gray-500'">

                        <!-- Graphic -->
                        <path d="m468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2 0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64-88.09 0-159.8 71.69-159.8 159.8s71.67 159.76 159.77 159.76c73.14 0 89.44-38.31 115.1-38.31 18.48 0 31.97 15.04 31.97 31.96 0 35.04-81.59 70.41-147 70.41-123.4 0-223.9-100.5-223.9-223.9s100.53-223.62 223.93-223.62c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63c5.5-5.5 12.3-7.96 18.9-7.96z"/>

                    </svg>

                </div>

                <!-- Divider -->
                <div class="toolbar-divider hidden md:block border-l border-gray-300/70 dark:border-gray-600 mx-3"></div>

                <!-- Headings -->
                <div title="Headings"
                     class="toolbar-button toolbar-button-headings flex items-center p-3 relative">

                    <!-- Icon -->
                    <svg viewBox="0 0 448 512"
                         @click="headings = ! headings"
                         class="h-[16px] min-w-[16px] fill-current cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m448 448c0 17.69-14.33 32-32 32h-96c-17.67 0-32-14.31-32-32s14.33-32 32-32h16v-144h-224v144h16c17.67 0 32 14.31 32 32s-14.33 32-32 32h-96c-17.67 0-32-14.31-32-32s14.33-32 32-32h16v-320h-16c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v112h224v-112h-16c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v320h16c17.7 0 32 14.3 32 32z"/>

                    </svg>

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
                     class="toolbar-button toolbar-button-bold flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 384 512"
                         @click="wrapText('**')"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m321.1 242.4c19-22.3 30.9-50.8 30.9-82.4 0-70.59-57.42-128-128-128l-192 .01c-17.67 0-32 14.31-32 32s14.33 32 32 32h16v320h-16c-17.67 0-32 14.31-32 32s14.33 32 32 32h224c70.58 0 128-57.41 128-128 0-46.71-25.4-87.21-62.9-109.61zm-209.1-146.39h112c35.3 0 64 28.72 64 64s-28.7 64-64 64h-112zm144 319.99h-144v-128h144c35.3 0 64 28.71 64 63.1s-28.7 64.9-64 64.9z"/>

                    </svg>

                </div>

                <!-- Italic -->
                <div title="Italic"
                     class="toolbar-button toolbar-button-italic flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 384 512"
                         @click="wrapText('*')"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m384 64.01c0 17.69-14.31 32-32 32h-58.67l-133.3 320h63.97c17.69 0 32 14.31 32 32s-14.31 32-32 32h-192c-17.69 0-32-14.31-32-32s14.31-32 32-32h58.67l133.3-320h-63.97c-17.69 0-32-14.31-32-32s14.31-32 32-32h192c17.7 0 32 14.32 32 32z"/>

                    </svg>

                </div>

                <!-- List -->
                <div title="List"
                     class="toolbar-button toolbar-button-list flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 512 512"
                         @click="prependText('\n\n* ')"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-black hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m88 48c13.3 0 24 10.75 24 24v48c0 13.3-10.7 24-24 24h-48c-13.25 0-24-10.7-24-24v-48c0-13.25 10.75-24 24-24zm392 16c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32h-288c-17.7 0-32-14.3-32-32 0-17.67 14.3-32 32-32zm0 160c17.7 0 32 14.3 32 32s-14.3 32-32 32h-288c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160c17.7 0 32 14.3 32 32s-14.3 32-32 32h-288c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-464-152c0-13.3 10.75-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.25 0-24-10.7-24-24zm72 136c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.25 0-24-10.7-24-24v-48c0-13.3 10.75-24 24-24z"/>

                    </svg>

                </div>

                <!-- Divider -->
                <div class="toolbar-divider hidden md:block border-l border-gray-300/70 dark:border-gray-600 mx-3"></div>

                <!-- Blockquote -->
                <div title="Blockquote"
                     class="toolbar-button toolbar-button-blockquote flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 448 512"
                         @click="prependText('\n\n> ')"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-gray-400 hover:text-sky-700 dark:text-gray-400 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m96 224c-11.28 0-21.95 2.3-32 5.9v-5.9c0-35.3 28.7-64 64-64 17.67 0 32-14.33 32-32s-14.3-32-32-32c-70.58 0-128 57.4-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96-43-96-96-96zm256 0c-11.28 0-21.95 2.305-32 5.879v-5.879c0-35.3 28.7-64 64-64 17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96-43-96-96-96z"/>

                    </svg>

                </div>

                <!-- Code -->
                <div title="Code"
                     class="toolbar-button toolbar-button-code flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 640 512"
                         @click="insertCodeBlock()"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-emerald-600 hover:text-emerald-700 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m414.8 40.79-128 448.01c-4.9 17-22.6 26.8-39.6 22-17-4.9-26.8-22.6-22-39.6l128-447.99c4.9-16.994 22.6-26.834 39.6-21.978 17 4.855 26.8 22.568 22 39.558zm103.8 80.61 112 112c12.5 12.5 12.5 32.7 0 45.2l-112 112c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l89.3-89.4-89.3-89.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0zm-352 45.2-89.35 89.4 89.35 89.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-112.028-112c-12.496-12.5-12.496-32.7 0-45.2l112.028-112c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2z"/>

                    </svg>

                </div>

                <!-- Link -->
                <div title="Insert Link"
                     class="toolbar-button toolbar-button-link flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 640 512"
                         @click="insertLink()"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-sky-600 hover:text-sky-700 dark:text-sky-500/80 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m172.5 131.1c55.6-55.59 148-55.59 203.6 0 50 50 57.4 129.7 16.3 187.2l-1.1 1.6c-10.3 14.3-30.3 17.7-44.6 7.4-14.4-10.3-17.8-30.3-7.5-44.6l1.1-1.6c22.9-32.1 19.3-76-8.6-103.9-31.4-31.4-82.5-31.4-114 0l-112.2 112.3c-31.51 30.6-31.51 82.5 0 114 27.8 27.9 71.8 31.5 103.8 8.6l1.6-2c14.4-9.4 34.4-6.1 44.6 8.3 10.3 14.4 7 34.4-7.4 44.7l-1.6 1.1c-58.4 41.1-136.3 34.5-186.29-15.4-56.469-56.5-56.469-148.1 0-204.5zm295 248.9c-56.5 56.5-148 56.5-204.5 0-50-50-56.5-128.8-15.4-186.3l1.1-1.6c9.4-14.3 29.4-17.7 44.6-7.4 14.4 9.4 17.8 29.4 7.5 44.6l-1.1 1.6c-22.9 31.2-19.3 76 8.6 103.9 31.4 31.4 82.5 31.4 114 0l112.2-112.3c31.5-31.5 31.5-83.4 0-114-27.8-27.87-71.8-31.51-103.8-8.6l-1.6 1.1c-14.4 10.3-34.4 6.1-44.6-7.42-10.3-14.38-7-34.37 7.4-44.64l1.6-1.12c57.5-41.089 136.3-34.57 186.3 15.42 56.5 56.46 56.5 148.06 0 204.46z"/>

                    </svg>

                </div>

                <!-- Image -->
                <div v-if="uploads"
                     title="Upload Image"
                     :class="step ? 'opacity-20 pointer-events-none' : ''"
                     @click="! step ? $emit('upload', (url) => uploaded(url)) : null"
                     class="toolbar-button toolbar-button-upload-image flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 512 512"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-purple-700/60 hover:text-purple-800 dark:text-purple-400/80 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m447.1 32h-384c-34.46 0-63.1091 28.65-63.1091 64v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64v-320c.0091-35.35-27.7909-64-63.9909-64zm-336 64c26.51 0 48 21.49 48 48s-20.6 48-48 48-48-21.49-48-48 22.38-48 48-48zm335 311.6c-2.8 5.2-8.2 8.4-14.1 8.4h-349.99c-6.021 0-11.53-3.379-14.26-8.75-2.73-5.367-2.215-11.81 1.334-16.68l70-96c3.016-4.17 7.816-6.57 12.916-6.57s9.916 2.441 12.93 6.574l32.46 44.51 93.3-139.1c3.01-5.284 8.01-7.984 13.31-7.984s10.35 2.672 13.31 7.125l128 192c3.29 4.875 3.59 11.175.79 16.475z"/>

                    </svg>

                </div>

            </div>

            <!-- Right Side -->
            <div class="toolbar-right flex justify-end">

                <!-- Divider -->
                <div v-if="editing"
                     class="toolbar-divider hidden md:block border-l border-gray-300/70 dark:border-gray-600 mx-3">
                </div>

                <!-- Edit -->
                <div title="Edit"
                     v-if="! editing"
                     class="toolbar-button toolbar-button-edit flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 512 512"
                         @click="editing = true"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-sky-600 hover:text-sky-800 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m490.3 40.4c21.9 21.87 21.9 57.33 0 79.2l-30 30.1-98-97.98 30.1-30.06c21.9-21.8735 57.3-21.8735 79.2 0zm-317.9 201.3 167.3-167.36 98 97.96-167.4 167.3c-6.1 6.2-13.6 10.8-21.9 13.6l-88.8 29.6c-9.5 2.8-18.1.6-24.6-6.7-6.4-5.6-8.6-15.1-5.8-23.7l29.6-88.8c2.8-8.3 7.4-15.8 13.6-21.9zm19.6-178.6c17.7 0 32 15.23 32 32 0 18.6-14.3 32-32 32h-96c-17.67 0-32 15.2-32 32v256.9c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32v-96.9c0-16.8 14.3-32 32-32s32 15.2 32 32v96.9c0 53-43 96-96 96h-256c-53.02 0-96-43-96-96v-256.9c0-53 42.98-96 96-96z"/>

                    </svg>

                </div>

                <!-- Preview -->
                <div v-if="editing"
                     title="Preview HTML"
                     class="toolbar-button toolbar-button-preview flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 576 512"
                         @click="editing = false"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-emerald-600 hover:text-emerald-800 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m279.6 160.4c2.8-.3 5.6-.4 8.4-.4 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96 0-2.8.1-5.6.4-8.4 9.3 4.5 20.1 8.4 31.6 8.4 35.3 0 64-28.7 64-64 0-11.5-3.9-22.3-8.4-31.6zm201-47.8c46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-14.8 35.7-46.1 86.8-92.9 131.1-47.1 43.8-111.8 80.6-192.6 80.6s-145.5-36.8-192.58-80.6c-46.8-44.3-78.08-95.4-92.959-131.1-3.2815-7.9-3.2815-16.7 0-24.6 14.879-36.6 46.159-87.7 92.959-131.1 47.08-43.76 111.78-80.6 192.58-80.6s145.5 36.84 192.6 80.6zm-192.6-.6c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z"/>

                    </svg>

                </div>

                <!-- Mode -->
                <div class="toolbar-button toolbar-button-mode flex items-center p-3"
                     :title="mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'">

                    <!-- Light -->
                    <svg viewBox="0 0 512 512"
                         @click="mode = 'light'"
                         v-show="mode === 'dark'"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-yellow-600 hover:text-yellow-400 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m256 159.1c-53.02 0-95.1 42.98-95.1 95.1s41.2 96.9 95.1 96.9 95.1-42.98 95.1-95.1-42.1-96.9-95.1-96.9zm253.3 187.9-63.2-91.9 63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824l-91.004 64.044-91.9-63.154c-9.125-6.332-21.74-1.107-23.72 9.824l-18.78 109.04-109.04 19.7c-10.927 1.9-16.156 14.6-9.824 22.8l63.154 91.9-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7 19.7 109c1.975 10.93 14.59 16.16 23.72 9.824l91.016-63.154 91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109 109-19.7c10.97-1.928 16.17-14.628 9.87-23.728zm-253.3 36.1c-70.69 0-127.1-57.31-127.1-127.1 0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1c0 70.7-56.4 127.1-127.1 127.1z"/>

                    </svg>

                    <!-- Dark -->
                    <svg viewBox="0 0 512 512"
                         @click="mode = 'dark'"
                         v-show="mode === 'light'"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-yellow-600 hover:text-yellow-800 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m32 256c0-123.8 100.3-224 223.8-224 11.36 0 29.7 1.668 40.9 3.746 9.616 1.777 11.75 14.63 3.279 19.44-54.979 31.314-88.779 89.414-88.779 152.614 0 109.7 99.71 193 208.3 172.3 9.561-1.805 16.28 9.324 10.11 16.95-41.71 51.55-104.81 82.95-173.81 82.95-123.7 0-223.8-100.4-223.8-224z"/>

                    </svg>

                </div>

                <!-- Fullscreen -->
                <div title="Fullscreen"
                     v-if="! fullscreen"
                     class="toolbar-button toolbar-button-fullscreen flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 512 512"
                         @click="fullScreenMode()"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-gray-400 hover:text-gray-800 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m208 281.4c-12.5-12.5-32.76-12.5-45.26-.002l-78.06 78.07-30.06-30.06c-6.125-6.125-14.31-9.367-22.63-9.367-4.125 0-8.279.7891-12.25 2.43-11.97 4.953-19.75 16.62-19.75 29.56v135.1c.0113 14.169 10.76 24.869 24.01 24.869h136c12.94 0 24.63-7.797 29.56-19.75 4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06 78.06-78.07c12.5-12.49 12.5-32.75.002-45.25zm279.1-281.4h-136c-12.94 0-24.63 7.797-29.56 19.75-4.969 11.97-2.219 25.72 6.938 34.87l30.06 30.06-78.06 78.07c-12.5 12.5-12.5 32.76 0 45.26l22.62 22.62c12.5 12.5 32.76 12.5 45.26 0l78.06-78.07 30.06 30.06c9.156 9.141 22.87 11.84 34.87 6.937 12.852-4.957 20.652-16.657 20.652-30.457v-136c0-12.36-10.7-23.1-24.9-23.1z"/>

                    </svg>

                </div>

                <!-- Compact -->
                <div v-if="fullscreen"
                     title="Exit Fullscreen"
                     class="toolbar-button toolbar-button-compact flex items-center p-3">

                    <!-- Icon -->
                    <svg viewBox="0 0 512 512"
                         @click="compactMode()"
                         class="h-[16px] fill-current cursor-pointer transition duration-300 text-gray-400 hover:text-gray-800 dark:hover:text-white">

                        <!-- Graphic -->
                        <path d="m215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75-4.07 11.95-1.32 25.75 7.83 34.85l30.06 30.06-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26.0013l78.06-78.07 30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367 4.125 0 8.279-.7891 12.25-2.43 11.97-4.953 19.75-16.62 19.75-29.56v-135.9683c-.8988-13.3-10.6988-24-24.8988-24zm80.9-32h136c12.94 0 24.63-7.797 29.56-19.75 4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06 78.06-78.07c12.5-12.5 12.5-32.76.0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937-11.97 4.953-19.75 16.62-19.75 29.56v135.1c-.0022 14.1973 10.6978 24.8973 23.9978 24.8973z"/>

                    </svg>

                </div>

            </div>

        </div>

        <!-- Content -->
        <div :style="`min-height: ${height}px`"
             :class="fullscreen ? '' : 'rounded-b'"
             class="content flex flex-1 relative bg-white border border-gray-300 border-t-0 dark:border-none dark:bg-gray-800">

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
                      @click="hideOverlays()"
                      :placeholder="placeholder"
                      @input="change($event.target.value)"
                      @keydown="interceptKeystroke($event)"
                      :class="fullscreen ? '' : 'rounded-b'"
                      class="editor appearance-none outline-none focus:outline-none active:outline-none bg-inherit w-full text-gray-900 dark:text-gray-400 resize-none font-mono p-6">
            </textarea>

            <!-- Preview -->
            <div ref="preview"
                 v-show="! editing"
                 class="preview p-6 overflow-scroll rounded-b">

                <!-- Slot -->

            </div>

        </div>

    </div>
</template>

<!-- Script -->
<script>
import markdownit from 'markdown-it';
import UndoManager from 'undo-manager';
import hljs from 'highlight.js/lib/common';

export default
{
    /**
     * Define the data model.
     *
     */
    data() { return {
        editing    : true,
        fullscreen : false,
        headings   : false,
        history    : new UndoManager(),
        mode       : this.darkMode ? 'dark' : 'light',
        renderer   : null,
        selection  : { start : 0, end : 0 },
        step       : this.progress,
    }},

    /**
     * Define the events.
     *
     */
    emits : [
        'update:modelValue',
        'upload',
    ],

    /**
     * Define the public properties.
     *
     */
    props : {
        'darkMode'     : { type : Boolean, default : false },
        'displayText'  : { type : String,  default : "Specify the display text e.g 'home'." },
        'height'       : { type : Number,  default : 300 },
        'html'         : { type : Boolean, default : false },
        'languageText' : { type : String,  default : "Specify the language e.g. 'js', 'php', 'json' etc." },
        'lineNumbers'  : { type : Boolean, default : true },
        'linkText'     : { type : String,  default : "Specify the url e.g. 'https://google.com'." },
        'maxUndo'      : { type : Number,  default : 20 },
        'modelValue'   : { type : String,  default : '' },
        'placeholder'  : { type : String,  default : 'Write something amazing...' },
        'progress'     : { type : Number,  default : 0 },
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

            this.$refs.preview.innerHTML = this.renderer.render(this.modelValue);
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
            if ([undefined, null, ''].includes(language)) return source;

            if ([undefined, null, ''].includes(hljs.getLanguage(language))) return source;

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
            let text = selected !== '' ? null : prompt(this.displayText, '');

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
         * Adjust the textarea to fit its content.
         *
         */
        resizeEditorToContent()
        {
            if (this.fullscreen) return;

            this.$refs.editor.style.height = `${this.$refs.editor.scrollHeight}px`;
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

            if ([undefined, null, ''].includes(url)) return;

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
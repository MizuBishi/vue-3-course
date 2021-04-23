# Conditional Rendering 
- `v-if`, `v-else`, `v-else-if`: markup is not rendered in the dom
- `v-show`: is rendered in the dom but is hidden (`display: none;`), alternative to `v-if` if you have content which its visibility is changing a lot (toggle button etc.)
- key: Vue re-uses DOM elements -> this can lead to bugs if elements contain state


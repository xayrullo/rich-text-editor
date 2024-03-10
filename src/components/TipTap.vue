<template>
    <vue-editor v-model="editorValue" :style="`height: ${height};`"/>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";

export default {
    components: {
        VueEditor
    },

    props: {
        value: {
            type: String,
            default: '',
        },
        height: {
            type: String,
            default: "250px"
        }
    },

    data() {
        return {
            editor: null,
            editorValue: ""
        }
    },

    watch: {
        value(value) {
            this.editorValue = this.value
        },
        editorValue() {
            this.$emit("input", this.editorValue)
        }
    },

    mounted() {},

    beforeDestroy() {},
}
</script>
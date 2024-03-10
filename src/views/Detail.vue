<template>
    <div>
        <div class="flex justify-between">
            <div class="text-4xl text-gray-900">{{ content.id ? "Update content" : "Add new content" }}</div>
            <el-button type="primary" icon="el-icon-back" @click="$router.go(-1)">Back</el-button>
        </div>
        <el-card class="mt-4 min-h-[600px]">
            <el-form :model="content" :rules="rules" ref="ruleForm">
                <div class="grid grid-cols-2 gap-x-4">
                    <el-form-item label="Title" prop="title">
                        <el-input v-model="content.title" />
                    </el-form-item>
                    <el-form-item label="Slug" prop="slug">
                        <el-input v-model="content.slug" />
                    </el-form-item>
                </div>
                <div class="grid grid-cols-1">
                    <el-form-item label="Meta keywords" prop="meta" label-position="top">
                        <el-select v-model="content.meta" multiple filterable allow-create default-first-option
                            class="w-full">
                            <el-option v-for="item in content.meta" :key="item" :label="item" :value="item" />
                        </el-select>
                    </el-form-item>
                </div>
                <div class="grid grid-cols-1">
                    <el-form-item label="Content" prop="content" label-position="top">
                        <tip-tap v-model="content.content" class="mt-10" />
                    </el-form-item>
                </div>

            </el-form>
        </el-card>
        <div class="flex justify-end mt-8">
            <el-button type="primary" @click="$router.go(-1)">Cancel</el-button>
            <el-button type="success" @click="onSubmit('ruleForm')">{{ content.id ? "Update" : "Save" }}</el-button>
        </div>
    </div>
</template>

<script>
import TipTap from "@/components/TipTap.vue"
export default {
    components: {
        TipTap
    },
    data() {
        return {
            content: {
                title: "",
                slug: "",
                meta: [],
                content: "<h1>Some initial content</h1>"
            },
            rules: {
                title: [
                    { required: true, message: 'Required input', trigger: 'blur' }
                ],
                slug: [
                    { required: true, message: 'Required input', trigger: 'blur' }
                ],
                meta: [
                    { required: true, message: 'Required input', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: 'Required input', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
        console.log(this.$route.params)
        if (this.$route.params.id) {
            this.$store.dispatch("getContentDetail", this.$route.params.id).then(res => {
                this.content = res;
            })
        }
    },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log("Content", this.content)
                    if (this.content.id) {
                        this.$store.dispatch("updateContent", this.content).then(res => {
                            this.$router.push("/")
                        })
                    } else {
                        this.$store.dispatch("addContent", this.content).then(res => {
                            this.$router.push("/")
                        })
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>
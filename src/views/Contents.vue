<template>
  <div>
    <div class="flex justify-between">
      <div class="text-4xl text-gray-900">Contents</div>
      <el-button type="primary" icon="el-icon-plus" @click="onChange">New</el-button>
    </div>
    <el-card class="mt-4">
      <el-table :data="$store.getters.getContents" border style="width: 100%">
        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="slug" label="Slug" width="180" />
        <el-table-column prop="meta" label="Mete Keywords" />
        <el-table-column fixed="right" label="Operations" width="100">
          <template slot-scope="{row}">
            <el-row>
              <el-button @click="onChange(row)" type="primary" size="small" icon="el-icon-edit" circle />
              <el-button @click="onDelete(row)" size="small" type="danger" icon="el-icon-delete" circle />
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import DeleteModal from '@/components/modals/Delete.vue';
export default {
  data() {
    return {}
  },
  async mounted() {
    await this.$store.dispatch("fetchContents")
  },

  computed: {
  },
  methods: {
    onChange(content) {
      if (content && content.id)
        this.$router.push({
          path: `${content.id}`
        })
      else
        this.$router.push("/new")
    },
    onDelete(content) {
      this.$modal.show(
        DeleteModal,
        {},
        {
          height: 'auto',
          maxWidth: 400,
          width: window.innerWidth <= 400 ? window.innerWidth - 30 : 400,
          scrollable: false
        }
      )
      this.$root.$once('closed-delete-modal', res => {
        if (res.success) {
          this.$store.dispatch("removeContent", content.id)
        }
      })
    }
  }
};
</script>
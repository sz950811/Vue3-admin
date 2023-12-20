<template>
  <div class="admin-box">
    <div class="head-box page-title-lv1">权限管理</div>
    <div class="table-box">
      <el-table :data="userList" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="name" label="Name" width="200"></el-table-column>
        <el-table-column prop="tip" label="Tip" width="200"></el-table-column>
        <el-table-column prop="email" label="Email" width="200"></el-table-column>
        <el-table-column prop="createDate" label="Create Date" width="200"></el-table-column>
        <el-table-column prop="accessCode" label="AccessCode" min-width="300">
          <template #default="scope">
            <ul>
              <li v-for="item in scope.row.accessCode">{{ item }}</li>
            </ul>
          </template>
        </el-table-column>
        <el-table-column label="Action" width="240" fixed="right">
          <template #default>
            <el-button text type="primary" size="small">修改权限</el-button>
            <el-button text type="primary" size="small">新增权限</el-button>
            <el-button text type="danger" size="small" :disabled="delButtonCode">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="form-box">
      <el-form :label-position="'right'" label-width="100px">
        <el-form-item label="APP名称:">
          <el-input v-model="form.appname" disabled></el-input>
        </el-form-item>
        <el-form-item label="一级菜单权限:">
          <el-input v-model="form.lv1menu"></el-input>
        </el-form-item>
        <el-form-item label="二级菜单权限:">
          <el-input v-model="form.lv2menu" :disabled="form.lv1menu == '*'"></el-input>
        </el-form-item>
        <el-form-item label="权限标识:">
          <el-input v-model="form.code" :disabled="form.lv1menu == '*'"></el-input>
        </el-form-item>
        <el-form-item label="员工:">
          <el-select
            v-model="form.userId"
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="Select"
            style="width: 240px"
          >
            <el-option v-for="item in userList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserList } from '@/api/admin'
import { Form } from '@/types/admin'
const { VITE_APP_NAME } = import.meta.env
import { ref, onMounted, computed } from 'vue'
import { UserInfoStore } from '@/store'
const store = UserInfoStore()
const form = ref<Form>({
  userId: 1,
  appname: VITE_APP_NAME,
  lv1menu: '',
  lv2menu: null,
  code: '',
})
onMounted(() => {
  getuserlist()
})
const delButtonCode = computed(() => store.userInfo?.accessCode.some((item) => item != `${VITE_APP_NAME}.*`))
const userList = ref()
const getuserlist = async () => {
  const { data, status } = await getUserList()
  if (status == 200) {
    data[0].accessCode
    userList.value = data
  }
}
const onSubmit = () => {}
</script>

<style lang="scss">
.admin-box {
  padding: 16px;
  .form-box {
    display: flex;
    justify-content: center;
    // width: 50%;
    .el-form {
      width: 30%;
    }
  }
}
</style>

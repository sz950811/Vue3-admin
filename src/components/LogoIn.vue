<template>
  <div class="login-box">
    <ElForm label-width="100px" :model="loginForm" :rules="rules" ref="ruleFormRef">
      <ElFormItem label="用户名:" prop="name">
        <ElInput v-model="loginForm.name"></ElInput>
      </ElFormItem>
      <ElFormItem label="密码:" prop="pwd">
        <ElInput v-model="loginForm.pwd" type="password" placeholder="Please input password" show-password></ElInput>
      </ElFormItem>
      <el-form-item class="btn-box">
        <ElButton type="primary" @click="onSubmit">{{ $t('cp:登陆') }}</ElButton>
        <!-- <ElButton link @click="onRegister">注册账号</ElButton> -->
        <ElButton @click="test">权限账号</ElButton>
      </el-form-item>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import { ref, reactive } from 'vue'
import type { LogoInForm } from '../types/logoin.d.ts'
import { useRouter, useRoute } from 'vue-router'
import { UserInfoStore } from '../store/index'
import type { FormInstance, FormRules } from 'element-plus'
const loginForm = ref<LogoInForm>({
  name: 'admin',
  pwd: 'admin',
})
const ruleFormRef = ref<any>()
const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'change' },
  ],
  pwd: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
})
const route = useRoute()
const store = UserInfoStore()
const onSubmit = async () => {
  const res = await ruleFormRef.value.validate()
  if (res) {
    store.onlogIn(loginForm.value, route.query.path)
  }
}
const test = () => {
  loginForm.value = {
    name: 'test',
    pwd: '123456',
  }
}
</script>

<style lang="scss">
.login-box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  // align-items: center;
  .el-form {
    margin-top: 100px;
    width: 20%;
    .btn-box {
      .el-form-item__content {
        width: 100%;
        justify-content: flex-end;
      }
    }
  }
}
</style>

<template>
  <div class="login-box">
    <ElForm label-width="100px">
      <ElFormItem label="用户名:">
        <ElInput v-model:model-value="loginForm.name"></ElInput>
      </ElFormItem>
      <ElFormItem label="密码:"> <ElInput v-model="loginForm.pwd"></ElInput> </ElFormItem>
      <el-form-item class="btn-box">
        <ElButton type="primary" @click="onSubmit">{{ $t('cp:登陆') }}</ElButton>
        <ElButton link @click="onRegister">注册账号</ElButton>
      </el-form-item>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import { ref } from 'vue'
import type { LogoInForm } from '../types/logoin.d.ts'
import { useRouter, useRoute } from 'vue-router'
import { UserInfoStore } from '../store/index'
const loginForm = ref<LogoInForm>({
  name: '',
  pwd: '',
})
const router = useRouter()
const route = useRoute()
const store = UserInfoStore()
const onSubmit = () => {
  store.onlogIn(loginForm.value, route.query.path)
  // const { data, status } = await logoIn(loginForm.value)
  // if (status == 0) {
  //   sessionStorage.setItem('DEMO_TOKEN', JSON.stringify(data.token))
  // const path = route.query.path as string
  // if (path) {
  //   router.push(route.query.path)
  // } else {
  //   router.push('/')
  // }
  //   // console.log(path)
  // }
}
const onRegister = () => {
  router.push('/404')
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

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import Rules from '../../../src/index'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<Record<string, any>>({
  nickname: '',
  multiple: [],
  mobile: '',
})

const rules = reactive<FormRules>({
  nickname: [
    ...Rules.str({
      required: true,
      max: 1,
      name: '昵称',
    }),
  ],
  multiple: [
    ...Rules.select({
      required: true,
      multiple: true,
      len: 1,
      name: '多选',
    }),
  ],
  mobile: [
    ...Rules.mobile({
      required: true,
    }),
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid: any, fields: any) => {
    if (valid)
      console.log('submit!')
    else
      console.log('error submit!', fields)
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      status-icon
    >
      <el-form-item label="昵称" prop="nickname" placeholder="昵称">
        <el-input v-model="ruleForm.nickname" />
      </el-form-item>
      <el-form-item label="多选" prop="multiple">
        <el-select
          v-model="ruleForm.multiple"
          multiple
          placeholder="多选"
          style="width: 100%;"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
          <el-option label="Zone two" value="guangzhou" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input
          v-model="ruleForm.mobile"
          placeholder="手机号"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

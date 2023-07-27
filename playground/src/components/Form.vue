<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElInputNumber, type FormInstance, type FormRules } from 'element-plus'
import Rules from '../../../src/index'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<Record<string, any>>({
  nickname: '',
  multiple: [],
  mobile: '',
  username: '',
  password: '',
  code: '',
  tel: '',
  todayAfter: '',
  number: 0,
  int: 1,
  numberString: '',
  lat: '',
  email: '',
})

const rules = reactive<FormRules>({
  nickname: [
    ...Rules.str({
      required: true,
      max: 64,
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
  username: [
    ...Rules.str({
      required: true,
      name: '账号',
    }),
  ],
  password: [
    ...Rules.password({
      required: true,
    }),
  ],
  code: [
    ...Rules.numberStr({
      required: true,
      name: '编码',
      max: 3,
    }),
  ],
  tel: [
    ...Rules.tel(),
  ],
  todayAfter: [
    ...Rules.todayAfter({
      name: '时间',
      required: true,
    }),
  ],
  number: [
    ...Rules.decimal({
      required: true,
      name: '数字',
      precision: 1,
    }),
  ],
  int: [
    ...Rules.int({
      required: true,
      name: '整数',
    }),
  ],
  numberString: Rules.decimal({
    type: 'string',
    name: '数字String',
    precision: 2,
  }),
  lat: Rules.str({
    name: '纬度',
    pattern: /^[\-\+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/,
    message: '纬度输入格式有误，请重新输入',
  }),
  email: Rules.email({
    required: true,
    name: '邮箱',
  }),
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
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname" placeholder="昵称" />
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
      <el-form-item label="账号" prop="username">
        <el-input
          v-model="ruleForm.username"
          placeholder="账号"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item label="仅为数字的编码" prop="code">
        <el-input
          v-model="ruleForm.code"
          placeholder="仅为数字的编码"
        />
      </el-form-item>
      <el-form-item label="固定电话" prop="tel">
        <el-input
          v-model="ruleForm.tel"
          placeholder="固定电话"
        />
      </el-form-item>
      <el-form-item label="今日之后" prop="todayAfter">
        <el-date-picker
          v-model="ruleForm.todayAfter"
          type="date"
          placeholder="今日之后"
        />
      </el-form-item>
      <el-form-item label="数字" prop="number">
        <ElInputNumber
          v-model="ruleForm.number"
          type="number"
          placeholder="数字"
        />
      </el-form-item>
      <el-form-item label="整数" prop="int">
        <ElInputNumber
          v-model="ruleForm.int"
          type="number"
          placeholder="整数"
        />
      </el-form-item>
      <el-form-item label="数字String" prop="numberString">
        <ElInput
          v-model="ruleForm.numberString"
          placeholder="数字String"
        />
      </el-form-item>
      <el-form-item label="纬度" prop="lat">
        <ElInput
          v-model="ruleForm.lat"
          placeholder="lat"
        />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <ElInput
          v-model="ruleForm.email"
          placeholder="邮箱"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

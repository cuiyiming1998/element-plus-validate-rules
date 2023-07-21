# element-plus-validate-rules

[![NPM version](https://img.shields.io/npm/v/element-plus-validate-rules?color=a1b858&label=)](https://www.npmjs.com/package/element-plus-validate-rules)

基于 [Element-Plus-Form](https://element-plus.gitee.io/zh-CN/component/form.html) 的表单验证规则

## Installation

```bash
  pnpm install element-plus-validate-rules
```

## Usage

```html
<script lang="ts" setup>
import { ElForm, ElFormItem, ElInput } from 'element-plus'
import type { FormRules } from 'element-plus'
import Rules from 'element-plus-validate-rules'

const ruleForm = reactive<{ nickname: string }>({
  nickname: '',
})
const rules: FormRules = [
  {
    nickname: [
      ...Rules.str({
        required: true,
        max: 64,
        name: '昵称',
      }),
    ],
  }
]
</script>

<template>
  <ElForm
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    status-icon
  >
      <ElFormItem label="昵称" prop="nickname">
        <ElInput v-model="ruleForm.nickname" placeholder="昵称" />
      </ElFormItem>
  </ElForm>
</template>
```

## 内置Properties

### 公共配置项

| Name | Type | Desc |
| :--: | :--: | :--: |
| required | boolean | 是否必填 |
| name | string | 字段名称 |
| max | number | 最大长度 |
| min | number | 最小长度 |
| len | number | 长度 |
| message | string | 校验不通过时显示的信息, 会替代默认信息 |
| validator | Function | 自定义验证函数, 与 [Element-Plus-Form](https://element-plus.gitee.io/zh-CN/component/form.html) 相同 |

更多配置项请参考 [async-validator](https://github.com/yiminghe/async-validator)

### str

字符验证

| Name | Type | Desc | 是否必填 |
| :--: | :--: | :--: | :--: |
| required | boolean | 是否必填 | 是 |

### select

选择(下拉框)验证

| Name | Type | Desc | 是否必填 |
| :--: | :--: | :--: | :--: |
| multiple | boolean | 是否为多选 | 否 |

### numberStr

内容为纯数字的`string`类型验证

### mobile

> TODO: 可配置正则

手机号验证

### password

> TODO: 可配置正则

密码验证, 目前验证规则为 **至少八个字符, 至少一个字母, 一个数字和一个特殊字符**

### tel

> TODO: 可配置正则

固定电话验证

### time

> WIP

时间类型验证

### decimal

> TODO: 可配置精度

小数类型验证, 目前只支持小数点后2位

## License

[MIT](./LICENSE) License © 2022 [cymYoung](https://github.com/cuiyiming1998)

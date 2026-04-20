import { createApp } from 'vue'

import { defineRule } from 'vee-validate'

import {
  digits,
  email,
  integer,
  required,
} from '@vee-validate/rules'

import App from './App.vue'
import router from './router'

type RuleContext = {
  field: string
}

defineRule(
  'required',
  (value: unknown, _args: unknown[], ctx: RuleContext) =>
    required(value) || `${ctx.field} is required.`,
)

defineRule('email', (value: unknown) => email(value) || 'Please enter a valid email address.')

defineRule(
  'integer',
  (value: unknown, _args: unknown[], ctx: RuleContext) =>
    integer(value) || `${ctx.field} must contain only numbers.`,
)

defineRule(
  'digits',
  (value: unknown, args: [string | number] | { length: string | number }, ctx: RuleContext) =>
    digits(value, args) || `${ctx.field} must be the correct length.`,
)

const app = createApp(App)

app.use(router)

app.mount('#app')

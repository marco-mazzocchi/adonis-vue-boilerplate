<script>
import { ref } from 'vue'
import { NSpace, useMessage, NInput, NForm, NFormItem, NButton, NCard } from 'naive-ui'

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  name: 'Login',
  components: { NSpace, NInput, NForm, NFormItem, NButton, NCard },
  setup() {
    const message = useMessage()
    const formRef = ref(null)
    const formValue = ref({
      email: '',
      password: '',
    })

    return {
      formRef,
      size: ref('large'),
      formValue,
      message,
      rules: {
        email: {
          required: true,
          trigger: ['input', 'blur'],
          validator(rule, value) {
            if (!value) {
              return new Error('Email è obbligatoria')
            }
            if (!emailRegex.test(String(value).toLowerCase())) {
              return new Error('Email non valida')
            }
            return true
          },
        },
        password: {
          required: true,
          message: 'Password è obbligatoria',
          trigger: ['input', 'blur'],
        },
      },
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.formRef
        .validate()
        .then(() => {
          this.login()
        })
        .catch((error) => {
          if (!Array.isArray(error)) {
            // this.message.error(error.message)
            return
          }
          error.forEach((fieldErrors) => {
            fieldErrors.forEach((e) => this.message.error(`Error in ${e.field}: ${e.message}`))
          })
        })
    },
    login() {
      const { email, password } = this.formValue
      this.$http
        .post('/login', {
          email,
          password,
        })
        .then((response) => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.message.error(error.response.data)
        })
    },
  },
}
</script>
<template>
  <n-space vertical justify="center" class="wrapper">
    <n-space justify="center">
      <n-card title="Login" class="login-card">
        <n-form :model="formValue" :rules="rules" :size="size" ref="formRef">
          <n-form-item label="Email" path="email">
            <n-input
              v-model:value="formValue.email"
              placeholder="Inserisci il tuo indirizzo email"
              autofocus
              type="email"
            />
          </n-form-item>
          <n-form-item label="Password" path="password">
            <n-input
              placeholder="Inserisci la password"
              v-model:value="formValue.password"
              type="password"
            />
          </n-form-item>
          <n-form-item>
            <n-button @click="handleSubmit" attr-type="submit">Entra</n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-space>
  </n-space>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}
.login-card {
  width: 480px;
  box-shadow: 0 0 120px rgba(0, 0, 0, 0.2);
}
</style>
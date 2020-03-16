<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      label-width="150px"
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
    >
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-button
        type="primary"
        style="width:100%"
        native-type="submit"
        :loading="loading"
        @click="login"
      >登录</el-button>
      <div class="login-info">
        如果没有账号请
        <router-link :to="{name:'register'}">点击注册</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
import UserService from "../../services/UserService";
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        email: "",
        password: ""
      },
      loginRules: {
        email: {
          type: "email",
          required: true,
          message: "请输入有效的邮箱地址",
          trigger: "blur"
        },
        password: {
          type: "string",
          required: true,
          message: "密码不能为空",
          trigger: "blur"
        }
      }
    };
  },
  methods: {
    login() {
      // 验证数据合法性
      this.$refs["loginForm"].validate(async valid => {
        if (valid) {
          this.loading = true;
          try {
            const response = await UserService.login({
              email: this.loginForm.email,
              password: this.loginForm.password
            });
            if (response.data.code === 200) {
              this.$store.dispatch("setToken", response.data.token);
              this.$store.dispatch("setUser", response.data.user);
              this.$router.push("/");
            }
            this.loading = false;
          } catch (error) {
            console.log(error);
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #2d3a4b;
  .login-form {
    position: relative;
    width: 430px;
    margin: 120px auto 0;
    background: #fff;
    padding: 20px;
    .login-info {
      text-align: right;
      font-size: 0.9rem;
      margin-top: 10px;
      color: #909399;
    }
  }
}
</style>
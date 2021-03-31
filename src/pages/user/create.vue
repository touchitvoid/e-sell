<template>
  <view>
    <status-bar title="新增用户"></status-bar>
    <custom-line custom type="custom">
      <input
        v-model="form.username"
        placeholder="用户登录名"
        class="form-input"
        placeholder-class="placeholder_f"
        type="text"
      >
    </custom-line>
    <custom-line custom type="custom">
      <input
        v-model="form.password"
        placeholder="账号密码"
        class="form-input"
        placeholder-class="placeholder_f"
        type="text"
      />
    </custom-line>
    <view class="divider-16"></view>
    <custom-line @click.native="handleCreate" type="button" title="确认"></custom-line>
  </view>
</template>

<script>
import StatusBar from '@/components/custom-status-bar'
import CustomLine from '@/components/custom-line.vue'
import { CreateUser } from '@/api'

export default {
  name: "user-create",
  components: {
    StatusBar,
    CustomLine
  },
  data () {
    return {
      form: {
        status: 1,
        sub_cd_id: ''
      }
    }
  },
  onLoad(option) {
    if (option.subId) {
      this.form.sub_cd_id = option.subId
    }
  },
  methods: {
    async handleCreate() {
      const { username, password } = this.form
      if (!username) return this.$toast('请填写用户登录名')
      if (!password) return this.$toast('请填写密码')
      try {
        const { code } = await CreateUser(this.form)
        if (code !== 200) return
        uni.showToast({
          title: '创建成功！',
          duration: 2000,
          success: () => {
            uni.navigateBack({
              delta: 1
            })
          }
        })
        delete this.form.username
        delete this.form.password
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>

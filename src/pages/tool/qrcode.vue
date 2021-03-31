<template>
  <view>
    <full-status-bar title="固定支付码"></full-status-bar>
    <view class="padding-16">
      <view class="qrcode">
        <view class="qrcode-title">
          {{ info.name || '' }}<span v-if="info.username">（{{ info.username }}）</span>
          <view>帝欧家居股份有限公司</view>
        </view>
        <view class="qrcode-payment">
          <view>
            <image mode="widthFix" src="@/static/icons/wechat.png" />微信支付
          </view>
          <view>
            <image mode="widthFix" src="@/static/icons/alipay.png" />支付宝支付
          </view>
        </view>
        <image class="qrcode-show" />
        <view class="qrcode-bank">
          <image mode="heightFix" src="@/static/images/bank.png" />
        </view>
      </view>
      <button class="save-btn" @click="save">保存图片</button>
    </view>
  </view>
</template>

<script>
import FullStatusBar from '@/components/full-status-bar'

export default {
  name: "qrcode",
  components: { FullStatusBar },
  data() {
    return {
      info: {}
    }
  },
  onLoad() {
    if (uni.getStorageSync('qrcode')) {
      this.info = JSON.parse(uni.getStorageSync('qrcode'))
    }
  },
  methods: {
    save() {
      uni.saveImageToPhotosAlbum({
        filePath: '',
        success: () => {
          uni.showToast({
            title: "二维码保存成功",
            icon: "success",
            duration: 2000,
          })
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import url("@/color.less");

.qrcode {
  width: 100%;
  min-height: 200rpx;
  margin-top: 22px;
  border-radius: 16rpx;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  backdrop-filter: blur(4px);
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding-top: 32rpx;
  .qrcode-title {
    color: @subtitle-color;
    font-size: 26rpx;
    line-height: 40rpx;
    view {
      color: @title-color;
      font-size: 40rpx;
      line-height: 52rpx;
      margin-top: 24rpx;
      font-weight: 600;
    }
  }
  .qrcode-payment {
    display: -webkit-flex;
    align-items: center;
    height: 88rpx;
    view {
      display: -webkit-flex;
      align-items: center;
      font-weight: 500;
      font-size: 26rpx;
      color: #1890ff;
      &:first-child {
        margin-right: 58rpx;
        color: #52c41a;
      }
      image {
        width: 40rpx;
        margin-right: 12rpx;
      }
    }
  }
  .qrcode-show {
    width: 448rpx;
    height: 448rpx;
    background-color: #ccc;
  }
  .qrcode-bank {
    height: 148rpx;
    image {
      height: 100%;
    }
  }
}
.save-btn {
  width: 432rpx;
  height: 96rpx;
  line-height: 96rpx;
  background: #2a58e1;
  border-radius: 96rpx;
  color: white;
  text-align: center;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 28rpx;
  margin-top: 80rpx;
}
</style>

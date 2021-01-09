<template>
  <view>
    <status-bar></status-bar>
    <view class="statistics">
      <view class="statistics-judge">
        <view
          >2020
          <img mode="widthFix" src="@/static/icons/arrow-bottom.svg" />
        </view>
        <view
          >筛选
          <img mode="widthFix" src="@/static/icons/arrow-bottom.svg" />
        </view>
      </view>
      <view class="statistics-data">
        <view class="statistics-data__item">
          <view>
            <text>本年支出</text>
            ¥12,345,678.89
          </view>
        </view>
        <view class="statistics-data__item">
          <view>
            <text>本年收入</text>
            ¥12,345,678.89
          </view>
        </view>
      </view>
      <view class="bar"></view>
    </view>
    <view class="divider-16"></view>
    <view class="padding-16">
      <view class="charts-box">
        <view class="charts-title">月支付统计</view>
        <canvas :style="{
          width: `${cWidth}px`,
          height: `${cHeight*2}rpx`
        }" canvas-id="charts" id="charts" class="charts" @touchstart="touchLine"></canvas>
      </view>
    </view>
    <view class="divider-16"></view>
    <view class="summary-title padding-16">交易汇总</view>
    <view class="divider-12"></view>
    <view class="padding-16">
      <view class="summary-card" v-for="num in 2" :key="num">
        <view class="summary-card__date"><text>2020-12</text>交易金额</view>
        <view class="summary-card__data">
          2笔交易
          <view>¥12,000.00</view>
        </view>
        <view class="summary-card__info">
          <view class="summary-data">
            应结算总金额
            <view>11,987.40</view>
          </view>
          <view class="summary-data">
            结算总手续费
            <view>11,987.40</view>
          </view>
          <view class="summary-data">
            总退款金额
            <view>11,987.40</view>
          </view>
          <view class="summary-data">
            实际结算金额
            <view>11,987.40</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import StatusBar from "@/components/custom-status-bar"
import uCharts from "@/utils/charts.js"

let canva = null

export default {
  name: "statistics",
  components: {
    StatusBar,
  },
  data() {
    return {
      canva: null,
      cWidth: 313,
      cHeight: 188,
      pixelRatio: 1,
    }
  },
  async onReady() {
    const el = uni.createSelectorQuery().select(".charts-box")
    el.boundingClientRect((data) => {
      console.log(data)
      const cWidth = data.width
      const pixel = (cWidth / this.cWidth).toFixed(1)
      this.cWidth = cWidth
      this.cHeight = +(this.cHeight * pixel).toFixed(0)
      this.showLine({
        categories: [1, 2, 4, 6, 8, 10, 12],
        series: [
          {
            name: "测试数据",
            data: [35, 20, 25, 37, 4, 20, 100],
            color: "#2b58e1",
          }
        ],
      })
    }).exec()
  },
  methods: {
    touchLine(e) {
      console.log(canva)
      canva.showToolTip(e, {
					format: function (item, category) {
						return category+'月' + ' ' + item.name + ':' + item.data 
					}
				});
    },
    showLine(chartData) {
      canva = new uCharts({
        $this: this,
        canvasId: "charts",
        type: "line",
        fontSize: 11,
        dataPointShape: false, // 数据点
        legend: { show: false },
        dataLabel: false,
        background: "#FFFFFF",
        pixelRatio: this.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        xAxis: {
          type: "grid",
          gridColor: "#ccc",
          gridType: "solid",
          disableGrid: true,
          dashLength: 8,
          axisLine: true,
          calibration: true,
          format: (val) => {
            return val + "月"
          },
        },
        yAxis: {
          gridType: "dash",
          gridColor: "#ffffff",
          dashLength: 8,
          splitNumber: 5,
          disabled: true,
          format: (val) => {
            return val.toFixed(0) + "元"
          },
        },
        width: this.cWidth * 1,
        height: this.cHeight * 1,
        extra: {
          line: {
            type: "straight",
          },
          tooltip:{
            bgColor: '#2A58E1',
            bgOpacity: '0.9',
            gridType: 'solid'
	        }
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>

@import url("@/color.less");

.statistics {
  background: white;
  .statistics-judge {
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    padding-top: 24rpx;
    view {
      box-sizing: border-box;
      padding: 0 48rpx;
      height: 72rpx;
      border-radius: 72rpx;
      border: 1px solid @border-color;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      font-size: 28rpx;
      color: @title-color;
      image {
        width: 18rpx;
        height: 10rpx;
        margin-left: 11rpx;
      }
      &:first-child {
        margin-right: 128rpx;
      }
    }
  }
  .statistics-data {
    width: 100%;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 32rpx;
    .statistics-data__item {
      width: 50%;
      display: -webkit-flex;
      align-items: center;
      // justify-content: center;
      flex-direction: column;
      padding: 40rpx 0 32rpx 0;
      box-sizing: border-box;
      view {
        font-size: 36rpx;
        line-height: 42rpx;
        color: @subtitle-color;
        font-weight: 700;
        text {
          font-size: 22rpx;
          line-height: 30rpx;
          display: block;
          font-weight: 400;
          margin-bottom: 16rpx;
        }
      }
    }
  }
}
.charts-box {
  min-height: 400rpx;
  box-sizing: border-box;
  background: white;
  box-sizing: border-box;
  border-radius: 16rpx;
}
.charts {
  transform: scale(1);
}
.charts-title {
  font-weight: 700;
  font-size: 26rpx;
  line-height: 36rpx;
  box-sizing: border-box;
  padding: 30rpx 32rpx;
}
.summary-title {
  font-weight: 600;
  font-size: 28rpx;
  line-height: 36rpx;
}
.summary-card {
  box-sizing: border-box;
  padding: 32rpx;
  box-sizing: border-box;
  /* neutral/01 */
  background: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 24rpx;
  .summary-card__date {
    font-size: 26rpx;
    line-height: 40rpx;
    color: @title-color;
    text {
      font-size: 28rpx;
      margin-right: 8rpx;
    }
  }
  .summary-card__data {
    width: 100%;
    height: 140rpx;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    line-height: 52rpx;
    font-size: 28rpx;
    border-bottom: 1px solid @border-color;
    view {
      font-weight: 700;
      font-size: 64rpx;
      line-height: 72rpx;
    }
  }
  .summary-card__info {
    margin-top: 23rpx;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    .summary-data {
      box-sizing: border-box;
      padding: 0 4rpx;
      line-height: 40rpx;
      color: @subtitle-color;
      font-size: 22rpx;
      text-align: center;
      view {
        margin-top: 8rpx;
        font-weight: 500;
        color: @title-color;
        font-size: 26rpx;
        line-height: 31rpx;
      }
    }
  }
}
</style>

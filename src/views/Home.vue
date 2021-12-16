<template>
  <div class="home">
    <header>
      <div class="logo">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="title">测温考勤数据可视化</div>
      <div class="msg">
        <span>{{ weather }}</span>
        <span>PM2.5</span>
        <span>{{ state }}</span>
        <span>{{ date }}</span>
        <span>{{ time }}</span>
      </div>
    </header>
    <main>
      <div class="left">
        <div class="total-people">
          <div class="title">
            <span>总数据展示</span>
            <span>Data visualization</span>
          </div>
          <div class="wallperpar people-list">
            <div class="list">
              <div class="icon">
                <img src="../assets/在校.png" alt="在校" />
              </div>
              <div class="statistical">
                <span class="offset-title">在校人数</span>
                <span><span class="total-number">68965</span>人</span>
              </div>
            </div>
            <div class="list">
              <div class="icon">
                <img src="../assets/到校.png" alt="到校" />
              </div>
              <div class="statistical">
                <span class="offset-title">今日到校</span>
                <span><span class="present-number">68960</span>人</span>
              </div>
            </div>
            <div class="list">
              <div class="icon">
                <img src="../assets/缺勤.png" alt="缺勤" />
              </div>
              <div class="statistical">
                <span class="offset-title">缺勤</span>
                <span><span class="df-number">5</span>人</span>
              </div>
            </div>
          </div>
        </div>
        <div class="exhibit">
          <div class="title">
            <span>数据可视化展示</span>
            <span>Data visualization</span>
          </div>
          <div class="wallperpar">
            <div class="progress-container">
              <div class="progress-list">
                <div class="directClass">高三五班</div>
                <div class="progress-bar-box">
                  <div class="progress-bar-1"></div>
                  <div class="progress-bar-2"></div>
                </div>
                <div class="number">90%</div>
              </div>
              <div class="progress-list">
                <div class="directClass">高三五班</div>
                <div class="progress-bar-box">
                  <div class="progress-bar-1"></div>
                  <div class="progress-bar-2"></div>
                </div>
                <div class="number">90%</div>
              </div>
              <div class="progress-list">
                <div class="directClass">高三五班</div>
                <div class="progress-bar-box">
                  <div class="progress-bar-1"></div>
                  <div class="progress-bar-2"></div>
                </div>
                <div class="number">90%</div>
              </div>
              <div class="progress-list">
                <div class="directClass">高三五班</div>
                <div class="progress-bar-box">
                  <div class="progress-bar-1"></div>
                  <div class="progress-bar-2"></div>
                </div>
                <div class="number">90%</div>
              </div>
              <div class="progress-list">
                <div class="directClass">高三五班</div>
                <div class="progress-bar-box">
                  <div class="progress-bar-1"></div>
                  <div class="progress-bar-2"></div>
                </div>
                <div class="number">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="topbg">
          <div class="wallperpar">
            <div class="database">
              <div class="list-wallperpar">
                <div class="title">姓名</div>
                <div class="bg-br">张三</div>
              </div>
              <div class="list-wallperpar">
                <div class="title">口罩</div>
                <div class="bg-br">是</div>
              </div>
              <div class="list-wallperpar">
                <div class="title">到校日期</div>
                <div class="bg-br">2021-12-14</div>
              </div>
            </div>
            <div class="avater">
              <div class="img-box">
                <img
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F01%2F20200601091140_yNxua.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642233899&t=f4dd79f1baab2e3de80b158745b7fb34"
                  alt="头像"
                />
              </div>
            </div>
            <div class="database">
              <div class="list-wallperpar">
                <div class="title">体温</div>
                <div class="bg-br">36.3°</div>
              </div>
              <div class="list-wallperpar">
                <div class="title">班级</div>
                <div class="bg-br">高三五班</div>
              </div>
              <div class="list-wallperpar">
                <div class="title">到校时间</div>
                <div class="bg-br">15:00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottombg">
          <span class="inform">技术支持：青云石智能科技有限公司</span>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <span>实时数据监控</span>
          <span>Data visualization</span>
        </div>
        <div class="real-time">
          <div class="sched-class-wallperpar">
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
            <div class="classList">
              <div class="classWallperpar">
                <div class="classIcon">
                  <img src="../assets/形状 70.png" alt="icon" />
                </div>
                <div class="className">高三 五班</div>
                <div class="classNumber">到达率: <span>80</span> %</div>
              </div>
              <div class="classNumberStatistical">
                <div class="totalNumber">总人数: <span>88</span> (人)</div>
                <div class="existingNumber">已到人数: <span>80</span> (人)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import moment from 'moment'
import { getWeather } from '../api/index'
export default {
  name: 'Index',
  data() {
    return {
      date: moment().format('YYYY-MM-DD'),
      time: '',
      weather: '',
      PM: '',
      state: ''
    }
  },
  methods: {
    getTime() {
      this.time = moment().format('H:mm:ss')
    }
  },
  mounted() {
    setInterval(() => {
      this.getTime()
    }, 1000)
  },
  created() {
    getWeather({ city: '成都' }).then(res => {
      const {
        data: { forecast }
      } = res
      console.log(forecast[0])
      this.weather = forecast[0].type
      this.state = forecast[0].fengxiang
    })
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>

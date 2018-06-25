<style>
.main-box {
  width: 1500px;
  height: 900px;
  margin: 0 auto;
}
.main-wrap {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
}
.top-wrap {
  width: 100%;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
}
.center-wrap {
  width: 100%;
  /* background: blue; */
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  display: flex;
}
.bottom-wrap {
  width: 100%;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
}
.panel {
  background-color: #d4d4d4;
  outline: #646464 solid 1px;
  margin: 1px;
}
.props-panel {
  /* width: 300px; */
  /* height: 500px; */
  flex-grow: 1;
  width: 300px;
}
.stage-panel {
  flex-grow: 3;
  overflow-y: auto;
  width: 1200px;
}
.timeline-panel {
  color: #fff;
  height: 300px;
}
</style>

<template>
  <div class="main-box">
    <div class="main-wrap">
      <div class="top-wrap">
        <menuPanel class="panel menu-panel"></menuPanel>
      </div>
      <div class="center-wrap">
        <stagePanel class="panel stage-panel"></stagePanel>
        <propsPanel class="panel props-panel"></propsPanel>
      </div>
      <div class="bottom-wrap">
        <timelinePanel class="panel timeline-panel"></timelinePanel>
      </div>
    </div>
  </div>
</template>

<script>
import stagePanel from './stage-panel.vue'
import timelinePanel from './timeline-panel.vue'
import propsPanel from './props-panel.vue'
import menuPanel from './menu-panel.vue'

export default {
  components: {
    stagePanel,
    timelinePanel,
    propsPanel,
    menuPanel
  }
};
</script>


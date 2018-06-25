<style>
.select-rect {
  border: 1px solid #ff0000;
  pointer-events: none;
  display: none;
  position: absolute;
}

.select-rect i {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #fff;
  border: 1px solid #ff0000;
  border-radius: 50%;
  overflow: hidden;
}

.select-rect .tl {
  top: -3px;
  left: -3px;
}

.select-rect .tr {
  top: -3px;
  right: -3px;
}

.select-rect .bl {
  bottom: -3px;
  left: -3px;
}

.select-rect .br {
  bottom: -3px;
  right: -3px;
}
</style>

<template>
    <div class="select-rect">
        <i class="tl"></i>
        <i class="tr"></i>
        <i class="bl"></i>
        <i class="br"></i>
    </div>
</template>

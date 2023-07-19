<template>
  <router-view/>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
.center-kao{
  display: flex;
  align-items: center;
}
.center-kao-right{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.center-box{
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
}
/* 文字居中 */
.text-center{
  text-align: center;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>


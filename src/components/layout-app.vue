<template>
    <div class="container-fluid f-screen bg-light">
      <div :class="h_center==false?'row justify-content-center align-items-center h-100 ':'row justify-content-center h-100'">
        <div class="col-xl-3 col-lg-8 col-md-8 col-sm-5 m-3">
            <slot name="default"/>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    h_center:{
      type:Boolean,
      default:false
    }
  }
}
</script>
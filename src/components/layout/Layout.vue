<template>
    <b-container class="f-screen bg-light" fluid>
    <b-row :class="h_center==false?'justify-content-center align-items-center h-100 overflowed':'justify-content-center h-100 overflowed'">
      <b-col class="col-xl-3 col-lg-8 col-md-8 col-sm-5 m-3" align-v="center">
         <slot name="default"/>
      </b-col>
    </b-row>
  </b-container>
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
<template>
    <b-container class="f-screen bg-light loader" v-if="cargando==true" fluid>
        <b-row :class="'justify-content-center align-items-center h-100 overflowed'">
        <b-col class="col-xl-3 col-lg-8 col-md-8 col-sm-5 m-3" align-v="center">
            <b-img class="rotating" src='/assets/poke-bola.png' fluid/>
        </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    props:{
        cargando:{
            type:Boolean,
            default:false
        }
    }    
}
</script>
<style scoped>
@keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
@-webkit-keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
.rotating
    {
    -webkit-animation: rotating 1s linear infinite;
    -moz-animation: rotating 1s linear infinite;
    -ms-animation: rotating 1s linear infinite;
    -o-animation: rotating 1s linear infinite;
    animation: rotating 1s linear infinite;
    }
</style>
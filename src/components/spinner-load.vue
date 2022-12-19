<template>
    <div class="cointainer-fluid f-screen bg-light loader w-100" v-if="cargando==true">
        <div class='row justify-content-center align-items-center h-100 overflowed'>
            <div class="col-xl-3 col-lg-8 col-md-8 col-sm-5 m-3 text-center">
                <img class="rotating fluid" src="../assets/images/poke_bola.png"/>
            </div>
        </div>
    </div>
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
    width: 80%;
    -webkit-animation: rotating 1s linear infinite;
    -moz-animation: rotating 1s linear infinite;
    -ms-animation: rotating 1s linear infinite;
    -o-animation: rotating 1s linear infinite;
    animation: rotating 1s linear infinite;
    }
</style>
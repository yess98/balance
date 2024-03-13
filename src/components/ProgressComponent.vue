<template>
    <div>
        <slot></slot>
        <progress :value="value" max="100"/>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }, 
        props : {
            value :{
                default : '', 
                type : String, 
            } 
        }
    }
</script>
<style>
progress {
  display: block;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  color: #273238;
}
</style>
<template>
    <div class="container Contend-field" >
        <div class="card">
            <div class="card-body">
                <!-- 这里的slot标签是一个插槽，用于接收父组件传递过来的内容 -->
                <slot></slot> 
            </div>
        </div>
    </div>
</template>


<script></script>


<style scoped>
div.Contend-field {
    margin-top: 20px;
}
</style>
<template>
    <div id="app">
<!--        <header>header</header>-->
        <div class="left-nav"></div>
        <div class="router">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    body {
        background: #eee
    }

    header {
        position: fixed;
        width: 100%;
        top: 0;
        right: 0;
        z-index: 1000;
        background: #fff;
        height: 65px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
    }

    .left-nav {
        position: fixed;
        width: 240px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        margin-top: 85px;

        &:after {
            content: "";
            display: block;
            width: 1px;
            height: 100%;
            background: #dcdee2;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 1;
        }
    }

    .router {
        margin-top: 85px;
    }
</style>

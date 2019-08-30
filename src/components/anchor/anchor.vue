<template>
    <div class="mine-anchor-wrap">
        <div class="mine-anchor">
            <div class="mine-anchor-ink">
                <span class="mine-anchor-ink-ball"></span>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "mine-anchor"
  }
</script>

<style lang="scss">
    .mine-anchor-wrap {
        overflow: auto;
        padding-left: 4px;
        margin-left: -4px;
        z-index: 99;
        position: fixed;
        right: 10px;
        top: 135px;
        width: 150px;

        .mine-anchor {
            position: relative;
            padding-left: 2px;

            .mine-anchor-ink {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;

                .mine-anchor-ink-ball {
                    display: inline-block;
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 2px solid #2d8cf0;
                    background-color: #fff;
                    left: 50%;
                    top: 8px;
                    transition: top .2s ease-in-out;
                    transform: translateX(-50%);
                    z-index: 100;
                }

                &:before {
                    content: " ";
                    width: 2px;
                    height: 100%;
                    display: block;
                    background-color: #e8eaec;
                    margin: 0 auto;
                }

            }

            .mine-anchor-link {
                padding: 8px 0 8px 16px;
                line-height: 1;
            }
        }
    }
</style>
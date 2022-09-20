import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import mpa from 'vite-plugin-mpa'
import * as path from "path";

export default defineConfig({
    plugins: [
        vue(),
        // @ts-ignore
        mpa.default(),
    ],
    // 项目根目录
    // root: process.cwd(),
    root: './',
    // 项目部署的基础路径
    base: '/',
    // 静态资源服务文件夹
    publicDir: 'public',
    build: {
        // 浏览器兼容性 ‘esnext’ | 'modules'
        target: 'modules',
        //输出路径
        outDir: './dist',
        // 生成静态资源的存放路径
        assetsDir: './assets',
        // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
        assetsInlineLimit: 4096,
        // 启动 / 禁用 CSS 代码拆分
        cssCodeSplit: true,
        // 构建后是否生成 source map 文件
        sourcemap: false,

        // 自定义底层的 Rollup 打包配置
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'pages/index/index.html'),
                popup: path.resolve(__dirname, 'pages/popup/index.html'),
            },
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            }
        },

        // @rollup/plugin-commonjs 插件的选项
        commonjsOptions: {},

        // 当设置为 true, 构建后将会生成 manifest.json 文件
        manifest: false,

        // 设置为 false 可以禁用最小化混淆
        // 或是用来指定是应用哪种混淆器
        // boolean | 'terser' | 'esbuild'
        // minify: 'terser',

        // 传递给 Terser 的更多 minify 选项
        terserOptions: {},

        // 设置为false 来禁用将构建好的文件写入磁盘
        write: true,

        // 默认情况下 若 outDir 在 root 目录下， 则 Vite 会在构建时清空该目录。
        emptyOutDir: true,

        // chunk 大小警告的限制
        chunkSizeWarningLimit: 500
    }
})
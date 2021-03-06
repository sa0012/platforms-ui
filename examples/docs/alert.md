## Alert 警告提示

<template>
    <div style="position: absolute;top:20px;right:40px;width:200px;">
      <b-anchor>
        <b-anchor-link href="#ji-chu-yong-fa" title="基础用法"></b-anchor-link>
        <b-anchor-link href="#bao-han-miao-shu-xin-xi" title="包含描述信息"></b-anchor-link>
        <b-anchor-link href="#tu-biao" title="图标"></b-anchor-link>
        <b-anchor-link href="#ke-yi-guan-bi" title="可以关闭"></b-anchor-link>
        <b-anchor-link href="#ding-bu-gong-gao-yang-shi" title="顶部公告样式"></b-anchor-link>
        <b-anchor-link href="#attributes" title="Attributes"></b-anchor-link>
        <b-anchor-link href="#events" title="Events"></b-anchor-link>
        <b-anchor-link href="#slot" title="Slot"></b-anchor-link>
      </b-anchor>
    </div>
</template>

静态的展示一些区块，提示或者警告，可以动态的去删除

### 基础用法

基础的按钮用法

::: demo
```html
<template>
    <pl-alert >info alert</pl-alert>
    <pl-alert type="success">success alert</pl-alert>
    <pl-alert type="warning">warning alert</pl-alert>
    <pl-alert type="error">error alert</pl-alert>
</template>
```
:::

### 包含描述信息

自定义`<slot name="desc">`描述内容。

::: demo
```html
<template>
    <pl-alert >info alert
    <template slot="desc">我是描述信息... </template>
    </pl-alert>
    <pl-alert type="success">success alert
    <template slot="desc">我是描述信息... </template>
    </pl-alert>
    <pl-alert type="warning">warning alert
    <template slot="desc">我是描述信息... </template>
    </pl-alert>
    <pl-alert type="error">error alert
    <template slot="desc">我是描述信息... </template>
    </pl-alert>
</template>
```
:::

### 图标

根据 `type` 属性自动添加不同图标，或者自定义图标 `slot` 。

::: demo
```html
<template>
    <pl-alert show-icon>info alert</pl-alert>
    <pl-alert type="success" show-icon>success alert</pl-alert>
    <pl-alert type="warning" show-icon>warning alert</pl-alert>
    <pl-alert type="error" show-icon>error alert
      <span slot="desc"> Custom error description copywriting.</span>
    </pl-alert>
    <pl-alert show-icon>
       自定义icon
        <b-icon name="ios-basketball" slot="icon"></b-icon>
        <template slot="desc">自定义icon描述</template>
    </pl-alert>
</template>
```
:::

### 可以关闭

设置属性 `banner` 可以应用顶部公告的样式。

::: demo
```html
<template>
    <pl-alert closable>An info prompt</pl-alert>
    <pl-alert type="success" show-icon closable>
       A success prompt
       <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </pl-alert>
    <pl-alert type="warning" closable>
       Custom closing content
       <span slot="close">No longer prompt</span>
    </pl-alert>
</template>
```
:::

### 顶部公告样式

设置属性 `banner` 可以应用顶部公告的样式。

::: demo
```html
<template>
    <pl-alert banner >公告样式...</pl-alert>
    <pl-alert banner closable type="warning">公告样式...</pl-alert>
</template>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     |  警告提示样式   | string  |  info、success、warning、error   |   info   |
| closable    |  是否可关闭	   | boolean  |  —   |   false   |
| show-icon    |  是否显示图标   | boolean  |  —   |   false   |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| on-close     | 关闭时触发   | event  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 警告提示内容   |
| desc     | 警告提示辅助性文字介绍   |
| icon     | 自定义图标内容   |
| close     | 自定义关闭内容   |

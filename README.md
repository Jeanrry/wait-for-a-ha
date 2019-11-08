# wait-for-a-ha

> 等一哈！！！

<p align="center">
<img src="https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/waitforaha/waitA.svg"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/wait-for-a-ha"><img src="https://img.shields.io/npm/v/wait-for-a-ha.svg?color=blue"></a>
  <a href="https://www.npmjs.com/package/wait-for-a-ha"><img src="https://img.shields.io/npm/dw/wait-for-a-ha.svg"></a>
</p>

安装命令同样肥肠简单
``` bash
$ npm install --save wait-for-a-ha
```

同样随时发布，请保持更新

同样使用过程中如果有小小的bug也不要着急，不要试图联系我，联系到我我也不准备改

再次撒花~~~

## 一个简陋的文档

### waitA
基础样式：

<img src="https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/waitforaha/waitA.svg"/>

``` html
<wait-a></wait-a>
```

削微风骚一点的样式：

<img src="https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/waitforaha/waitA--rgb.svg"/>

``` html
<wait-a
  :scale="3"
  :border="false"
  colorA="#00ff00"
  colorB="#ff0000"
  colorC="#0000ff">
</wait-a>
```

初始状态从左到右三个小球分别记做ABC，详细参数列表如下：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| scale | 用于设置组件大小，该值为缩放比例，本组件原始为 100\*100，若 scale 值设置为3，则渲染组件大小为 300\*300 | number | - | 1 |
| border | 小球是否有边框 | boolean | - | true |
| radius | 用于设置小球大小，该值为缩放比例；小球原始半径为 5，若 radius 值设置为2，则渲染小球半径为 10；若 radius 值设置为 [1, 2, 1]，则渲染小球半径分别为 5，10，5 | number/array | - | [1, 1, 1] |
| colorA | 小球A填充颜色 | String | - | #000000 |
| borderColorA | 小球A边框颜色，若 border 为 false，此值无效 | String | - | #000000 |
| colorB | 小球B填充颜色 | String | - | #000000 |
| borderColorB | 小球B边框颜色，若 border 为 false，此值无效 | String | - | #000000 |
| colorC | 小球C填充颜色 | String | - | transparent |
| borderColorC | 小球C边框颜色，若 border 为 false，此值无效 | String | - | #000000 |

---
### waitB
基础样式：

<img src="https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/waitforaha/waitB.svg"/>

``` html
<wait-b></wait-b>
```

削微风骚一点的样式：

<img src="https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/waitforaha/waitB--rgb.svg"/>

``` html
<wait-b
  :scale="3"
  colorA="#00ff00"
  colorB="#ff0000"
  colorC="#0000ff">
</wait-b>
```

与前文一致，ABC分别代表左中右三个球，详细参数列表如下：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| scale | 用于设置组件大小，该值为缩放比例，本组件原始为 100\*100，若 scale 值设置为3，则渲染组件大小为 300\*300 | number | - | 1 |
| radius | 用于设置初始小球大小，该值为缩放比例；小球原始半径为 5，若 radius 值设置为2，则渲染小球半径为 10；若 radius 值设置为 [1, 2, 1]，则渲染小球半径分别为 5，10，5 | number/array | - | [1, 1, 1] |
| reRadius | 用于设置变化后小球大小，除却小球原始半径为 6，其余用法与上文一致， | number/array | - | [1, 1, 1] |
| colorA | 小球A填充颜色 | String | - | #000000 |
| colorB | 小球B填充颜色 | String | - | #000000 |
| colorC | 小球C填充颜色 | String | - | #000000 |

---
### waitC
基础样式：

<img src="https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/waitforaha/waitC.svg"/>

``` html
<wait-c></wait-c>
```

削微风骚一点的样式：

<img src="https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/waitforaha/waitC--rgb.svg"/>

``` html
<wait-c
  :scale="3"
  :border="false"
  colorA="#00ff00"
  colorB="#ff0000"
  colorC="#0000ff">
</wait-c>
```

聪明的你眉头一皱，发自内心的感叹脱口而出“cnm你玩呢，这不是跟waitA一样吗”。

我可以告诉你，没错尽管各个参数名称、默认值、使用方法都一样，但这两组还是削微有一点小小的区别的。

详细参数列表见 waitA。
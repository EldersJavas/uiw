(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1077:function(n,e){n.exports="Icon 图标\n===\n\n语义化的矢量图形，内置的图标属于UI框架常用图形字体。icon字体以及样式，被抽离到一个新的仓库 [uiw icon](https://uiwjs.github.io/icons/) ，`uiw`去依赖 [uiw-iconfont](https://github.com/uiwjs/icons)，这个仓库主要是维护一套svg图片，并将svg图片转换为 `*.symbol.svg` `*.ttf` `*.woff` `*.woff2` `*.eot` `svgPaths.json` 等字体及相关文件并发布到 [npm](https://www.npmjs.com/package/uiw-iconfont) 上去。\n\n### 搜索图标\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Input, CopyToClipboard, Icon, Notify } from 'uiw';\n\nconst icons = [\"adobe\", \"ali-pay\", \"aliwangwang\", \"android-o\", \"android\", \"apple\", \"appstore-o\", \"appstore\", \"area-chart\", \"down\", \"left\", \"right\", \"up\", \"arrow-down\", \"arrow-left\", \"arrow-right\", \"arrow-up\", \"arrows-alt\", \"asterisk\", \"backward\", \"baidu\", \"bar-chart\", \"barcode\", \"bell\", \"camera-o\", \"caret-down\", \"caret-left\", \"caret-right\", \"caret-up\", \"check-square-o\", \"check-square\", \"check\", \"chrome\", \"circle-check-o\", \"circle-check\", \"circle-close-o\", \"circle-close\", \"close-square-o\", \"close-square\", \"close\", \"cloud-download-o\", \"cloud-download\", \"cloud-upload-o\", \"cloud-upload\", \"coffee\", \"component\", \"copy\", \"copyright\", \"css3\", \"cut\", \"d-arrow-left\", \"d-arrow-right\", \"d-caret\", \"dashboard\", \"date\", \"delete\", \"dingding\", \"dislike-o\", \"document\", \"dot-chart\", \"down-circle-o\", \"down-circle\", \"down-square-o\", \"down-square\", \"download\", \"edit\", \"enter\", \"environment-o\", \"environment\", \"eye-o\", \"eye\", \"facebook\", \"file-add\", \"file-excel\", \"file-jpg\", \"file-pdf\", \"file-text\", \"file-unknown\", \"filter\", \"firefox\", \"folder-add\", \"folder-open\", \"folder\", \"forward\", \"foursquare\", \"frown-o\", \"frown\", \"github-o\", \"github\", \"global\", \"heart-off\", \"heart-on\", \"home\", \"html5\", \"ie\", \"inbox\", \"information-o\", \"information\", \"laptop\", \"left-circle-o\", \"left-circle\", \"left-square-o\", \"left-square\", \"like-o\", \"link\", \"linkedin\", \"linux\", \"loading\", \"lock\", \"login\", \"logout\", \"man\", \"map\", \"meh-o\", \"meh\", \"menu-fold\", \"menu-unfold\", \"menu\", \"message-o\", \"message\", \"minus-circle-o\", \"minus-circle\", \"minus-square-o\", \"minus-square\", \"minus\", \"mobile\", \"more\", \"notification\", \"opera\", \"paper-clip\", \"pause-circle-o\", \"pause-circle\", \"pause\", \"pay-circle-o\", \"pay\", \"picasa\", \"picture\", \"pie-chart\", \"pinterest\", \"play-circle-o\", \"play-circle\", \"plus-circle-o\", \"plus-circle\", \"plus-square-o\", \"plus-square\", \"plus\", \"poweroff\", \"printer\", \"qq\", \"qrcode\", \"question-circle-o\", \"question-circle\", \"reddit\", \"reload\", \"right-circle-o\", \"right-circle\", \"right-square-o\", \"right-square\", \"rollback\", \"safari\", \"safety\", \"save\", \"search\", \"setting-o\", \"setting\", \"share\", \"shopping-cart\", \"shrink\", \"smile-o\", \"smile\", \"star-off\", \"star-on\", \"swap-left\", \"swap-right\", \"swap\", \"table\", \"tag-o\", \"tag\", \"tags-o\", \"tags\", \"taobao\", \"time-o\", \"time\", \"twitter\", \"uiw\", \"unlock\", \"up-circle-o\", \"up-circle\", \"up-square-o\", \"up-square\", \"upload\", \"user-add\", \"user-delete\", \"user\", \"usergroup-add\", \"usergroup-delete\", \"verification\", \"verticle-left\", \"verticle-right\", \"video-camera\", \"warning-o\", \"warning\", \"weibo\", \"weixin\", \"wifi\", \"windows\", \"woman\", \"zoom-in\", \"zoom-out\"];\nconst itemStyl = {\n  fontSize: 26, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', fill: '#525252',\n}\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      len: 0,\n      result: [],\n    }\n  }\n  onChange(env) {\n    const value = env.target.value;\n    const data = value ? icons.filter((item) => item.indexOf(value) > -1) : [];\n    const len = data.length;\n    const result = data.splice(0, 15);\n    this.setState({ len, result });\n  }\n  render() {\n    const { len, result } = this.state;\n    return (\n      <div>\n        <Input preIcon=\"search\" placeholder=\"请输入图标名称\" type=\"text\" style={{ maxWidth: 200 }} onChange={this.onChange.bind(this)} />\n        <div style={{ padding: '10px 0' }}>\n          搜索到 {this.state.len} 个结果{len > 0 && <span>，下面展示 {len > 15 ? '15' : len} 个图标，可以点击复制图标代码: </span>}\n        </div>\n        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n          {result.map((type, idx) => {\n            const iconTxt = `<Icon type=\"${type}\" />`;\n            return (\n              <CopyToClipboard\n                key={idx}\n                style={itemStyl}\n                text={iconTxt}\n                onClick={() => {\n                  Notify.success({\n                    title: '你已复制内容！',\n                    description: (\n                      <span>\n                        已复制 <b style={{ color: 'red' }}>{iconTxt}</b> 可以去粘贴了！\n                      </span>\n                    ),\n                  });\n                }}\n              >\n                <div key={idx}>\n                  <Icon type={type} />\n                  <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n                </div>\n              </CopyToClipboard>\n            )\n          })}\n        </div>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## 如何使用\n\n使用`<Icon />`组件，指定图标对应的`type`属性，示例代码：\n\n```jsx\nimport { Icon } from 'uiw';\n```\n\n```jsx\n<Icon type=\"minus\" />\n```\n\n渲染为\n\n```jsx\n<span class=\"w-icon w-icon-middle\">\n  <svg viewBox=\"0 0 24 24\">\n    <path d=\"M16.038 3.176c2.313-.551 4.58.248 5.648 1.603.985 1.25 1.433 2.55 1.287 4.468-.105 1.383-.55 2.408-1.428 3.536-.162.208-.34.421-.563.68-.13.153-.628.72-.602.692-.88 1.008-3.471 3.535-7.814 7.62a.83.83 0 0 1-1.139-.003c-3.728-3.55-6.141-5.888-7.248-7.022-2.043-2.094-2.82-3.31-3.102-5.276-.295-2.055.27-3.742 1.538-5.053 1.19-1.229 3.319-1.684 5.42-1.25 1.231.254 2.542 1.072 3.961 2.436 1.21-1.261 2.56-2.077 4.042-2.43z\" fill-rule=\"evenodd\">\n    </path>\n  </svg>\n</span>\n```\n\n示例如下:\n\n```jsx\nconst Demo = () => (\n  <div>\n    <Icon type=\"arrow-down\" />\n    <Icon type=\"minus\" />\n    <Icon type=\"plus\" />\n    <Icon type=\"check\" />\n    <Icon type=\"close\" />\n  </div>\n)\n```\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nReactDOM.render(\n  <div style={{ fontSize: 18, lineHeight: '12px' }}>\n    <Icon type=\"heart-on\" />\n    <Icon type=\"pie-chart\" />\n    <Icon type=\"tag\" />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 图标尺寸\n\n默认情况下，图标非常小，它们继承了父级的字体大小。 如果没有设置字体大小，可以通过 `size` 来设置尺寸。通常情况 `size` 会很累赘没有什么用。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nReactDOM.render(\n  <div style={{ fontSize: '28px' }}>\n    <Icon type=\"heart-on\" />\n    <Icon type=\"pie-chart\" />\n    <Icon type=\"tag\" />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 图标颜色\n\n默认纯黑色图标，当前图标是 svg 格式展示，在为SVG设置样式时，请使用 `fill` 或 `stroke` 属性而不是 `color`。 这些可以直接在 `Icon` 上设置为 `style` 或通过 `CSS` 设置。\n\n> 一个有用的技巧是将 `fill` 设置为 `currentColor`，以便从图标容器的文本颜色继承填充颜色。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nReactDOM.render(\n  <div style={{ fontSize: '28px',color: 'green' }}>\n    <Icon type=\"apple\" color=\"red\" />\n    <Icon type=\"pie-chart\" style={{fill: 'currentColor'}} />\n    <Icon type=\"frown\" style={{fill: 'blue'}} />\n    <Icon type=\"uiw\" style={{stroke: 'red',fill: '#ffef00'}} />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 与文本对齐\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <h3 style={{ margin: 0 }}>Exit <Icon verticalAlign=\"baseline\" type=\"baidu\" /></h3>\n    <span>uiw</span><Icon type=\"uiw\" verticalAlign=\"baseline\" style={{ fill: '#009688', fontSize: 21 }} />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 图标的命名规范\n\n我们为每个图标赋予了语义化的命名，命名规则如下:\n\n> \\[形状?\\]-\\[图标名\\]-\\[描线?\\]-\\[方向?\\]  \n> 方向：`down`、`up`、`left`、`right`  \n> 描线：`-o` 图标添加边框描线  \n> 默认：`w-icon-` 默认引用的字体文件作用域  \n> 自定定义：`w-icon-uiw-` 自定定义作用域  \n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <Icon type=\"circle-close\" verticalAlign=\"baseline\" />  图标名称：circle-close，[circle圈]-[关闭close]\n    <br/>\n    <Icon type=\"circle-close-o\" verticalAlign=\"baseline\" /> 图标名称：circle-close-o，[circle圈]-[关闭close]-[o描线]\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 图标旋转实例\n\n通过设置参数 `spin={true}` 来设置图标旋转。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nReactDOM.render(\n  <div style={{ fontSize: 21, color: 'green' }}>\n    <Icon type=\"loading\" spin={true} color=\"red\" />\n    <Icon type=\"reload\" spin={true} />\n    <Icon type=\"picasa\" spin={true} style={{fill: 'blue'}} />\n    <Icon type=\"smile-o\" spin={true} style={{fill: 'blue'}} />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 自定义图标\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst chat = (\n  <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n    <path d=\"M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z\" fillRule=\"evenodd\" />\n  </svg>\n)\nconst contrast = (\n  <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n    <path d=\"M19 8h-1.26c-.19-.73-.48-1.42-.85-2.06l.94-.94a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0l-.94.94c-.65-.38-1.34-.67-2.07-.86V1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1.26c-.76.2-1.47.5-2.13.89L5 2.28a.972.972 0 0 0-1.36 0L2.28 3.64c-.37.38-.37.98 0 1.36l.87.87c-.39.66-.69 1.37-.89 2.13H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.26c.19.73.48 1.42.85 2.06l-.94.94a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l.94-.94c.64.38 1.33.66 2.06.85V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.26c.76-.2 1.47-.5 2.13-.89l.88.87c.37.37.98.37 1.36 0l1.36-1.36c.37-.38.37-.98 0-1.36l-.87-.87c.4-.65.7-1.37.89-2.13H19c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-9 7c-2.76 0-5-2.24-5-5s2.24-5 5-5v10z\" fillRule=\"evenodd\" />\n  </svg>\n)\nconst styl = { marginRight: 10 };\n\nReactDOM.render(\n  <div style={{ fontSize: 21, color: 'green' }}>\n    <Icon style={styl} type={chat} color=\"red\" />\n    <Icon style={styl} type={contrast} spin={true} />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 字体图标\n\n通过引入 [uiw-iconfont](https://github.com/uiwjs/icons) 字体样式，在 [uiw-iconfont官网](https://uiwjs.github.io/icons) 找到对应的图标名称，就可以使用了，`uiw` 已经依赖 `uiw-iconfont` 你无需安装即可使用，更多使用方法[查看官方文档](https://github.com/uiwjs/icons)。\n\n```bash\n# 如果你没有安装，可单独使用，安装\nnpm i uiw-iconfont --save\n```\n\n引入字体样式\n\n```jsx\nimport 'uiw-iconfont/fonts/w-icon.css';\n```\n\n在 HTML 中使用：\n\n```html\n<i className=\"w-icon-apple\"></i>\n```\n\n在 React 中使用：\n\n```jsx\nconst Demo = () => (\n  <div style={{ color: 'green' }}>\n    <i className=\"w-icon-apple\" />\n    <i className=\"w-icon-appstore\" />\n  </div>\n)\n```\n\n## API\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| type | 图标的名称 | String/ReactNode | - |\n| spin | 是否有旋转动画 |  Boolean | `false` |\n| verticalAlign | 是否有旋转动画 | Enum {baseline, middle} | `baseline` |\n| style | 设置图标的样式，例如 `fill` 和 `stroke` | Object | - |\n\n\n## 所有图标\n\n### 方向性图标\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [\n  'down-square-o','down-square','up-square-o', 'up-square','left-square-o','left-square', 'right-square-o', 'right-square',\n]\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n圆圈方向性图标\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [\n  'down-circle-o', 'down-circle','up-circle-o','up-circle','left-circle-o', 'left-circle','right-circle-o', 'right-circle','play-circle-o',  'play-circle',\n]\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n其它方向性图标\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [\n  'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'arrow-down', 'arrow-up', 'arrow-left', 'arrow-right',\n  'shrink','arrows-alt','d-arrow-left','d-arrow-right','enter',\n  'rollback', 'd-caret','backward','forward',  'logout', 'login', 'swap-left', 'swap-right', 'swap',\n  'verticle-left', 'verticle-right', 'menu','menu-fold', 'menu-unfold',\n]\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 提示建议性图标\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [\n  'smile-o', 'smile','frown-o', 'frown','meh', 'meh-o',\n  'pause','pause-circle', 'pause-circle-o', 'information', \"information-o\", 'warning-o', 'warning',\n]\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 符号\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [\n  \"plus\", 'plus-circle-o','plus-circle', 'plus-square', 'plus-square-o', \"question-circle-o\",\n  \"minus\", 'minus-circle-o', 'minus-circle', 'minus-square', 'minus-square-o',\"question-circle\",\n  \"close\", \"circle-close-o\", \"circle-close\",'close-square', 'close-square-o', \"asterisk\",\n  \"check\", \"circle-check-o\", \"circle-check\",'check-square','check-square-o', \"copyright\",\n]\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 文件\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [\n  'file-text', 'file-jpg', 'file-unknown', 'file-add', 'file-excel', 'file-pdf',\n  'folder-add', 'folder-open', 'paper-clip', \n]\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 其它\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [\n  'heart-off', 'heart-on', 'star-on', 'star-off','lock', 'unlock','dashboard',\n  'area-chart', 'bar-chart', 'dot-chart','pie-chart',\n  'dislike-o', 'like-o','loading', 'reload','appstore', 'appstore-o',\n  'tag', 'tag-o','tags','tags-o', 'setting','setting-o','map','table','qrcode','barcode','printer',\n  'cloud-upload','cloud-upload-o', 'cloud-download','cloud-download-o', 'download','message','message-o',\n  'user', 'user-add', 'user-delete', 'usergroup-add', 'usergroup-delete', 'zoom-in', 'zoom-out','time', 'time-o',\n  'bell', 'camera-o', 'coffee', 'document', 'delete', 'date', 'edit',  'eye-o', 'environment-o', 'filter', 'global', 'inbox', 'home', 'laptop', 'link', 'copy', 'more', 'shopping-cart', 'search', 'save', 'safety', 'poweroff', 'picasa', 'notification',\n  'pay-circle-o', 'pay', 'picture', 'woman', 'man', 'verification', 'wifi', 'video-camera', 'mobile'\n]\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 品牌标识\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = ['uiw', 'windows', \"linux\", 'apple', 'facebook', 'twitter', 'adobe', \"baidu\", \"ali-pay\", 'android-o', 'android','reddit', 'github', 'github-o', \"aliwangwang\",   \"dingding\", \"foursquare\", \"linkedin\", \"pinterest\", \"qq\",  \"weibo\", \"taobao\", \"weixin\", 'css3', 'html5', ];\n\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 浏览器图标\n\n\x3c!--DemoStart,bgWhite,noCode,codePen--\x3e \n```js\nimport { Icon } from 'uiw';\n\nconst iconList = [ \"chrome\", \"safari\", \"firefox\", \"opera\", \"ie\", ];\nconst itemStyl = {\n  fontSize: 18, minWidth: 120, background: '#eaeaea', marginBottom: 10, marginRight: 10, padding: '20px 0',\n  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fill: '#525252',\n}\n\nReactDOM.render(\n  <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: -10, marginRight: -10 }}>\n    {iconList.map((type, idx) => {\n      return (\n        <div key={idx} style={itemStyl}>\n          <Icon type={type} />\n          <div style={{ color: '#525252', fontSize: 12, paddingTop: 8 }}>{type}</div>\n        </div>\n      )\n    })}\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n"}}]);
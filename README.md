# react-notification

开发一个通知提醒的组件。为了方便扩展，该组件只提供一个空的提醒框，内容完全自定义。避免 UI 作妖！

## 安装

```bash
npm i ReactNotification --save
```

## 使用

```js
import ReactNotification from "ReactNotification";

function showNotice() {
  // 清除原来的提示元素
  notificationObj && notificationObj.destroy();
  ReactNotification.newInstance(
    { style: { color: "red" }, duration: 3000, autoClose: false },
    (notification) => {
      notificationObj = notification;
      notification.notice({
        render: <div style={{ width: "300px", height: "200px" }}>hello</div>,
      });
    },
  );
}

<button onClick={showNotice}>显示通知</button>;
```

## API

#### Notification.newInstance(props, (notification) => void) => void

props 详情
|属性名|含义|默认值|
|---|---|---|
|getContainer|指定通知提醒的容器，一个 html 元素|空|
|autoClose|是否自动关闭|true|
|duration|自动关闭的时间间隔|4500(毫秒)|
|style|设置提醒框容器的内嵌样式，设置提醒框的位置使用这个很方便|空|
|className|设置提醒框容器的样式名称|空|

#### notification.notice(props)

props 详情
|属性名|类型|含义|
|---|---|---|
|render|React.Element|消息内容|

#### notification.component

消息组件的引用

#### notification.destroy

销毁提醒元素

import React from "react";
import ReactDOM from "react-dom";
import ReactNotification from "../index";

let notificationObj;
function showNotice() {
  ReactNotification.newInstance(
    { style: { color: "red", display: "none" }, duration: 3000, autoClose: false },
    (notification) => {
      notificationObj = notification;
      // notification.notice({
      //   render: (
      //     <div style={{ width: "400px", height: "140px" }}>
      //       hello
      //       <button onClick={closeNotice}>我知道了</button>
      //     </div>
      //   ),
      // });
    },
  );
}
function showNewNotice() {
  notificationObj.notice({
    render: <div style={{ width: "400px", height: "140px" }}>请自定义内容</div>,
  });
}
function closeNotice() {
  notificationObj.hidden();
}
function show() {
  notificationObj.show();
}

function Main() {
  return (
    <section>
      <button onClick={showNotice}>创建通知</button>
      <button onClick={closeNotice}>关闭通知</button>
      <button onClick={showNewNotice}>新的通知</button>
      <button onClick={show}>显示通知</button>
    </section>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

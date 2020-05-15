import React from "react";
import ReactDOM from "react-dom";
import ReactNotification from "../index";

let notificationObj;
function showNotice() {
  notificationObj && notificationObj.destroy();
  ReactNotification.newInstance(
    { style: { color: "red" }, duration: 3000, autoClose: false },
    (notification) => {
      notificationObj = notification;
      notification.notice({
        render: (
          <div style={{ width: "400px", height: "140px" }}>
            hello
            <button onClick={closeNotice}>我知道了</button>
          </div>
        ),
      });
    },
  );
}
function closeNotice() {
  notificationObj.destroy();
}

function Main() {
  return (
    <section>
      <button onClick={showNotice}>显示通知</button>
      <button onClick={closeNotice}>关闭通知</button>
    </section>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

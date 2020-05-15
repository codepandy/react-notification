import ReactDOM from "react-dom";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.less";

export default class ReactNotification extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
    };
  }
  add = (props) => {
    this.setState({ ...props });
  };

  render() {
    const { render } = this.state;
    const { style, className } = this.props;

    return (
      <div className={`${styles.container} ${className}`} style={{ ...style }}>
        {render}
      </div>
    );
  }
}

ReactNotification.propTypes = {
  className: PropTypes.any,
  style: PropTypes.object,
};

ReactNotification.defaultProps = {};

ReactNotification.newInstance = function newNotificationInstance(properties, callback) {
  const { getContainer, autoClose = true, duration = 4500, ...props } = properties || {};
  const notificationDiv = document.createElement("div");
  if (getContainer) {
    const root = getContainer();
    root.appendChild(notificationDiv);
  } else {
    document.body.appendChild(notificationDiv);
  }
  // 销毁
  function destroy() {
    ReactDOM.unmountComponentAtNode(notificationDiv);
    if (notificationDiv.parentNode) {
      notificationDiv.parentNode.removeChild(notificationDiv);
    }
    if (window.nocificationTimeout_a2312adssdfsiret)
      clearTimeout(window.nocificationTimeout_a2312adssdfsiret);
  }
  let called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice(noticeProps) {
        clearTimeout(window.nocificationTimeout_a2312adssdfsiret);
        notification.add(noticeProps);
        if (autoClose) {
          window.nocificationTimeout_a2312adssdfsiret = setTimeout(() => {
            destroy();
          }, duration);
        }
      },
      component: notification,
      destroy: destroy,
    });
  }
  ReactDOM.render(<ReactNotification {...props} ref={ref} />, notificationDiv);
};

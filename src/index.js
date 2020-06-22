import ReactDOM from "react-dom";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.less";

export default class ReactNotification extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      render: "",
      display: {},
    };
  }
  add = (props) => {
    this.setState({ display: { display: "block" }, ...props });
  };
  hidden = () => {
    this.setState({ display: { display: "none" } });
  };

  show = () => {
    this.setState({ display: { display: "block" } });
  };

  render() {
    const { render, display } = this.state;
    const { style, className } = this.props;

    return (
      <div
        className={`${styles.notificationContainer_afdf34985983} ${className || ""}`}
        style={{ ...style, ...display }}
      >
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
    if (root.appendChild) {
      root.appendChild(notificationDiv);
    }
  } else {
    document.body.appendChild(notificationDiv);
  }

  let called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    const clearTimer = () => {
      if (window.nocificationTimeout_a2312adssdfsiret) {
        clearTimeout(window.nocificationTimeout_a2312adssdfsiret);
        window.nocificationTimeout_a2312adssdfsiret = null;
      }
    };
    called = true;
    callback({
      notice(noticeProps) {
        clearTimer();
        notification.add(noticeProps);
        if (autoClose) {
          window.nocificationTimeout_a2312adssdfsiret = setTimeout(() => {
            notification.hidden();
            clearTimer();
          }, duration);
        }
      },
      component: notification,
      destroy() {
        ReactDOM.unmountComponentAtNode(notificationDiv);
        if (notificationDiv.parentNode) {
          notificationDiv.parentNode.removeChild(notificationDiv);
        }
      },
      hidden() {
        notification.hidden();
      },
      show() {
        notification.show();
      },
    });
  }
  ReactDOM.render(<ReactNotification {...props} ref={ref} />, notificationDiv);
};

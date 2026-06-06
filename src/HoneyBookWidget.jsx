import { useEffect } from 'react';
import PropTypes from 'prop-types';

const HoneyBookWidget = ({ pid }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
    script.async = true;
    script.defer = true;
    script.id = "honeybook-widget-script";
    script.onload = () => {
      window._HB_ = window._HB_ || {};
      window._HB_.pid = pid;
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('honeybook-widget-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      delete window._HB_;
    };
  }, [pid]);

  return (
    <div className={`hb-p-${pid}-3`}>
      <img height="1" width="1" style={{ display: "none" }} src={`https://www.honeybook.com/p.png?pid=${pid}`} alt="HoneyBook Pixel"/>
    </div>
  );
};

HoneyBookWidget.propTypes = {
  pid: PropTypes.string.isRequired,
};

export default HoneyBookWidget;

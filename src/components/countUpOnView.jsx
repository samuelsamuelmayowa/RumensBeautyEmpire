import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";

const CountUpOnView = ({ to, duration = 3, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.floor(value));

  useEffect(() => {
    let controls;
    if (isInView) {
      controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
    }
    return () => controls?.stop();
  }, [isInView, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};

CountUpOnView.propTypes = {
  to: PropTypes.number.isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default CountUpOnView;

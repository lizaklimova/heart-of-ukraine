import { scroller } from "react-scroll";

const smoothScrollToTarget = (target, offset) => {
  if (!target) return;
  else
    setTimeout(
      () =>
        scroller.scrollTo(target, {
          duration: 1000,
          delay: 100,
          smooth: true,
          offset,
        }),
      300
    );
};

export default smoothScrollToTarget;

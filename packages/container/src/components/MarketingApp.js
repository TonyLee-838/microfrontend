import React, { useEffect, useRef } from "react";

import { mount } from "marketing/MarketingApp";

// Work as an adapter
const MarketingApp = () => {
  const divEl = useRef(null);

  useEffect(() => {
    mount(divEl.current);
  }, []);

  return <div ref={divEl} />;
};

export default MarketingApp;

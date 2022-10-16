import React, { useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (i) => {
    setActiveIndex(i);
  };

  const renderItems = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";

    return (
      <React.Fragment key={i}>
        <div className={`title ${active}`} onClick={() => onTitleClick(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
}

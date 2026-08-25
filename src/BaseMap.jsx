import React, { useState, useEffect } from "react";

// Internal engine, not exported from the package. Country components forward
// the developer's props, then set the data-specific ones after the spread.
export function BaseMap({
  paths,
  regionNames,
  onSelect,
  onHover,
  hoverColor,
  activeColor,
  color = "#ffffff",
  colorMap = {},
  className = "",
  style = {},
  viewBox = "0 0 300 150",
  mapTransform = "",
  showAttributions = true,
  attribution,
  stroke = "black",
  strokeWidth = 1,
  fillRule,
}) {
  const [hoveredId, setHoveredId] = useState(null);
  const [clickedId, setClickedId] = useState(null);

  const getRegionName = (id) => regionNames[id - 1] || "";

  useEffect(() => {
    if (colorMap) {
      Object.keys(colorMap).forEach((key) => {
        if (!regionNames.includes(key)) {
          console.warn(`[BaseMap] Invalid region name in colorMap: "${key}"`);
        }
      });
    }
  }, [JSON.stringify(colorMap), regionNames]);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
    if (onHover) onHover({ id, name: getRegionName(id) });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    if (onHover) onHover(null);
  };

  const handleClick = (id) => {
    const newClickedId = clickedId === id ? null : id;
    setClickedId(newClickedId);
    if (onSelect)
      onSelect(newClickedId ? { id, name: getRegionName(id) } : null);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }} className={className}>
      <svg style={style} viewBox={viewBox} version="1.1" width="100%" height="100%">
        <g
          transform={mapTransform || undefined}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {paths.map((newPath) => {
            const regionName = getRegionName(newPath.id);
            const isHovered = hoveredId === newPath.id;
            const isClicked = clickedId === newPath.id;

            const mappedColor =
              colorMap && colorMap[regionName] ? colorMap[regionName] : null;
            const baseColor = mappedColor || color || newPath.fill;
            const fillColor = isClicked
              ? activeColor || baseColor
              : isHovered
                ? hoverColor || baseColor
                : baseColor;

            return (
              <path
                key={newPath.id}
                id={newPath.id}
                d={newPath.d}
                fill={fillColor}
                fillRule={fillRule}
                stroke={stroke}
                strokeWidth={strokeWidth}
                onClick={() => handleClick(newPath.id)}
                onMouseEnter={() => handleMouseEnter(newPath.id)}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer", transition: "fill 0.2s ease" }}
              />
            );
          })}
        </g>
      </svg>

      {showAttributions && attribution && (
        <div
          style={{
            position: "absolute",
            bottom: "6px",
            right: "8px",
            fontSize: "9px",
            color: "#555",
            backgroundColor: "rgba(255,255,255,0.75)",
            padding: "2px 5px",
            borderRadius: "3px",
            lineHeight: "1.4",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          © <a
            href={attribution.licenseHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", pointerEvents: "auto" }}
          >
            {attribution.license}
          </a>{" "}
          {attribution.holder}
        </div>
      )}
    </div>
  );
}

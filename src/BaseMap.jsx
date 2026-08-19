import React, { useState, useEffect } from "react";

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
        <g transform={mapTransform || undefined}>
          <g
            style={{ strokeLineCap: "round", strokeLineJoin: "round" }}
            transform="matrix(0.3663,0,0,0.3642,10.3,144.7)"
          >
            <g transform="matrix(1.004,0,0,0.941,41.09,18.47)">
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
                  stroke="black"
                  onClick={() => handleClick(newPath.id)}
                  onMouseEnter={() => handleMouseEnter(newPath.id)}
                  onMouseLeave={handleMouseLeave}
                  style={{ cursor: "pointer", transition: "fill 0.2s ease" }}
                />
              );
            })}
            </g>
          </g>
        </g>
      </svg>

      {showAttributions && (
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
            href="https://creativecommons.org/licenses/by-sa/4.0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", pointerEvents: "auto" }}
          >
            CC BY-SA 4.0
          </a>{" "}
          Sagarjkhatri via Wikimedia Commons
        </div>
      )}
    </div>
  );
}

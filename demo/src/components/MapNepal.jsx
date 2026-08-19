import { useState, useEffect } from "react";
import { provinces } from "../data/provinces";
import { districts } from "../data/districts";
import { NepalProvinceMap, NepalDistrictMap } from "react-svg-maps/np";

function MapNepal() {
  const [mapType, setMapType] = useState("province");
  const [hoveredId, setHoveredId] = useState(null);
  const [clickedId, setClickedId] = useState(null);

  const [defaultColor, setDefaultColor] = useState("#e2e8f0");
  const [hoverColor, setHoverColor] = useState("#93c5fd");
  const [activeColor, setActiveColor] = useState("#3b82f6");
  const [showAttributions, setShowAttributions] = useState(true);

  useEffect(() => {
    setHoveredId(null);
    setClickedId(null);
  }, [mapType]);

  const getName = (id) => {
    if (!id) return "";
    return mapType === "province" ? provinces[id - 1] : districts[id - 1];
  };

  const hoveredName = getName(hoveredId);
  const selectedName = getName(clickedId);

  const currentColorMap =
    mapType === "province"
      ? { Koshi: "blue", Lumbini: "green" }
      : { Palpa: "blue", Kathmandu: "red", Jhapa: "yellow" };

  const mapProps = {
    className:
      "lg:w-255.5 lg:h-158.5 md:w-191.5 md:h-118.75 sm:w-160 sm:h-99 w-86 h-100",
    color: defaultColor,
    hoverColor: hoverColor,
    activeColor: activeColor,
    onHover: (region) => setHoveredId(region ? region.id : null),
    onSelect: (region) => setClickedId(region ? region.id : null),
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex flex-row flex-wrap items-center justify-between w-full mb-8 gap-6">
        <div className="flex flex-col gap-2 min-w-50">
          <label
            htmlFor="mapSelect"
            className="text-sm font-semibold text-gray-500 uppercase tracking-wide"
          >
            Nepal Map
          </label>
          <div className="relative">
            <select
              id="mapSelect"
              value={mapType}
              onChange={(e) => setMapType(e.target.value)}
              className="appearance-none w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#023f45] focus:border-transparent cursor-pointer shadow-sm transition-all"
            >
              <option value="province">Province Map</option>
              <option value="district">District Map</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center min-w-50">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Hovered Region
          </span>
          {hoveredName ? (
            <p className="text-xl font-bold text-[#60a5fa] m-0 text-center">
              {hoveredName}
            </p>
          ) : (
            <p className="text-xl font-bold text-gray-300 m-0 select-none text-center">
              None
            </p>
          )}
        </div>

        <div className="flex flex-col items-center min-w-37.5">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Selected Region
          </span>
          {selectedName ? (
            <p className="text-xl font-bold text-[#023f45] m-0 text-center">
              {selectedName}
            </p>
          ) : (
            <p className="text-xl font-bold text-gray-300 m-0 select-none text-center">
              None
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Theme Colors
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 shadow-sm transition-transform hover:scale-105">
              <label
                htmlFor="defaultColor"
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                Default
              </label>
              <input
                id="defaultColor"
                type="color"
                value={defaultColor}
                onChange={(e) => setDefaultColor(e.target.value)}
                className="w-7 h-7 p-0 border-0 rounded cursor-pointer bg-transparent"
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 shadow-sm transition-transform hover:scale-105">
              <label
                htmlFor="hoverColor"
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                Hover
              </label>
              <input
                id="hoverColor"
                type="color"
                value={hoverColor}
                onChange={(e) => setHoverColor(e.target.value)}
                className="w-7 h-7 p-0 border-0 rounded cursor-pointer bg-transparent"
              />
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 shadow-sm transition-transform hover:scale-105">
              <label
                htmlFor="activeColor"
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                Active
              </label>
              <input
                id="activeColor"
                type="color"
                value={activeColor}
                onChange={(e) => setActiveColor(e.target.value)}
                className="w-7 h-7 p-0 border-0 rounded cursor-pointer bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-8">
          <div className="flex flex-row items-center gap-3">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Attributions
            </span>
            <label className="flex items-center cursor-pointer">
              <div
                onClick={() => setShowAttributions((prev) => !prev)}
                className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                  showAttributions ? "bg-[#023f45]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                    showAttributions ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </div>
            </label>
          </div>

          <div className="flex flex-row items-center gap-3">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              colorMap Prop Value
            </span>
            <pre className="text-sm bg-gray-100 text-[#023f45] px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm m-0 flex items-center font-mono">
              {`{ ${Object.entries(currentColorMap)
                .map(([key, value]) => `${key}: "${value}"`)
                .join(", ")} }`}
            </pre>
          </div>
        </div>
      </div>

      <div className="relative p-6 w-full flex justify-center bg-gray-50 rounded-xl shadow-inner border border-gray-100">
        {mapType === "province" ? (
          <NepalProvinceMap
            {...mapProps}
            showAttributions={showAttributions}
            colorMap={currentColorMap}
          />
        ) : (
          <NepalDistrictMap
            {...mapProps}
            showAttributions={showAttributions}
            colorMap={currentColorMap}
          />
        )}
      </div>
    </div>
  );
}

export default MapNepal;

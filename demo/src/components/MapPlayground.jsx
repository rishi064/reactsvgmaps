import { useState, useEffect, useMemo } from "react";
import { COUNTRIES } from "../data/maps";
import Dropdown from "./Dropdown";

const STROKE = { min: 0, max: 3, step: 0.1, default: 1 };

const labelClass =
  "text-sm font-semibold text-gray-500 uppercase tracking-wide";

const propNameClass = "text-sm font-semibold text-gray-500 font-mono";

function ColorInput({ id, label, value, onChange }) {
  return (
    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 shadow-sm transition-transform hover:scale-105">
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 cursor-pointer"
      >
        {label}
      </label>
      <input
        id={id}
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-7 h-7 p-0 border-0 rounded cursor-pointer bg-transparent"
      />
    </div>
  );
}

function Readout({ label, value, color }) {
  return (
    // Names wrap rather than clip, inside a fixed-height box: the name changes on
    // every hover, so a box that resizes would reflow the page under the cursor.
    <div className="flex flex-col items-center gap-2 flex-1 min-w-36 basis-0">
      <span className={labelClass}>{label}</span>
      <div className="flex items-center justify-center h-16 w-full min-w-0">
        <p
          className={`text-base sm:text-lg font-bold m-0 w-full text-center leading-tight wrap-break-word ${
            value ? color : "text-gray-300 select-none"
          }`}
        >
          {value || "None"}
        </p>
      </div>
    </div>
  );
}

function MapPlayground() {
  const [countryCode, setCountryCode] = useState("np");
  const [mapKey, setMapKey] = useState("province");

  const [hoveredId, setHoveredId] = useState(null);
  const [clickedId, setClickedId] = useState(null);

  const [defaultColor, setDefaultColor] = useState("#e2e8f0");
  const [hoverColor, setHoverColor] = useState("#93c5fd");
  const [activeColor, setActiveColor] = useState("#3b82f6");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(STROKE.default);
  const [showAttributions, setShowAttributions] = useState(true);

  const country = COUNTRIES[countryCode];
  const { Component, names, colorMap } = country.maps[mapKey];

  const countryOptions = useMemo(
    () =>
      Object.entries(COUNTRIES)
        .map(([code, c]) => ({ value: code, label: c.label }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    []
  );

  // The map list stays in its authored order: province before district.
  const mapOptions = Object.entries(country.maps).map(([key, m]) => ({
    value: key,
    label: m.label,
  }));

  // onHover(null) never fires when the map unmounts, so clear these by hand.
  useEffect(() => {
    setHoveredId(null);
    setClickedId(null);
  }, [countryCode, mapKey]);

  const handleCountryChange = (code) => {
    setCountryCode(code);
    setMapKey(Object.keys(COUNTRIES[code].maps)[0]);
  };

  const getName = (id) => (id ? names[id - 1] : "");

  const colorMapLiteral = `{ ${Object.entries(colorMap)
    .map(([key, value]) => `${key}: "${value}"`)
    .join(", ")} }`;

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
      <div className="flex flex-row flex-wrap items-start justify-between w-full mb-6 gap-4 sm:gap-6">
        <Dropdown
          label="Country"
          value={countryCode}
          options={countryOptions}
          onChange={handleCountryChange}
          emptyText="No countries match"
        />

        <Dropdown
          label="Map"
          value={mapKey}
          options={mapOptions}
          onChange={setMapKey}
        />

        <div className="flex flex-row w-full sm:w-auto gap-4">
          <Readout
            label="Hovered"
            value={getName(hoveredId)}
            color="text-[#60a5fa]"
          />
          <Readout
            label="Selected"
            value={getName(clickedId)}
            color="text-[#023f45]"
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-start justify-between w-full mb-6 gap-4 sm:gap-6">
        <div className="flex flex-col gap-2 min-w-0">
          <span className={labelClass}>Theme Colors</span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-h-11">
            <ColorInput
              id="defaultColor"
              label="Default"
              value={defaultColor}
              onChange={setDefaultColor}
            />
            <ColorInput
              id="hoverColor"
              label="Hover"
              value={hoverColor}
              onChange={setHoverColor}
            />
            <ColorInput
              id="activeColor"
              label="Active"
              value={activeColor}
              onChange={setActiveColor}
            />
            <ColorInput
              id="strokeColor"
              label="Stroke"
              value={strokeColor}
              onChange={setStrokeColor}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-48 max-w-sm">
          <div className="flex items-center gap-2">
            <label htmlFor="strokeWidth" className={propNameClass}>
              strokeWidth
            </label>
            <span className="font-mono text-sm text-[#023f45]">
              {strokeWidth}
            </span>
          </div>
          <div className="flex items-center min-h-11">
            <input
              id="strokeWidth"
              type="range"
              min={STROKE.min}
              max={STROKE.max}
              step={STROKE.step}
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="w-full accent-[#023f45] cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className={labelClass}>Attributions</span>
          <div className="flex items-center min-h-11">
            <button
              type="button"
              aria-pressed={showAttributions}
              onClick={() => setShowAttributions((prev) => !prev)}
              className={`relative shrink-0 w-10 h-5 rounded-full transition-colors duration-200 cursor-pointer ${
                showAttributions ? "bg-[#023f45]" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute left-0 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                  showAttributions ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full min-w-0 mb-6">
        <span className={propNameClass}>colorMap</span>
        <pre className="w-full min-w-0 max-w-full overflow-x-auto whitespace-pre-wrap wrap-break-word text-xs sm:text-sm bg-gray-100 text-[#023f45] px-3 py-2 rounded-lg border border-gray-200 shadow-sm m-0 font-mono">
          {colorMapLiteral}
        </pre>
      </div>

      <div className="relative p-2 sm:p-6 w-full min-w-0 flex justify-center bg-gray-50 rounded-xl shadow-inner border border-gray-100">
        <Component
          className="w-full max-w-255.5 h-64 sm:h-99 md:h-118.75 lg:h-158.5"
          color={defaultColor}
          hoverColor={hoverColor}
          activeColor={activeColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          colorMap={colorMap}
          showAttributions={showAttributions}
          onHover={(region) => setHoveredId(region ? region.id : null)}
          onSelect={(region) => setClickedId(region ? region.id : null)}
        />
      </div>
    </div>
  );
}

export default MapPlayground;

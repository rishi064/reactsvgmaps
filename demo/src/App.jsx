import MapNepal from "./components/MapNepal";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
          React SVG Maps
        </h1>
        <p className="text-gray-500 text-lg">
          An interactive demo of the{" "}
          <a
            href="https://www.npmjs.com/package/react-svg-maps"
            target="_blank"
            rel="noreferrer"
            className="text-[#023f45] font-semibold hover:underline"
          >
            react-svg-maps
          </a>{" "}
          package.
        </p>
      </div>
      
      <div className="w-full max-w-6xl">
        <MapNepal />
      </div>
    </div>
  );
}

export default App;

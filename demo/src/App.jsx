import MapNepal from "./components/MapNepal";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen py-10 w-full mx-auto px-4 bg-gray-50">
      <h1 className="text-center text-4xl font-extrabold mb-8 text-[#023f45]">
        React SVG Maps
      </h1>

      <div className="w-full max-w-6xl flex flex-col gap-12">
        <MapNepal />
      </div>
    </div>
  );
}

export default App;

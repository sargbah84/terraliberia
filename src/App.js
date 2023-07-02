import json from './data.json';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const data = json.data[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-2">

      <div className="relative flex place-items-center animate animate-fadeIn">
        <a href="/" className="inline-block">
          <img
            className="relative"
            src={logo}
            alt="Terra Liberia"
            width={300}
            height="auto"
          />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-3/4 mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Real Estate, Agriculture, Transportation, Technology <br/>and Digital Content Development
          </h3>
          <p className="text-center text-gray-500">
            We're an investment firm focused on helping to build the future of Liberia through investing in the country's most promising entrepreneurs. Our goal is to build a more prosperous and equitable future for all Liberians. Our area of focus currently are Agriculture, Real Estate, Transportation, Technology and Digital Content Development.
          </p>
          <h1 className="text-4xl font-bold text-center text-gray-800 mt-8 mb-4">
            <a href="https://www.facebook.com/terraliberia" className=" hover:text-emerald-800" rel="noreferrer" target='_blank'>Terra Cocoa</a> <span className="text-gray-300">|</span> <a href="https://www.trueliberia.com" rel="noreferrer" target='_blank'>TrueLiberia</a> <span className="text-gray-300">|</span> <a href="#coming-soon" rel="noreferrer" className="text-gray-300">Terra Estates</a>
          </h1>
        </div>
      </div>
      <div className="flex">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-4 items-center justify-center">
            {data.gallary.map((image) => (
              <a href={image.link} key={image.id}>
                <img
                  className="relative"
                  src={image.link}
                  alt="Terra Cocoa"
                  width={300}
                  height={300}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 text-center">
        <p className="text-gray-500">&copy; 2023 <a href="/" className="decoration-underline">Terra Group of Companies</a>, All Rights Reserved</p>
      </div>
    </main>
  );
}

export default App;

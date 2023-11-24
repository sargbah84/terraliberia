import json from './data.json';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const data = json.data[0];
  const date = new Date();

  return (
    <main className="flex min-h-screen md:p-24 p-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center animated animated-fadeIn">
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
          <div className="w-5/6 md:w-3/4 mx-auto">
            <h3 className="text-1xl w-75 font-bold text-center text-gray-800 mb-4">
              {data.keywords}
            </h3>
            <p className="text-center text-gray-500">
              {data.description}
            </p>
            <h1 className="text-4xl font-bold text-center text-gray-800 mt-8 mb-4">
              <a href="https://www.facebook.com/terraliberia" className="hover:text-emerald-600" rel="noreferrer" target='_blank'>Terra Cocoa</a> <span className="text-gray-300">|</span><a href="https://www.terramarketgroup.com" className="hover:text-emerald-600" rel="noreferrer" target='_blank'>Terra Market Group</a> <span className="text-gray-300">|</span> <a href="https://www.trueliberia.com" className="hover:text-emerald-600" rel="noreferrer" target='_blank'>True Liberia</a> <span className="text-gray-300">|</span> <a href="#coming-soon" rel="noreferrer" className="text-gray-300">Terra Estates</a>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="clearfix">
            <h1 className="text-green-200 text-6xl md:text-9xl font-bold text-center text-gray-800 mt-8 mb-4">
              Communities
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center">
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
        <div className="flex flex-row items-center justify-center bg-green-800 mt-20 py-20">
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            <div className="px-8">
              <h3 className="text-5xl font-bold text-center text-gray-100 mb-2">
                42
              </h3>
              <p className="text-center text-gray-300">
                acres cultivated
              </p>
            </div>
            <div className="px-8">
              <h3 className="text-5xl font-bold text-center text-gray-100 mb-2">
                20,163
              </h3>
              <p className="text-center text-gray-300">
                cocoa trees planted
              </p>
            </div>
            <div className="px-8">
              <h3 className="text-5xl font-bold text-center text-gray-100 mb-2">
                1,113
              </h3>
              <p className="text-center text-gray-300">
                people impacted
              </p>
            </div>
            <div className="px-8">
              <h3 className="text-5xl font-bold text-center text-gray-100 mb-2">
                4
              </h3>
              <p className="text-center text-gray-300">
                communities
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-8">
          <div className="clearfix">
            <h1 className="text-green-200 text-6xl md:text-9xl font-bold text-center text-gray-800 mt-8 mb-4">
              Our Team
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 items-center justify-center text-center">
            {data.team.map((member) => (
              <a href={member.avatar} key={member.id}>
                <img
                  className="relative rounded-full"
                  src={member.avatar}
                  alt={member.name}
                  width={150}
                  height={150}
                />
                <p className="font-bold text-center text-gray-800 mt-4 mb-0">
                  {member.name}
                </p>
                <span className="text-xs text-center text-gray-500">
                  {member.position}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <p className="text-gray-500">&copy; { date.getFullYear() } <a href="/" className="decoration-underline">Terra Group of Companies</a>, All Rights Reserved</p>
        </div>
      </div>
    </main>
  );
}

export default App;

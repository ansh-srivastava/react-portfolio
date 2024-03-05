

function App() {
  return (
    <div className="flex flex-col text-center items-center ">
      <h1 className="text-xl text-blue-500 ml-4 ">Hello world</h1>
      <input className="ml-4 mt-4 w-60 border border-black rounded-full px-12" placeholder="enter your name"></input>
      <button className="w-60 mt-4 border border-black rounded-full ml-4 bg-blue-600">Submit</button>
      <div className="flex flex-row text-center items-center">
      <input className="w-20 mt-4 border border-black rounded-md h-5" type="checkbox"></input>
      <h2 className="mt-4 text-black lg:text-black sm:text-red-400">Stay Signed in</h2>
      </div>
      <img src="https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg" className="w-80 h-40 mt-4 ml-4" alt="Example image"/>
    </div>
  );
}

export default App;

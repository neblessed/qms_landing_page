import './App.css';
import HeaderControls from './components/header/HeaderControls';
import TryIt from './components/tryit/TryIt';

function App() {
  return (
    <div>
      <HeaderControls />
      <TryIt></TryIt>
      {/* <div className="mx-24 mt-10">
        <p className="font-bold text-xl mb-10 mt-20 qms">Quality Management System</p>
        <p className="text-8xl featured font-bold">Full-featured quality system,<br/>
          business-oriented to achieve <br/> results aligned with QA engineers
        </p>
        <p className="text-3xl mt-10 text-stone-500 featured font-medium">Organize top-level quality control at all stages <br/> of the development and creation of your dream projects.</p>
        <div className="block h-96 bg-stone-400 mt-10 rounded-3xl">.</div>
      </div> */}
    </div>
  );
}

export default App;

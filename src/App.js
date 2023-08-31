
import './App.css';
import Preloader from './Preloader';

function App() {

  const container={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor:'#f4e3c1',
  }

  const textStyle = {
    textAlign: 'center',
    color: 'Black', // Change this to your desired text color
  };
  return (
    <div style={container}>

      <Preloader/>
      <div style={textStyle}>
      <h1>Beyond Basic</h1>
      <h2>DARE TO GO BEYOND</h2>

      <h4>It's something beyond brute force There is an optimal</h4>
      <h4>It's something beyond O(N) There is a O(1)</h4>
      <h4>It's something beyond recursion there is a dynamic programming</h4>
      <h4>It's something beyond self There is a team with selfless mentors</h4>
      <h4>It's something beyond you expect</h4>
      </div>

    </div>
  );
}

export default App;

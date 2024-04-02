import './App.css';

const games = [
  { title: "Dragon's Dogma 2", price: "69.99", rating: "Mixed"},
  { title: "Path of Exile", price: "Free", rating: "Positive"},
  { title: "Call of Duty: Modern Warfare III", price: "69.99", rating: "Negative"}
];

function DisplayGames() {
  const listGames = games.map(game => {
    let ratingColor = 'orange';
    switch (game.rating) {
      case "Positive":
        ratingColor = 'green';
        break;
      
      case "Mixed":
        ratingColor = 'orange';
        break;

      case "Negative":
        ratingColor = 'red';
        break;
    
      default:
        break;
    }

    return (
      <li className='game'>
        <h2>{game.title}</h2>
        <h3>{game.price}</h3>
        <p>
          Rating: <strong style={{ color: ratingColor }}>{game.rating}</strong>
        </p>
      </li>
    );
  });
  return (
      <ul>{listGames}</ul>
  );
}

function UselessButton() {
  return (
    <>
      <h3>This button does nothing!</h3>
      <button>Press me I guess...</button>
    </>
  );
}

function PageBreak() {
  let pageBreak = "";

  for (let i = 0; i < 75; i++){
    pageBreak = pageBreak + "-";
  }

  return (
    <p><strong>{pageBreak}</strong></p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayGames />
        <PageBreak />
        <UselessButton />
      </header>
    </div>
  );
}

export default App;

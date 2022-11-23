import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={require("./logo.png")} alt="Versículo do Dia" width={30}/>
        Versículo do Dia
      </div>
      <div className="app-body">
        <div className="dailyVersesWrapper" id="dailyVersesWrapper"></div>
        <div className="explain">
          Procurei uma extensão do Chrome para ver versículos do dia de forma
          facilitada e não encontrei nenhuma. Deus então tocou em meu coração
          para que eu desenvolvesse uma, e através desta pudesse abençoar e
          melhorar o dia das pessoas que a usassem.
          <p>Deus abençoe à todos.</p>
        </div>
        <div className="copyright">Copyright <a href="http://arenacode.io">Arena Code Software</a></div>
        <div className="credits">
          Créditos para{" "}
          <a href="https://dailyverses.net/">https://dailyverses.net/</a>
          {" "}na API.
          <br/>
          <a href="https://www.flaticon.com/free-icons/bible" title="bible icons">Bible icons created by Freepik - Flaticon</a>
        </div>
        
      </div>
    </div>
  );
}

export default App;

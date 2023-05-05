import './App.css'
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Bar from './Bar';




function App() {
  return(
    <div className='App'>
    <Bar/>
    <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries " fetchUrl={requests.fetchActionMovies}/>

    </div>
  );

}





export default App;
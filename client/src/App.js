import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_ANIMES = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(type: ANIME) {
        id
        title {
          romaji
        }
      }
    }
  }
`;
function App() {
    const { loading, error, data } = useQuery(GET_ANIMES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
      <div className="App">
          <h1>Animes</h1>
          <ul>
              {data.Page.media.map((anime) => (
                  <li key={anime.id}>{anime.title.romaji}</li>
              ))}
          </ul>
      </div>
  );
}

export default App;

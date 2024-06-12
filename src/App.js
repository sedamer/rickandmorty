import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useEffect, useState } from "react";

import Cards from "./components/Cards/cards";
import Filters from "./components/Filters/filters";
import Pagination from "./components/Pagination/pagination";
import Search from "./components/Search/search";

function App() {
  let [pageNumber, setPageNumber] = useState(1); //state tanımlama
  let [fetchData, updateFetchData] = useState([]);
  const [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;

  // dinamik oluşturulan API URLsi
  let { info, results } = fetchData;
  console.log(results);
  // use Effect bileşen her render edildiğinde side effectsleri yönetmek için kullanılır.
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); //Async IIFE(Immediate-Invoked Function Expression)
      //Async Await kullanarak veri çekmek için tanımlanan ve heöen çağırılan anonim asenkron fonksiyon.
      //fetch(api) : url sine bir GET isteği gönderir.
      //.then(res => res.json()) : Gelen yanıtı JSON formatına dönüştürür.

      //await: fetch isteğinin tamamlanmasını bekler ve sonucu data değişkenine atar.

      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <div className="col-md-12 text-center">
        <h1 className="display-4">
          Rick & Morty <span className="badge bg-secondary">Wiki</span>
        </h1>
      </div>
      <div>
        <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Pagination info={info} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
}

export default App;

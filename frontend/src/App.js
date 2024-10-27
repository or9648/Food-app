import "./App.css";
import Filters from "./component/Filters";
import Header from "./component/Header";
import Mainsection from "./component/Mainsection";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const foodurl = 'http://localhost:9000';

  useEffect(() => {
    fetch(foodurl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchValue) => {
    filterData(searchValue, selectedType);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    filterData('', type);
  };

  const filterData = (searchValue, type) => {
    let filtered = data;
    if (type) {
      filtered = filtered.filter((food) => food.type.toLowerCase() === type.toLowerCase());
    }
    if (searchValue) {
      filtered = filtered.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setFilteredData(filtered);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-slate-700 flex flex-col">
      <Header onSearch={handleSearch} onTypeChange={handleTypeChange} />
      <Filters onTypeChange={handleTypeChange} />
      <Mainsection data={filteredData} loading={loading} error={error} />
    </div>
  );
}

export default App;

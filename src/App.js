import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/cardbox/card';
import Filter from './components/filter';



function App() {
    //data state
    const [data, setData] = useState([]);

    //copy of original data state
    const [fData, setfData] = useState([]);

    //For fatch the JSON content data with API
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(json => setData(json.results))
            .catch(err => console.error(err));
    }, []); //one time array run

    // set the the filter data in array
    useEffect(() => {
        setfData(data);
    }, [data]);

    // create const for key handler from input pass the value
    const handleSearch = key => {
        //filter the results by name 
        const getFilterData = data.filter(item => {
            return item.name.toLowerCase().indexOf(key) !== -1;
        });
        setfData(getFilterData);
    }

    const compare = (a, b) => {
        let name1 = a.name.toUpperCase();
        let name2 = b.name.toUpperCase();
        let count = 0;
        if (name1 < name2) {
            count = -1;
        }
        return count;
    }

    const handleAscending = () => {
        let newFdata = fData.sort(compare);
        setfData([...newFdata]);
    }

    const handleDescending = () => {
        handleAscending();
        let newFdata = fData.reverse();
        setfData([...newFdata]);
    }


    //for search the character from list of items cards
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <div className="banner"></div>
                <div className="img-header-bottom-mask"></div>
            </div>
            <div className="item-wrapper">
                <Filter handleSearch={handleSearch} handleAscending={handleAscending} handleDescending={handleDescending} />
                <div className="item-container">
                    {
                        //copy or original array item
                        fData && fData.map((item, index) => {
                            return <Card
                                key={item.id}
                                item={item}
                            />
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default App;
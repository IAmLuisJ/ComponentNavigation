import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm] = useState('Programming');
    const [ results, setResults] = useState([]);

    useEffect(()=> {
        const search = async () => {

        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                format: 'json',
                origin: '*',
                srsearch: term
            },
        })
        setResults(data.query.search);
    }

    if (term && !results.length) {
        search();
    } else {
        const prevTime = setTimeout( ()=> {
            if (term) {
                search();
            }
        }, 1000);
    
        return () => {
            clearTimeout(prevTime);
        }
    }
        
    }, [term]);

  

    const onType = (input)=> {
        setTerm(input);
    }

    const renderedList = results.map((item) => {
        return (
            <div key={item.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${item.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">{item.title}</div>
                    <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Search</label>
                <input type="text" value={term} onChange={(e)=> onType(e.target.value)} />
            </div>
        </div>
        <div className="ui celled list">{renderedList}</div>
    </div>
    )
}

export default Search;
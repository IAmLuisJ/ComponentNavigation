import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text})=> {
    const [tranlatedText, setTranslatedText] = useState('');
    const [deBouncedText, setDebouncedText] = useState(text);

    

    useEffect(()=> {
        const timerID = setTimeout(() => {
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timerID);
        }

    }, [text])

    useEffect(() => {
        const doTranslate = async () => {
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
            params: {
                q: deBouncedText,
                target: language,
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
            }
        });
        setTranslatedText(data.data.translations[0].translatedText);
        }
        doTranslate();
    }, [language, deBouncedText])

return <div><h1 className="ui header">{tranlatedText}</h1></div>
}

export default Convert;
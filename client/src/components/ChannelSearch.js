import React, {useState, useEffect} from 'react';
import { getChannels, useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async(text) => {
        try{

        } catch(error){
            setQuery('')
        }
    }

    onSearch = (e) => {
        e.preventDefault();

        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value)
    }
  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon/>
            </div>
        </div>
        <input 
            className='channel-search__input__text'
            placeholder='Search'
            type='text'
            value={query}
            onChange={onSearch}
            />
    </div>
  )
}

export default ChannelSearch
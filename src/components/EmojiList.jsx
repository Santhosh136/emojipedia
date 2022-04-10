import React from 'react';
import Entry from './Entry';
import {emojipedia} from '../emojipedia';

const EmojiList = () => 
  <dl className="dictionary">
    {emojipedia.map((emojiCard) => {
      return <Entry emoji={emojiCard.emoji} title={emojiCard.name} desc={emojiCard.meaning} key={emojiCard.id}/>
    })}
  </dl>

export default EmojiList;
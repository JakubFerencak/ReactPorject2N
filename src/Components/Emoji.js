import React from 'react';
import './Emoji.css'; 

const emojiList = [
  '🍲', '🍕', '🥗', '🍔', '🍟', '🌮', '🌯', '🥙', '🍣', '🍱',
  '🍜', '🥘', '🥞', '🧁', '🍰', '🎂', '🍩', '🍪', '🍫', '🍿',
  '🥐', '🥖', '🧀', '🥓', '🥩', '🍗', '🍖', '🥚', '🥛', '🧂'
];

function EmojiCloud() {
  return (
    <>
      {emojiList.map((emoji, index) => (
        <div key={index} className={`emoji emoji-${index + 1}`}>
          {emoji}
        </div>
      ))}
    </>
  );
}

export default EmojiCloud;

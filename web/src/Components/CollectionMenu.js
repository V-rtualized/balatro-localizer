import React from "react";
import CollectionButton from "./CollectionButton";

const CollectionMenu = () => {
  return (
    <div style={{ 
      width: '600px', 
      height: '600px', 
      backgroundColor: '#405053', 
      border: 'solid 3px #B6BECB', 
      borderRadius: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <CollectionButton large text='Jokers'/>
        <CollectionButton text='Decks'/>
        <CollectionButton text='Vochers'/>
        <CollectionButton text='Tarot Cards' color='#9273C2' altColor='#5a4476' />
        <CollectionButton text='Planet Cards' color='#4AA1C2' altColor='#2d6275' />
        <CollectionButton text='Spectral Cards' color='#4371EC' altColor='#264293' />
      </div>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        <CollectionButton text='Enhanced Cards'/>
        <CollectionButton text='Seals'/>
        <CollectionButton text='Editions'/>
        <CollectionButton text='Booster Packs'/>
        <CollectionButton text='Tags'/>
        <CollectionButton large text='Blinds'/>
        <CollectionButton text='Other'/>
      </div>
    </div>
  );
}

export default CollectionMenu;

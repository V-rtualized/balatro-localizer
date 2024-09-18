import React from "react";
import CollectionButton from "./CollectionButton";

const CollectionMenu = () => {
  return (
    <>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
      <CollectionButton large text='Jokers' link={'/jokers'}/>
      <CollectionButton text='Decks' link={'/decks'}/>
      <CollectionButton text='Vochers' link={'/vouchers'}/>
      <CollectionButton text='Tarot Cards' color='#9273C2' altColor='#5a4476' link={'/tarots'}/>
      <CollectionButton text='Planet Cards' color='#4AA1C2' altColor='#2d6275' link={'/planets'}/>
      <CollectionButton text='Spectral Cards' color='#4371EC' altColor='#264293'  link={'/spectrals'}/>
    </div>
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
      <CollectionButton text='Enhanced Cards' link={'/enhanced'}/>
      <CollectionButton text='Seals' link={'/seals'}/>
      <CollectionButton text='Editions' link={'/editions'}/>
      <CollectionButton text='Booster Packs' link={'/boosters'}/>
      <CollectionButton text='Tags' link={'/tags'}/>
      <CollectionButton large text='Blinds' link={'/blinds'}/>
      <CollectionButton text='Other' link={'/other'}/>
    </div>
    </>
  );
}

export default CollectionMenu;

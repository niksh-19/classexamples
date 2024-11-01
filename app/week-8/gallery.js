"use client"
import { useEffect, useState } from "react";
import ArtWork from "./artwork";

 export default function Gallery() {

    const [artworkIds, setArtworkIds] = useState([]);
    const [galleryDisplay, setGalleryDisplay] = useState([]);

    async function getListofArtIds(){
        try {
            const response = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects"
            )
            if( !response.ok ) console.log(response.statusText)
            const data = await response.json();
            let shuffled= [...data.objectIDs];
            shuffled = shuffled.sort( (a,b) => 0.5 - Math.random() );
            shuffled = shuffled.slice(0, 10);
            // console.dir(shuffled);
            setArtworkIds(shuffled);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        getListofArtIds();
    }, []);

    async function getArtworkById(artId){
        try {
            const response = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
            );
            if( !response.ok ) console.log(response.statusText)
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        ( async () => {
            if (artworkIds != null && artworkIds.length > 0){
                let thisGallery = [];
                for (let i = 0; i < artworkIds.length; i++) {
                    let thisArt = await getArtworkById( artworkIds[i]) ;
                    thisGallery.push(thisArt);
                }
                console.log(thisGallery);
                setGalleryDisplay(thisGallery);
            }
        }) ();
    } , [artworkIds])

    return(
        <section>
            {
                galleryDisplay.map ( (art) => <ArtWork artObj={art} key={art.objectID} />)
            }
        </section>
    )
 }
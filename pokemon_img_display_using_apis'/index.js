async function fetchdata() {
    try{

        const pokemonname=document.getElementById("pokemonname").value.toLowerCase();

        const reponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

        if(!reponse.ok){
            throw new Error("Could not fetch resurce");
        }
        const data = await reponse.json();
        const PokemonSprite=data.sprites.front_default;
        const ImgElement=document.getElementById("PokemonSprite");

        ImgElement.src=PokemonSprite;
        ImgElement.style.display="block";
    }
    catch(error){
        console.error(error);
    } 
}

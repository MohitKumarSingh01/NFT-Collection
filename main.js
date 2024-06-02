// Step 1: Initialize an empty array for storing NFTs
let NFTsCollection = [];

// Step 2: Define the function to mint a new NFT
function mintNFT(title, artist, year) {
    const newNFT = {
        title,
        artist,
        year
    };
    NFTsCollection.push(newNFT);
}

// Step 3: Define the function to display all existing NFTs
function displayNFTs() {
    NFTsCollection.forEach((NFT, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Title: ${NFT.title}`);
        console.log(`Artist: ${NFT.artist}`);
        console.log(`Year: ${NFT.year}`);
        console.log('---');
    });
}

// Step 4: Define the function to get the total supply of NFTs
function getTotalNFTSupply() {
    return NFTsCollection.length;
}

// Mint a few NFTs
mintNFT('Mahalaxmi', 'Raja Ravi Varma', 1895);
mintNFT('Bharat Mata', 'Abanindranath Tagore', 1905);
mintNFT('Ganesha', 'M.F. Husain', 1970);

// Display all NFTs
console.log('All Existing NFTs:');
displayNFTs();

// Print the total number of NFTs minted to the console
console.log(`Total NFT Supply: ${getTotalNFTSupply()}`);

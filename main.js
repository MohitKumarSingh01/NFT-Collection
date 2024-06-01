// Step 1: Initialize an empty array for storing NFTs
let nonFungibleTokens = [];

// Step 2: Define the function to mint a new NFT
function createToken(name, description, owner) {
    const newToken = {
        name,
        description,
        owner
    };
    nonFungibleTokens.push(newToken);
}

// Step 3: Define the function to display all existing NFTs
function displayTokens() {
    nonFungibleTokens.forEach((token, index) => {
        console.log(`Token ${index + 1}:`);
        console.log(`Name: ${token.name}`);
        console.log(`Description: ${token.description}`);
        console.log(`Owner: ${token.owner}`);
        console.log('---');
    });
}

// Step 4: Define the function to get the total supply of NFTs
function totalSupply() {
    return nonFungibleTokens.length;
}

// Mint a few NFTs
createToken('First Token', 'This is the first token description.', 'Mohit');
createToken('Second Token', 'This is the second token description.', 'Manjeet');
createToken('Third Token', 'This is the third token description.', 'Deepu');

// Display all NFTs
console.log('All Existing NFTs:');
displayTokens();

// Print the total number of NFTs minted to the console
console.log(`Total Supply: ${totalSupply()}`);

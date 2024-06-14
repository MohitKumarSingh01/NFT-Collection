# NFT Collection Manager

This project is a simple JavaScript application that manages a collection of Non-Fungible Tokens (NFTs). It allows users to mint new NFTs, display all existing NFTs, and get the total supply of NFTs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Code Explanation](#code-explanation)

## Introduction

NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of a specific item or piece of content, often associated with digital art, music, or other digital media. This application provides a basic interface to manage a collection of NFTs using JavaScript.

## Features

- Mint new NFTs with a title, artist, and year.
- Display all existing NFTs in the collection.
- Get the total number of NFTs in the collection.

## Getting Started

To get started with this project, you can simply copy the code into a JavaScript environment such as a web browser's console or a Node.js environment.

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox) or a Node.js environment.

## Usage

1. **Mint a New NFT:**

   Use the `mintNFT` function to add a new NFT to the collection. Provide the title, artist, and year as arguments.

   ```javascript
   mintNFT('Title', 'Artist', 2022);
   ```

2. **Display All NFTs:**

   Use the `displayNFTs` function to print all existing NFTs to the console.

   ```javascript
   displayNFTs();
   ```

3. **Get Total NFT Supply:**

   Use the `getTotalNFTSupply` function to get the total number of NFTs in the collection.

   ```javascript
   console.log(`Total NFT Supply: ${getTotalNFTSupply()}`);
   ```

## Code Explanation

### Initialize an Empty Array

```javascript
let NFTsCollection = [];
```

- Initializes an empty array to store the NFT objects.

### Mint a New NFT

```javascript
function mintNFT(title, artist, year) {
    const newNFT = { title, artist, year };
    NFTsCollection.push(newNFT);
}
```

- Defines the `mintNFT` function to create a new NFT object and add it to the `NFTsCollection` array.

### Display All NFTs

```javascript
function displayNFTs() {
    NFTsCollection.forEach((NFT, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Title: ${NFT.title}`);
        console.log(`Artist: ${NFT.artist}`);
        console.log(`Year: ${NFT.year}`);
        console.log('---');
    });
}
```

- Defines the `displayNFTs` function to iterate over the `NFTsCollection` array and print the details of each NFT.

### Get Total NFT Supply

```javascript
function getTotalNFTSupply() {
    return NFTsCollection.length;
}
```

- Defines the `getTotalNFTSupply` function to return the total number of NFTs in the `NFTsCollection` array.

### Example Usage

```javascript
// Mint a few NFTs
mintNFT('Mahalaxmi', 'Raja Ravi Varma', 1895);
mintNFT('Bharat Mata', 'Abanindranath Tagore', 1905);
mintNFT('Ganesha', 'M.F. Husain', 1970);

// Display all NFTs
console.log('All Existing NFTs:');
displayNFTs();

// Print the total number of NFTs minted to the console
console.log(`Total NFT Supply: ${getTotalNFTSupply()}`);
```

- Demonstrates how to use the functions to manage the NFT collection.

## License

This project is open source and available under the [MIT License](LICENSE).

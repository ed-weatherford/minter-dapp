require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "dawgonitclub";
const description = "Dawg-on-it Club Project";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  { //Monoply Man Profile 1
    growEditionSizeTo: 10,
    layersOrder: [
      {name: "15 Backgrounds"},
      {name: "15.1 Backgrounds#20:15.2 Backgrounds#50:16 Blank#70"},
      {name: "14 Profiles"},
      {name: "13.1 Body Marks#30:16 Blank#70"},
      {name: "13.4 MM Shirts"},
      {name: "13.4 MM Bow Ties:16 Blank"},
      {name: "13.4 MM Tux:13.4 MM Vest:16 Blank"},
      {name: "12.1 Mouths"},
      {name: "12.2 Noses"},
      {name: "12 Eyes#100:12 Eyes Terminator#20"},
      {name: "7 Mustache MM"},
      {name: "11.4 Jewlry Nose Ring#30:16 Blank#70"},
      {name: "5 Glasses Monocles"},
      {name: "2.1 Hats Top Hat"},
      {name: "4.1 Ears Main"},
      {name: "11.1 Jewlry Earrings Main High#30:16 Blank#70"},
      {name: "11.1 Jewlry Earrings Main Med#30:16 Blank#70"},
      {name: "11.1 Jewlry Earrings Main Low#30:16 Blank#70"},
    ],
  },
  { //Batman Profile 2
    growEditionSizeTo: 20,
    layersOrder: [
      {name: "15 Backgrounds"},
      {name: "15.1 Backgrounds#20:15.2 Backgrounds#50:16 Blank#70"},
      {name: "14 Profiles"},
      {name: "12.1 Mouths"},
      {name: "12.3 Facial"},
      {name: "12 Eyes:0 Masks Batman Eyes:12 Eyes Terminator"},
      {name: "0 Masks Batman"},
      {name: "13.4 MM Shirts"},
      {name: "13.4 MM Bow Ties:16 Blank"},
      {name: "13.4 MM Tux:13.4 MM Vest:16 Blank"},
    ],
  },
  { //Hannibal Profile 4.0
    growEditionSizeTo: 30,
    layersOrder: [
      {name: "15 Backgrounds"},
      {name: "15.1 Backgrounds#20:15.2 Backgrounds#50"},
      {name: "14 Profiles"},
      {name: "13.1 Prison Suit"},
      {name: "9 Collars"},
      {name: "9.1 Buckles"},
      {name: "8.1 Tags Ring"},
      {name: "8.2 Tags Round"},
      {name: "8.2 Tags Round Logo"},
      {name: "12 Eyes#100:12 Eyes Terminator#20"},
      {name: "6 Muzzles"},
      {name: "6 Muzzles Strap Top"},
      {name: "3.4 Hair Hannibal"},
      {name: "5 Glasses Spock Ears#30:16 Blank#70"},
      {name: "4.2 Ears Spock Hannibal"},
      {name: "11.3 Jewlry Earrings Spock Hannibal High#30:16 Blank#70"},
      {name: "11.3 Jewlry Earrings Spock Hannibal Med#30:16 Blank#70"},
      {name: "11.3 Jewlry Earrings Spock Hannibal Low#30:16 Blank#70"},
    ],
  },
  { //Hannibal Profile 4.1
    growEditionSizeTo: 40,
    layersOrder: [
      {name: "15 Backgrounds"},
      {name: "15.1 Backgrounds#20:15.2 Backgrounds#50"},
      {name: "14 Profiles"},
      {name: "13 Shirt"},
      {name: "13 Shirt Logos"},
      {name: "11 Jewlry Chain Shirt#30:16 Blank#70"},
      {name: "9 Collars"},
      {name: "9.1 Buckles"},
      {name: "8.1 Tags Ring"},
      {name: "8 Tags Bone"},
      {name: "8 Tags Bone Names"},
      {name: "12 Eyes#100:12 Eyes Terminator#20"},
      {name: "6 Muzzles"},
      {name: "6 Muzzles Strap Top"},
      {name: "3.4 Hair Hannibal"},
      {name: "5 Glasses Spock Ears#30:16 Blank#70"},
      {name: "4.2 Ears Spock Hannibal"},
      {name: "11.3 Jewlry Earrings Spock Hannibal High#30:16 Blank#70"},
      {name: "11.3 Jewlry Earrings Spock Hannibal Med#30:16 Blank#70"},
      {name: "11.3 Jewlry Earrings Spock Hannibal Low#30:16 Blank#70"},
    ],
  },
  { //Hannibal Profile 4.2
    growEditionSizeTo: 50,
    layersOrder: [
      {name: "15 Backgrounds"},
      {name: "15.1 Backgrounds#20:15.2 Backgrounds#50"},
      {name: "14 Profiles"},
      {name: "13.2 Hoodie"},
      {name: "13.2 Hoodie Logos"},
      {name: "11 Jewlry Chain Hoodie#30:16 Blank#70"},
      {name: "9 Collars"},
      {name: "9.1 Buckles"},
      {name: "8.1 Tags Ring"},
      {name: "8 Tags Bone"},
      {name: "8 Tags Bone Names"},
      {name: "12 Eyes#100:12 Eyes Terminator#20"},
      {name: "6 Muzzles"},
      {name: "6 Muzzles Strap Top"},
      {name: "3.4 Hair Hannibal"},
      {name: "5 Glasses Spock Ears#30:16 Blank#70"},
      {name: "4.2 Ears Spock Hannibal"},
      {name: "11.3 Jewlry Earrings Spock Hannibal High#30:16 Blank#70"},
      {name: "11.3 Jewlry Earrings Spock Hannibal Med#30:16 Blank#70"},
      {name: "11.3 Jewlry Earrings Spock Hannibal Low#30:16 Blank#70"},
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2084,
  height: 2084,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://www.dawgonitclub.com/", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'dawgonitclub';
const CONTRACT_SYMBOL = 'DOIC';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x0197656F4339E71B8401A3a5Be12641A58eD0E95';
const TREASURY_ADDRESS = '0x0197656F4339E71B8401A3a5Be12641A58eD0E95';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-03-20T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x0197656F4339E71B8401A3a5Be12641A58eD0E95"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};

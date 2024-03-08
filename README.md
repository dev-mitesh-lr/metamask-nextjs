# Next.js Application with MetaMask Integration and User Sign-In

This is a Next.js application that allows users to sign in and interact with MetaMask wallets. Users can connect their MetaMask wallets directly to the application and view their wallet address along with rewards points on the home page.

## Features

User Sign-In: Users can sign in using their credentials. If a user is not registered in the database, they are registered upon their first sign-in.
MetaMask Integration: Users can connect their MetaMask wallets directly to the application and view their wallet address on the home page.
Rewards Points: Users are assigned rewards points upon sign-in, which are displayed on the home page.

### Libraries Used

- @nextui-org/react: UI library for building the user interface.
- axios: HTTP client for making API requests.
- crypto-js: Library for cryptographic functions.
- ethers: Library for interacting with the Ethereum blockchain and wallets.
- framer-motion: Library for creating animations.
- jose: JSON Web Token (JWT) library for creating and verifying tokens.
- mongodb: MongoDB driver for Node.js.
- mongoose: MongoDB object modeling for Node.js.

## Installation

#### Clone the repository:

- bash
- Copy code
- git clone <repository_url>

#### Install dependencies:

- bash
- Copy code
- cd <project_folder>
- npm install
- check next.config and add env

#### Start the application:

- bash
- Copy code
- npm run dev

## Usage

### Sign in using your credentials.

- Connect your MetaMask wallet to view your wallet address and rewards points.

## APIs

- /api/signin: Endpoint for user sign-in.
- /api/user/:userId: Endpoint for retrieving user data by user ID.

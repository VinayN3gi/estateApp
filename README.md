
  
  ## 📋 <a name="table">Table of Contents</a>
  
  1. [Introduction](#introduction)
  2. [Tech Stack](#tech-stack)
  3. [Features](#features)
  4. [Quick Start](#quick-start)
  5. [Snippets](#snippets)
  
  ## Introduction
  A modern and responsive real estate mobile application built with Expo and React Native, designed to help users browse, explore, and manage property listings seamlessly. 
  This app showcases smooth UI interactions, authentication, and dynamic data handling using a powerful modern tech stack.
  
  
  ## <a name="tech-stack">Tech Stack</a>
  
  - Expo
  - React Native
  - TypeScript
  - Nativewind
  - Appwrite
  - Tailwind CSS
  
  ## <a name="features">Features</a>
  
  - **Authentication with Appwrite**: Secure and seamless user sign-ins using Appwrite’s authentication service.
  
  - **Home Page**: Displays the latest and recommended properties with powerful search and filter functionality.
  
  - **Explore Page**: Allows users to browse all types of properties with a clean and intuitive interface.
  
  - **Property Details Page**: Provides comprehensive information about individual properties, including images and key details.
  
  - **Profile Page**: Customizable user settings and profile management
  
  - **Centralized Data Fetching**: Custom-built solution inspired by TanStack’s useQuery for efficient API calls.
  
  ## <a name="quick-start">Quick Start</a>
  
  Follow these steps to set up the project locally on your machine.
  
  **Prerequisites**
  
  Make sure you have the following installed on your machine:
  
  - [Git](https://git-scm.com/)
  - [Node.js](https://nodejs.org/en)
  - [npm](https://www.npmjs.com/) (Node Package Manager)
  
  **Cloning the Repository**
  
  ```bash
  git clone https://github.com/VinayN3gi/estateApp.git
  cd estateApp
  ```
  
  **Installation** 
  
  ```bash
  npm install
  ```
  
  **Set Up Environment Variables**
  
  Create a new file named `.env.local` in the root of your project and add the following content:
  
  ```env
  EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
  EXPO_PUBLIC_APPWRITE_PROJECT_ID=
  EXPO_PUBLIC_APPWRITE_DATABASE_ID=
  EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=
  EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=
  ```
  
  Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up & creating a new project on the [Appwrite website](https://apwr.dev/JSM050).
  
  **Start the app**
     
  ```bash
   npx expo start
  ```
  
  ## <a name="snippets">🕸️ Snippets</a>
  
  <details>
  <summary><code>lib/data.ts</code></summary>
  
  ```ts
  export const galleryImages = [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://unsplash.com/photos/comfort-room-with-white-bathtub-and-brown-wooden-cabinets-CMejBwGAdGk",
    "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1641910532059-ad684fd3049c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600435335786-d74d2bb6de37?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1635108198979-9806fdf275c6?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  
  export const propertiesImages = [
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561753757-d8880c5a3551?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551241090-67de81d3541c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697299262049-e9b5fa1e9761?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719299225324-301bad5c333c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516095901529-0ef7be431a4f?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720432972486-2d53db5badf0?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  ```
  
  </details>
  
  <details>
  <summary><code>lib/seed.ts</code></summary>
  
  ```ts
    import { ID } from "react-native-appwrite";
    import { databases, config } from "./appwrite";
    import {
    galleryImages,
    propertiesImages,
    } from "./data";

    const COLLECTIONS = {
    GALLERY: config.galleriesCollectionId,
    PROPERTY: config.propertiesCollectionId,
    };

    const propertyTypes = [
    "House",
    "Townhomes",
    "Condos",
    "Duplexes",
    "Studios",
    "Villa",
    "Appartments",
    "Others",
    ];

    const facilities = [
    "Laundry",
    "Parking",
    "Gym",
    "Wifi",
    "Pet-friendly"
    ];

    function getRandomSubset<T>(
    array: T[],
    minItems: number,
    maxItems: number
    ): T[] {
    if (minItems > maxItems) {
        throw new Error("minItems cannot be greater than maxItems");
    }
    if (minItems < 0 || maxItems > array.length) {
        throw new Error(
        "minItems or maxItems are out of valid range for the array"
        );
    }

    // Generate a random size for the subset within the range [minItems, maxItems]
    const subsetSize =
        Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;

    // Create a copy of the array to avoid modifying the original
    const arrayCopy = [...array];

    // Shuffle the array copy using Fisher-Yates algorithm
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[randomIndex]] = [
        arrayCopy[randomIndex],
        arrayCopy[i],
        ];
    }

    // Return the first `subsetSize` elements of the shuffled array
    return arrayCopy.slice(0, subsetSize);
    }

    async function seed() {
    try {
        // Clear existing data from all collections
        for (const key in COLLECTIONS) {
        const collectionId = COLLECTIONS[key as keyof typeof COLLECTIONS];
        const documents = await databases.listDocuments(
            config.databaseId!,
            collectionId!
        );
        for (const doc of documents.documents) {
            await databases.deleteDocument(
            config.databaseId!,
            collectionId!,
            doc.$id
            );
        }
        }

        console.log("Cleared all existing data.");

        // Seed Galleries
        const galleries = [];
        for (const image of galleryImages) {
        const gallery = await databases.createDocument(
            config.databaseId!,
            COLLECTIONS.GALLERY!,
            ID.unique(),
            { image }
        );
        galleries.push(gallery);
        }

        console.log(`Seeded ${galleries.length} galleries.`);

        // Seed Properties
        for (let i = 1; i <= 20; i++) {
        const assignedGalleries = getRandomSubset(galleries, 3, 8); // 3 to 8 galleries

        const selectedFacilities = facilities
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(Math.random() * facilities.length) + 1);

        const image =
            propertiesImages.length - 1 >= i
            ? propertiesImages[i]
            : propertiesImages[
                Math.floor(Math.random() * propertiesImages.length)
                ];

        const property = await databases.createDocument(
            config.databaseId!,
            COLLECTIONS.PROPERTY!,
            ID.unique(),
            {
            name: `Property ${i}`,
            type: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
            description: `This is the description for Property ${i}.`,
            address: `123 Property Street, City ${i}`,
            geolocation: `192.168.1.${i}, 192.168.1.${i}`,
            price: Math.floor(Math.random() * 9000) + 1000,
            area: Math.floor(Math.random() * 3000) + 500,
            bedrooms: Math.floor(Math.random() * 5) + 1,
            bathrooms: Math.floor(Math.random() * 5) + 1,
            rating: Math.floor(Math.random() * 5) + 1,
            facilities: selectedFacilities,
            image: image,
            gallery: assignedGalleries.map((gallery) => gallery.$id),
            }
        );

        console.log(`Seeded property: ${property.name}`);
        }

        console.log("Data seeding completed.");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
    }

    export default seed;
  ```
  
  </details>

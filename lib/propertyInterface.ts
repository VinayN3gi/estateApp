export interface Property {
    name: string;
    type: string;
    description: string;
    address: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    rating: number;
    facilities: string[];
    image: string;
    geolocation: string;
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    gallery: any[]; // Change `any` to a specific type if your gallery has structure
    $databaseId: string;
    $collectionId: string;
  }
  
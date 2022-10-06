export interface User {
    id: string;
    pantone_value: string;
    name: string;
    year: number;
  }

  export interface ApiResponse {
    data: [User]
  }
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Devon',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sarah',
      email: 'user@example.com',
      password: bcrypt.hashSync('654321'),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'Two-Piece Suit',
        slug: 'two-piece-suit',
        category: 'Co-ords',
        image: '/images/image1.jpg',
        price: 70,
        brand: 'Cass',
        rating: 4.5,
        numReviews: 8,
        countInStock: 20,
        description: 'Stylish two-piece suit comfy wear',
      },
      
      {
        name: 'jeans',
        slug: 'jeans',
        category: 'Trousers',
        image: '/images/image3.jpg',
        price: 90,
        brand: 'Zara',
        rating: 4.5,
        numReviews: 3,
        countInStock: 20,
        description: 'Blue bootcut jeans',
      },
     
      {
        name: 'Kinnstor Jacket',
        slug: 'kinnstor-jacket',
        category: 'Jackets',
        image: '/images/image5.jpg',
        price: 95,
        brand: 'Forever24',
        rating: 3.5,
        numReviews: 7,
        countInStock: 20,
        description: 'Red winter jacket',
      },
      {
        name: 'Little Black Dress',
        slug: 'little-black-dress',
        category: 'Gowns',
        image: '/images/image6.jpg',
        price: 75,
        brand: 'Cass',
        rating: 3.4,
        numReviews: 14,
        countInStock: 20,
        description: 'Black bodycon mid dress',
      },
      {
        name: 'Lounge wear',
        slug: 'lounge-wear',
        category: 'Co-ords',
        image: '/images/image7.jpg',
        price: 55,
        brand: 'H&M',
        rating: 2.4,
        numReviews: 14,
        countInStock: 20,
        description: 'A popular pants',
      },
      {
        name: 'Tank Top',
        slug: 'tank-top',
        category: 'Tops',
        image: '/images/image14.jpg',
        price: 20,
        brand: 'New Look',
        rating: 4.1,
        numReviews: 14,
        countInStock: 20,
        description: 'Confy tank top lounge wear',
      },
      {
        name: 'Sandals',
        slug: 'sandals',
        category: 'Shoes',
        image: '/images/image15.jpg',
        price: 35,
        brand: 'S&S',
        rating: 4.4,
        numReviews: 14,
        countInStock: 20,
        description: 'A white sandals',
      },
      {
        name: 'Bodycon Dress',
        slug: 'two-piece-lounge-wear',
        category: 'Gowns',
        image: '/images/image16.jpg',
        price: 40,
        brand: 'Next',
        rating: 2.4,
        numReviews: 14,
        countInStock: 20,
        description: 'A white bodycon dress',
      },
      
    ],
  };
  
  export default data;
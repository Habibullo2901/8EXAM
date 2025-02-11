export type Product = {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: string[],
    price: number,
    rating: number,
    stock: number
    thumbnail: string,
    title: string
}

export type State = {
    products: {
        products: Product[],
        likedproducts: Product[]
    }
}
import { useEffect } from "react"
import { useState } from "react"

const Test = () => {
    const loggedUser = 1
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Mac Book Pro 16',
            productId: '123ABC',
            discountPrice: 320000,
            actualPrice: 300000,
            rating: 4.5,
            cartUsers:[
                2,4,6,77,8,22
            ],
            watchlistUsers:[
                1,6,2,9,13,77,8,22
            ]
        },
        {
            id: 2,
            name: 'iPhone 13 Pro Max',
            productId: '122ABC',
            discountPrice: 270000,
            actualPrice: 250000,
            rating: 7.5,
            cartUsers:[
                1,4,6,77,8,22
            ],
            watchlistUsers:[
                1,6,2,9,13,77,8,22
            ]
        },
        {
            id: 3,
            name: 'iPhone 12 Pro Max',
            productId: '1222DBC',
            discountPrice: 230000,
            actualPrice: 220000,
            rating: 6.4,
            cartUsers:[
                1,4,6,77,8,22
            ],
            watchlistUsers:[
                1,6,2,9,13,77,8,22
            ]
        },
        {
            id: 4,
            name: 'Dell Shape Shift P45',
            productId: '1212DBC',
            discountPrice: 480000,
            actualPrice: 475000,
            rating: 9.0,
            cartUsers:[
                1,4,6,77,8,22
            ],
            watchlistUsers:[
                1,6,2,9,13,77,8,22
            ]
        },
        {
            id: 5,
            name: 'Samsung S22 PLUS',
            productId: '122DBC',
            discountPrice: 520000,
            actualPrice: 50000,
            rating: 8.7,
            cartUsers:[
                1,4,6,77,8,22
            ],
            watchlistUsers:[
                1,6,2,9,13,77,8,22
            ]
        }
    ])
    
    const [mappedProducts, setmappedProducts] = useState([{}])
    const ifInUserCart = () => {
        const newProduct = products.map(product => {
            if(product.cartUsers.includes(loggedUser)){
                return ({...product, inCart: true})
            }
            else{
                return ({...product, inCart: false})
            }
        })
        setmappedProducts(newProduct)
        console.log(mappedProducts)
    }

    useEffect(() => {
        
    }, [])
    return ( 
        <div className="flex">
            <div onClick={ifInUserCart} className="text-5xl">CLICK ME</div>
        </div>
     );
}
 
export default Test;
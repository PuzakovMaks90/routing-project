const posts = [
    {id: 1, title: 'post1', text: 'post1 text'},
    {id: 2, title: 'post2', text: 'post2 text'},
    {id: 3, title: 'post3', text: 'post3 text'},
    {id: 4, title: 'post4', text: 'post4 text'},
];

const filters = [
    {
        brand: ['ASUS', 'Lenovo', 'HP', 'Samsung'],
        processor: ['Intel i5', 'Intel i7', 'AMD Ryzen 8', 'AMD Ryzen 9'],
        diagonal: ['17', '15', '14'],
        ram: ['12', '16', '8'],
        ssd: ['2T', '1T', '512Gb'],
    }
];

const notebooks = [
    { brand: 'ASUS', processor: 'Intel i7', diagonal: '17', ram: '8', ssd: '1T', price: '40000', model: 'AN1'},
    { brand: 'ASUS', processor: 'Intel i5', diagonal: '17', ram: '8', ssd: '512Gb', price: '30000', model: 'AN2'},
    { brand: 'ASUS', processor: 'AMD Ryzen 8', diagonal: '17', ram: '8', ssd: '512Gb', price: '30000', model: 'AN3'},
    { brand: 'HP', processor: 'Intel i7', diagonal: '17', ram: '8', ssd: '1T', price: '30000', model: 'HP-M1'},
    { brand: 'HP', processor: 'AMD Ryzen 8', diagonal: '17', ram: '8', ssd: '1T', price: '30000', model: 'HP-M2'},
    { brand: 'HP', processor: 'Intel i5', diagonal: '17', ram: '8', ssd: '1T', price: '30000', model: 'HP-M3'},
    { brand: 'Lenovo', processor: 'AMD Ryzen 9', diagonal: '17', ram: '8', ssd: '2T', price: '55000', model: 'LM1'},
    { brand: 'Lenovo', processor: 'Intel i5', diagonal: '17', ram: '8', ssd: '512Gb', price: '25000', model: 'LM2'},
    { brand: 'Lenovo', processor: 'AMD Ryzen 8', diagonal: '17', ram: '8', ssd: '2T', price: '38000', model: 'LM3'},
    { brand: 'Samsung', processor: 'AMD Ryzen 9', diagonal: '17', ram: '8', ssd: '2T', price: '58000', model: 'SM-M1'},
    { brand: 'Samsung', processor: 'AMD Ryzen 8', diagonal: '17', ram: '8', ssd: '512Gb', price: '46000', model: 'SM-M2'},
    { brand: 'Samsung', processor: 'Intel i7', diagonal: '17', ram: '8', ssd: '2T', price: '49000', model: 'SM-M3'},
]
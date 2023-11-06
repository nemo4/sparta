const express = require('express');
const router = express.Router();

const Products = require("../schemas/products.schema");

// 상품 작성 API
router.post('/products', async (req, res) => {
    const { name, contents, regNm, password } = req.body;

    const products = await Products.find({ name });
    if (products.length) {
        return res.status(400).json({
            success: false,
            errorMessage: 'already exist'
        });
    }

    const newProduct = {
        name,
        contents,
        regNm,
        password,
        status: 'FOR_SALE',
        regDt: Date.now()
    };

    const createProducts = await Products.create(newProduct);

    res.json({ products: createProducts });
});

// 상품 목록 조회 API
router.get('/products', async (req, res) => {
    const products = await Products.find({}).sort({ regDt: -1 });

    res.json({ products });
});

// 상품 상세 조회 API
router.get('/products/:_id', async (req, res) => {
    const { _id } = req.params;

    const products = await Products.findById(_id);

    res.json({ products });
});

// 상품 정보 수정 API
router.put('/products/:_id', async (req, res) => {
    const { _id } = req.params;
    const { name, contents, regNm, status, password } = req.body;

    const products = await Products.findById(_id);


    if(products == null){
        res.status(400).json({
            success: false,
            errorMessage: '상품조회실패'
        });
    }
    else if(products.name === name && products.password === password){
        await Products.updateOne(
            { _id }, 
            {
                name, 
                contents, 
                regNm, 
                status, 
                password
            }
        );
        res.json({ 
            success: true
         });
    }
    else{
        res.status(400).json({
            success: false,
            errorMessage: '상품과 비밀번호가 일치하지않음'
        });
    }
});



// 상품 정보 삭제 API
router.delete('/products/:_id', async (req, res) => {
    const { _id } = req.params;
    const { name, password } = req.body;

    const products = await Products.findById(_id);

    if(products == null){
        res.status(400).json({
            success: false,
            errorMessage: '상품조회실패'
        });
    }
    else if(products.name === name && products.password === password){
        await Products.deleteOne({ _id });
        res.json({ 
            success: true
         });
    }
    else{
        res.status(400).json({
            success: false,
            errorMessage: '상품과 비밀번호가 일치하지않음'
        });
    }
});


module.exports = router;
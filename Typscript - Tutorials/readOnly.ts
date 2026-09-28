

type ProductDetails = {
    readonly productId : string;
    productName : string;
    quantity : number;
}


let productDetailInfo : ProductDetails = {
    productId : "PI123",
    productName : "Headset",
    quantity : 10
}

function printProductDetails(productDetailsInformation: ProductDetails ) {
    console.log("Product Id : ", productDetailInfo.productId);
    console.log("Product Name : ", productDetailInfo.productName);
    console.log("Quantity : ", productDetailInfo.quantity);    
}

printProductDetails(productDetailInfo);

productDetailInfo.productId = "PI234";
productDetailInfo.productName = "Head Phone";

console.log();
printProductDetails(productDetailInfo)
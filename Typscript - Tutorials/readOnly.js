"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let productDetailInfo = {
    productId: "PI123",
    productName: "Headset",
    quantity: 10
};
function printProductDetails(productDetailsInformation) {
    console.log("Product Id : ", productDetailInfo.productId);
    console.log("Product Name : ", productDetailInfo.productName);
    console.log("Quantity : ", productDetailInfo.quantity);
}
printProductDetails(productDetailInfo);
productDetailInfo.productId = "PI234";
productDetailInfo.productName = "Head Phone";
console.log();
printProductDetails(productDetailInfo);
//# sourceMappingURL=readOnly.js.map
/**
 * Design Patterns - #1 - Strategy Pattern
 * Độ khó khi học: 1
 * Sử dụng dự án: 4
 * Ứng dụng phần mềm: Giảm giá shoppee
 * Ứng dụng cuộc sống: Du lịch ROME
 * Hàm getPrice trong đoạn code này dùng Strategy Pattern để áp dụng các loại khuyến mãi khác nhau cho sản phẩm VINFAST dựa trên loại giảm giá được chọn.
*/

/**
 * Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
 * @param {*} originalPrice
 * @returns
*/
function preOrderPrice(originalPrice) { 
    return originalPrice * 0.8;
}

/**
 * Tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ: Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30
 * @param {*} originalPrice
 * @returns
*/
function promotionPrice(originalPrice) { 
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
*/
function defaultPrice(originalPrice) { 
    return originalPrice;
}

/**
 * Đến ngày blackFriday promotion
 * @param {*} originalPrice
 * @returns
*/
function blackFridayPrice(originalPrice) { 
    return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
}

const getPriceStrategies = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    default: defaultPrice,
    blackFriday: blackFridayPrice,
}

function getPrice(originalPrice, typePromotion) { 
    return getPriceStrategies[typePromotion](originalPrice);
}

console.log(getPrice(100, 'preOrder'))
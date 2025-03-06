/**
 * Design Patterns - #3 - Facede Patterns
 * Độ khó khi học: 1
 * Sử dụng dự án: 5
 * Ứng dụng phần mềm: Shopee phí vận chuyển
 * Ứng dụng cuộc sống: Đằng sau bộ VEST
 * Đằng sau 1 hệ thống phức tạp là 1 giao diện đơn giản
*/

class Discount{
    calc(value) {
        return value * 0.9
    }
}

class Shipping{
    calc(value) {
        return 5
    }
}

class Fees{
    calc(value) {
        return value * 1.05
    }
}

class ShopeeFacadePattern {
    constructor() {
        this.discount = new Discount()
        this.shipping = new Shipping()
        this.fees = new Fees()
    }

    calc(price) {
        price = this.discount.calc(price)
        price = this.fees.calc(price)
        price += this.shipping.calc()

        return price
    }
}

function buy(price) {
    const shopee = new ShopeeFacadePattern()
    console.log(`Peice:: `, shopee.calc(price))
}

buy(120000)
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    getPrices: function () {
        let pricesValues = Object.values(this);
        let pricesNum = [];

        for (let values in pricesValues) {
            if (typeof pricesValues[values] === "string") {
                let number = Number(pricesValues[values].split(' ')[0]);
                pricesNum.push(number);
            }
        }

        return pricesNum;
    },

    price: function () {
        let pricesNum = this.getPrices();
        let sum= 0;


        for (let i in pricesNum) {
            sum = sum + pricesNum[i];
        }

        console.log(`Загальна вартість наданих послуг: ${sum}`)
        return sum;
    },

    minPrice: function () {
        let pricesNum = this.getPrices();
        let min = pricesNum[0];
        for (let i in pricesNum) {
            if (pricesNum[i] < min) {
                min = pricesNum[i];
            }
        }
        console.log(`Мінімальна ціна наданих послуг: ${min}`);
        return min;
    },

    maxPrice: function () {
        let pricesNum = this.getPrices();
        let max = pricesNum[0];
        for (let i in pricesNum) {
                if (pricesNum[i] > max) {
                    max = pricesNum[i];
                }
        }
        console.log(`Максимальна ціна наданих послуг: ${max}`);
        return max;
    }
}

services.price();
services.minPrice();
services.maxPrice();
services['Розбити скло'] = "200 грн";
services['Поспати на канапі'] = "10 грн";
console.log("_______________________");
services.price();
services.minPrice();
services.maxPrice();

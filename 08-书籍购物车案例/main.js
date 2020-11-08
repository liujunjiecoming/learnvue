const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《Java》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《Python》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《Php》',
        date: '2006-5',
        price: 67.00,
        count: 1
      },
      {
        id: 4,
        name: '《Vue》',
        date: '2006-11',
        price: 45.00,
        count: 1
      },
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '¥' + price.toFixed(2);
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      //1，原生for循环（只能获取到索引值）
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice;

      //2，for in（只能获取到索引值）
      // let totalPrice = 0;
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice;

      //3，for of（可以直接获取到对象）
      // let totalPrice = 0;
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice;

      //4，通过高阶函数处理
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)

    }
  },
  //过滤器的使用
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2);
    }
  }
})
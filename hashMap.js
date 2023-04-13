/***
 * Implement a Hash Map data structure.
 */

class MyHashMap {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }
  hash(key) {
    return key.toString().length % this.size;
  }

  setItem(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);
  }

  getItem(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
  }
}

const myMap = new MyHashMap();
myMap.setItem("b001", "The Wheel of Time");
myMap.setItem("b002", "The Gunslinger");
myMap.setItem("b003", "The Giver");

console.log(myMap.getItem("b001"));

// kaitlyn from the Marriot;
// 2562463640;

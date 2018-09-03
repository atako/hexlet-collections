class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  orderBy(fn, direction = "asc") {
    if (direction === "asc") {
      this.collection.sort((a,b) => {
          if (fn(a) < fn(b)) { return -1 }
          if (fn(a) > fn(b)) { return 1 }
      })
      } else {
        this.collection.sort((a,b) => {
          if (fn(a) > fn(b)) { return -1 }
          if (fn(a) < fn(b)) { return 1 }
        })
      }
    return this;
  }
  // END

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;

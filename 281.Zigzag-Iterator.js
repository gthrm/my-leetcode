// Input: v1 = [1], v2 = []
// Output: [1]

// Input: v1 = [1,2], v2 = [3,4,5,6]
// Output: [1,3,2,4,5,6]
// eslint-disable-next-line max-len
// Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,3,2,4,5,6].

class ZigzagIterator {
  constructor(vector1, vecror2) {
    this.vectors = [];
    if (vector1?.length) {
      this.vectors.push(vector1);
    }
    if (vecror2?.length) {
      this.vectors.push(vecror2);
    }
  }

  get hasNext() {
    return this.vectors.length > 0;
  }

  next() {
    if (this.hasNext) {
      const currentVector = this.vectors.shift();
      const currentValue = currentVector ? currentVector.shift() : null;
      if (currentVector?.length) {
        this.vectors.push(currentVector);
      }
      return currentValue;
    }

    return null;
  }
}

function getValue(vector1, vecror2) {
  const result = [];
  const zigzagIterator = new ZigzagIterator(vector1, vecror2);
  while (zigzagIterator.hasNext) {
    const value = zigzagIterator.next();
    result.push(value);
  }
  return result;
}

const v1 = [1, 2]; const
  v2 = [3, 4, 5, 6];
console.log(getValue(v1, v2), 'Expected Output: [1, 3, 2, 4, 5, 6]');

const v3 = [1, 3, 5]; const
  v4 = [2, 4, 6];
console.log(getValue(v3, v4), 'Expected Output: [1, 2, 3, 4, 5, 6]');

const v5 = []; const
  v6 = [1, 2, 3];
console.log(getValue(v5, v6), 'Expected Output: [1, 2, 3]');

const v7 = [1]; const
  v8 = [];
console.log(getValue(v7, v8), 'Expected Output: [1]');

const v9 = []; const
  v10 = [];
console.log(getValue(v9, v10), 'Expected Output: []');

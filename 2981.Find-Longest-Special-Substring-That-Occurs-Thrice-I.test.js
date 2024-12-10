/**
 * @param {string} s
 * @return {number}
 */
const maximumLength = function (s) {
  let result = -1;
  const chars = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const lengths = [];
    let count = 0;

    // Gather consecutive blocks of character ch
    for (let j = 0; j < s.length; j++) {
      if (s[j] === ch) {
        count++;
      } else if (count > 0) {
        lengths.push(count);
        count = 0;
      }
    }
    if (count > 0) {
      lengths.push(count);
    }

    if (lengths.length === 0) continue;

    let left = 1;
    let right = Math.max(...lengths);

    // Binary search to find maximum possible length
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      let occurrences = 0;

      // Count how many substrings of length mid can be formed
      for (let k = 0; k < lengths.length; k++) {
        const blockLength = lengths[k];
        if (blockLength >= mid) {
          occurrences += (blockLength - mid + 1);
        }
      }

      if (occurrences >= 3) {
        result = Math.max(result, mid);
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return result;
};

describe('2981. Find Longest Special Substring That Occurs Thrice I', () => {
  it('should return 2', () => {
    const s = 'aaaa';

    const result = maximumLength(s);

    expect(result).toEqual(2);
  });

  it('should return -1', () => {
    const s = 'abcdef';

    const result = maximumLength(s);

    expect(result).toEqual(-1);
  });

  it('should return 1', () => {
    const s = 'abcaba';

    const result = maximumLength(s);

    expect(result).toEqual(1);
  });
});

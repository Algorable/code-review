# 35. Search Insert Position

### **🚩문제 주소**

[https://leetcode.com/problems/search-insert-position/description/?envType=study-plan&id=algorithm-i](https://leetcode.com/problems/search-insert-position/description/?envType=study-plan&id=algorithm-i)

### 문제 설명

---

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

### 입출력 예

---

**Example 1:**

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

### 제한 사항

---

**Constraints:**

- `1 <= nums.length <= 104`
- `104 <= nums[i] <= 104`
- `nums` contains **distinct** values sorted in **ascending** order.
- `104 <= target <= 104`
# 풀이

**Runtime Beats 80.16%**  
![1572_runtime](https://user-images.githubusercontent.com/109533678/236828709-083e8971-c9ba-41c2-8d78-13c73f246428.svg)

**Memory Beats 65.12%**  
![1572_memory](https://user-images.githubusercontent.com/109533678/236828764-d69ba233-7655-4e78-8605-9b508fa438dc.svg)


## 문제 이해하기

### INPUT
- number[][] mat

### 설명

주 대각선과 반대 대각선의 원소들의 합을 구하는 문제

## 문제 풀이
~~~javascript

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0;i<mat.length;i++){
        sum += mat[i][i];
        sum += mat[mat.length-1-i][i];
    }
    if(mat.length % 2 == 1){
        let i = (mat.length-1)/2;
        sum -= mat[i][i];
    }
    return sum;
};

~~~

1. 조건에 맞는 모든 원소들의 합을 구한다
2. 만약 주 대각선과 반대 대각선에 겹치는부분이 있다면 빼준다

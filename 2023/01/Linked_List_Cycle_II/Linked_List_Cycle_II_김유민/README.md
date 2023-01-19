# Linked List Cycle II 풀이

fast가 slow의 2배 만큼 이동한다는 점을 이용하면 cycle이 시작되는 node를 찾을 수 있다.

1 ~ 9의 값을 가지고 4 ~ 9에 cycle이 존재하는 node가 있다고 하자

> 1-->2-->3-->4-->5-->6-->7-->8-->9-->Back to 4
> 
> 
> |<-----x----->|<---y--->|<--------z-------->|
> 

slow와 fast는 6에서 만나게 되는데, 이때 각자 이동한 node의 수는 다음과 같다

> slow: *x*+*y*
> 
> 
> fast: *x*+*y*+*z*+*y*=*x*+2*y*+*z*
> 

fast의 이동 개수는 slow의 2배이므로 다음의 식이 성립한다.

> 2(*x*+*y*)=*x*+2*y*+*z*
> 
> 
> 2*x*=*x*+*z*
> 
> *x*=*z*
> 

*z*=*x*이므로 fast가 Floyd cycle detection을 끝낸 지점인 *x*+*y*번째 node에서 다시 *x*번 이동하면 된다.

linked list는 인덱스 탐색이 불가능하므로 slow 변수에 head 주소를 재할당해 *x*번 이동을 보조한다.

이는 각각 한 칸씩 이동했을 때 slow == fast가 되는 지점이다.

Time Complexity: *O*(*n*)Space Complexity: *O*(1)
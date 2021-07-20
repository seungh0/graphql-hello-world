# 문제 해결
- over-fetching
- under-fetching

### 기존의 REST API에서의 문제점
1. Over-fetching
- 데이터베이스에 사용하지 않을 영역을 요청하는 문제점이 존재.

2. Under-fetching
REST에서 하나를 완성하려고 많은 API 요청을 하는 것.

### 특징
- 단 하나의 종저만 존재. (여러 URL이 존재하지 않음.)

query {
    feed {
        comments
        likeNumber
    }
    notification {
        isRead
    }
}
# KIM PT(김피티) BACK
 
# USERS
## Register user account

#### API
```http
POST /users/register
```
#### Body
```
{
    "login_id": "test",
    "login_pw": "test",
    "name": "성홍념",
    "sex": "M",
    "age": 25,
    "contact": "01012345678",
    "career": "주짓수 고수",
    "purpose": "몸짱이 되고싶습니다."
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 8,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

 ## Login User
 #### API
```http
POST /users/login
```
#### Body
```
{
    "login_id": "test",
    "login_pw": "test"
}
```

#### Responses
```
{
    "result": [
        {
            "id": 8,
            "login_id": "test",
            "login_pw": "test",
            "name": "성홍념",
            "sex": "M",
            "age": 25,
            "contact": "01012345678",
            "career": "주짓수 고수",
            "purpose": "몸짱이 되고싶습니다."
        }
    ]
}
```

 ## Get informations for all users
 #### API
```http
GET /users/all
```

#### Responses
```
{
    "result": [
        {
            "id": 2,
            "login_id": "kimUser",
            "login_pw": "kimUserpw",
            "name": "김기영",
            "sex": "M",
            "age": 25,
            "contact": "01012345678",
            "career": "운동 5년차 입니다",
            "purpose": "보디빌더입니다"
        },
        {
            "id": 3,
            "login_id": "miniuser",
            "login_pw": "minipw",
            "name": "김미니",
            "sex": "M",
            "age": 90,
            "contact": "01023456789",
            "career": "운동 짱잘합니다",
            "purpose": "운동 잘해요"
        }
    ]
}
```

 ## Get information for user
 #### API
```http
GET /users/:id
```

#### Responses
```
{
    "result": [
        {
            "id": 2,
            "login_id": "kimUser",
            "login_pw": "kimUserpw",
            "name": "김기영",
            "sex": "M",
            "age": 25,
            "contact": "01012345678",
            "career": "운동 5년차 입니다",
            "purpose": "보디빌더입니다"
        }
    ]
}
```

 ## Get hasTrainer, IsMyTrainer, IsReviewWrote for user
 #### API
```http
GET /users/:id/trainer/:trainer_id
```

#### Responses
```
{
    "result": [
        {
            "hasTrainer": 1,
            "isMyTrainer": 1,
            "isReviewWrote": 0
        }
    ]
}
```

 ## Get user`s all classes
 #### API
```http
GET /users/:id/class
```

#### Responses
```
{
    "result": [
        {
            "id": 2,
            "trainer_id": 18,
            "user_id": 3,
            "status": "teaching",
            "day": "thur",
            "time": 7,
            "remaining_pt": 9,
            "is_review": 1
        }
    ]
}
```

 ## Check Vaild User ID
 #### API
```http
GET /users/check/:login_id
```

#### Responses
```
{
    "result": [
        {
            "isValidUserId": 1
        }
    ]
}
```
return 1 if validUserID


return 0 if inValidUserID

 ## Update user
 #### API
```http
PUT /users/:id
```
#### Body
```
{
    "contact": "01098765432",
    "career": "운동하자",
    "purpose": "운동해요"
}
```

#### Response
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```

# TRAINERS
## Register trainer account

#### API
```http
POST /trainers/register
```
#### Body
```
{
    "login_id": "test",
    "login_pw": "test",
    "name": "최준영",
    "sex": "M",
    "age": 25,
    "gym_city": "대전",
    "gym_name": "더바디짐",
    "instagram": "test",
    "career": "운동 잘합니다",
    "intro": "몸짱 만들어 드립니다"
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 25,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "&Records: 1  Duplicates: 0  Warnings: 0",
        "protocol41": true,
        "changedRows": 0
    }
}
```

 ## Login trainer
 #### API
```http
POST /trainers/login
```
#### Body
```
{
    "login_id": "test",
    "login_pw": "test"
}
```

#### Responses
```
{
    "result": [
        {
            "id": 25,
            "login_id": "test",
            "login_pw": "test",
            "name": "최준영",
            "sex": "M",
            "age": 25,
            "thumbnail": "undefined",
            "instagram": "test",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 4
        }
    ]
}
```

 ## Get informations for all trainers
#### API
```http
GET /trainers/all
```

#### Responses
```
{
    "result": [
        {
            "id": 18,
            "login_id": "kim",
            "login_pw": "kimpw",
            "name": "김기영",
            "sex": "M",
            "age": 25,
            "thumbnail": "...",
            "instagram": "ddungiii",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 2,
            "rating": 4
        },
        {
            "id": 19,
            "login_id": "mini",
            "login_pw": "mini",
            "name": "김민희",
            "sex": "F",
            "age": 40,
            "thumbnail": "...",
            "instagram": "ddungiii",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 3,
            "rating": 4.5
        }
    ]
}
```

 ## Get information for trainer
 #### API
```http
GET /trainers/:id
```

#### Responses
```
{
    "result": [
        {
            "id": 18,
            "login_id": "kim",
            "login_pw": "kimpw",
            "name": "김기영",
            "sex": "M",
            "age": 25,
            "thumbnail": "...",
            "instagram": "ddungiii",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 2,
            "rating": 4
        },
    ]
}
```

 ## Get Trainer Teaching Class
#### API
```http
GET /trainers/:id/class/teaching
```

#### Responses
```
{
    "result": [
        {
            "id": 3,
            "trainer_id": 18,
            "user_id": 3,
            "status": "teaching",
            "day": "thur",
            "time": 7,
            "remaining_pt": 9,
            "is_review": 1,
            "name": "김미니"
        },
        {
            "id": 4,
            "trainer_id": 18,
            "user_id": 4,
            "status": "teaching",
            "day": "mon",
            "time": 14,
            "remaining_pt": 6,
            "is_review": 1,
            "name": "박승민"
        }
    ]
}
```

 ## Get Trainer Pending Class
#### API
```http
GET /trainers/:id/class/pending
```

#### Responses
```
{
    "result": [
        {
            "id": 18,
            "trainer_id": 18,
            "user_id": 21,
            "status": "pending",
            "day": "wed",
            "time": 15,
            "remaining_pt": 30,
            "is_review": 0,
            "name": "냠"
        }
    ]
}
```


 ## Check Vaild Trainer ID
 #### API
```http
GET /trainers/check/:login_id
```

#### Responses
```
{
    "result": [
        {
            "isValidTrainerId": 1
        }
    ]
}
```
return 1 if validUserID


return 0 if inValidUserID

 ## Get Trainer Thumbnail
 #### API
```http
GET /trainers/:id/thumbnail
```

#### Responses
```
[
    {
        "thumbnail": "/9j/4AAQSkZJRgAB..."
    }
]
```

 ## Update trainer thumbnail
 #### API
```http
PUT /trainers/:id/thumbnail
```
#### Body
```
{
    "thumbnail": "..."
}
```


#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```

 ## Update trainer
 #### API
```http
PUT /trainers/:id
```
#### Body
```
{
    "instagram": "ddddungiii",
    "career": "운동하자",
    "intro": "나와함께",
    "gym_city": "서울",
    "gym_name": "짐인더하우스"
}
```


#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```

# GYMS
## Register gym

#### API
```http
POST /gyms/register
```
#### Body
```
{
    "city": "제천",
    "name": "아리랑휘트니스"
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 14,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## Get informations for All Gyms

#### API
```http
GET /gyms/all
```

#### Responses
```
{
    "result": [
        {
            "id": 5,
            "city": "대전",
            "name": "라라휘트니스"
        },
        {
            "id": 7,
            "city": "서울",
            "name": "엑슬휘트니스"
        },
        {
            "id": 10,
            "city": "포항",
            "name": "ND피트니스"
        },
        {
            "id": 14,
            "city": "제천",
            "name": "아리랑휘트니스"
        }
    ]
}
```

## Get Cities for All Gyms

#### API
```http
GET /gyms/cities
```

#### Responses
```
{
    "result": [
        {
            "city": "서울"
        },
        {
            "city": "대전"
        },
        {
            "city": "포항"
        },
        {
            "city": "제천"
        }
    ]
}
```

## Get Gyms in City

#### API
```http
GET /gyms/:city/all
```

#### Responses
```
{
    "result": [
        {
            "id": 1,
            "city": "서울",
            "name": "짐인더하우스"
        },
        {
            "id": 7,
            "city": "서울",
            "name": "엑슬휘트니스"
        },
        {
            "id": 8,
            "city": "서울",
            "name": "바디플렉스짐"
        }
    ]
}
```

## Get information for a Gym

#### API
```http
GET /gyms/:id
```

#### Responses
```
{
    "result": [
        {
            "id": 2,
            "city": "대전",
            "name": "문재엄 헬스"
        }
    ]
}
```

## Get Trainers by Gym

#### API
```http
GET /gyms/:id/trainers
```

#### Responses
```
{
    "result": [
        {
            "id": 20,
            "login_id": "sm",
            "login_pw": "sm",
            "name": "박승민",
            "sex": "M",
            "age": 70,
            "thumbnail": "...",
            "instagram": "ddungiii",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 4,
            "rating": 5
        },
        {
            "id": 21,
            "login_id": "sm1",
            "login_pw": "sm",
            "name": "박승민12",
            "sex": "M",
            "age": 70,
            "thumbnail": "...",
            "instagram": "ddungiii",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 4,
            "rating": 1.2
        }
    ]
}
```

# MEMO
## Write memo

#### API
```http
POST /memo
```
#### Body
```
{
   "user_id": 3, 
   "date": "2022-01-24", 
   "content": "잘했어용"
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```
OR
```
{
    "status": "invalid memo"
}
```
After write memo, at class remaining_pt reduce 1

## Get Memo by User
#### API
```http
GET /memo/:user_id
```

#### Responses
```
{
    "result": [
        {
            "id": 2,
            "user_id": 15,
            "date": "2022-01-24T00:00:00.000Z",
            "content": "잘했어용"
        }
    ]
}
```


# CLASS
## Apply Class

#### API
```http
POST /class/apply
```

#### Body
```
{
    "trainer_id": 18,
    "user_id": 16,
    "day": "wed",
    "time": 11,
    "num_pt": 20
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 10,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## Reduce remaining pt

#### API
```http
PUT /class/:class_id/reduce
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```

## Accept class

#### API
```http
PUT /class/:class_id/accept
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```

## Deny class

#### API
```http
PUT /class/:class_id/deny
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```

# REVIEW
## Write review

#### API
```http
POST /review
```
#### Body
```
{
    "trainer_id": 18,
    "user_id": 4,
    "content": "낫뱃",
    "rating": 3
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "&Records: 1  Duplicates: 0  Warnings: 0",
        "protocol41": true,
        "changedRows": 0
    }
}
```
OR
``` 
{
    "status": "invalid review"
}
```
IF class doesn`t exist OR is_review=1 OR status!=teaching


return status: invalid review

## Get Review by Trainer
#### API
```http
GET /review/:trainer_id
```

#### Responses
```
{
    "result": [
        {
            "id": 1,
            "trainer_id": 18,
            "user_id": 3,
            "content": "최고에요!2",
            "rating": 5
        },
        {
            "id": 7,
            "trainer_id": 18,
            "user_id": 4,
            "content": "낫뱃",
            "rating": 3
        }
    ]
}
```

# USER_IMAGES
## Upload user image

#### API
```http
POST /images/user/:id/:type
```
#### Body
```
{
    "image": "...",
    "date": "2022.01.24"
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 2,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## Get user image

#### API
```http
GET /images/user/:id/:type
```

#### Responses
```
{
    "result": [
        {
            "id": 2,
            "user_id": 4,
            "type": "inbody",
            "image": "...",
            "date": "2022.01.24"
        },
        {
            "id": 3,
            "user_id": 4,
            "type": "inbody",
            "image": "...",
             "date": "2022.01.25"
        }
    ]
}
```

## Delete user image

#### API
```http
DELETE /images/user
```
#### Body
```
{
    "image": "...",
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

# TRAINER_IMAGES
## Upload trainer image

#### API
```http
POST /images/trainer/:id
```
#### Body
```
{
    "image": "..."
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 2,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## Get trainer image

#### API
```http
GET /images/trainer/:id
```

#### Responses
```
{
    "result": [
        {
            "id": 2,
            "trainer_id": 4,
            "image": "..."
        },
        {
            "id": 3,
            "trainer_id": 4,
            "image": "..."
        }
    ]
}
```

## Delete Trainer image

#### API
```http
DELETE /images/trainer
```
#### Body
```
{
    "image": "...",
}
```

#### Responses
```
{
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

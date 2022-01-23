# KIM PT(김피티) BACK
 ```
 http://192.249.18.145:443
 ```
 
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
            "trainer_id": 18,
            "user_id": 2,
            "status": "pending",
            "day": "mon",
            "time": 13
        },
        {
            "trainer_id": 19,
            "user_id": 2,
            "status": "teacing",
            "day": "mon",
            "time": 15
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
            "thumbnail": "undefined",
            "instagram": "undefined",
            "career": "undefined",
            "intro": "undefined",
            "gym_id": 2
        },
        {
            "id": 19,
            "login_id": "mini",
            "login_pw": "mini",
            "name": "김민희",
            "sex": "F",
            "age": 40,
            "thumbnail": "undefined",
            "instagram": "undefined",
            "career": "undefined",
            "intro": "undefined",
            "gym_id": 3
        },
        {
            "id": 20,
            "login_id": "sm",
            "login_pw": "sm",
            "name": "박승민",
            "sex": "M",
            "age": 70,
            "thumbnail": "undefined",
            "instagram": "undefined",
            "career": "undefined",
            "intro": "undefined",
            "gym_id": 4
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
            "trainer_id": 18,
            "user_id": 4,
            "status": "teaching",
            "day": "mon",
            "time": 14
        }
    ]
}
```

 ## Get Trainer Peding Class
#### API
```http
GET /trainers/:id/class/pending
```

#### Responses
```
{
    "result": [
        {
            "trainer_id": 18,
            "user_id": 2,
            "status": "pending",
            "day": "mon",
            "time": 13
        }
    ]
}
```

 ## Get Trainer Finish Class
#### API
```http
GET /trainers/:id/class/finish
```

#### Responses
```
{
    "result": [
        {
            "trainer_id": 18,
            "user_id": 5,
            "status": "finish",
            "day": "tues",
            "time": 6
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
{
    "type": "Buffer",
    "data": [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        ...
    ]
}
```
In Client, convert buffer to string

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
            "thumbnail": "undefined",
            "instagram": "ddungiii",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 4
        },
        {
            "id": 21,
            "login_id": "sm1",
            "login_pw": "sm",
            "name": "박승민12",
            "sex": "M",
            "age": 70,
            "thumbnail": "undefined",
            "instagram": "ddungiii",
            "career": "운동 잘합니다",
            "intro": "몸짱 만들어 드립니다",
            "gym_id": 4
        }
    ]
}
```

# USER_MEMO
## Write memo

#### API
```http
POST /memo
```
#### Body
```
{
    "class_id": 1,
    "date": "2022-01-23",
    "content": "민희 회원님 참 잘했어요~"
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
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```
Create Memo when only status is teaching

## Get Memo by User
#### API
```http
GET /memo/:class_id
```

#### Responses
```
{
    "result": [
        {
            "class_id": 1,
            "date": "2022-01-23T00:00:00.000Z",
            "content": "민희 회원님 참 잘했어요~"
        }
    ]
}
```


# CLASS
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

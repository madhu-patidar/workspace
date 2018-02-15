/**
 * @api {post} http://0.0.0.0:3000/api/orders/order 1.Place Final Order.
 * @apiVersion 1.0.0
 * @apiName 1.Place Final Order
 * @apiGroup Order
 *
 * @apiDescription Placing final by providing card details and array of products.In this API we first check the card details with stripe if it give error we send error response without creating order and if card deatils are correct we check the user deatils and generate its order and return success response also we have different table for order item in which we place details of order product. 
 *
 * @apiParam {String} access_token generated after success login
 *@apiParam {Object} data an object to be send in body as raw data with card deatils and array of products and address id

 *@apiParamExample {json} Request-Example:
 {
"userId":"5975ba6df6d9e115d3871e6a",
"addressId":"007",
"card": {
"exp_month": 10,
"exp_year": 2018,
"number":4242424242424242,
"cvc": 100
},

"products":[{
 "productId":"59770dbcee32740640a49f59",
"quantity":"1"
},
{
"productId":"59771cc0ee32740640a49f5b",
"quantity":"1"
},
{
"productId":"59771d97ee32740640a49f5d",
"quantity":"1"
 }
]

}

 @apiSuccessExample {json} Success-Response:
 { orderId: 59af975377094a03d49aa287,
  message: 'order placed successfully' }

 * @apiSuccess {String}     orderId    generated orderId
 * @apiSuccess {String}     message    success message
 *
 * @apiError statusCode  402.
 * @apiError message   error message.
 *
 * @apiErrorExample Response (card is invalid):
 *     HTTP/1.1 402 card is invalid
 *     {
 *      statusCode: 402,
        message: 'Your card number is incorrect'
 *     }
 @apiErrorExample Response (user is invalid):
 *     HTTP/1.1 402 Invalid User
 *     {
 *      statusCode: 402,
        message: 'Invalid User'
 *     }
 @apiErrorExample Response (response from stripe):
 *     HTTP/1.1 402 stripe error
 *     {
 *      statusCode: 402,
        message: 'errors from stripe'
 *     }
 */
function placeOrder() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/orders/allorderofuser/:userId 2.Get all order of user.
 * @apiVersion 1.0.0
 * @apiName getorder
 * @apiGroup Order
 * @apiPermission none
 *
 * @apiDescription Get all order of user from userid along with products details.
 *
 *
 * @apiParam {String} access_token generated after success login
 *
 * @apiSuccessExample {json} Success-Response:
 [
 {
   "order": {
     "createon": "2017-09-05T18:30:00.000Z",
     "userId": "5975ba6df6d9e115d3871e6a",
     "orderstatus": "transit",
     "ordertotal": 16999,
     "id": "59af90f1d6961803873f614a",
     "address": {
       "fulladdress": "Rabale",
       "city": "Navi Mumbai",
       "state": "Maharashtra",
       "pincode": 44564,
       "country": "India",
       "id": "5984560d3f8ecf60be198fb4",
       "userAccountId": "5975ba6df6d9e115d3871e6a"
     }
   },
   "products": [
     {
       "productId": "59770dbcee32740640a49f59",
       "product_producer": "urban ladder",
       "product_name": "Bradbury Desk",
       "product_avg_rating": 3,
       "productqty": 1,
       "product_cost": 16999,
       "instock": true,
       "images": {
         "id": "598304f7ca395d99207e11ec",
         "productId": "59770dbcee32740640a49f59",
         "name": "Bradbury_Desk_Mahogany_Finish.jpg",
         "type": "image/jpeg",
         "container": "image",
         "isActive": true,
         "ImgURL": "http://10.0.100.213:8080/storage/image/Bradbury_Desk_Mahogany_Finish.jpg",
         "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_250thumb.jpg",
         "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_100thumb.jpg"
       }
     }
   ]
 },
 {
   "order": {
     "createon": "2017-09-05T18:30:00.000Z",
     "userId": "5975ba6df6d9e115d3871e6a",
     "orderstatus": "transit",
     "ordertotal": 32999,
     "id": "59af918dd6961803873f614f",
     "address": {
       "fulladdress": "Ruby, Dadar",
       "city": "Mumbai",
       "state": "Maharashtra",
       "pincode": 41554,
       "country": "India",
       "id": "5984561f3f8ecf60be198fb5",
       "userAccountId": "5975ba6df6d9e115d3871e6a"
     }
   },
   "products": [
     {
       "productId": "59771d97ee32740640a49f5d",
       "product_producer": "Alibaba",
       "product_name": "Twain Study Table",
       "product_avg_rating": 1,
       "productqty": 1,
       "product_cost": 6000,
       "instock": true,
       "images": {
         "id": "59830646ca395d99207e11ef",
         "productId": "59771d97ee32740640a49f5d",
         "name": "Twain_Study_table_00.jpg",
         "type": "image/jpeg",
         "container": "image",
         "isActive": true,
         "ImgURL": "http://10.0.100.213:8080/storage/image/Twain_Study_table_00.jpg",
         "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Twain_Study_table_00_250thumb.jpg",
         "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Twain_Study_table_00_100thumb.jpg"
       }
     },
     {
       "productId": "59771cc0ee32740640a49f5b",
       "product_producer": "urban ladder",
       "product_name": "Fonteyn Study Table",
       "product_avg_rating": 3,
       "productqty": 1,
       "product_cost": 6000,
       "instock": true,
       "images": {
         "id": "59830630ca395d99207e11ee",
         "productId": "59771cc0ee32740640a49f5b",
         "name": "fonteyn_01_55.jpg",
         "type": "image/jpeg",
         "container": "image",
         "isActive": true,
         "ImgURL": "http://10.0.100.213:8080/storage/image/fonteyn_01_55.jpg",
         "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_250thumb.jpg",
         "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_100thumb.jpg"
       }
     }
   ]
 }
   ]

 *
 * @apiError statusCode  404.
 * @apiError message   error message.
 *
 * @apiErrorExample Response (invalid user):
 *     HTTP/1.1 404 user is invalid
 *     {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message":"Unknown user"
  }
  }
 */
function getorder() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/orders/orderofuser/:userId 3.Get orders only from order table.
 * @apiVersion 1.0.0
 * @apiName getorder2
 * @apiGroup Order
 *
 *
 * @apiDescription Get all order of user from userid without products details,userId must be pass in path.
 *
 *
 * @apiParam {String} access_token generated after success login
 *
 * @apiSuccessExample {json} Success-Response:
 [
 {
   "createon": "2017-09-05T18:30:00.000Z",
   "userId": "5975ba6df6d9e115d3871e6a",
   "orderstatus": "transit",
   "ordertotal": 16999,
   "id": "59af90f1d6961803873f614a",
   "address": {
     "fulladdress": "Rabale",
     "city": "Navi Mumbai",
     "state": "Maharashtra",
     "pincode": 44564,
     "country": "India",
     "id": "5984560d3f8ecf60be198fb4",
     "userAccountId": "5975ba6df6d9e115d3871e6a"
   }
 },
 {
   "createon": "2017-09-05T18:30:00.000Z",
   "userId": "5975ba6df6d9e115d3871e6a",
   "orderstatus": "transit",
   "ordertotal": 32999,
   "id": "59af918dd6961803873f614f",
   "address": {
     "fulladdress": "Ruby, Dadar",
     "city": "Mumbai",
     "state": "Maharashtra",
     "pincode": 41554,
     "country": "India",
     "id": "5984561f3f8ecf60be198fb5",
     "userAccountId": "5975ba6df6d9e115d3871e6a"
   }
 },
 {
   "createon": "2017-09-05T18:30:00.000Z",
   "userId": "5975ba6df6d9e115d3871e6a",
   "orderstatus": "transit",
   "ordertotal": 12000,
   "id": "59af975377094a03d49aa287",
   "address": {
     "fulladdress": "Rabale",
     "city": "Navi Mumbai",
     "state": "Maharashtra",
     "pincode": 44564,
     "country": "India",
     "id": "5984560d3f8ecf60be198fb4",
     "userAccountId": "5975ba6df6d9e115d3871e6a"
   }
 }
]
 *
 *
 * @apiError statusCode  404.
 * @apiError message   error message.
 *
 * @apiErrorExample Response (invalid user):
 *     HTTP/1.1 404 user is invalid
 *     {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message":"Unknown user"
  }
  }
 */
function getallordersofUser() { return; }



/**
 * @api {get} http://0.0.0.0:3000/api/orders/orderno/:orderno 4.Get all product in order.
 * @apiVersion 1.0.0
 * @apiName getorderitems
 * @apiGroup Order
 * @apiPermission none
 *
 * @apiDescription Get all product in order from order number, order number must be send in path.
 *
 *
 * @apiParam {String} access_token generated after success login
 *
 * @apiSuccessExample {json} Success-Response:
 {
"orderId": "59ad4d458a0a3404968e02f0",
"userId": "59a91002fd5806467149397a",
"createon": "2017-09-03T18:30:00.000Z",
"orderstatus": "transit",
"ordertotal": 86000,
"address": {
  "fulladdress": "Rabale",
  "city": "Mumbai",
  "state": "Maharashtra",
  "pincode": 400056,
  "country": "India",
  "id": "59ad4d368a0a3404968e02ef",
  "userAccountId": "59a91002fd5806467149397a"
},
"products": [
  {
    "productId": "59771cc0ee32740640a49f5b",
    "product_producer": "urban ladder",
    "product_name": "Fonteyn Study Table",
    "product_avg_rating": 3,
    "productqty": 1,
    "product_cost": 6000,
    "instock": true,
    "images": {
      "id": "59830630ca395d99207e11ee",
      "productId": "59771cc0ee32740640a49f5b",
      "name": "fonteyn_01_55.jpg",
      "type": "image/jpeg",
      "container": "image",
      "isActive": true,
      "ImgURL": "http://10.0.100.213:8080/storage/image/fonteyn_01_55.jpg",
      "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_250thumb.jpg",
      "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_100thumb.jpg"
    }
  },
  {
    "productId": "597720edee32740640a49f61",
    "product_producer": "somu stores",
    "product_name": "Robinson  ",
    "product_avg_rating": 3,
    "productqty": 1,
    "product_cost": 40000,
    "instock": true,
    "images": {
      "id": "5983151dca395d99207e1200",
      "productId": "597720edee32740640a49f61",
      "name": "820170629075720img.jpg",
      "type": "image/jpeg",
      "container": "image",
      "isActive": true,
      "ImgURL": "http://10.0.100.213:8080/storage/image/820170629075720img.jpg",
      "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_820170629075720img_250thumb.jpg",
      "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_820170629075720img_100thumb.jpg"
    }
  }
]
}
 *
 * * @apiError statusCode  500.
 * @apiError message   error message.
 *
 * @apiErrorExample Response (invalid orderId):
 *     HTTP/1.1 500 No such order found
 *    {
  "error": {
    "statusCode": 500,
    "message": "No such order found"
  }
}
 */
function getallordersItesmofUser() { return; }



/**
 * @api {post} http://0.0.0.0:3000/api/user_accounts 1.User Registration
 * @apiVersion 1.0.0
 * @apiName Registration
 * @apiGroup Account User
 * @apiPermission none
 *
 * @apiDescription Registrating user with its details, data to be send as raw data in body.
 * 
 *@apiParam {String} email eamil of user.
 *@apiParam {String} password rating password of user.
 *@apiParam {Number} phone_no eamil of user.
 *@apiParam {String} gender gender of user.
 *@apiParam {Boolean} is_active true or false.
 *@apiParamExample {json} Request-Example:
 {
  "email": "aniket@pracheta.com",
  "gender": "male",
  "phone_no": 123456487,
  "is_active":true,
  "password":"aniket007"
 }

   @apiSuccessExample {json} Success-Response:
   {
     "id": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "a@bb.com",
  "gender": "male",
  "phone_no": 1234567899,
  "role":"AppUser",
  "birth_date": "2017-09-06T05:19:48.058Z",
  "created_date": "2017-09-06T05:19:48.058Z"
}

 *
 * *@apiError statusCode  422.
* @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 422 Invalid details
 *   {
  "error": {
    "statusCode": 422,
    "name": "ValidationError",
    "message": "The `user_account` instance is not valid.
  }
}
 */
function postUser1() { return; }

/**
* @api {post} http://0.0.0.0:3000/api/user_accounts/login 2.User Login
*
* @apiVersion 1.0.0
* @apiName loginUser
* @apiGroup Account User
* @apiPermission none
*
*@apiDescription User login send email and password as object in body as raw data.

*@apiParam {String} email eamil of user.
*@apiParam {String} password password of user.
*
*@apiParamExample {json} Request-Example:
  {
   "email":"a@bb.com",
   "password":"123456"
  }
 *
 *@apiSuccess {string} id This is access_token which is further used to place order and manipulate user details.
 * @apiSuccessExample {json} Success-Response:
  {
  "id": "AQlREEfxCmosLASVsTHZgdEreOoUXLOjeFYwjWIC68i2Y7pdhfRUBQViyMDhkvAF",
  "ttl": 1209600,
  "created": "2017-09-06T09:47:07.867Z",
  "userId": "59afc0f777094a03d49aa28f"
}
 *
 *@apiError statusCode  401.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 login failed
 {
  "error": {
    "statusCode": 401,
    "name": "Error",
    "message": "login failed",
    "code": "LOGIN_FAILED",
    "stack": "Error: login failed"
  }
}
 */
function Userlogin() { return; }


/**
 * @api {get} http://0.0.0.0:3000/api/user_accounts/:userId 4.Get user details
 * @apiVersion 1.0.0
 * @apiName login user
 * @apiGroup Account User
 * @apiPermission none
 *
 *@apiDescription Get user deatils from userID after sucess login,userID should be send in path with access_token as param.
 *
 *@apiParam {String} access_token generated after success login
 *@apiParam {String} userId should be send in path.
 *@apiSuccessExample {json} Success-Response:
 {
  "first_name": "suhel",
  "last_name": "khan",
  "email": "suhel.khan@neosofttech.com",
  "role": "admin",
  "gender": "male",
  "phone_no": 8767375751,
  "birth_date": "1993-03-15T00:00:00.000Z",
  "is_active": true,
  "created_date": "2017-07-10T11:11:27.124Z",
  "modified_date": "2017-07-24T07:49:34.310Z",
  "username": "suhe.khan",
  "id": "596360dffe8a19872e258748",
  "Profile_IMG": {
    "ImgURL": "http://10.0.100.213:8080/storage/image/SuhelKhan.jpg",
    "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_SuhelKhan_thumb.jpg"
  }
}
*@apiError statusCode  401.
* @apiError error   error object with message.
 * * @apiErrorExample Response (example):
  *     HTTP/1.1 401 Unknown user_account id
  {
   "error": {
     "statusCode": 401,
     "name": "Error",
     "message": ""Unknown user_account id"
     }
 }
 *@apiErrorExample Response (response from access_token):
 *     HTTP/1.1 402 AUTHORIZATION_REQUIRED
 *  {
  "error": {
    "statusCode": 401,
    "name": "Error",
    "message": "Authorization Required",
    "code": "AUTHORIZATION_REQUIRED",
    }
  }
 */
function putUser() { return; }

/**
 * @api {post} http://0.0.0.0:3000/api/user_accounts/loginAdmin 3.Login Admin
 * @apiVersion 1.0.0
 * @apiName admin login
 * @apiGroup Account User
 * @apiPermission admin
 *
 * @apiDescription Login only for admin.
 *@apiParam {String} email eamil of admin.
 *@apiParam {String} password password of admin.
 *
 *
 *@apiParamExample {json} Request-Example:
   {
    "email":"a@bb.com",
    "password":"123456"
   }
  *
  *@apiSuccess {string} id This is access_token which is further used to place order and manipulate user details.
  * @apiSuccessExample {json} Success-Response:
   {
   "id": "AQlREEfxCmosLASVsTHZgdEreOoUXLOjeFYwjWIC68i2Y7pdhfRUBQViyMDhkvAF",
   "ttl": 1209600,
   "created": "2017-09-06T09:47:07.867Z",
   "userId": "59afc0f777094a03d49aa28f"
 }
  *
  *
  * *@apiError statusCode  500.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 500 login failed
  {
  "error": {
    "statusCode": 500,
    "message": "You ar not an Admin"
  }
}
 */
function loginadmin() { return; }

/**
 * @api {post} http://0.0.0.0:3000/api/user_accounts/loginSocial 5.Social login
 * @apiVersion 1.0.0
 * @apiName social login
 * @apiGroup Account User
 * @apiPermission none
 *
 * @apiDescription Login through socail id, send the all parmeters in body as raw data obtain from successfully soacil login.
 *
 *
 *@apiParamExample {json} Request-Example:
 {
"email" : "a@b.com",
"idToken" : "sadff64564a564asdfasdf",
"image" : "adsfads/img.jpg",
"name" : "aniket",
"provider" : "facebook",
"token" : "adfdsafads54546465465465456",
"uid" : "1469225983126437"
}
  *
  *@apiSuccess {string} id This is access_token which is further used to place order and manipulate user details.
  * @apiSuccessExample {json} Success-Response:
   {
   "id": "AQlREEfxCmosLASVsTHZgdEreOoUXLOjeFYwjWIC68i2Y7pdhfRUBQViyMDhkvAF",
   "ttl": 1209600,
   "created": "2017-09-06T09:47:07.867Z",
   "userId": "59afc0f777094a03d49aa28f"
 }
  *
  *
  * *@apiError statusCode  500.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 500 login failed
  {
  "error": {
    "statusCode": 500,
    "message": "something went wrong try again"
  }
}
 */
function loginadmin() { return; }

/**
 * @api {post} http://0.0.0.0:3000/api/user_accounts/logout 6.logout
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup Account User
 * @apiPermission none
 *
 * @apiDescription Logout user.
 *
 *
 * @apiParam {String} access_token generated after success login
  *
  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {
   "statusCode": 200
   }
  *
  *
  * *@apiError statusCode  500.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 500 login failed
  {
  "error": {
    "statusCode": 500,
    "message": "something went wrong try again"
  }
}
 */
function loginadmin() { return; }

/**
 * @api {patch} http://0.0.0.0:3000/api/user_accounts/:userId 7.Update user details
 * @apiVersion 1.0.0
 * @apiName update user
 * @apiGroup Account User
 * @apiPermission none
 *
 *@apiDescription Update user deatils, user deatils to be updated should be send in object as raw data in body.
 *
 *@apiParam {String} access_token generated after success login
 * @apiParam {String} userId should be send in path.
 *
 * *@apiParamExample {json} Request-Example:
 *{
  "first_name": "suhel",
  "last_name": "khan123"
}
 *
 *
 *
 *@apiSuccessExample {json} Success-Response:
 {
  "first_name": "suhel",
  "last_name": "khan123",
  "email": "suhel.khan@neosofttech.com",
  "role": "admin",
  "gender": "male",
  "phone_no": 8767375751,
  "birth_date": "1993-03-15T00:00:00.000Z",
  "is_active": true,
  "created_date": "2017-07-10T11:11:27.124Z",
  "modified_date": "2017-07-24T07:49:34.310Z",
  "username": "suhe.khan",
  "id": "596360dffe8a19872e258748",
  "Profile_IMG": {
    "ImgURL": "http://10.0.100.213:8080/storage/image/SuhelKhan.jpg",
    "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_SuhelKhan_thumb.jpg"
  }
}
*@apiError statusCode  401.
* @apiError error   error object with message.
 * * @apiErrorExample Response (example):
  *     HTTP/1.1 401 Unknown user_account id
  {
   "error": {
     "statusCode": 401,
     "name": "Error",
     "message": ""Unknown user_account id"
     }
 }
 *@apiErrorExample Response (response from access_token):
 *     HTTP/1.1 402 AUTHORIZATION_REQUIRED
 *  {
  "error": {
    "statusCode": 401,
    "name": "Error",
    "message": "Authorization Required",
    "code": "AUTHORIZATION_REQUIRED",
    }
  }
 */
function putUser() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/user_accounts 8.Get all user
 * @apiVersion 1.0.0
 * @apiName getalluser
 * @apiGroup Account User
 * @apiPermission admin
 *
 * @apiDescription Get all user from table with there details.
 *
 *
 * @apiParam {String} access_token generated after success login
  *
  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  [
 {
   "first_name": "suhel",
   "last_name": "khan",
   "email": "suhel.khan@neosofttech.com",
   "role": "admin",
   "gender": "male",
   "phone_no": 8767375851,
   "birth_date": "1993-03-15T00:00:00.000Z",
   "is_active": true,
   "created_date": "2017-07-10T11:11:27.124Z",
   "modified_date": "2017-09-06T12:07:43.035Z",
   "username": "suhe.khan",
   "id": "596360dffe8a19872e258748",
   "Profile_IMG": {
     "ImgURL": "http://10.0.100.213:8080/storage/image/SuhelKhan.jpg",
     "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_SuhelKhan_thumb.jpg"
   }
 },
 {
   "first_name": "aniket",
   "last_name": "pracheta",
   "email": "a@b.com",
   "role": "admin",
   "gender": "male",
   "phone_no": 7041097886,
   "birth_date": "1992-01-22T00:00:00.000Z",
   "is_active": true,
   "created_date": "2017-07-19T08:11:53.214Z",
   "modified_date": "2017-07-24T11:30:48.821Z",
   "username": "aniket",
   "id": "596f1449b545041048ec81ec",
   "Profile_IMG": {
     "ImgURL": "http://10.0.100.213:8080/storage/image/iphone7-model-select-201703.png",
     "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_iphone7-model-select-201703_thumb.png"
   }
 }
 ]
  *
  *
  * *@apiError statusCode  401.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 402 AUTHORIZATION_REQUIRED
  *  {
   "error": {
     "statusCode": 401,
     "name": "Error",
     "message": "Authorization Required",
     "code": "AUTHORIZATION_REQUIRED",
     }
   }
 */
function getalluser() { return; }


/**
 * @api {post} http://0.0.0.0:3000/api/images/upload 9.Upload user Image.
 * @apiVersion 1.0.0
 * @apiName getalluser_image
 * @apiGroup Account User
 * @apiPermission admin
 *
 * @apiDescription Upload Image of user by adding its details,details should be posted as form data.
 *
 *
 *@apiParam {String} userId userId obtain when you get deatils of user from server in which Id is userId and this should be send in path.
 *@apiParam {string} file upload file of image.

 *@apiParamExample {json} Request-Example:
  {
      "userId": "59b7db6b3ead46a983fe361b",
      "file":"choose the file"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {
  "id": "59b7f1be0869b9b1a2f99e8a",
  "productId": "59b7db6b3ead46a983fe361b",
  "ImgURL": "http://10.0.100.213:8080/client/image/IMG_0783.JPG.jpg",
  "ThumbURL": "http://10.0.100.213:8080/client/thumbnail/_IMG_0783.JPG_thumb.jpg"
  }  
  *
  *
  * *@apiError statusCode  402.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 402 error
  {
  "error": {
    "statusCode": 402,
    "message": "file is not uploaded please attach file"
  }
}
 */
function loginadmin() { return; }


/**************** CART**************************/

/**
 * @api {post} http://0.0.0.0:3000/api/shoppingcarts/addToCart 1.Post products in cart.
 * @apiVersion 1.0.0
 * @apiName post_cart
 * @apiGroup Cart
 * @apiPermission none
 *
 * @apiDescription Post product array in to cart with userId.
 *
 *
 *@apiParam {String} access_token generated after success login
 *@apiParam {object} object should contain userId with array of products and should be posted in body as raw data.
 *@apiParamExample {json} Request-Example:
  {
      "userid":"5975ba6df6d9e115d3871e6a",
       "products":[{
                   "productId":"59770dbcee32740640a49f59",
                  "qty":"1"
                  },
                  {
                  "productId":"59771cc0ee32740640a49f5b",
                  "qty":"1"
                  },
                  {
                  "productId":"59771d97ee32740640a49f5d",
                  "qty":"1"
                   }
                  ]

        }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {"message": "Product add to cart successfully"}
  *
  *
  * *@apiError statusCode  500.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 500 error
  {
  "error": {
    "statusCode": 500,
    "message": "something went wrong"
  }
}
 */
function loginadmin() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/shoppingcarts/cartcount/:userId 2.Get cart count.
 * @apiVersion 1.0.0
 * @apiName get_count_cart
 * @apiGroup Cart
 * @apiPermission none
 *
 * @apiDescription Post product array in to cart with userId.
 *
 *
 *@apiParam {String} access_token generated after success login.
 *@apiParam {String} userId should be send in path.


  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
   "userId": "5975ba6df6d9e115d3871e6a",
   "cartCount": 3
  }
  *
  *
  * *@apiError statusCode  500.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 500 error
  {
  "error": {
    "statusCode": 500,
    "message": "something went wrong"
  }
}

* @apiErrorExample Response (example):
*     HTTP/1.1  Invalid userId
{
  "userId": "5975ba6df6d9e115d3871e6",
  "cartCount": 0
}
 */
function cartcount() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/shoppingcarts/getCart 3.Get product in cart.
 * @apiVersion 1.0.0
 * @apiName product_in_cart
 * @apiGroup Cart
 * @apiPermission none
 *
 * @apiDescription Get array of product for the userId entered.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {String} userid should be send in params.


  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  [
  {
    "id": "59afa23277094a03d49aa28d",
    "productId": "59771cc0ee32740640a49f5b",
    "product_producer": "urban ladder",
    "product_name": "Fonteyn Study Table",
    "productqty": 6,
    "instock": true,
    "product_cost": 6000,
    "images": [
      {
        "id": "59830630ca395d99207e11ee",
        "productId": "59771cc0ee32740640a49f5b",
        "name": "fonteyn_01_55.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/fonteyn_01_55.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_100thumb.jpg"
      }
    ]
  },
  {
    "id": "59afa2ba77094a03d49aa28e",
    "productId": "59771d97ee32740640a49f5d",
    "product_producer": "Alibaba",
    "product_name": "Twain Study Table",
    "productqty": 2,
    "instock": true,
    "product_cost": 6000,
    "images": [
      {
        "id": "59830646ca395d99207e11ef",
        "productId": "59771d97ee32740640a49f5d",
        "name": "Twain_Study_table_00.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Twain_Study_table_00.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Twain_Study_table_00_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Twain_Study_table_00_100thumb.jpg"
      }
    ]
  }
]

* *@apiError statusCode  401.
* @apiError error   error object with message.
* @apiErrorExample Response (example):
*     HTTP/1.1 402 AUTHORIZATION_REQUIRED
*  {
 "error": {
   "statusCode": 402,
   "name": "Error",
   "message": "Authorization Required",
   "code": "AUTHORIZATION_REQUIRED",
   }
 }
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Unknown user_account id
 {
  "error": {
    "statusCode": 401,
    "name": "Error",
    "message": ""Unknown user_account id"
    }
}
 */
function cartcount() { return; }

/**
 * @api {patch} http://0.0.0.0:3000/api/shoppingcarts/:shoppingcartId 4.Update cart.
 * @apiVersion 1.0.0
 * @apiName update_cart
 * @apiGroup Cart
 * @apiPermission none
 *
 * @apiDescription Update quntity of product in cart.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {String} shoppingcartId obtain when you get cart from server in which ever product has Id that is shoppingcartId and this should be send in path.
 *@apiParam {object} data quntity to be updated should be send as json object in body as raw data.

 *@apiParamExample {json} Request-Example:
  {
    "productqty":5
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
  "userId": "59afc0f777094a03d49aa28f",
  "productid": "59771cc0ee32740640a49f5b",
  "productqty": 5,
  "instock": true,
  "product_cost": 6000,
  "createdate": "2017-09-07T06:03:23.553Z",
  "id": "59b0e12b8dfa63035dd76c1a",
  "product_name": "Fonteyn Study Table",
  "product_producer": "urban ladder"
}
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b0e12b8dfa63035dd76c1",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b0e12b8dfa63035dd76c1"
  }
}
 */
function cartcount() { return; }

/**
 * @api {delete} http://0.0.0.0:3000/api/shoppingcarts/:shoppingcartId 5.Delete cart product.
 * @apiVersion 1.0.0
 * @apiName delete_cart
 * @apiGroup Cart
 * @apiPermission none
 *
 * @apiDescription Delete product from cart.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {String} shoppingcartId obtain when you get cart from server in which ever product has Id that is shoppingcartId and this should be send in path.

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
  "count": 1
  }
 * *@apiError statusCode  404.
 * @apiError error   error object with message. 
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b0e12b8dfa63035dd76c1",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b0e12b8dfa63035dd76c1"
  }
}
 */
function cartcount() { return; }

/**
 * @api {post} http://0.0.0.0:3000/api/ratings/rateProduct 1.Rating the product.
 * @apiVersion 1.0.0
 * @apiName rating
 * @apiGroup Rating
 * @apiPermission none
 *
 * @apiDescription Rating the product.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {object} data rating should be send as json object in body as raw data along with user_id and product_id.

 *@apiParamExample {json} Request-Example:
  {
  "user_id": "59afc0f777094a03d49aa28f",
  "product_id": "59771cc0ee32740640a49f5b",
  "rating": 4
}

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
  "Thanks for Rating"
  }
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model"
  }
}
 */
function cartcount() { return; }


/**
 * @api {post} http://0.0.0.0:3000/api/addresses/AddAddress/:userId 1.Post Address.
 * @apiVersion 1.0.0
 * @apiName address_post
 * @apiGroup Address.
 * @apiPermission none
 *
 * @apiDescription posting address of user.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {String} userId should be send in path.
 *@apiParam {object} data address details should be send as json object in body as raw data.

 *@apiParamExample {json} Request-Example:
  {
  "fulladdress": "railway colony",
  "city": "mumbai",
  "state": "maharashtra",
  "pincode": 400400,
  "country": "India"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
  "fulladdress": "railway colony",
  "city": "mumbai",
  "state": "maharashtra",
  "pincode": 400400,
  "country": "India",
  "id": "59b0ebff238b7a03a5e73b24",
  "userAccountId": "59afc0f777094a03d49aa28f"
}
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model"
  }
}
* @apiErrorExample Response (example):
*     HTTP/1.1 402 AUTHORIZATION_REQUIRED
*  {
 "error": {
   "statusCode": 402,
   "name": "Error",
   "message": "Authorization Required",
   "code": "AUTHORIZATION_REQUIRED",
   }
 }
 */
function cartcount() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/addresses/getAddressbyUserId/:userId 2.Get Address.
 * @apiVersion 1.0.0
 * @apiName address_get
 * @apiGroup Address.
 * @apiPermission none
 *
 * @apiDescription Get all address of user.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {String} userId should be send in path.

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  [{
  "fulladdress": "railway colony",
  "city": "mumbai",
  "state": "maharashtra",
  "pincode": 400400,
  "country": "India",
  "id": "59b0ebff238b7a03a5e73b24",
  "userAccountId": "59afc0f777094a03d49aa28f"
}]
 * *@apiError statusCode  500.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 500 Invalid user ID
 {
  "error": {
    "statusCode": 500,
    "message": "Invalid user ID"
  }
}
* @apiErrorExample Response (example):
*     HTTP/1.1 402 AUTHORIZATION_REQUIRED
*  {
 "error": {
   "statusCode": 402,
   "name": "Error",
   "message": "Authorization Required",
   "code": "AUTHORIZATION_REQUIRED",
   }
 }
 */
function cartcount() { return; }

/**
 * @api {patch} http://0.0.0.0:3000/api/addresses/:addressId 3.Update Address.
 * @apiVersion 1.0.0
 * @apiName address_update
 * @apiGroup Address.
 * @apiPermission none
 *
 * @apiDescription Update address of user.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {String} addressId should be send in path you will get this id when you hit get all address API the id is addressId.
 *@apiParam {object} data address details should be send as json object in body as raw data.

 *@apiParamExample {json} Request-Example:
  {
  "fulladdress": "juhu circle",
  "city": "andhere"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
  "fulladdress": "juhu circle",
  "city": "andhere",
  "state": "maharashtra",
  "pincode": 400400,
  "country": "India",
  "id": "59b0ebff238b7a03a5e73b24",
  "userAccountId": "59afc0f777094a03d49aa28f"
}
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
* @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model"
  }
}
* @apiErrorExample Response (example):
*     HTTP/1.1 402 AUTHORIZATION_REQUIRED
*  {
 "error": {
   "statusCode": 402,
   "name": "Error",
   "message": "Authorization Required",
   "code": "AUTHORIZATION_REQUIRED",
   }
 }
 */
function cartcount() { return; }

/**
 * @api {delete} http://0.0.0.0:3000/api/addresses/:addressId 4.Delete Address.
 * @apiVersion 1.0.0
 * @apiName delete_address
 * @apiGroup Address.
 * @apiPermission none
 *
 * @apiDescription Delete Address of user.
 *
 *
 *@apiParam {String} access_token generated after success login and should be send in params.
 *@apiParam {String} addressId should be send in path you will get this id when you hit get all address API the id is addressId.

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
  "count": 1
  }
 * *@apiError statusCode  404.
 * @apiError error   error object with message. 
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b0e12b8dfa63035dd76c1",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b0e12b8dfa63035dd76c1"
  }
}
 */
function cartcount() { return; }


/**
 * @api {get} http://0.0.0.0:3000/api/categories 1.Get all category.
 * @apiVersion 1.0.0
 * @apiName category.
 * @apiGroup Category.
 * @apiPermission none
 *
 * @apiDescription Get all category from category table with its details and id which will be categoryId.
 *
 *
 *
 *@apiParam [filter] filter  should be send in params it is used as query so you can get images also for category.
 *@apiParamExample {json} Request-Example:
  filter={"include":"images"}


  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  
[
  {
    "category_name": "CHAIR",
    "category_isactive": true,
    "category_description": "A chair is a piece of furniture with a raised surface supported by legs, commonly used to seat a single person.",
    "id": "5975eaa79fd2891810282302"   
  },
  {
    "category_name": "TABLE",
    "category_isactive": true,
    "category_description": "A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things",
    "id": "5975eadf9fd2891810282303"
  },
  {
    "category_name": "BED",
    "category_isactive": true,
    "category_description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
    "id": "5975eb0a9fd2891810282304"
  },
  {
    "category_name": "SOFA",
    "category_isactive": true,
    "category_description": "In homes, couches are normally found in the family room, living room, den, or the lounge.",
    "id": "5975eb4d9fd2891810282305"
  }
]
 * *@apiError statusCode  404.
 * @apiError error   error object with message. 
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b0e12b8dfa63035dd76c1",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b0e12b8dfa63035dd76c1"
  }
}
 */
function cartcount() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/categories?filter={"include":"images"} 2.Get all category Category with images.
 * @apiVersion 1.0.0
 * @apiName category_withImages.
 * @apiGroup Category.
 * @apiPermission none
 *
 * @apiDescription Get all category,passing filter in params you can also get images for category it is so because we have added relationship between category and images as relationship name is 'images' so you need to include it in filter to get images of category.
 *
 *
 *
 *@apiParam [filter] filter  should be send in params it is used as query so you can get images also for category.
 *@apiParamExample {json} Request-Example:
  filter={"include":"images"}


  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  
[
  {
    "category_name": "CHAIR",
    "category_isactive": true,
    "category_description": "A chair is a piece of furniture with a raised surface supported by legs, commonly used to seat a single person.",
    "id": "5975eaa79fd2891810282302",
    "images": {
      "id": "598447233f8ecf60be198fb0",
      "categoryId": "5975eaa79fd2891810282302",
      "name": "vitra_slow_chair_family_1_000.png",
      "type": "image/png",
      "isActive": true,
      "container": "image",
      "ImgURL": "http://10.0.100.213:8080/storage/image/vitra_slow_chair_family_1_000.png",
      "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_vitra_slow_chair_family_1_000_thumb.png"
    }
  },
  {
    "category_name": "TABLE",
    "category_isactive": true,
    "category_description": "A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things",
    "id": "5975eadf9fd2891810282303",
    "images": {
      "id": "5984472f3f8ecf60be198fb1",
      "categoryId": "5975eadf9fd2891810282303",
      "name": "tables.jpg",
      "type": "image/jpeg",
      "isActive": true,
      "container": "image",
      "ImgURL": "http://10.0.100.213:8080/storage/image/tables.jpg",
      "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_tables_thumb.jpg"
    }
  },
  {
    "category_name": "BED",
    "category_isactive": true,
    "category_description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
    "id": "5975eb0a9fd2891810282304",
    "images": {
      "id": "598447393f8ecf60be198fb2",
      "categoryId": "5975eb0a9fd2891810282304",
      "name": "beds.jpg",
      "type": "image/jpeg",
      "isActive": true,
      "container": "image",
      "ImgURL": "http://10.0.100.213:8080/storage/image/beds.jpg",
      "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_beds_thumb.jpg"
    }
  },
  {
    "category_name": "SOFA",
    "category_isactive": true,
    "category_description": "In homes, couches are normally found in the family room, living room, den, or the lounge.",
    "id": "5975eb4d9fd2891810282305",
    "images": {
      "id": "598447483f8ecf60be198fb3",
      "categoryId": "5975eb4d9fd2891810282305",
      "name": "sofa.jpeg",
      "type": "image/jpeg",
      "isActive": true,
      "container": "image",
      "ImgURL": "http://10.0.100.213:8080/storage/image/sofa.jpeg",
      "ThumbURL": "http://10.0.100.213:8080/storage/thumbnail/_sofa_thumb.jpeg"
    }
  }
]
 * *@apiError statusCode  404.
 * @apiError error   error object with message. 
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b0e12b8dfa63035dd76c1",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b0e12b8dfa63035dd76c1"
  }
}
 */
function cartcount() { return; }


/**
 * @api {post} http://0.0.0.0:3000/api/categories 3.Post Category.
* @apiVersion 1.0.0
 * @apiName category_post.
 * @apiGroup Category.
 * @apiPermission none
 *
 * @apiDescription Create new category by adding its details,details should be posted in body as raw data.
 *
 *
 *@apiParam {String} category_name Category Name.
 *@apiParam {boolean} category_isactive true or false.
 *@apiParam {string} category_description Description of the category that is to be add.

 *@apiParamExample {json} Request-Example:
  {
  "category_name": "plane",
  "category_isactive": true,
  "category_description": "it fly"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {
    "category_name": "plane",
    "category_isactive": true,
    "category_description": "it fly",
    "id": "59b7da393ead46a983fe361a"
    }  
  *
  *
  * *@apiError statusCode  422.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 422 error
  {
  "error": {
    "statusCode": 422,
    "name": "ValidationError",
    "message": "The `category` instance is not valid. Details: `category_name` can't be blank
  }
}
 */
function loginadmin() { return; }

/**
 * @api {patch} http://0.0.0.0:3000/api/categories 4.Update Category.
* @apiVersion 1.0.0
 * @apiName category_UPDATE.
 * @apiGroup Category.
 * @apiPermission none
 *
 * @apiDescription Update Category.
 *
 *
 *@apiParam {String} categoryId obtain when you get all category from server in which Id is categoryId and this should be send in path.
 *@apiParam {object} data deatils to be updated should be send as json object in body as raw data.

 *@apiParamExample {json} Request-Example:
  {
    "category_name":"aeroplane"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
 {
  "category_name": "aeroplane",
  "category_isactive": true,
  "category_description": "it fly",
  "id": "59b7da393ead46a983fe361a"
}
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b7da393ead46a983fe361a",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b7da393ead46a983fe361a"
  }
}
 */
function cartcount() { return; }

/**
 * @api {patch} http://0.0.0.0:3000/api/categories 5.Delete Category.
* @apiVersion 1.0.0
 * @apiName category_delete.
 * @apiGroup Category.
 * @apiPermission none
 *
 * @apiDescription Delete Category,here we have used concept of soft delete in which data is not hard deleted from category table rather we just set its category_isactive as false so we have used Patch rather than delete.
 *
 *
 *@apiParam {String} categoryId obtain when you get all category from server in which Id is categoryId and this should be send in path.
 *@apiParam {object} data deatils to be updated should be send as json object in body as raw data.

 *@apiParamExample {json} Request-Example:
  {
    "category_isactive":false
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
 {
  "category_name": "aeroplane",
  "category_isactive": false,
  "category_description": "it fly",
  "id": "59b7da393ead46a983fe361a"
}
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b7da393ead46a983fe361a",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b7da393ead46a983fe361a"
  }
}
 */
function cartcount() { return; }

/**
 * @api {post} http://0.0.0.0:3000/api/images/upload 6.Post Category Image.
* @apiVersion 1.0.0
 * @apiName category_postImage.
 * @apiGroup Category.
 * @apiPermission none
 *
 * @apiDescription Upload Image of category by adding its details,details should be posted as form data.
 *
 *
 *@apiParam {String} categoryId categoryId obtain when you get all category from server in which Id is categoryId and this should be send in path.
 *@apiParam {string} file upload file of image.

 *@apiParamExample {json} Request-Example:
  {
      "categoryId": "59b7db6b3ead46a983fe361b",
      "file":"choose the file"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {
  "id": "59b7f1be0869b9b1a2f99e8a",
  "categoryId": "59b7db6b3ead46a983fe361b",
  "ImgURL": "http://10.0.100.213:8080/client/image/IMG_0783.JPG.jpg",
  "ThumbURL": "http://10.0.100.213:8080/client/thumbnail/_IMG_0783.JPG_thumb.jpg"
  }  
  *
  *
  * *@apiError statusCode  402.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 402 error
  {
  "error": {
    "statusCode": 402,
    "message": "file is not uploaded please attach file"
  }
}
 */
function loginadmin() { return; }


/**
 * @api {get} http://0.0.0.0:3000/api/colors 1.Get all Colors.
 * @apiVersion 1.0.0
 * @apiName category.
 * @apiGroup Color.
 * @apiPermission none
 *
 * @apiDescription Get all Color of product from color table which can be used for filteing the product.
 *
  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
[
  {
    "color_parent": "blue",
    "color_name": "blue",
    "color_code": "#0074d9",
    "id": "5988411c0e13e2c8f5c99691"
  },
  {
    "color_parent": "blue",
    "color_name": "navy blue",
    "color_code": "#3c4477",
    "id": "598841310e13e2c8f5c99692"
  },
  {
    "color_parent": "black",
    "color_name": "black",
    "color_code": "#36454f",
    "id": "5988414e0e13e2c8f5c99693"
  },
  {
    "color_parent": "white",
    "color_name": "white",
    "color_code": "#ffffff",
    "id": "5988415e0e13e2c8f5c99694"
  },
  {
    "color_parent": "yellow",
    "color_name": "yellow",
    "color_code": "#eadc32",
    "id": "5988416e0e13e2c8f5c99695"
  }
]
 */
function cartcount() { return; }

/********************* products **************************/

/**
 * @api {get} http://0.0.0.0:3000/api/products 1.Get all Products.
 * @apiVersion 1.0.0
 * @apiName Products.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Get all products from product table with its details and id in response which will be productId for that particular product.
 *
 *
 *
 *@apiParam [filter] filter  should be send in params it is used as query so you can get images also for products.
 *@apiParamExample {json} Request-Example:
  filter={"include":"images"}


  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  
[
  {
    "product_name": "Bradbury Desk",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "Sturdy solid wood study table with one drawer & one cabinet (open shelves in the Compact variant).Adjustable drawer/cabinet unit can switch orientation (only Large variant) to occupy either the left or right-hand side of the desk.The large surface and spacious storage spaces accommodate everything you need at your work station",
    "product_cost": 16999,
    "product_avg_rating": 3,
    "product_stock": 101,
    "product_created_date": "2017-07-25T09:22:04.499Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "53*30",
    "product_isactive": true,
    "product_material": "Mango Wood,metal",
    "id": "59770dbcee32740640a49f59"
  },
  {
    "product_name": "Fonteyn Study Table",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "On pointe. Perfectly balanced, the Fonteyn study table has a distinctive leg detail, unique to the range. The spacious table has wooden panel slats so you can configure and move the shelves to where you need it. Designed to help you make the most of the work surface, the table comes with a cup holder, so your mug of coffee (or tea) fits snuggly in the groove, reducing the chance of spills across documents or your laptop. The leatherette pouch is detachable as well, so you can move it or remove it, as you please.",
    "product_cost": 6000,
    "product_avg_rating": 3.6666666666666665,
    "product_stock": 150,
    "product_created_date": "2017-07-25T10:26:08.678Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "37*47",
    "product_isactive": true,
    "product_material": "wood,metal",
    "id": "59771cc0ee32740640a49f5b",
    "rating": 0
  }
]
 */
function cartcount() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/products?filter={"include":"images"} 2.Get all Products with images.
 * @apiVersion 1.0.0
 * @apiName Products_withImages.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Get all products,passing filter in params you can also get images for products it is so because we have added relationship between product and images as relationship name is 'images' so you need to include it in filter to get images of products.
 *
 *
 *
 *@apiParam [filter] filter  should be send in params it is used as query so you can get images also for products.
 *@apiParamExample {json} Request-Example:
  filter={"include":"images"}


  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  
[
[
  {
    "product_name": "Bradbury Desk",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "Sturdy solid wood study table with one drawer & one cabinet (open shelves in the Compact variant).Adjustable drawer/cabinet unit can switch orientation (only Large variant) to occupy either the left or right-hand side of the desk.The large surface and spacious storage spaces accommodate everything you need at your work station",
    "product_cost": 16999,
    "product_avg_rating": 3,
    "product_stock": 101,
    "product_created_date": "2017-07-25T09:22:04.499Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "53*30",
    "product_isactive": true,
    "product_material": "Mango Wood,metal",
    "id": "59770dbcee32740640a49f59",
    "images": [
      {
        "id": "598304f7ca395d99207e11ec",
        "productId": "59770dbcee32740640a49f59",
        "name": "Bradbury_Desk_Mahogany_Finish.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Bradbury_Desk_Mahogany_Finish.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_100thumb.jpg"
      },
      {
        "id": "5983053dca395d99207e11ed",
        "productId": "59770dbcee32740640a49f59",
        "name": "Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M_100thumb.jpg"
      }
    ]
  },
  {
    "product_name": "Fonteyn Study Table",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "On pointe. Perfectly balanced, the Fonteyn study table has a distinctive leg detail, unique to the range. The spacious table has wooden panel slats so you can configure and move the shelves to where you need it. Designed to help you make the most of the work surface, the table comes with a cup holder, so your mug of coffee (or tea) fits snuggly in the groove, reducing the chance of spills across documents or your laptop. The leatherette pouch is detachable as well, so you can move it or remove it, as you please.",
    "product_cost": 6000,
    "product_avg_rating": 3.6666666666666665,
    "product_stock": 150,
    "product_created_date": "2017-07-25T10:26:08.678Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "37*47",
    "product_isactive": true,
    "product_material": "wood,metal",
    "id": "59771cc0ee32740640a49f5b",
    "rating": 0,
    "images": [
      {
        "id": "59830630ca395d99207e11ee",
        "productId": "59771cc0ee32740640a49f5b",
        "name": "fonteyn_01_55.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/fonteyn_01_55.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_100thumb.jpg"
      }
    ]
  },
  {
    "product_name": "Twain Study Table",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "Alibaba",
    "product_description": "Full marks. A classic desk with pared down trestle legs, the Twain study table is elegant in its simplicity. The generous table has room for you to spread out, and the two deep drawers help keep a check on overflowing papers, files, and more. There’s plenty of space below for legs to stretch comfortably.  ",
    "product_cost": 6000,
    "product_avg_rating": 1,
    "product_stock": 300,
    "product_created_date": "2017-07-25T10:29:43.413Z",
    "product_color": {
      "_id": "598841d50e13e2c8f5c9969b",
      "color_parent": "gray",
      "color_name": "gray",
      "color_code": "#9fa8ab"
    },
    "product_dimension": "28*44",
    "product_isactive": true,
    "product_material": "Engineered Wood",
    "id": "59771d97ee32740640a49f5d",
    "images": [
      {
        "id": "59830646ca395d99207e11ef",
        "productId": "59771d97ee32740640a49f5d",
        "name": "Twain_Study_table_00.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Twain_Study_table_00.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Twain_Study_table_00_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Twain_Study_table_00_100thumb.jpg"
      }
    ]
  },
  {
    "product_name": "Robert Recliner Sofa Set",
    "categoryId": "5975eb4d9fd2891810282305",
    "product_producer": "somu stores",
    "product_description": "A lot of care has gone into choosing the materials that go into making your sofa. And with continued care, they will share your address for many years.",
    "product_cost": 40000,
    "product_avg_rating": 4,
    "product_stock": 21000,
    "product_created_date": "2017-07-25T10:37:01.353Z",
    "product_color": {
      "_id": "598842e00e13e2c8f5c996a8",
      "color_parent": "brown",
      "color_name": "rosy brown",
      "color_code": "#bc8f8f"
    },
    "product_dimension": "84*40",
    "product_isactive": true,
    "product_material": "Fibre-filled ,wood",
    "id": "59771f4dee32740640a49f5f",
    "images": [
      {
        "id": "598306b3ca395d99207e11f0",
        "productId": "59771f4dee32740640a49f5f",
        "name": "15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4.jpeg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4.jpeg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4_250thumb.jpeg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4_100thumb.jpeg"
      }
    ]
  },
  {
    "product_name": "Robinson  ",
    "categoryId": "5975eb0a9fd2891810282304",
    "product_producer": "somu stores",
    "product_description": "Smart style. The Robinson bed set is made for comfortable sleep. The curved headboard is made with a designer dual tone finish. The central console is curved with a premium laminate finish. The bed comes with standard with Hydraulic & Manual storage for a complete storage solution. The box cut design and finish ensure that this bed is made for the modern Indian home. Pair this bed with its matching nightstand, chest of drawers and a choice of wardrobes for the complete bedroom set.",
    "product_cost": 40000,
    "product_avg_rating": 3,
    "product_stock": 1000,
    "product_created_date": "2017-07-25T10:43:57.726Z",
    "product_color": {
      "_id": "5988433c0e13e2c8f5c996ab",
      "color_parent": "brown",
      "color_name": "saddle brown",
      "color_code": "#8b4513"
    },
    "product_dimension": "206*30",
    "product_isactive": true,
    "product_material": "Matte",
    "id": "597720edee32740640a49f61",
    "images": [
      {
        "id": "5983151dca395d99207e1200",
        "productId": "597720edee32740640a49f61",
        "name": "820170629075720img.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/820170629075720img.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_820170629075720img_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_820170629075720img_100thumb.jpg"
      }
    ]
  }
]
 * *@apiError statusCode  404.
 * @apiError error   error object with message. 
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59b0e12b8dfa63035dd76c1",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59b0e12b8dfa63035dd76c1"
  }
}
 */
function cartcount() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/products?filter={"where":{"categoryId":"5975eaa79fd2891810282302"},"include":"images"} 3.Get all Products category wise.
 * @apiVersion 1.0.0
 * @apiName Products_category.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Get all products from product table with its details category wise for this you need to pass json data in to filter that will have categoryId and id in response which will be productId for that particular product.
 *
 *
 *
 *@apiParam [filter] filter  should be send in params it is used as query so you can get images also for products and product will be displayes only for enter categoryId.
 *@apiParamExample {json} Request-Example:
  filter={"where":{"categoryId":"5975eaa79fd2891810282302"},"include":"images"}


  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  
[
  [
  {
    "product_name": "Ursula Lounge Chair",
    "categoryId": "5975eaa79fd2891810282302",
    "product_producer": "Ursula",
    "product_description": "Wrap around. Designed to embrace the sitter, the Ursula lounge chair’s enveloping frame comes in four lovely colours. The vibrant upholstery adds a contemporary flair to your space and thanks to its unique silhouette, there’s plenty of visual drama. The solid wooden base and slim, angled legs are the perfect complement to the sweeping curves.",
    "product_cost": 13999,
    "product_avg_rating": 4,
    "product_stock": 100,
    "product_created_date": "2017-08-03T10:34:38.542Z",
    "product_color": {
      "_id": "598842200e13e2c8f5c9969f",
      "color_parent": "blue",
      "color_name": "teal",
      "color_code": "#008080"
    },
    "product_dimension": "50*44",
    "product_isactive": true,
    "product_material": "Rubberwood",
    "id": "5982fc3eca395d99207e11e7",
    "product_img": []
  },
  {
    "product_name": "Cooper Rocker Recliner",
    "categoryId": "5975eaa79fd2891810282302",
    "product_producer": "Urban ladder",
    "product_description": "Bring home the comfortably chic Cooper Recliner to add comfort to everyday living",
    "product_cost": 20999,
    "product_avg_rating": 0,
    "product_stock": 100,
    "product_created_date": "2017-08-04T13:55:24.710Z",
    "product_color": {
      "_id": "5988436a0e13e2c8f5c996ad",
      "color_parent": "brown",
      "color_name": "tan",
      "color_code": "#d2b48c"
    },
    "product_dimension": "36*27",
    "product_isactive": true,
    "product_material": "Artificial leather",
    "id": "59847ccccf58c7ddc4012916"
  }
]

  * *@apiError statusCode  400.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 400 error
  {
  "error": {
    "statusCode": 400,
    "name": "Error",
    "message": "Value is not an object.",
    "stack": "Error: Value is not an object."
  }
}
 */
function cartcount() { return; }


/**
 * @api {get} http://0.0.0.0:3000/api/products?filter={"include":"images","limit":"2","skip":"0"},"include":"images"} 4.Get all Products with lazy loding.
 * @apiVersion 1.0.0
 * @apiName Products_lazy.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Lazy loding is concept in which you just request for fix amount of data rather than requesting all of the data in this you need to hit api in repeating manner it is so because if number of products are more it is better to divide it into chunaks for this you need to pass json data in to filter that will have limit,skip and id in response which will be productId for that particular product
 *                  also skip is index of product means start of product and limit is no of product to be loaded.
 *
 *
 *@apiParam [filter] filter  should be send in params it is used as query so you can get images also for products and no of products in response will be limit entered and postions obatined will be from skip entered.
 *@apiParamExample {json} Request-Example:
  filter={"where":{"categoryId":"5975eaa79fd2891810282302"},"include":"images","limit":"2","skip":"0"} ---for Images with category wise product with lazy loading
              or
   filter={"include":"images","limit":"2","skip":"0"}   ----for all product with lazy loading and there images

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  
[[
  {
    "product_name": "Bradbury Desk",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "Sturdy solid wood study table with one drawer & one cabinet (open shelves in the Compact variant).Adjustable drawer/cabinet unit can switch orientation (only Large variant) to occupy either the left or right-hand side of the desk.The large surface and spacious storage spaces accommodate everything you need at your work station",
    "product_cost": 16999,
    "product_avg_rating": 3,
    "product_stock": 101,
    "product_created_date": "2017-07-25T09:22:04.499Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "53*30",
    "product_isactive": true,
    "product_material": "Mango Wood,metal",
    "id": "59770dbcee32740640a49f59",
    "images": [
      {
        "id": "598304f7ca395d99207e11ec",
        "productId": "59770dbcee32740640a49f59",
        "name": "Bradbury_Desk_Mahogany_Finish.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Bradbury_Desk_Mahogany_Finish.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_100thumb.jpg"
      },
      {
        "id": "5983053dca395d99207e11ed",
        "productId": "59770dbcee32740640a49f59",
        "name": "Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_07_IMG_9999_92-M_100thumb.jpg"
      }
    ]
  },
  {
    "product_name": "Fonteyn Study Table",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "On pointe. Perfectly balanced, the Fonteyn study table has a distinctive leg detail, unique to the range. The spacious table has wooden panel slats so you can configure and move the shelves to where you need it. Designed to help you make the most of the work surface, the table comes with a cup holder, so your mug of coffee (or tea) fits snuggly in the groove, reducing the chance of spills across documents or your laptop. The leatherette pouch is detachable as well, so you can move it or remove it, as you please.",
    "product_cost": 6000,
    "product_avg_rating": 3.6666666666666665,
    "product_stock": 150,
    "product_created_date": "2017-07-25T10:26:08.678Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "37*47",
    "product_isactive": true,
    "product_material": "wood,metal",
    "id": "59771cc0ee32740640a49f5b",
    "rating": 0,
    "images": [
      {
        "id": "59830630ca395d99207e11ee",
        "productId": "59771cc0ee32740640a49f5b",
        "name": "fonteyn_01_55.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/fonteyn_01_55.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_100thumb.jpg"
      }
    ]
  }
]

  * *@apiError statusCode  400.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 400 error
  {
  "error": {
    "statusCode": 400,
    "name": "Error",
    "message": "Value is not an object.",
    "stack": "Error: Value is not an object."
  }
}
 */
function cartcount() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/products 5.Get all Products with ratings in asc or des.
 * @apiVersion 1.0.0
 * @apiName Products_rating.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription You can sort the product in acesnding or descending order for this in filter parameters you need to pass json
 *                 which conatins the coloumn name of table using which you need to shot data and second parameter will be ASC for acesnding
 *                 and DESC for descending here in above api we have shorted data in  descending order based on product rating.
 *
 *@apiParam [filter] filter  should be send in params it is used as query so you can get images also for products and they will be in order of rating they have.
 *@apiParamExample {json} Request-Example:
  filter={"order": "product_avg_rating  DESC","include":"images" ,"limit":"6", "skip":"0"} 
   
  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  [
  {
    "product_name": "Robert Recliner Sofa Set",
    "categoryId": "5975eb4d9fd2891810282305",
    "product_producer": "somu stores",
    "product_description": "A lot of care has gone into choosing the materials that go into making your sofa. And with continued care, they will share your address for many years.",
    "product_cost": 40000,
    "product_avg_rating": 4,
    "product_stock": 21000,
    "product_created_date": "2017-07-25T10:37:01.353Z",
    "product_color": {
      "_id": "598842e00e13e2c8f5c996a8",
      "color_parent": "brown",
      "color_name": "rosy brown",
      "color_code": "#bc8f8f"
    },
    "product_dimension": "84*40",
    "product_isactive": true,
    "product_material": "Fibre-filled ,wood",
    "id": "59771f4dee32740640a49f5f",
    "images": [
      {
        "id": "598306b3ca395d99207e11f0",
        "productId": "59771f4dee32740640a49f5f",
        "name": "15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4.jpeg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4.jpeg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4_250thumb.jpeg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4_100thumb.jpeg"
      }
    ]
  },
  {
    "product_name": "Ursula Lounge Chair",
    "categoryId": "5975eaa79fd2891810282302",
    "product_producer": "Ursula",
    "product_description": "Wrap around. Designed to embrace the sitter, the Ursula lounge chair’s enveloping frame comes in four lovely colours. The vibrant upholstery adds a contemporary flair to your space and thanks to its unique silhouette, there’s plenty of visual drama. The solid wooden base and slim, angled legs are the perfect complement to the sweeping curves.",
    "product_cost": 13999,
    "product_avg_rating": 4,
    "product_stock": 100,
    "product_created_date": "2017-08-03T10:34:38.542Z",
    "product_color": {
      "_id": "598842200e13e2c8f5c9969f",
      "color_parent": "blue",
      "color_name": "teal",
      "color_code": "#008080"
    },
    "product_dimension": "50*44",
    "product_isactive": true,
    "product_material": "Rubberwood",
    "id": "5982fc3eca395d99207e11e7",
    "product_img": [],
    "images": [
      {
        "id": "59831389ca395d99207e11fb",
        "productId": "5982fc3eca395d99207e11e7",
        "name": "Ursula_Lounge_chair_BL_00.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Ursula_Lounge_chair_BL_00.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Ursula_Lounge_chair_BL_00_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Ursula_Lounge_chair_BL_00_100thumb.jpg"
      },
      {
        "id": "5983139aca395d99207e11fc",
        "productId": "5982fc3eca395d99207e11e7",
        "name": "Ursula_Lounge_chair_BL_02.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Ursula_Lounge_chair_BL_02.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Ursula_Lounge_chair_BL_02_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Ursula_Lounge_chair_BL_02_100thumb.jpg"
      }
    ]
  },
  {
    "product_name": "Fonteyn Study Table",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "On pointe. Perfectly balanced, the Fonteyn study table has a distinctive leg detail, unique to the range. The spacious table has wooden panel slats so you can configure and move the shelves to where you need it. Designed to help you make the most of the work surface, the table comes with a cup holder, so your mug of coffee (or tea) fits snuggly in the groove, reducing the chance of spills across documents or your laptop. The leatherette pouch is detachable as well, so you can move it or remove it, as you please.",
    "product_cost": 6000,
    "product_avg_rating": 3.6666666666666665,
    "product_stock": 150,
    "product_created_date": "2017-07-25T10:26:08.678Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "37*47",
    "product_isactive": true,
    "product_material": "wood,metal",
    "id": "59771cc0ee32740640a49f5b",
    "rating": 0,
    "images": [
      {
        "id": "59830630ca395d99207e11ee",
        "productId": "59771cc0ee32740640a49f5b",
        "name": "fonteyn_01_55.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/fonteyn_01_55.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_fonteyn_01_55_100thumb.jpg"
      }
    ]
  },
  {
    "product_name": "Bradbury Desk",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "urban ladder",
    "product_description": "Sturdy solid wood study table with one drawer & one cabinet (open shelves in the Compact variant).Adjustable drawer/cabinet unit can switch orientation (only Large variant) to occupy either the left or right-hand side of the desk.The large surface and spacious storage spaces accommodate everything you need at your work station",
    "product_cost": 16999,
    "product_avg_rating": 3,
    "product_stock": 101,
    "product_created_date": "2017-07-25T09:22:04.499Z",
    "product_color": {
      "_id": "598841c60e13e2c8f5c9969a",
      "color_parent": "brown",
      "color_name": "brown",
      "color_code": "#a52a2a"
    },
    "product_dimension": "53*30",
    "product_isactive": true,
    "product_material": "Mango Wood,metal",
    "id": "59770dbcee32740640a49f59",
    "images": [
      {
        "id": "598304f7ca395d99207e11ec",
        "productId": "59770dbcee32740640a49f59",
        "name": "Bradbury_Desk_Mahogany_Finish.jpg",
        "type": "image/jpeg",
        "container": "image",
        "isActive": true,
        "ImgURL": "http://10.0.100.213:8080/storage/image/Bradbury_Desk_Mahogany_Finish.jpg",
        "ThumbURL250": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_250thumb.jpg",
        "ThumbURL100": "http://10.0.100.213:8080/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_100thumb.jpg"
      } 
    ]  
  
  * *@apiError statusCode  400.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 400 error
  {
  "error": {
    "statusCode": 400,
    "name": "Error",
    "message": "Value is not an object.",
    "stack": "Error: Value is not an object."
  }
}     
 */
function cartcount() { return; }

/**
 * @api {get} http://0.0.0.0:3000/api/productsfilter={"where"{"product_name":{"like":"twai","options":"i"}}} 6.Search product
 * @apiVersion 1.0.0
 * @apiName Products_search.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Search product with there name or any parameters you want for this you need to pass json 
 *                  object in filter parameters which has where cluse after which we need to specify the table 
 *                  field for which we want to search and in like parameter we need to pass string we want to search and optional "i" is for case ignorance you can get 
 *                  this query from loopback docs to. 
 *
 *@apiParam [filter] filter  should be send in params it is used as query for data.
 *@apiParamExample {json} Request-Example:
  filter={"where":{"product_name":{"like":"twai","options":"i"}}} 
   
  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  [
  {
    "product_name": "Twain Study Table",
    "categoryId": "5975eadf9fd2891810282303",
    "product_producer": "Alibaba",
    "product_description": "Full marks. A classic desk with pared down trestle legs, the Twain study table is elegant in its simplicity. The generous table has room for you to spread out, and the two deep drawers help keep a check on overflowing papers, files, and more. There’s plenty of space below for legs to stretch comfortably.  ",
    "product_cost": 6000,
    "product_avg_rating": 1,
    "product_stock": 300,
    "product_created_date": "2017-07-25T10:29:43.413Z",
    "product_color": {
      "_id": "598841d50e13e2c8f5c9969b",
      "color_parent": "gray",
      "color_name": "gray",
      "color_code": "#9fa8ab"
    },
    "product_dimension": "28*44",
    "product_isactive": true,
    "product_material": "Engineered Wood",
    "id": "59771d97ee32740640a49f5d"
  }
]
  
  * *@apiError statusCode  400.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 400 error
  {
  "error": {
    "statusCode": 400,
    "name": "Error",
    "message": "Value is not an object.",
    "stack": "Error: Value is not an object."
  }
}     
 */
function cartcount() { return; }


/**
 * @api {post} http://0.0.0.0:3000/api/products 7.Post Products.
* @apiVersion 1.0.0
 * @apiName Products_post.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Create new product by adding its details,details should be posted in body as raw data,it is complosary to have categoryId from category table ab realtion is there between product and category table.
 *                 Also color of product must be choose from the color table so that for filtering product over color must be possible in future.
 *                 In response the id generated will be productId which will be used in other api to identify the product. 
 *
 *@apiParam {object} data Product details should be send as json object in body as raw data.
 
 *@apiParamExample {json} Request-Example:
   {"product_name" : "wooden Desk",
    "categoryId" : "5975eadf9fd2891810282303",
    "product_producer" : "urban ladder",
    "product_description" : "Sturdy solid wood study table with one drawer",
    "product_cost" : 16999,
    "product_stock" : 101,
    "product_avg_rating" : 3,
    "product_color" : {
        "_id" :"598841c60e13e2c8f5c9969a",
        "color_parent" : "brown",
        "color_name" : "brown",
        "color_code" : "#a52a2a"
    },
    "product_dimension" : "53*30",
    "product_isactive" : true,
    "product_material" : "Mango Wood,metal"
}

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {
  "product_name": "wooden Desk",
  "categoryId": "5975eadf9fd2891810282303",
  "product_producer": "urban ladder",
  "product_description": "Sturdy solid wood study table with one drawer",
  "product_cost": 16999,
  "product_avg_rating": 0,
  "product_stock": 101,
  "product_created_date": "2017-09-14T07:57:09.648Z",
  "product_color": {
    "_id": "598841c60e13e2c8f5c9969a",
    "color_parent": "brown",
    "color_name": "brown",
    "color_code": "#a52a2a"
  },
  "product_dimension": "53*30",
  "product_isactive": true,
  "product_material": "Mango Wood,metal",
  "id": "59ba365596d62002c88acb0e"
} 
  *
  *
  * *@apiError statusCode  422.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 422 error
  {
  "error": {
    "statusCode": 422,
    "name": "ValidationError",
    "message": "The `product` instance is not valid."" 
    "details": {
      "context": "product",
      "codes": {
        "product_name": [
          "presence"
        ]
      },
      "messages": {
        "product_name": [
          "can't be blank"
        ]
      }
    },
    "stack": "ValidationError: The `product` instance is not valid"
  }
}
 */
function loginadmin() { return; }

/**
 * @api {patch} http://0.0.0.0:3000/api/products 8.Update Products.
* @apiVersion 1.0.0
 * @apiName Products_UPDATE.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Update Category.
 *
 *
 *@apiParam {String} productId obtain when you get product from server in which Id is productId and this should be send in path.
 *@apiParam {object} data deatils to be updated should be send as json object in body as raw data.

 *@apiParamExample {json} Request-Example:
  {
    "product_name": "wooden Desk study table"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
  {
  "product_name": "wooden Desk study table",
  "categoryId": "5975eadf9fd2891810282303",
  "product_producer": "urban ladder",
  "product_description": "Sturdy solid wood study table with one drawer",
  "product_cost": 16999,
  "product_avg_rating": 0,
  "product_stock": 101,
  "product_created_date": "2017-09-14T07:57:09.648Z",
  "product_color": {
    "_id": "598841c60e13e2c8f5c9969a",
    "color_parent": "brown",
    "color_name": "brown",
    "color_code": "#a52a2a"
  },
  "product_dimension": "53*30",
  "product_isactive": true,
  "product_material": "Mango Wood,metal",
  "id": "59ba365596d62002c88acb0e"
}
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59ba365596d62002c88acb",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59ba365596d62002c88acb"
  }
}
 */
function cartcount() { return; }

/**
 * @api {patch} http://0.0.0.0:3000/api/products 9.Delete Products.
* @apiVersion 1.0.0
 * @apiName Products_delete.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Delete Product,here we have used concept of soft delete in which data is not 
 *                 hard deleted from Product table rather we just set its product_isactive as false so 
 *                 we have used Patch rather than delete.
 *
 *
 *@apiParam {String} productId obtain when you get product from server in which Id is productId and this should be send in path.
 *@apiParam {object} data deatils to be updated should be send as json object in body as raw data.

 *@apiParamExample {json} Request-Example:
  {
    "product_isactive":false
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {
  "product_name": "wooden Desk study table",
  "categoryId": "5975eadf9fd2891810282303",
  "product_producer": "urban ladder",
  "product_description": "Sturdy solid wood study table with one drawer",
  "product_cost": 16999,
  "product_avg_rating": 0,
  "product_stock": 101,
  "product_created_date": "2017-09-14T07:57:09.648Z",
  "product_color": {
    "_id": "598841c60e13e2c8f5c9969a",
    "color_parent": "brown",
    "color_name": "brown",
    "color_code": "#a52a2a"
  },
  "product_dimension": "53*30",
  "product_isactive": false,
  "product_material": "Mango Wood,metal",
  "id": "59ba365596d62002c88acb0e"
}
 * *@apiError statusCode  404.
 * @apiError error   error object with message.
 * @apiErrorExample Response (example):
 *     HTTP/1.1 404 Unknown model
 {
  "error": {
    "statusCode": 404,
    "name": "Error",
    "message": "could not find a model with id 59ba365596d62002c88acb0e",
    "code": "MODEL_NOT_FOUND",
    "stack": "Error: could not find a model with id 59ba365596d62002c88acb0e"
  }
}
 */
function cartcount() { return; }

/**
 * @api {post} http://0.0.0.0:3000/api/images/upload 0.Post Products Image.
* @apiVersion 1.0.0
 * @apiName Products_postImage.
 * @apiGroup Products.
 * @apiPermission none
 *
 * @apiDescription Upload Image of product by adding its details,details should be posted as form data.
 *
 *
 *@apiParam {String} productId productId obtain when you get all product from server in which Id is productId and this should be send in path.
 *@apiParam {string} file upload file of image.

 *@apiParamExample {json} Request-Example:
  {
      "productId": "59b7db6b3ead46a983fe361b",
      "file":"choose the file"
  }

  *@apiSuccess {number} statusCode 200.
  * @apiSuccessExample {json} Success-Response:
   {
  "id": "59b7f1be0869b9b1a2f99e8a",
  "productId": "59b7db6b3ead46a983fe361b",
  "ImgURL": "http://10.0.100.213:8080/client/image/IMG_0783.JPG.jpg",
  "ThumbURL": "http://10.0.100.213:8080/client/thumbnail/_IMG_0783.JPG_thumb.jpg"
  }  
  *
  *
  * *@apiError statusCode  402.
  * @apiError error   error object with message.
  * @apiErrorExample Response (example):
  *     HTTP/1.1 402 error
  {
  "error": {
    "statusCode": 402,
    "message": "file is not uploaded please attach file"
  }
}
 */
function loginadmin() { return; }


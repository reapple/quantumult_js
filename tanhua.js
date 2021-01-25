var body = $response.body;

var obj = JSON.parse(body);

obj.data.is_vip = 1;
obj.data.user_viptime = "2066-06-06";
obj.data.member_name = "作者TG@iCodess";

body = JSON.stringify(obj);

console.log(body);

$done(body);

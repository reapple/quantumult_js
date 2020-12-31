let obj = JSON.parse($response.body);

let time = "1924907841";

obj.code = "1";

obj.viptime = time;

obj.msg.viptime = time;

$done({ body: JSON.stringify(obj) });

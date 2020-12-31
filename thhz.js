let obj = JSON.parse($response.body);

let time = "1924907841";

if (obj.hasOwnProperty("code")) {
    obj.code = "1";
}
if (obj.hasOwnProperty("viptime")) {
    obj.viptime = time;
}
if (obj.hasOwnProperty("msg")) {
    if (obj.msg.hasOwnProperty("viptime")) {
        obj.msg.viptime = time;
    }
}

$done({ body: JSON.stringify(obj) });

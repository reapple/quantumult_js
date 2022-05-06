let obj = JSON.parse($response.body);

obj.data.info[0]["type"]="0";

$done({ body: JSON.stringify(obj) });

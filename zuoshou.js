let obj = JSON.parse($response.body);

let count = 9999;

if (obj.hasOwnProperty("data")) {
    if (obj.data.hasOwnProperty("views")) {
        obj.data.total = count;
        obj.data.remaining = 0;
    }
}
if (obj.hasOwnProperty("grade")) {
    if (obj.grade.hasOwnProperty("current")) {
        obj.grade.title = "最强王者";
        obj.grade.grade = 5;
    }
}

$done({ body: JSON.stringify(obj) });

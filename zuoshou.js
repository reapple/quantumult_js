let obj = JSON.parse(JSON.parse($response.body));

let count = 9999;

if (obj.hasOwnProperty("data")) {
    if (obj.data.hasOwnProperty("views")) {
        obj.data.views.total = count;
        obj.data.views.remaining = 0;
    }
    if (obj.data.hasOwnProperty("grade")) {
        obj.data.grade.title = "最强王者";
        obj.data.grade.grade = 5;
    }
}

$done({ body: JSON.stringify(JSON.stringify(obj)) });

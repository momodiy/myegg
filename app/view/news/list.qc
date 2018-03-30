<!-- app/view/news/list.qc -->
<!-- qc：customize suffix name -->
<html>
<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
</head>
<body>
{{ helper.relativeTime(item.time) }}
<ul class="news-view view">
    {% for item in list %}
    <li class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
    </li>
    {% endfor %}
</ul>
{{ helper.relativeTime(item.time) }}
99999
</body>
</html>
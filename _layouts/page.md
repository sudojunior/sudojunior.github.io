---
layout: default
---
{% if page.title %}
<h3 class="prompt"><span class="cmd" data-interval="{{ 100 | divided_by: page.title.size | plus: 10 }}">{{ page.title }}</span></h3>
{% endif %}

<div class="page">{{ content }}</div>
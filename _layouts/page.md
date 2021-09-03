---
layout: default
---

<span class="center">
  <h1 class="prompt">
    <span class="cmd" data-interval="{{ 100 | divided_by: page.title.size | plus: 100 }}">
      {{- page.title | default: site.title -}}
    </span>
  </h3>
  
  {% if page.description %}
    <p>{{ page.description }}</p>
  {% endif %}
</span>

<div class="page">{{ content }}</div>

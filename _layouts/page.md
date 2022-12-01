---
layout: default
---

<span class="center">
  <h1 class="prompt">
    <span class="cmd" data-interval="{{ 100 | divided_by: page.title.size | plus: 100 }}">
      {{- page.title | default: site.title -}}
    </span>
  </h3>

  {% if page.tags %}
  <div class="project-tags">
    {% for tag in page.tags %}
      <a class="project-tag" href="{{ site.baseurl }}/projects#{{ tag }}">{{ tag }}</a>
    {% endfor %}
  </div>
  {% endif %}
  
  {% if page.description %}
    <p>{{ page.description }}</p>
  {% endif %}
</span>

<div class="page">{{ content }}</div>

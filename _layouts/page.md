---
layout: default
---

<span class="center">
  <h1 class="prompt">
    <!-- <span class="cmd" data-interval="{{ 100 | divided_by: page.title.size | plus: 100 }}"> -->
    {{- page.title | default: site.title -}}
  </h3>

  {% if page.tags %}
  <div class="project-tags">
    {% for tag in page.tags %}
      <a class="project-tag" href="{{ site.baseurl }}/projects#{{ tag }}">{{ tag }}</a>
    {% endfor %}
  </div>
  {% endif %}

  <div class="flex justify-between">
  {% if page.description or site.description and page.layout != "post" %}
    <div class="center" style="width: 600px; margin: auto;">
      {{ page.description | default: site.description | markdownify }}
    </div>
  {% endif %}

  {% if page.url == "/projects" %}
    {% include project-tag-selector.html %}
  {% endif %}
  </div>
</span>

<div>{{ content }}</div>

---
layout: page
title: ./suggestions@me.tycoon

## page listing data
suggestions:
  - date: 2021-01-12
    header: Move ATC out of the main chat
    text: >
      With the use of ATC increasing on OS, it would be considerable to see it move out of the chat window so that pilots,
      EMS and staff alike can easily track recent clearance requests and react as needed.
  - date: 2020-07-01
    header: Adpative crop yield
    text: |
      Depending on the weather or time of day, adjust crop yield for farming.

      ### Crop yield scale:
      
      |      Weather | Scale  |
      | ------------:| ------ |
      |        Clear | `?x`   |
      |     Overcast | `0.8x` |
      | Light Shower | `1.2x` |
      | Heavy Shower | `1.5x` |
      | Thunderstorm | `2x    |

      These are rough numbers, adjust as needed.
      In theory, more rain would oversaturate crops and reduce yield.

      Weather conditions (as listed by GTA wikia):
      Rain, Sunny/clear, Fog/Mist, Cloudy, Sandstorm, Sunset/sunrise, Snow, Smog
---

Below is an archive of suggestions I have *chosen* to archive for my own convenience and future reference.

{% for idea in page.suggestions %}
{% if idea.header %}## {{ idea.header }}{% endif %}

> {{ idea.date | date_to_string: "ordinal", "US" }}

{{ idea.text | markdownify }}

{% unless forloop.last %}
---
{% endunless %}
{% endfor %}

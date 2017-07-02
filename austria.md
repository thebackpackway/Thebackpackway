---
layout: default
title: Austria
---

{% for post in site.austria %}


<a href="{{ post.url | prepend: site.baseurl }}">
        <h2>{{ post.title }}</h2>
</a>

<p class="post-excerpt">{{ post.description | truncate: 160 }}</p>

{% endfor %}      

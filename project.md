---
layout: default
projects:
  - name: A Butterfly
    description: think of the insect
    date: Fall 2020
    image: assets/git.jpg
  - name: Another One
    description: looks cool amirite
    date: Fall 2020
    image: assets/git.jpg
    highlight: true
  - name: Actually
    description: is it really?
    date: Fall 2020
    image: assets/git.jpg
  - name: A Lorenz
    description: more plausible answer
    date: Fall 2020
    image: assets/git.jpg
  - name: System Dynamics
    description: W-O-W
    date: Fall 2020
    image: assets/git.jpg
    highlight: true
  - name: A Butterfly
    description: beaut indeed
    date: Fall 2020
    image: assets/git.jpg
  # Add more projects...
---

<div class="gallery-body">
    <div class="project-grid">
    {% for project in page.projects %}
        <div class="project">
            <div class="project-image">
                <img src="{{ project.image }}" alt="{{ project.name }}">
            </div>
            <div class="project-text">
                <h3 class="project-title">{{ project.name }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <p class="project-date">{{ project.date }}</p>
            </div>
        </div>
    {% endfor %}
    </div>
</div>
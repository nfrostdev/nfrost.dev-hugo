---
title: "Employee Directory"
date: 2021-02-23T11:45:31-05:00
draft: false
client: Kalamazoo Valley Community College
image: directory.kvcc.edu.png

contributors:
    - Westin Curtis

location: https://directory.kvcc.edu/

languages:
    - C#
    - HTML
    - SCSS
    - JavaScript
    - SQL

technologies:
    - .NET
    - Vue.js
    - Docker
    - Tailwind CSS
    - Oracle Database
    - PostgreSQL

details:
    - The Kalamazoo Valley Employee Directory is a searchable database of current employees at Kalamazoo Valley Community College. This is one half of a larger project that also includes the Department Directory.

contributions:
    - Westin wrote the Employee portion back-end API with .NET. I made the front-end with Vue.js, in addition to the component system that is used for front-end functionality.

obstacles:
    - Since our central data source that houses this information is only available in restricted networks, we had to come up with a method of distribution or seeding that happened on a cron.
    - So the C# back-end of this project needed a CLI for seeding the external database every hour, and an API for distribution.
---


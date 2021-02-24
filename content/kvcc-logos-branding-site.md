---
order: 1
title: "Logos Branding Site"
date: 2021-02-23T12:16:15-05:00
draft: false
client: Kalamazoo Valley Community College
image: branding.kvcc.edu

contributors:
    - KVCC Marketing Team

location: https://branding.kvcc.edu/

languages:
    - HTML
    - SCSS
    - JavaScript

technologies:
    - Vue.js
    - Docker
    - Tailwind CSS

details:
    - The Kalamazoo Valley Branding & Logos site is a convenient solution for distributing relative branding to those that need it.
    - The KVCC Marketing team has to take the time to send vendors or other employees around the college logos for when they need to use them. This becomes a tedious process when having to manually distribute them on a case-by-case basis. So I made them a Branding & Logo site that they can just link to instead.

contributions:
    - The entire project was completed by me. All of the images were converted to the appropriate mime types and resized by me as well.
    - The KVCC Marketing team supplied input pertaining to wording and some of the naming conventions for individual logos.

obstacles:
    - Initially we wanted there to be .ai and .eps vector files available for each logo. This presented filesize issues for storing the repository, with little added value to download other than color swatch preservation.
    - Since the logos had no RGB/CMKY colorspace specifications it was relatively easy to just support SVG instead. Having previously worked in that industry, I was aware that the print shops likely have their own color palettes that better match our Pantone specification.
    - Determining accessibility contrast for the colors was a lot larger of a task that I believed it to be. Since we only had hex colors for reference, they had to be converted to RGB first, then the luminance can be calculated, then finally the contrast value could be determined against white or black.
---


---
name: professional-client-website
description: Create a professional service website structure, copy, and design brief that attracts clients, based on an existing Wix URL or provided site content.
argument-hint: Provide the source URL or site content to mirror and the target audience/industry.
---

# Professional client-attraction website generator

## Input
- `sourceUrl`: (string) URL of the existing site to use as reference (e.g., Wix site link)
- `audience`: (string) Primary client persona(s) to attract
- `services`: (string[]) Core service offerings to highlight
- `tone`: (string, optional) Preferred brand voice (e.g., professional, warm, bold)
- `format`: (string, optional) Output format (`markdown`, `json`, `html`)

## Task
Given a source website reference and target client profile, create:
1. A concise brand positioning statement
2. A high-conversion homepage outline (sections, headings, CTA)
3. Service pages outlines in client-friendly language
4. SEO-ready headline + 3 meta description variants
5. Content copy for hero, about, services, testimonials, and CTA
6. Visual design guidance (layout, color palette, imagery, typography)

## Requirements
- Keep it customer-centric: focus on pain points and outcomes.
- Use simple, persuasive language for business decision-makers.
- Provide clear action items: copy snippet + design notes.
- If `format` is not given, default to `markdown`.

## Output
- A complete website blueprint, ready to hand to developers/designers.

## Examples
- `sourceUrl`: "https://briancarter340.wixsite.com/douglassede"
- `audience`: "small business owners in finance and coaching"
- `services`: ["branding", "web design", "lead generation"]
- `tone`: "professional, confident"
- `format`: "markdown"

# Lesson Formatting

##Markdown

We use the GitHub flavoured Markdown that pandoc understands, in particular the format `markdown_github+header_attributes+yaml_metadata_block+inline_code_attributes`. Pandoc's documentation covers these options and more http://johnmacfarlane.net/pandoc/demo/example9/pandocs-markdown.html

In particular:
- Each markdown file can begin with a YAML header
- Headers in markdown `# Header` can be annotated with styles `# {.style}`
- Fenced Code blocks can specify their language
- Inline code sections can too

For Example

    ---
    title: An example Markdown File
    ...

    # Introduction {.intro}

    ```scratch
    when FLAG clicked
      move 10 steps
    ```

## Headers in Markdown files

An example lesson header looks like this:

```
---
title: Felix and Herbert
level: Level 1
language: en-GB
embeds: "*.png"
materials: "Felix-and-Herbert.sb2"
note: "notes for club leaders.md"
...

Rest of markdown file ...
```

- The `language` is optional, but useful.
- `embeds` is a file or list of files for images used inside the document
- `materials` is a file or list of files of things that accompany the lesson (e.g. scratch files)
- `note` is the filename of the optional notes for volunteers.
- `level` is the difficulty of the project.

Any file name is taken to be relative to the markdown file's directory, file names can also be globbed, i.e "*.png".

The lesson formatter parses these headers for building the static pages and indexes, however they can also be defined in the Term Manifest, which is detailed later.

## Code Club Markdown Annotations

Each lesson begins with an introduction,
- Mark up introduction headers `# Intro {.intro}` (always a h1)
Each lesson is broken down into steps
- Mark up steps with `# Step 1 {.activity}` (always a h1)
Each step has a series of activities, in a list.
- Before each list, use a subheader `## Activity checklist {.check}` (always a h2)
Each step can have things to optionally try.
- Use `## Things to try {.try}` (always h2)
Each step can have challenges too.
- Use `## Challenge {.challenge}` (always a h2)
A note to save:
- Use `## Save Your Project {.save}` (always a h2)
A note to test:
- Use `## Test Your Project {.flag}` (always a h2)

## Scratchblocks

We use the scratchblocks2 library to render scratch blocks as png files.

Scratch blocks inside lessons must follow [the syntax set out here](http://wiki.scratch.mit.edu/wiki/Block_Plugin/Syntax).

You can [test your syntax here](http://scratchblocks.codeclub.org.uk/) (remembering to set the language!).

We use `scratch` to denote a scratch block in markdown:

    Some paragraph

    ```scratch
    when FLAG clicked
        move 10 steps
    ```

    Another paragraph


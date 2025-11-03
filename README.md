This repository is built off the Quartz v4 template. See below for details.

# Building Locally

Ensure you have the latest version of node installed.

1. Clone this repo onto your local device
2. Navigate into this directory and run `npm i`
3. Then run `npx quartz build --serve`
4. A server will be open at `http://localhost:8080`

Quartz supports hot reload so any modifications will be automatically updated without needing to restart the server. However, if you have syntax issues, the server might crash in which you will have to restart the server again by rerunning `npx quartz build --serve`.

## Editing CSS

Custom CSS is located in `/quartz/styles/custom.scss` and uses SASS. The base theme being used resides in `quartz/styles/themes/_index.scss`.

Please make a branch when making changes, and additionally, try to keep the code as robust as possible by using variables defined in `:root`.

## Editing Content

TBA. Raw content currently resides in `/content`, but there is a specific workflow for authoring content that is not yet documented so I would refrain from editing that folder.

# Quartz v4

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.
Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>

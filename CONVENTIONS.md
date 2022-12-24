
<div id="top"></div>

# Project Conventions

<details>
  <summary>Table of Contents</summary>

  1. [Overall Philosophy](#overall-philosophy)
  1. [Folder and File Name](#folder-and-file-names)
  1. [Root Dir](#root-dir)
  1. [App Dir](#app-dir)
  1. [Components Dir](#components-dir)
  1. [Component Mods](#component-mods)
  1. [Shared Components](#shared-components)
  1. [Nesting](#nesting)
  1. [Styling](#styling)
  1. [Git](#git)
  1. [Coding Conventions](#coding-conventions)
  
</details>

## Overall Philosophy

### Purpose

- reduce decision fatigue
- reduce complexly by balancing abstraction

### Decision Fatigue

Problem: Too much time is spend choosing names

Solution: Use generic names and folder context to avoid name collisions

### Balancing Abstraction

Reason for Abstraction: As a codebase becomes large it becomes complex and needs to be broken down to become workable and easy to reason about

Problem: As things get broken down it becomes difficult to remember what does what or what goes where. Naming and organization also gets out of hand. Shared abstractions must be extended to be customized leading to more complexly

Solution: Prefer local(close to where its used) code over centralized abstract code. Local code has more context, is easier reason about, and is easier to find
<p align="right">(<a href="#top">back to top</a>)</p>

## Folder and File Names

Rule: Folder and File names will be all lower case with a dash('-') used as a space

Reason: Casing is to avoid a bug on windows, dash convention insures route folders and other folders are uniform

<p align="right">(<a href="#top">back to top</a>)</p>

## Root Dir

Rule: root dir should have the following directories and files:

- app
- components
- public
- project-snippets
- config files/folders
- license
- README.md
- CONVENTIONS.md

Rule: root dir should not have:

- specialized dirs for imgs styles etc...

Reason: grouping files that are used together is easier to reason than files that are simply the same type

<p align="right">(<a href="#top">back to top</a>)</p>

## App Dir

Rule: only keep files here that are part of the next 13 app [file convention](https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory)

Reason: Keeping related components here requires the use of '()' surrounding folders which is awkward and causes route bugs if omitted. Also, keeping app pages/routes concerns separate from components concerns is a good balance of abstraction and makes layout, and pages easier to find
Rule: Keep nesting at two levels ie app/foo/bar
Reason: More than two levels of nesting is harder to reason about
<p align="right">(<a href="#top">back to top</a>)</p>

## Components Dir

Rule: Components root dir should have a shared dir and dirs that mirrors the app dir

Reason: This allows for generic naming and keeps files close to where they are used



<p align="right">(<a href="#top">back to top</a>)</p>

## Component Mods

Rule: components mods should mostly revolve around state and not be used to extend the component

Reason: this leads to another level of abstraction which can increase complexity, if you need something slightly different make something local

<p align="right">(<a href="#top">back to top</a>)</p>

## Shared Components

Rule: Should be created only when used in more than one place and destroyed when thats not longer the case, not extended to for multiple use cases

Reason: A lot of times it is much easier to just copy paste and make something local instead of extending something shared.

<p align="right">(<a href="#top">back to top</a>)</p>

## Nesting

Rule: Only have component and sub components

Reason: This is inspired by the [BEM](https://getbem.com/) approach without the modifier. Anything beyond two levels of nesting requires too much thought to be worth it

<p align="right">(<a href="#top">back to top</a>)</p>

## Styling

Rule: Use tailwindcss and css modules to do animations/ stuff thats too hard to do with just tailwind

Reason: This is easier than extending tailwind and keeps the css close to the component.

Rule: Don't use @apply or extract tailwind classes into their own string

Reason: This defeats the purpose of tailwind

<p align="right">(<a href="#top">back to top</a>)</p>

## Git

Rule: Don't add commit info that can be derived from the context of the branch name

Reason: Reduce mental overhead for messages and shorten messages

Rule: Don't use fast forward for git merges

Reason: This erases the branch information which in turn erases commit context

Rule: Branches should be major features that merge into main, sub-branches should be experiments that get squashed into a single commit and merged into it parent

Reason: Having long running sub-branches is more complex than it needs to be

Rule: Branch names should be separated by dashes('-')

Reason: To be consistent with file/folder names so less thing is involved across the project


<p align="right">(<a href="#top">back to top</a>)</p>

## Coding Conventions

Rule: Use [simple react snippets](https://github.com/burkeholland/simple-react-snippets) and snippet overrides in project-snippets folder see README.md inside folder for instructions

Rule: For component stories use [storybook helper](https://github.com/riccardo-forina/storybook-vscode-helper)

Reason: Saves time and ensures uniform boilerplate

<p align="right">(<a href="#top">back to top</a>)</p>


<div id="top"></div>

# Project Conventions

<details>
  <summary>Table of Contents</summary>

  1. [Overall Philosophy](#overall-philosophy)
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

Problem: Too much time is spend choosing names.

Solution: Use generic names and folder context to avoid name collisions

### Balancing Abstraction

Reason for Abstraction: As a codebase becomes large it becomes complex and needs to be broken down to become workable and easy to reason about.

Problem: As things get broken down it becomes difficult to remember what does what or what goes where. Naming and organization also gets out of hand. Shared abstractions must be extended to be customized leading to more complexly

Solution: Prefer local(close to where its used) code over centralized abstract code. Local code has more context, is easier reason about, and is easier to find.

<p align="right">(<a href="#top">back to top</a>)</p>

## Root Dir

Rule: root dir should have the following directories and files:

- app
- components
- public
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

Reason: Keeping related components here requires the use of '()' surrounding folders which is awkward and causes route bugs if omitted. Also, keeping app pages/routes concerns separate from components concerns is a good balance of abstraction and makes layout, and pages easier to find.

Rule: Keep nesting at two levels ie app/foo/bar

Reason: More than two levels of nesting is harder to reason about.

<p align="right">(<a href="#top">back to top</a>)</p>

## Components Dir



<p align="right">(<a href="#top">back to top</a>)</p>

## Component Mods

<p align="right">(<a href="#top">back to top</a>)</p>

## Shared Components

<p align="right">(<a href="#top">back to top</a>)</p>

## Nesting

<p align="right">(<a href="#top">back to top</a>)</p>

## Styling

<p align="right">(<a href="#top">back to top</a>)</p>

## Git

<p align="right">(<a href="#top">back to top</a>)</p>

## Coding Conventions

<p align="right">(<a href="#top">back to top</a>)</p>

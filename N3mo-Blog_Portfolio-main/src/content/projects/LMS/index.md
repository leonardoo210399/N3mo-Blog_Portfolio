---
title: "Learning Management System (LMS)"
summary: "A comprehensive Learning Management System built with JavaScript, React, and Tailwind CSS, featuring course management, video processing, and integration with Stripe and other services."
date: "2024-09-15"
draft: false
tags:
- LMS
- JavaScript
- React
- Tailwind CSS
- Stripe
- Video Processing
- Prisma
- MySQL
- Authentication
- UploadThing
- Mux
- TypeScript
- Radix UI
- Lucide Icons
- Axios
- Zod
- React 
- Recharts
- Query String
- Development Tools
demoUrl: https://lms-pink-ten.vercel.app/
repoUrl: https://github.com/leonardoo210399/lms.git
---

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">LMS</h1>
</p>
<p align="center">
    <em><code>A comprehensive Learning Management System built with modern web technologies to deliver a seamless online education experience.</code></em>
</p>

<p align="center">
    <em>Developed with the software and tools below.</em>
</p>
<p align="center" style="display:ruby">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=Next.js&logoColor=white" alt="Next.js">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=flat&logo=Tailwind%20CSS&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
    <img src="https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white&style=flat" alt="Clerk">
    <img src="https://img.shields.io/badge/Stripe-008CDD.svg?style=flat&logo=Stripe&logoColor=white" alt="Stripe">
    <img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
    <img src="https://img.shields.io/badge/MySQL-F29111.svg?style=flat&logo=MySQL&logoColor=white" alt="MySQL">
    <img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
    <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
</p>

<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📸 Screenshots](#-screenshots)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running Locally](#-running-locally)
>   - [🧪 Testing](#-testing)
>   - [🔧 Linting](#-linting)
>   - [🛠️ Post-Install](#-post-install)
> - [🌍 Environment Variables](#-environment-variables)
> - [🚀 Optimizations](#-optimizations)
>   - [🛠️ Code Refactoring](#-code-refactoring)
>   - [⚡ Performance Improvements](#-performance-improvements)
>   - [♿ Accessibility Enhancements](#-accessibility-enhancements)
>   - [🔒 Security Enhancements](#-security-enhancements)
>   - [🎨 UX/UI Improvements](#-uxui-improvements)
> - [🛣️ Project Roadmap](#-project-roadmap)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The LMS (Learning Management System) is an advanced platform designed for both students and educators to facilitate online learning. Developed with modern technologies like JavaScript, Node.js, Express, MongoDB, and React, this system aims to deliver a seamless educational experience. The LMS is equipped with features that support course creation, management, and delivery, making it a comprehensive solution for online education.

---

## 📦 Features

- **Browse & Filter Courses**: Users can explore and find courses that match their interests and needs.
- **Purchase Courses using Stripe**: Secure and reliable payment processing integrated with Stripe.
- **Progress Tracking**: Students can mark chapters as completed or uncompleted and track their progress.
- **Student Dashboard**: A personalized dashboard for students to manage their courses and track progress.
- **Teacher Mode**: Tools and features specifically designed for educators to create and manage their courses.
- **Course Creation**: Instructors can create new courses and chapters, upload thumbnails, attachments, and videos.
- **Drag and Drop Chapter Reordering**: Easily reorder chapters within a course.
- **Video Processing and HLS Player**: Videos are processed and played using Mux for a smooth viewing experience.
- **Rich Text Editor**: A powerful editor for creating detailed chapter descriptions.
- **Authentication with Clerk**: Secure user authentication and management.
- **ORM with Prisma**: Efficient database interactions using Prisma.
- **MySQL Database**: Reliable data storage with Render.
- **Course Grid & Card UI**: Intuitive and visually appealing UI for course display.
- **Stripe Integration**: Seamless payment processing for purchasing courses.
- **Teacher Analytics Dashboard**: Detailed analytics for teachers to monitor student engagement and performance.
- **Admin Protection (Optional)**: Additional security features for admin users.
- **Deployment**: Easy deployment process for making the LMS available online.

---

## 📸 Screenshots

<table>
  <tr>
    <td><strong>Homepage Overview</strong> 🏠<br><img src="https://i.postimg.cc/tJRrFP34/Screenshot-3.png" alt="Homepage Screenshot" width="300"/></td>
    <td><strong>Course Listing</strong> 📚<br><img src="https://i.postimg.cc/FzPTpRpg/Screenshot-4.png" alt="Course Listing Screenshot" width="300"/></td>
    <td><strong>Course Details</strong> 📖<br><img src="https://i.postimg.cc/tCTST3Rr/Screenshot-5.png" alt="Course Details Screenshot" width="300"/></td>
  </tr>
  <tr>
    <td><strong>Student Dashboard</strong> 👨‍🎓<br><img src="https://i.postimg.cc/zDp28tNb/Screenshot-6.png" alt="Student Dashboard Screenshot" width="300"/></td>
    <td><strong>Teacher Dashboard</strong> 👩‍🏫<br><img src="https://i.postimg.cc/BQVh1jXJ/Screenshot-7.png" alt="Teacher Dashboard Screenshot" width="300"/></td>
    <td><strong>Settings and Profile</strong> ⚙️<br><img src="https://i.postimg.cc/Vk0K9zCn/Screenshot-8.png" alt="Settings Screenshot" width="300"/></td>
  </tr>
</table>

## 📂 Repository Structure

```sh
└── lms/
    ├── README.md
    ├── actions
    │   ├── get-analytics.ts
    │   ├── get-chapter.ts
    │   ├── get-courses.ts
    │   ├── get-dashboard-courses.ts
    │   └── get-progress.tsx
    ├── app
    │   ├── (auth)
    │   │   ├── (routes)
    │   │   │   ├── sign-in
    │   │   │   │   └── [[...sign-in]]
    │   │   │   └── sign-up
    │   │   │       └── [[...sign-up]]
    │   │   └── layout.tsx
    │   ├── (course)
    │   │   └── courses
    │   │       └── [courseId]
    │   │           ├── _components
    │   │           ├── chapters
    │   │           ├── layout.tsx
    │   │           └── page.tsx
    │   ├── (dashboard)
    │   │   ├── (routes)
    │   │   │   ├── (root)
    │   │   │   │   ├── _components
    │   │   │   │   └── page.tsx
    │   │   │   ├── search
    │   │   │   │   ├── _components
    │   │   │   │   └── page.tsx
    │   │   │   └── teacher
    │   │   │       ├── analytics
    │   │   │       ├── courses
    │   │   │       ├── create
    │   │   │       └── layout.tsx
    │   │   ├── _components
    │   │   │   ├── Logo.tsx
    │   │   │   ├── mobile-Sidebar.tsx
    │   │   │   ├── navbar.tsx
    │   │   │   ├── sidebar-item.tsx
    │   │   │   ├── sidebar-routes.tsx
    │   │   │   └── sidebar.tsx
    │   │   └── layout.tsx
    │   ├── api
    │   │   ├── courses
    │   │   │   ├── [courseId]
    │   │   │   │   ├── attachments
    │   │   │   │   ├── chapters
    │   │   │   │   ├── checkout
    │   │   │   │   ├── publish
    │   │   │   │   ├── route.ts
    │   │   │   │   └── unpublish
    │   │   │   └── route.ts
    │   │   ├── uploadthing
    │   │   │   ├── core.ts
    │   │   │   └── route.ts
    │   │   └── webhook
    │   │       └── route.ts
    │   ├── favicon.ico
    │   ├── globals.css
    │   └── layout.tsx
    ├── components
    │   ├── banner.tsx
    │   ├── course-card.tsx
    │   ├── course-progress.tsx
    │   ├── courses-list.tsx
    │   ├── editor.tsx
    │   ├── file-upload.tsx
    │   ├── icon-badge.tsx
    │   ├── modals
    │   │   └── confirm-modal.tsx
    │   ├── navbar-routes.tsx
    │   ├── preview.tsx
    │   ├── providers
    │   │   ├── confetii-provider.tsx
    │   │   └── toaster-provider.tsx
    │   ├── search-input.tsx
    │   └── ui
    │       ├── alert-dialog.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── checkbox.tsx
    │       ├── combobox.tsx
    │       ├── command.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── table.tsx
    │       └── textarea.tsx
    ├── components.json
    ├── hooks
    │   ├── use-confetti-store.ts
    │   └── use-debounce.ts
    ├── lib
    │   ├── db.ts
    │   ├── format.ts
    │   ├── stripe.ts
    │   ├── teacher.ts
    │   ├── uploadthing.ts
    │   └── utils.ts
    ├── middleware.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── prisma
    │   └── schema.prisma
    ├── public
    │   ├── logo.svg
    │   ├── next.svg
    │   └── vercel.svg
    ├── scripts
    │   └── seed.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                        | Summary                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [middleware.ts](https://github.com/leonardoo210399/lms/blob/master/middleware.ts)           | Contains custom middleware functions used for processing requests and managing authentication, logging, and error handling.                         |
| [postcss.config.mjs](https://github.com/leonardoo210399/lms/blob/master/postcss.config.mjs) | Configuration file for PostCSS, which is used to process CSS files and apply plugins for optimizing and transforming styles.                        |
| [tailwind.config.ts](https://github.com/leonardoo210399/lms/blob/master/tailwind.config.ts) | Configuration file for Tailwind CSS, defining custom themes, colors, and breakpoints to style the application.                                      |
| [components.json](https://github.com/leonardoo210399/lms/blob/master/components.json)       | JSON file listing all reusable UI components used throughout the application, including their properties and configuration.                         |
| [tsconfig.json](https://github.com/leonardoo210399/lms/blob/master/tsconfig.json)           | TypeScript configuration file specifying compiler options, type checking rules, and project settings for the TypeScript compiler.                   |
| [package.json](https://github.com/leonardoo210399/lms/blob/master/package.json)             | Defines the project's dependencies, scripts, and metadata, including project name, version, and description.                                        |
| [next.config.mjs](https://github.com/leonardoo210399/lms/blob/master/next.config.mjs)       | Configuration file for Next.js, used to customize the Next.js build and runtime behavior, such as webpack configurations and environment variables. |
| [package-lock.json](https://github.com/leonardoo210399/lms/blob/master/package-lock.json)   | Automatically generated file that locks the versions of dependencies used in the project to ensure consistent installations across environments.    |

</details>

<details closed><summary>actions</summary>

---

| File                                                                                                            | Summary                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [get-dashboard-courses.ts](https://github.com/leonardoo210399/lms/blob/master/actions/get-dashboard-courses.ts) | Handles fetching the list of courses available on the user's dashboard, including course details and progress.            |
| [get-progress.tsx](https://github.com/leonardoo210399/lms/blob/master/actions/get-progress.tsx)                 | Retrieves and displays the progress of a specific course or chapter for a user, used in progress tracking.                |
| [get-courses.ts](https://github.com/leonardoo210399/lms/blob/master/actions/get-courses.ts)                     | Fetches the list of all courses available on the platform, including filtering and search functionality.                  |
| [get-chapter.ts](https://github.com/leonardoo210399/lms/blob/master/actions/get-chapter.ts)                     | Retrieves information for a specific chapter of a course, including chapter content and metadata.                         |
| [get-analytics.ts](https://github.com/leonardoo210399/lms/blob/master/actions/get-analytics.ts)                 | Provides analytical data related to courses and user interactions, such as engagement metrics and performance statistics. |

---

</details>

<details closed><summary>components</summary>

---

| File                                                                                                     | Summary                                                                                                         |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [navbar-routes.tsx](https://github.com/leonardoo210399/lms/blob/master/components/navbar-routes.tsx)     | Defines the navigation routes and links in the application’s navigation bar for seamless user experience.       |
| [preview.tsx](https://github.com/leonardoo210399/lms/blob/master/components/preview.tsx)                 | Renders previews of course content or materials, allowing users to view content before enrolling or purchasing. |
| [icon-badge.tsx](https://github.com/leonardoo210399/lms/blob/master/components/icon-badge.tsx)           | Displays badge icons for various course or user statuses, such as completion or achievements.                   |
| [search-input.tsx](https://github.com/leonardoo210399/lms/blob/master/components/search-input.tsx)       | Provides a search input field for filtering and finding courses or content within the platform.                 |
| [editor.tsx](https://github.com/leonardoo210399/lms/blob/master/components/editor.tsx)                   | Implements a rich text editor for creating and editing course chapters and descriptions.                        |
| [course-card.tsx](https://github.com/leonardoo210399/lms/blob/master/components/course-card.tsx)         | Displays individual course cards with key details and actions like enrollment or preview.                       |
| [file-upload.tsx](https://github.com/leonardoo210399/lms/blob/master/components/file-upload.tsx)         | Handles file uploads for course materials, including videos, attachments, and thumbnails.                       |
| [course-progress.tsx](https://github.com/leonardoo210399/lms/blob/master/components/course-progress.tsx) | Shows progress for each course, including completed chapters and overall course completion status.              |
| [courses-list.tsx](https://github.com/leonardoo210399/lms/blob/master/components/courses-list.tsx)       | Lists all available courses with options for browsing, filtering, and sorting.                                  |
| [banner.tsx](https://github.com/leonardoo210399/lms/blob/master/components/banner.tsx)                   | Displays promotional banners or notifications to users, such as special offers or important updates.            |

---

</details>

<details closed><summary>components.modals</summary>

---

| File                                                                                                        | Summary                                                                                                       |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [confirm-modal.tsx](https://github.com/leonardoo210399/lms/blob/master/components/modals/confirm-modal.tsx) | Displays a confirmation modal for user actions requiring confirmation, such as deletions or critical changes. |

---

</details>

<details closed><summary>components.ui</summary>

---

| File                                                                                                    | Summary                                                                                                   |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [popover.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/popover.tsx)             | Implements a popover component for displaying additional information or controls in a floating overlay.   |
| [combobox.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/combobox.tsx)           | Provides a combobox component for selecting an item from a dropdown list with an optional search feature. |
| [separator.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/separator.tsx)         | Renders a visual separator line to distinguish sections or groups of content.                             |
| [label.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/label.tsx)                 | Displays labels for form fields or other UI elements to provide context and guidance to users.            |
| [textarea.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/textarea.tsx)           | Provides a multiline input field for user text input, typically used in forms and content editors.        |
| [sheet.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/sheet.tsx)                 | Implements a sheet component for displaying side panels or sliding overlays with additional content.      |
| [checkbox.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/checkbox.tsx)           | Renders a checkbox input for binary selection, allowing users to choose between two options.              |
| [dropdown-menu.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/dropdown-menu.tsx) | Provides a dropdown menu component for displaying a list of actions or options in a collapsible menu.     |
| [badge.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/badge.tsx)                 | Displays a badge component to show counts, statuses, or notifications in a small, visible label.          |
| [progress.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/progress.tsx)           | Implements a progress bar or indicator to show the completion status of a task or process.                |
| [card.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/card.tsx)                   | Renders a card component for grouping related information or actions into a visually distinct container.  |
| [alert-dialog.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/alert-dialog.tsx)   | Implements an alert dialog component for displaying important messages or alerts to users.                |
| [dialog.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/dialog.tsx)               | Provides a dialog component for creating modal windows or interactive pop-ups.                            |
| [command.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/command.tsx)             | Implements a command input component for executing actions or commands through user input.                |
| [input.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/input.tsx)                 | Renders a standard input field for single-line text entry in forms or user interfaces.                    |
| [table.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/table.tsx)                 | Provides a table component for displaying data in a structured grid with rows and columns.                |
| [button.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/button.tsx)               | Renders a button component for triggering actions or navigating within the application.                   |
| [form.tsx](https://github.com/leonardoo210399/lms/blob/master/components/ui/form.tsx)                   | Implements a form component for handling user input and submitting data with validation.                  |

---

</details>

<details closed><summary>components.providers</summary>

---

| File                                                                                                                   | Summary                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [toaster-provider.tsx](https://github.com/leonardoo210399/lms/blob/master/components/providers/toaster-provider.tsx)   | Provides the context and functionality for displaying toast notifications throughout the application. |
| [confetii-provider.tsx](https://github.com/leonardoo210399/lms/blob/master/components/providers/confetii-provider.tsx) | Implements the confetti effect provider for adding celebratory animations or visual effects.          |

---

</details>

<details closed><summary>scripts</summary>

---

| File                                                                          | Summary                                                                                           |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [seed.ts](https://github.com/leonardoo210399/lms/blob/master/scripts/seed.ts) | Contains the script for seeding the database with initial data, such as default courses or users. |

---

</details>

<details closed><summary>lib</summary>

---

| File                                                                                    | Summary                                                                                          |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [utils.ts](https://github.com/leonardoo210399/lms/blob/master/lib/utils.ts)             | Contains utility functions used across the application for common tasks and operations.          |
| [uploadthing.ts](https://github.com/leonardoo210399/lms/blob/master/lib/uploadthing.ts) | Provides functions and configurations for handling file uploads through the UploadThing service. |
| [db.ts](https://github.com/leonardoo210399/lms/blob/master/lib/db.ts)                   | Manages database connections and interactions, including setup and configuration.                |
| [format.ts](https://github.com/leonardoo210399/lms/blob/master/lib/format.ts)           | Includes functions for formatting data, such as dates and numbers, for consistent presentation.  |
| [stripe.ts](https://github.com/leonardoo210399/lms/blob/master/lib/stripe.ts)           | Contains integration logic for Stripe payment processing, including API interactions and setup.  |
| [teacher.ts](https://github.com/leonardoo210399/lms/blob/master/lib/teacher.ts)         | Provides functions and data management related to teacher-specific features and operations.      |

---

</details>

<details closed><summary>hooks</summary>

---

| File                                                                                                    | Summary                                                                                                      |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [use-confetti-store.ts](https://github.com/leonardoo210399/lms/blob/master/hooks/use-confetti-store.ts) | Implements a custom hook for managing and triggering confetti effects in the application.                    |
| [use-debounce.ts](https://github.com/leonardoo210399/lms/blob/master/hooks/use-debounce.ts)             | Provides a custom hook for debouncing values, which helps in reducing the frequency of updates or API calls. |

---

</details>

<details closed><summary>prisma</summary>

---

| File                                                                                     | Summary                                                                                                      |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [schema.prisma](https://github.com/leonardoo210399/lms/blob/master/prisma/schema.prisma) | Defines the Prisma schema, including models, relationships, and database configurations for the application. |

---

</details>

<details closed><summary>app</summary>

---

| File                                                                              | Summary                                                                                                        |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [globals.css](https://github.com/leonardoo210399/lms/blob/master/app/globals.css) | Contains global CSS styles for the application, providing a consistent look and feel across all pages.         |
| [layout.tsx](https://github.com/leonardoo210399/lms/blob/master/app/layout.tsx)   | Defines the layout component for the application, including the structure and placement of common UI elements. |

---

</details>

<details closed><summary>app.(dashboard)</summary>

---

| File                                                                                          | Summary                                                                                                                          |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/layout.tsx>) | Defines the layout specific to the dashboard section of the application, including dashboard-specific UI elements and structure. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher</summary>

---

| File                                                                                                           | Summary                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/layout.tsx>) | Defines the layout specific to the teacher routes within the dashboard, including teacher-specific UI elements and structure. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.create</summary>

---

| File                                                                                                              | Summary                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/create/page.tsx>) | Contains the page component for creating new teacher-related content or resources, including forms and UI elements for the creation process. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.analytics</summary>

---

| File                                                                                                                 | Summary                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/analytics/page.tsx>) | Contains the page component for displaying teacher analytics, including data visualizations and performance metrics relevant to teachers. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.analytics._components</summary>

---

| File                                                                                                                                       | Summary                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| [chart.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/analytics/_components/chart.tsx>)         | Contains the component for rendering charts and visualizations, used to display analytical data.               |
| [data-card.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/analytics/_components/data-card.tsx>) | Defines the component for displaying individual data cards, showcasing metrics and key performance indicators. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.courses</summary>

---

| File                                                                                                               | Summary                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/page.tsx>) | Contains the page component for managing and displaying teacher courses, including course lists and details. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.courses.[courseId]</summary>

---

| File                                                                                                                          | Summary                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/page.tsx>) | Contains the page component for displaying and managing a specific course identified by its ID, including details such as course content, progress, and management options. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.courses.[courseId]._components</summary>

---

| File                                                                                                                                                              | Summary                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [chapters-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/chapters-form.tsx>)       | Provides a form component for managing course chapters, including adding, editing, and deleting chapters.                |
| [attachment-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/attachment-form.tsx>)   | Contains a form component for managing course attachments, such as documents or additional resources.                    |
| [description-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/description-form.tsx>) | Includes a form for editing the course description, allowing updates to course content and details.                      |
| [price-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/price-form.tsx>)             | Manages the form for setting or updating the price of the course, including pricing details and options.                 |
| [category-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/category-form.tsx>)       | Provides a form component for setting or updating course categories, enabling better organization and filtering.         |
| [actions.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/actions.tsx>)                   | Contains action buttons and components for performing course-related actions, such as saving or deleting course data.    |
| [chapters-list.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/chapters-list.tsx>)       | Displays a list of course chapters, including options to manage or reorder chapters within the course.                   |
| [image-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/image-form.tsx>)             | Manages the form for uploading and setting course images or thumbnails, enhancing the visual presentation of the course. |
| [title-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/_components/title-form.tsx>)             | Provides a form for editing or setting the course title, ensuring that the title accurately reflects the course content. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.courses.[courseId].chapters.[chapterId]</summary>

---

| File                                                                                                                                               | Summary                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/page.tsx>) | Displays the details and content of a specific chapter within a course, allowing for viewing and potentially editing chapter information. |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.courses.[courseId].chapters.[chapterId]._components</summary>

---

| File                                                                                                                                                                                                   | Summary                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [chapter-title-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-title-form.tsx>)             | Provides a form to edit or update the title of a chapter within a course.                  |
| [chapter-description-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-description-form.tsx>) | Allows editing or updating the description of a chapter within a course.                   |
| [chapter-access-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-access-form.tsx>)           | Manages access settings or permissions for a chapter, determining who can view or edit it. |
| [chapter-video-form.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-video-form.tsx>)             | Facilitates the upload or editing of video content associated with a chapter.              |
| [chapter-actions.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/[courseId]/chapters/[chapterId]/_components/chapter-actions.tsx>)                   | Provides actions for managing a chapter, such as save, delete, or reorder options.         |

---

</details>

<details closed><summary>app.(dashboard).(routes).teacher.courses._components</summary>

---

| File                                                                                                                                       | Summary                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| [data-table.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/_components/data-table.tsx>) | Displays a table view of course data, allowing for sorting, filtering, and pagination of course information. |
| [columns.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/teacher/courses/_components/columns.tsx>)       | Defines the structure and content of columns used in tables for displaying course data.                      |

---

</details>

<details closed><summary>app.(dashboard).(routes).search</summary>

| File                                                                                                      | Summary                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/search/page.tsx>) | Implements the search functionality, providing users with the ability to search through courses or content using various filters and search criteria. |

---

</details>

<details closed><summary>app.(dashboard).(routes).search._components</summary>

---

| File                                                                                                                                    | Summary                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [categories.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/search/_components/categories.tsx>)       | Renders a list of categories for search filtering, allowing users to narrow down search results by category. |
| [category-item.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/search/_components/category-item.tsx>) | Represents individual category items in the search filter, providing clickable options for users.            |

---

</details>

<details closed><summary>app.(dashboard).(routes).(root)</summary>

---

| File                                                                                                      | Summary                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/(root)/page.tsx>) | Serves as the main page layout or entry point for the root route in the dashboard. It may include overall navigation and high-level dashboard features. |

---

</details>

<details closed><summary>app.(dashboard).(routes).(root)._components</summary>

---

| File                                                                                                                            | Summary                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [info-card.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/(routes)/(root)/_components/info-card.tsx>) | Displays informational cards on the main dashboard page, providing quick insights or statistics. |

---

</details>

<details closed><summary>app.(dashboard)._components</summary>

---

| File                                                                                                                      | Summary                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Logo.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/_components/Logo.tsx>)                     | Renders the logo component, typically used in the header or sidebar for branding and navigation.                                              |
| [mobile-Sidebar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/_components/mobile-Sidebar.tsx>) | Implements a mobile-friendly sidebar, providing navigation options and potentially collapsing or hiding features on smaller screens.          |
| [sidebar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/_components/sidebar.tsx>)               | Displays the main sidebar with navigation links, often including features like course lists, user settings, and other dashboard sections.     |
| [sidebar-item.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/_components/sidebar-item.tsx>)     | Represents an individual item within the sidebar, used for navigation between different sections or pages.                                    |
| [sidebar-routes.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/_components/sidebar-routes.tsx>) | Defines and manages the routing and links within the sidebar, ensuring navigation flows correctly between different parts of the application. |
| [navbar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(dashboard)/_components/navbar.tsx>)                 | Implements the top navigation bar, including features like logo, search, user profile options, and other navigation elements.                 |

---

</details>

<details closed><summary>app.api.uploadthing</summary>

---

| File                                                                                        | Summary                                                                                                      |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/uploadthing/route.ts) | Defines API routes for handling upload-related operations, such as file uploads and related requests.        |
| [core.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/uploadthing/core.ts)   | Implements core functionality for the upload service, including file processing, validation, and management. |

---

</details>

<details closed><summary>app.api.courses</summary>

---

| File                                                                                    | Summary                                                                                                                  |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/route.ts) | Defines API routes related to course management, including endpoints for creating, updating, and retrieving course data. |

---

</details>

<details closed><summary>app.api.courses.[courseId]</summary>

---

| File                                                                                               | Summary                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/route.ts) | Manages API routes for operations on a specific course identified by `courseId`, including endpoints for retrieving, updating, or deleting course details. |

---

</details>

<details closed><summary>app.api.courses.[courseId].unpublish</summary>

---

| File                                                                                                         | Summary                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/unpublish/route.ts) | Manages the API route for unpublishing a specific course identified by `courseId`. This endpoint is used to change the status of the course, making it unavailable to students. |

---

</details>

<details closed><summary>app.api.courses.[courseId].publish</summary>

---

| File                                                                                                       | Summary                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/publish/route.ts) | Manages the API route for publishing a specific course identified by `courseId`. This endpoint is used to make the course available to students. |

---

</details>

<details closed><summary>app.api.courses.[courseId].checkout</summary>

---

| File                                                                                                        | Summary                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/checkout/route.ts) | Handles the API route for initiating a checkout process for a specific course identified by `courseId`. This endpoint typically involves payment processing and order creation. |

---

</details>

<details closed><summary>app.api.courses.[courseId].attachments</summary>

---

| File                                                                                                           | Summary                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/attachments/route.ts) | Manages the API routes for handling course attachments. This includes operations such as uploading, retrieving, and managing files associated with a specific course identified by `courseId`. |

---

</details>

<details closed><summary>app.api.courses.[courseId].attachments.[attachmentId]</summary>

---

| File                                                                                                                          | Summary                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/attachments/[attachmentId]/route.ts) | Manages the API routes for handling operations on a specific attachment within a course. This includes actions like retrieving, updating, or deleting an attachment identified by `attachmentId` for a given `courseId`. |

---

</details>

<details closed><summary>app.api.courses.[courseId].chapters</summary>

---

| File                                                                                                        | Summary                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/chapters/route.ts) | Defines API routes for managing course chapters, including operations like creating, updating, and retrieving chapters for a specific course identified by `courseId`. |

---

</details>

<details closed><summary>app.api.courses.[courseId].chapters.[chapterId]</summary>

---

| File                                                                                                                    | Summary                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/chapters/[chapterId]/route.ts) | Defines API routes for managing a specific chapter within a course, identified by `courseId` and `chapterId`. This includes operations such as updating, deleting, and retrieving information for that chapter. |

---

</details>

<details closed><summary>app.api.courses.[courseId].chapters.[chapterId].progress</summary>

---

| File                                                                                                                             | Summary                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/chapters/[chapterId]/progress/route.ts) | Defines API routes for managing the progress of a specific chapter within a course, identified by `courseId` and `chapterId`. This includes tracking and updating progress status for users. |

---

</details>

<details closed><summary>app.api.courses.[courseId].chapters.[chapterId].unpublish</summary>

---

| File                                                                                                                              | Summary                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/chapters/[chapterId]/unpublish/route.ts) | Manages API routes for unpublishing a specific chapter within a course, identified by `courseId` and `chapterId`. This typically involves changing the chapter's visibility or status to not available to students. |

---

</details>

<details closed><summary>app.api.courses.[courseId].chapters.[chapterId].publish</summary>

---

| File                                                                                                                            | Summary                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/chapters/[chapterId]/publish/route.ts) | Handles API routes for publishing a specific chapter within a course, identified by `courseId` and `chapterId`. This usually involves updating the chapter's status to make it visible and accessible to students. |

---

</details>

<details closed><summary>app.api.courses.[courseId].chapters.reorder</summary>

---

| File                                                                                                                | Summary                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/courses/[courseId]/chapters/reorder/route.ts) | Handles API routes for reordering chapters within a specific course, identified by `courseId`. This involves updating the order of chapters as specified by the user. |

---

</details>

<details closed><summary>app.api.webhook</summary>

---

| File                                                                                    | Summary                                                                                                                                                                  |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [route.ts](https://github.com/leonardoo210399/lms/blob/master/app/api/webhook/route.ts) | Manages API routes for handling webhook events. This could include processing incoming data from external services or systems as specified in the webhook configuration. |

---

</details>

<details closed><summary>app.(course).courses.[courseId]</summary>

---

| File                                                                                                          | Summary                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/page.tsx>)     | Renders the main course page for a specific course identified by `courseId`. This file handles the display of course details, including course content, instructor information, and student interactions.        |
| [layout.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/layout.tsx>) | Defines the layout structure for the course pages, ensuring consistent presentation and navigation elements for courses identified by `courseId`. It may include headers, sidebars, and other layout components. |

---

</details>

<details closed><summary>app.(course).courses.[courseId]._components</summary>

---

| File                                                                                                                                                    | Summary                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [course-sidebar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-sidebar.tsx>)               | Implements the sidebar for course pages, providing navigation links and additional course-related options. It organizes and presents links to various sections of the course. |
| [course-navbar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-navbar.tsx>)                 | Contains the navigation bar for course pages, including elements like course title, user profile, and primary navigation actions.                                             |
| [course-sidebar-item.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-sidebar-item.tsx>)     | Defines individual items or links within the course sidebar, allowing users to navigate to specific sections or features of the course.                                       |
| [course-mobile-sidebar.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/_components/course-mobile-sidebar.tsx>) | Provides a mobile-friendly version of the course sidebar, optimizing navigation and layout for smaller screens.                                                               |

---

</details>

<details closed><summary>app.(course).courses.[courseId].chapters.[chapterId]</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/page.tsx>) | Displays the details and contents of a specific chapter within a course, including chapter title, description, and associated resources. It likely manages the layout and presentation of the chapter’s content. |

---

</details>

<details closed><summary>app.(course).courses.[courseId].chapters.[chapterId]._components</summary>

---

| File                                                                                                                                                                           | Summary                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| [course-enroll-button.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button.tsx>)     | Renders a button for enrolling in a course. This button likely initiates the enrollment process or redirects users to a sign-up page.   |
| [course-progress-button.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-progress-button.tsx>) | Displays a button for tracking or updating course progress. It may show current progress and allow users to mark lessons as complete.   |
| [video-player.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/video-player.tsx>)                     | Provides a video player interface for watching course videos. It includes playback controls and may handle video loading and streaming. |

---

</details>

<details closed><summary>app.(auth)</summary>

---

| File                                                                                     | Summary                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(auth)/layout.tsx>) | Manages the layout and structure for authentication-related pages. This file likely sets up common elements such as headers, footers, and sidebars for pages related to user authentication. It might also handle routing or conditional rendering based on user authentication status. |

---

</details>

<details closed><summary>app.(auth).(routes).sign-in.[[...sign-in]]</summary>

---

| File                                                                                                                 | Summary                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(auth)/(routes)/sign-in/[[...sign-in]]/page.tsx>) | Handles the sign-in page for authentication. This file likely includes the form for user login, input validation, and error handling. It may also manage user redirection or display messages based on sign-in status. |

---

</details>

<details closed><summary>app.(auth).(routes).sign-up.[[...sign-up]]</summary>

---

| File                                                                                                                 | Summary                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](<https://github.com/leonardoo210399/lms/blob/master/app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx>) | Handles the sign-up page for new user registration. This file likely includes the form for creating a new account, input validation, and error handling. It may also manage user redirection or display messages based on the registration status. |

---

</details>

---

Here’s the updated "Getting Started" section with the details of the dependencies included:

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `^5`
- **Node.js**: Ensure compatibility with the project's requirements
- **Prisma**: `^5.16.1`

**_Project Dependencies_**

- **Core Packages:**

  - **Next.js**: `^14.2.4`
  - **React**: `^18`
  - **Prisma Client**: `^5.16.2`

- **UI & Components:**

  - **Radix UI**: For UI primitives (e.g., `@radix-ui/react-alert-dialog`, `@radix-ui/react-checkbox`, etc.)
  - **Lucide Icons**: `^0.400.0`
  - **Tailwind CSS**: `^3.4.1`
  - **Tailwind CSS Animate**: `^1.0.7`
  - **Class Variance Authority**: `^0.7.0`

- **Utilities:**

  - **Axios**: `^1.7.2`
  - **Zod**: `^3.23.8`
  - **React Hook Form**: `^7.44.3`
  - **React Dropzone**: `^14.2.3`
  - **React Hot Toast**: `^2.4.1`
  - **React Quill**: `^2.0.0`
  - **Stripe**: `^16.2.0`
  - **Recharts**: `^2.12.7`
  - **Query String**: `^9.0.0`
  - **Uploadthing**: `^6.13.2`

- **Development Tools:**
  - **ESLint**: `^8`
  - **ESLint Config Next**: `14.2.4`
  - **PostCSS**: `^8`
  - **Prisma CLI**: `^5.16.1`
  - **TypeScript**: `^5`

### ⚙️ Installation

1. **Clone the lms Repository:**

   ```sh
   git clone https://github.com/leonardoo210399/lms
   ```

2. **Change to the Project Directory:**

   ```sh
   cd lms
   ```

3. **Install the Dependencies:**

   ```sh
   npm install
   ```

### 🤖 Running Locally

1. **Development Server:**

   Start the development server with:

   ```sh
   npm run dev
   ```

2. **Build for Production:**

   Build the application for production with:

   ```sh
   npm run build
   ```

3. **Start Production Server:**

   Start the production server with:

   ```sh
   npm run start
   ```

### 🧪 Testing

To execute tests, run:

```sh
npm test
```

### 🔧 Linting

Run the linter with:

```sh
npm run lint
```

### 🛠️ Post-Install

Generate the Prisma client after installing dependencies with:

```sh
npm run postinstall
```

## 🌍 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

# Clerk Sign-In/Sign-Up URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Prisma Configuration
# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="your_database_url"

# UploadThing Configuration
UPLOADTHING_SECRET=your_key
UPLOADTHING_APP_ID=your_key

# Mux Configuration
MUX_TOKEN_ID=your_key
MUX_TOKEN_SECRET=your_key

# Stripe Configuration
STRIPE_API_KEY=your_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=your_key

# Additional Configurations
NEXT_PUBLIC_TEACHER_ID=your_key
```

## 🚀 Optimizations

### 🛠️ Code Refactoring

1. **Modularization:** Split large components and functions into smaller, reusable modules to improve readability and maintainability.
2. **Code Cleanup:** Removed redundant code, comments, and unused variables to reduce clutter.
3. **Consistent Naming:** Adopted a consistent naming convention for variables, functions, and components to improve code clarity.
4. **TypeScript Conversion:** Converted JavaScript code to TypeScript for better type safety and error checking.

### ⚡ Performance Improvements

1. **Lazy Loading:** Implemented lazy loading for components and images to reduce initial load time.
2. **Memoization:** Used React's `useMemo` and `useCallback` hooks to prevent unnecessary re-renders and optimize performance.
3. **Optimized Queries:** Improved database queries with indexing and optimized filtering to enhance data retrieval speed.
4. **Static Asset Caching:** Configured caching for static assets to reduce server load and improve load times.
5. **Code Splitting:** Utilized dynamic imports to split code into smaller bundles, improving load times for large applications.
6. **Debouncing:** Implemented debouncing for search inputs and other frequent user actions to reduce unnecessary API calls.

### ♿ Accessibility Enhancements

1. **ARIA Roles:** Added ARIA roles to improve accessibility for users relying on screen readers.
2. **Keyboard Navigation:** Ensured that all interactive elements are accessible via keyboard navigation.
3. **Alt Text:** Provided meaningful alt text for images to enhance the experience for visually impaired users.
4. **Color Contrast:** Improved color contrast to ensure readability for users with visual impairments.
5. **Semantic HTML:** Used semantic HTML elements (e.g., `<header>`, `<main>`, `<footer>`) to provide better structure and meaning to the content.
6. **Focus Management:** Managed focus states to improve navigation for keyboard and screen reader users.

### 🔒 Security Enhancements

1. **Input Validation:** Implemented server-side and client-side validation to prevent SQL injection and cross-site scripting (XSS) attacks.
2. **Authentication:** Used secure authentication methods and token handling to protect user data.
3. **Environment Variables:** Secured sensitive information using environment variables.
4. **HTTPS:** Enforced HTTPS for secure data transmission.

### 🎨 UX/UI Improvements

1. **Responsive Design:** Ensured the application is fully responsive and works well on various screen sizes and devices.
2. **Loading Indicators:** Added loading indicators to provide feedback during data fetching operations.
3. **Error Handling:** Implemented comprehensive error handling to gracefully manage and display error messages to users.
4. **User Feedback:** Provided feedback for user actions like form submissions, button clicks, etc.
5. **Improved Forms:** Enhanced form usability with clear labels, validation messages, and accessibility improvements.

By implementing these optimizations, the application not only performs better but also provides a more accessible, secure, and user-friendly experience.

---

## 🛠 Project Roadmap

- [x] `► Initial Setup and Configuration`
- [x] `► Implement Course Management`
- [x] `► Integrate Payment System with Stripe`
- [x] `► Develop Student and Teacher Dashboards`
- [x] `► Add Video Processing and HLS Player`
- [x] `► Implement Authentication with Clerk`
- [x] `► Set Up ORM with Prisma and MySQL`
- [x] `► Enhance UX/UI Design`
- [x] `► Implement Advanced Analytics for Teachers`
- [x] `► Add Admin Protection Features (Optional)`
- [x] `► Optimize Performance and Accessibility`
- [x] `► Final Testing and Debugging`
- [x] `► Deployment and Launch`

---

## 👏 Acknowledgments

We extend our heartfelt thanks to the following individuals and resources who contributed to the success of this project:

- **[OpenAI](https://www.openai.com)**: For providing the powerful GPT models that inspired innovative features and solutions.
- **[Mux](https://mux.com)**: For offering exceptional video processing and HLS streaming services that enhanced our multimedia capabilities.
- **[Stripe](https://stripe.com)**: For delivering a seamless and reliable payment processing system.
- **[Clerk](https://clerk.dev)**: For providing robust authentication services that ensure secure user management.
- **[UploadThing](https://uploadthing.com)**: For facilitating smooth file uploads and management.
- **[Prisma](https://www.prisma.io)**: For offering an intuitive ORM to simplify database interactions.
- **[Tailwind CSS](https://tailwindcss.com)**: For a versatile utility-first CSS framework that streamlined our styling process.
- **[React](https://reactjs.org)** and **[Next.js](https://nextjs.org)**: For powerful tools that enabled the creation of a dynamic and responsive front-end.
- **[Render.com](https://render.com)**: For providing a reliable and scalable database solution.

### Special Thanks

- **Our Community**: For providing valuable feedback and suggestions that guided the development of this project.
- **Open Source Contributors**: For sharing their knowledge and tools, which greatly accelerated our development process.
- **Friends and Family**: For their continuous support and encouragement throughout the development of this project.

---

[**Return**](#-quick-links)

---

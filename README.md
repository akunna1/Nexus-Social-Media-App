# Nexus App — Legacy Frontend

#### Complete code not provided...

---

## Overview

This frontend structure demonstrates key aspects of the legacy Nexus app, focusing on responsive design, navigation components, and color theming using React.js and Tailwind CSS.

---

## UI Components & Responsiveness

### Navbar Components

* **Navbar2**

  * Visible on **small and medium screens**
  * Includes burger menu, home icon, dark mode toggle (moon icon), grid icon, user image, and user name
  * Burger menu grants access to the left sidebar on smaller devices

* **Navbar**

  * Displays full navigation bar on **large screens**
  * Minimizes for medium and small screens to accommodate Navbar2

### Sidebars

* **Left Bar**

  * Always visible on **large screens** on the left
  * Hidden on medium and small screens but accessible via burger menu in Navbar2

* **Right Bar**

  * Visible only on **medium and large screens** for optimized layout

---

## Styling & Colors

### Current Color Palette

| Color  | Usage                      | Tailwind Classes                     |
| ------ | -------------------------- | ------------------------------------ |
| Blue   | Background and hover state | `bg-[#034a9c]`, `hover:bg-[#022f73]` |
| Red    | Background and hover state | `bg-red-600`, `hover:bg-[#a00404]`   |
| Green  | Text                       | `text-green-600`                     |
| Yellow | Text                       | `text-yellow-500`                    |

### Previous Colors

* Background: `#132235`
* Light blue text: `#019add`

---

## Icons

* Icons sourced from [Icons8](https://icons8.com/icons) for consistent and professional UI elements

---

## Notes

* Responsive design adapts component visibility to screen size for optimal user experience
* Color choices provide clear visual hierarchy and interactivity feedback

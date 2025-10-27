# Hotel Sri Sai Krishna - Interactive Restaurant Website

## Project Overview
This is a modern, interactive restaurant website built using React, TypeScript, and Vite. The project implements various interactive UI elements and animations to create an engaging user experience while showcasing the restaurant's menu and identity.

## Architecture

### Core Components

#### 1. App Component (`App.tsx`)
The main application component that serves as the root of the component tree. It implements:
- Hero section with interactive elements
- Menu display
- Footer with contact information
- Integration of all interactive components

#### 2. Menu System (`Menu.tsx`)
A comprehensive menu display system that:
- Manages a collection of South Indian breakfast items
- Implements a grid-based layout for menu items
- Displays detailed information including:
  - Item name and description
  - Price and quantity
  - Preparation time
  - High-quality food images

### Interactive Components

#### 1. Interactive Logo (`InteractiveLogo.tsx`)
A dynamic logo component that:
- Implements 3D transformation effects
- Responds to mouse movement with perspective changes
- Uses CSS transforms for smooth animations
- Maintains responsive behavior

#### 2. Interactive Title (`InteractiveTitle.tsx`)
A dynamic title component featuring:
- 3D rotation effects based on mouse position
- Perspective transformations
- Smooth transitions between states
- Cursor-following behavior

#### 3. Interactive Particles (`InteractiveParticles.tsx`)
An ambient background animation system that:
- Creates floating food-related emojis
- Implements particle system physics
- Manages particle lifecycle and animation
- Uses requestAnimationFrame for smooth performance

#### 4. Mouse Glow Effect (`MouseGlow.tsx`)
A cursor enhancement component that:
- Creates a dynamic glow effect following the cursor
- Implements smooth transitions
- Uses CSS filters and blend modes for visual effects
- Maintains high performance through CSS optimizations

## Technical Implementation

### State Management
- Utilizes React's useState for component-level state
- Implements useRef for DOM element references
- Uses useEffect for side effects and event listeners

### Animation Techniques
- CSS Transforms for 3D effects
- RequestAnimationFrame for smooth animations
- CSS Transitions for smooth state changes
- Blend modes for visual effects

### Event Handling
- Mouse movement tracking
- Event delegation
- Efficient event listener management
- Cleanup on component unmount

### Performance Considerations
- CSS transform optimizations
- Efficient state updates
- Proper event listener cleanup
- Optimized rendering cycles

## Visual Design Theory

### Layout
- Grid-based menu layout
- Responsive design principles
- Strategic use of white space
- Hierarchical information display

### Interactive Elements
- Subtle 3D transformations
- Smooth transitions
- Cursor-following elements
- Ambient animations

### Visual Hierarchy
- Clear content structure
- Emphasis on important elements
- Balanced visual weight
- Consistent spacing and alignment

This project demonstrates modern web development practices while creating an engaging and interactive user experience for a restaurant website. It combines aesthetic design with functional user interface elements to showcase the restaurant's offerings effectively.
```

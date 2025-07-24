# Muhammad Sohaib Jameel - Portfolio Website

## Overview

A professional portfolio website showcasing Muhammad Sohaib Jameel's mobile development expertise. The website features a modern design with comprehensive sections covering his experience, projects, skills, and contact information. Built with React, TypeScript, and Tailwind CSS, it provides an interactive and responsive showcase of his 4+ years of Flutter/mobile development experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Data Storage**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple

### UI Component System
- **Component Library**: Radix UI primitives with shadcn/ui styling
- **Design System**: Custom Tailwind configuration with CSS variables for theming
- **Theme**: "New York" style variant with neutral base colors
- **Icons**: Lucide React for consistent iconography

## Key Components

### Database Schema
The application uses five main database tables:
- **personalInfo**: Core personal and contact information
- **experiences**: Professional work experience with achievements
- **projects**: Portfolio projects with descriptions and technologies
- **skills**: Technical skills organized by category
- **education**: Educational background and qualifications

### API Layer
- RESTful API endpoints for portfolio data retrieval
- `/api/personal-info`: Basic contact and profile information
- `/api/experiences`: Professional work history
- `/api/projects`: Portfolio projects and achievements
- `/api/skills`: Technical skills and competencies
- `/api/education`: Educational background

### Frontend Pages & Components
- **Dashboard**: Main portfolio page with all sections
- **Navigation**: Smooth scrolling navigation with mobile menu
- **Hero Section**: Personal introduction with contact links
- **About Section**: Professional summary and key statistics
- **Experience Section**: Timeline of work experience
- **Projects Section**: Featured portfolio projects
- **Skills Section**: Technical competencies by category
- **Contact Section**: Contact form and information

## Data Flow

1. **Initial Load**: Portfolio data loads from in-memory storage
2. **Navigation**: Smooth scrolling between sections via navigation
3. **Responsive Design**: Adapts to different screen sizes
4. **Contact Form**: Handles inquiries and project requests
5. **External Links**: Direct links to LinkedIn, GitHub, and email

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database queries and migrations
- **@tanstack/react-query**: Server state management and caching
- **express**: Web server framework
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/react-***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **drizzle-kit**: Database migration management
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds the React application to `dist/public`
- **Backend**: esbuild bundles the Express server to `dist/index.js`
- **Database**: Drizzle migrations are applied via `drizzle-kit push`

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reload via Vite
- **Production**: `NODE_ENV=production` with static file serving
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Production Considerations
- Static assets served from `dist/public`
- API routes prefixed with `/api`
- Session storage using PostgreSQL
- Error handling with proper HTTP status codes
- Request logging for API endpoints

The application follows a modern full-stack architecture with clear separation between client and server code, using established patterns for database management, API design, and frontend state management.
# Overview

This is a portfolio website for a videomaker named Vinicius. The application displays a professional showcase of video production work with a modern, minimalist design. It features a hero section, portfolio gallery with modal functionality, and contact information. The site is built as a single-page application with React and includes both English and Portuguese content support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular component architecture with shared UI components

## Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful API structure with `/api` prefix routing
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite integration
- **Error Handling**: Centralized error handling middleware

## Data Storage
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM with TypeScript schema definitions
- **Schema Management**: Drizzle Kit for migrations and database operations
- **Session Storage**: PostgreSQL-backed session management

## Authentication and Authorization
- **Session-based Authentication**: Using express-session with PostgreSQL storage
- **User Schema**: Basic user table with username/password authentication
- **Security**: CORS configuration and secure session handling

## Development Environment
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Tools**: Replit integration with runtime error modal
- **Hot Reloading**: Full-stack development with automatic refresh

## Design System
- **Theme**: Neutral color palette with dark/light mode support
- **Typography**: Inter font family with multiple weights
- **Components**: Consistent design system using Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-zod**: Schema validation integration

## UI and Styling
- **@radix-ui/***: Complete set of UI primitives for accessible components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library for UI elements

## Development Tools
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library
- **react-hook-form**: Form handling and validation
- **date-fns**: Date manipulation utilities

## Build and Development
- **vite**: Fast build tool and development server
- **typescript**: Type safety and enhanced developer experience
- **esbuild**: JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
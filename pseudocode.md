# CTT Pseudocode

## Core Features

- Prologue
- Location management
- Event driven text Input/Output via terminal and log
- Inventory management (resource management)
- State tracker
- Action palette
- Real-time events

## Icebox Features

- Chat room via sockets
- Visual location map
- NPC textboxes

## Frontend Component Architecture

1. App

- Real-Time Clock
- Log
  - Text Output
- Terminal
  - Text Input (Registered Actions)
- Navigation
  - Locations
- Inventory
  - Items [Name, Description, Count]
- State Tracker
  - Current Time
  - Current Location
    - Floor
    - Place
  - Current NPCs
  - Current Crows
  - Current Monies
- Action Palette
  - Buttons

## Backend

API calls via event/actions

1. Endpoints:
   - /time
   - /action
   - /location
   - /floor
   - /npcs
   - /crows
   - /event (conditional)

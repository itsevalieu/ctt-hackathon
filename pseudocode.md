# CTT Pseudocode

## Core Features

- Prologue
- Location management
  - React routing?
    - Keep track of history as well
  - Switching locations should initiate a call to api for that location
    - Returns update on state for npcs, available actions,
- Event driven text Input/Output via terminal and log
  - Timed-events
  - Output is triggered by timed-events, random-events, and input by user
  - Input is made via action palettte buttons or registered text commands
  - Input via registered text commands:
    - parse text separated by spaces into arrays, compare words for registered actions
- Inventory management (resource management)
  - list of items available for prologue, object list
  - OOP methods to init, add, subtract, count, list
- State tracker
  - init, get, parse, update, delete, list, count
- Action palette
  - possible actions via location or discovery
- Real-time events
  - API endpoints
  - local time

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
    - Gather
    - Defend
    - Attack
    - Pickpocket
    - Build
    - Track
    - Investigate

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

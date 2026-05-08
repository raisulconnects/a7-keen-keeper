# KeenKeeper

Keep Your Friendships Alive

## Description

KeenKeeper is a personal friendship management app that helps you stay connected with the people who matter most. Track your contacts, monitor relationship health, and ensure you never lose touch with close friends.

## Technologies Used

- **Next.js** - React framework for routing and SSR
- **React** - UI library for building components
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Recharts** - Chart library for data visualization
- **React Toastify** - Toast notifications for user feedback
- **React Router** - Navigation (via Next.js App Router)

## Features

1. **Friend Management** - Add, view, and manage friend profiles with contact history
2. **Status Tracking** - Visual indicators showing relationship health (overdue, almost due, on-track)
3. **Timeline** - Log and view all interactions (calls, texts, video calls) with friends
4. **Analytics** - Pie chart visualization showing interaction breakdown
5. **Toast Notifications** - Instant feedback when logging interactions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
keenkeeper/
├── src/
│   ├── app/
│   │   ├── friends/[id]/    # Friend detail page
│   │   ├── timeline/        # Timeline page
│   │   ├── stats/           # Stats/Analytics page
│   │   ├── Components/      # Reusable components
│   │   └── context/         # React context providers
│   └── data/
│       └── friends.json     # Friend data
├── public/                  # Static assets
└── README.md
```

## Pages

- **Home** (`/`) - Banner, summary cards, and friend grid
- **Friend Details** (`/friends/[id]`) - Individual friend info and quick check-in
- **Timeline** (`/timeline`) - Interaction history with filtering
- **Stats** (`/stats`) - Friendship analytics with pie chart
- **404** - Custom error page for unknown routes

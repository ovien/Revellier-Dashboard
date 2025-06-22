# Revellier - Travel Dashboard & Landing Page

A monorepo containing both the Revellier landing page and dashboard applications.

## 🏗️ Project Structure

```
revellier-monorepo/
├── apps/
│   ├── dashboard/          # React Router Dashboard (with Appwrite)
│   └── landing-page/       # Next.js Landing Page
├── package.json            # Root package.json for monorepo
└── README.md              # This file
```

## 🚀 Applications

### 📊 Dashboard (`apps/dashboard/`)
- **Framework**: React Router v7
- **Authentication**: Appwrite
- **Styling**: Tailwind CSS
- **Features**: 
  - User authentication with Google OAuth
  - Admin dashboard with stats
  - Trip management
  - User management
  - Real-time data

### 🏠 Landing Page (`apps/landing-page/`)
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Features**:
  - Marketing landing page
  - No authentication required
  - Links to dashboard for sign-in

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Appwrite account (for dashboard)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ovien/Revellier-Dashboard.git
   cd Revellier-Dashboard
   ```

2. **Install dependencies for all apps**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**

   **For Dashboard** (`apps/dashboard/.env.local`):
   ```bash
   VITE_APPWRITE_API_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_USERS_COLLECTION_ID=your_users_collection_id
   VITE_APPWRITE_TRIP_COLLECTION_ID=your_trip_collection_id
   ```

   **For Landing Page** (`apps/landing-page/.env.local`):
   ```bash
   NEXT_PUBLIC_DASHBOARD_URL=http://localhost:5173
   ```

### Development

**Run both applications simultaneously:**
```bash
npm run dev
```

**Run applications individually:**
```bash
# Dashboard only (port 5173)
npm run dev:dashboard

# Landing page only (port 3000)
npm run dev:landing
```

### Building for Production

**Build both applications:**
```bash
npm run build
```

**Build individually:**
```bash
npm run build:dashboard
npm run build:landing
```

## 🌐 Access Points

- **Landing Page**: http://localhost:3000
- **Dashboard**: http://localhost:5173
- **Dashboard Sign-in**: http://localhost:5173/sign-in

## 🔗 Linking Between Apps

The landing page includes a sign-in button that redirects to the dashboard's sign-in page. This is configured via the `NEXT_PUBLIC_DASHBOARD_URL` environment variable.

## 🚀 Deployment

### Dashboard
The dashboard can be deployed to:
- Vercel
- Netlify
- Railway
- Any platform supporting React Router

### Landing Page
The landing page can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Railway

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both applications in development mode |
| `npm run dev:dashboard` | Start only the dashboard |
| `npm run dev:landing` | Start only the landing page |
| `npm run build` | Build both applications for production |
| `npm run install:all` | Install dependencies for all applications |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both applications
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ by Ovie Okorodudu 
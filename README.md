# Code Plagiarism Detector

**Code Plagiarism Detector** is a comprehensive solution for detecting similarities in source code. It leverages the MOSS Winnowing algorithm with language-specific tokenization and persists results in a PostgreSQL database. The responsive user interface is built with React and Tailwind CSS, supporting both light and dark themes for an optimal user experience.

## Features

* **Advanced Similarity Analysis**: Employs the MOSS Winnowing algorithm for precise code similarity detection.
* **Multi-Language Support**: Compatible with JavaScript, Python, Java, C++, and C#.
* **Language-Specific Tokenization**: Retains essential syntax structures while normalizing variable names.
* **Variable Renaming Detection**: Identifies plagiarism even when identifiers are modified.
* **Persistent Storage**: Stores analysis results in a PostgreSQL database for reliable data retrieval.
* **Modern User Interface**: Clean, responsive UI built with React and Tailwind CSS.
* **Dark Mode Support**: Offers both light and dark UI themes for comfortable viewing in all environments.
* **Real-Time Analysis**: Processes code quickly and displays detailed similarity metrics.

## Technology Stack

* **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
* **Backend:** Node.js, Express, TypeScript
* **Database:** PostgreSQL (with Drizzle ORM)
* **Algorithm:** MOSS Winnowing with language-specific optimizations

## Prerequisites

Ensure the following are installed for local development:

* **Node.js** (v18 or higher)
* **npm** or **Yarn**
* **PostgreSQL** database (local or cloud)
* **Visual Studio Code** (recommended)

## Local Setup

### Clone the Repository

```bash
git clone <your-repository-url>
cd code-plagiarism-detector
```

### Install Dependencies

```bash
npm install
```

*Alternatively, use `yarn install`.*

### Database Setup

#### Option A: Local PostgreSQL

1. Install PostgreSQL locally.
2. Create the database:

   ```sql
   CREATE DATABASE plagiarism_detector;
   ```

#### Option B: Cloud PostgreSQL (Recommended)

Use a provider (e.g., Supabase, Neon, Railway):

1. Sign up and create a project.
2. Copy the connection string from the dashboard.
3. (Optional) In SQL editor, run:

   ```sql
   CREATE DATABASE plagiarism_detector;
   ```
4. In `.env`, set:

   ```env
   DATABASE_URL="postgresql://postgres:<password>@<host>:<port>/<database>"
   ```
5. Whitelist your IP in database settings.

### Configure Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/plagiarism_detector"
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=plagiarism_detector
```

Replace placeholders with your credentials.

### Database Migration

Apply the schema:

```bash
npm run db:push
```

### Start the Development Server

```bash
npm run dev
```

Access the application at:

* **Frontend:** [http://localhost:5000](http://localhost:5000)
* **Backend API:** [http://localhost:5000/api](http://localhost:5000/api)

## VS Code Setup

### Recommended Extensions

* TypeScript and JavaScript Language Features (built-in)
* ES7+ React/Redux/React-Native Snippets
* Tailwind CSS IntelliSense
* Prettier – Code Formatter
* ESLint
* Auto Rename Tag
* Bracket Pair Colorizer
* PostgreSQL

### Configuration

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {"typescript": "html", "typescriptreact": "html"}
}
```

## Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   └── ui/         # UI subcomponents
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configs
│   │   └── hooks/          # Custom React hooks
│   └── index.html
├── server/                 # Backend Express app
│   ├── controllers/        # Request handlers
│   ├── services/           # Business logic (MOSS algorithm)
│   ├── utils/              # Helper functions and tokenizers
│   ├── db.ts               # Database connection
│   ├── storage.ts          # Data access layer
│   └── routes.ts           # API routes
├── shared/                 # Shared types and schemas
│   └── schema.ts           # DB schema & validation
├── migrations/             # DB migration files
│   ├── 0000_panoramic_true_believers.sql
│   └── meta/               # Migration metadata
├── package.json
├── drizzle.config.ts       # Drizzle ORM config
├── tailwind.config.ts      # Tailwind CSS config
├── vite.config.ts          # Vite config
├── postcss.config.js       # PostCSS config
├── tsconfig.json           # TS config
└── README.md               # Project documentation
```

## Available Scripts

* `npm run dev` — Start development server
* `npm run build` — Build for production
* `npm run preview` — Preview production build
* `npm run db:push` — Apply DB schema migrations
* `npm run db:studio` — Open Drizzle Studio

## Usage Guide

### Basic Plagiarism Detection

1. Select a programming language (JavaScript, Python, Java, C++, or C#).
2. Enter the two code samples into the editors.
3. Click **Check Plagiarism** to start analysis.
4. Review the similarity percentage and detailed metrics.

### Interpreting Results

* **Similarity Percentage:** Overall similarity score (0–100%).
* **Structural Similarity:** Comparison of code structures.
* **Control Flow Similarity:** Similarity in control constructs.
* **Logic Patterns:** Comparison of logical operators and expressions.
* **Variable Renaming:** Detection of renamed identifiers.
* **Matching Segments:** Highlights the matching code segments.

## Algorithm Details

The detection process follows these steps:

1. Tokenization: Parse source code into language-specific tokens.
2. K-gram Generation: Create overlapping sequences of tokens.
3. Fingerprinting: Generate rolling-hash fingerprints for each k-gram.
4. Similarity Calculation: Compare fingerprint sets using Jaccard similarity.
5. Pattern Analysis: Identify structural and logical matches.

## Troubleshooting

### Database Connection Issues

```bash
pg_isready
psql -h localhost -U your_username -d plagiarism_detector
```

Ensure PostgreSQL is running and credentials are correct.

### Common Build Errors

```bash
rm -rf node_modules package-lock.json
npm install
rm -rf .vite
npm run dev
```

Resolves dependency and cache-related issues.

### Environment Variables

Verify `.env` is in the project root with valid credentials:

```
DATABASE_URL, PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE
```

## Contributing

Contributions welcome:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   ```

git checkout -b feature/name

```
3. Commit changes with descriptive message.
4. Push branch to your fork.
5. Open a pull request for review.

Ensure code is documented, tested, and adheres to project conventions.

## Support

If issues arise:
- Consult the **Troubleshooting** section.
- Confirm prerequisites and environment setup.
- Check logs for errors.
- Open an issue on GitHub for further assistance.

```

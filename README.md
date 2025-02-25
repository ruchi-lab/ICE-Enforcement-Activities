# Immigration Law Assistant

A comprehensive web application providing immigration law assistance, resource mapping, and case analysis tools for individuals navigating the U.S. immigration system.

## Features

### 💬 AI-Powered Chat Assistant
The Immigration Law Assistant uses advanced natural language processing to provide accurate information about:

- **Visa Types & Requirements**: F-1 Student, H-1B Work, Family-based, Humanitarian visas
- **Legal Rights**: During ICE encounters, court proceedings, detention
- **Application Procedures**: Forms, timelines, documentation requirements
- **Resource Connections**: Legal aid, community support, emergency services

The assistant features:
- Real-time conversation with contextual memory
- Specialized knowledge base for immigration topics
- Graceful fallbacks for network/API issues
- Clear disclaimers about legal advice limitations

### 🗺️ Resource Mapping System

Interactive map interface showing:
- Legal aid organizations
- Community support centers
- Courthouse and detention locations
- ICE enforcement activity reports

Users can:
- Filter resources by type, location, and services
- View detailed information about each resource
- Report new enforcement incidents
- Access contact information for immediate assistance

### 📊 Case Analysis Tools

Preliminary assessment tools to help users understand:
- Potential immigration pathways based on personal circumstances
- Documentation requirements for different applications
- Success probability estimations
- Recommended next steps and attorney referrals

## Technical Architecture

### Frontend
- **React + Vite**: Fast, modern UI framework
- **React Map GL**: Interactive mapping powered by Mapbox
- **CSS Modules**: Scoped styling with responsive design

### Backend Services
- **OpenAI API**: Powers the conversational AI assistant
- **Supabase**: Serverless database for resource and incident data
- **Knowledge Base**: Structured immigration information repository

### Data Flow
1. User queries are processed through a multi-stage pipeline:
   - Local knowledge base search
   - OpenAI API processing with specialized prompts
   - Fallback response system
   
2. Resource data is dynamically loaded from Supabase and displayed on the map

3. Incident reports are validated, anonymized, and stored securely

## Getting Started

1. Clone the repository:
```
git clone https://github.com/yourusername/immigration-assistant.git
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file with your API keys:
```
VITE_OPENAI_API_KEY=your_openai_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_MAPBOX_TOKEN=your_mapbox_token
```

4. Run the development server:
```
npm run dev
```

## Project Structure

```
immigration-assistant/
├── src/
│   ├── components/           # UI components
│   │   ├── ImmigrationBot.jsx  # AI assistant component
│   │   ├── Map.jsx           # Interactive map component
│   │   └── ReportForm.jsx    # Incident reporting form
│   ├── utils/                # Utility functions
│   │   └── immigration_knowledge_base.js  # Knowledge base
│   ├── config/               # Configuration files
│   │   └── supabase.js       # Database connection
│   ├── styles/               # CSS styles
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Entry point
├── public/                   # Static assets
└── package.json              # Dependencies and scripts
```

## Data Privacy & Security

This application:
- Does not store personal conversations
- Anonymizes all incident reports
- Uses secure API connections
- Provides clear privacy notices to users

## Contributing

Contributions are welcome! 
- Code style and standards
- Pull request process
- Development environment setup
- Testing requirements

## License

This project is licensed under the MIT License 

## Disclaimer

This tool provides general information only and should not be considered legal advice. The Immigration Law Assistant is designed to help users understand immigration concepts and connect with appropriate resources, but it is not a substitute for qualified legal counsel. Always consult with a licensed immigration attorney for specific legal matters.
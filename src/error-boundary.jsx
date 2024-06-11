import React from 'react';
// import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="mb-20 p-4 border border-red-400 bg-red-100 rounded-md max-w-md mx-auto mt-10">
          <p className="text-red-700 font-semibold">Something went wrong.</p>
          <button className="mt-4">
            <a 
              href="/home" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Go to Home Page
            </a>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the new simple HTML structure
    window.location.href = '/profile.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to profile...</p>
      </div>
    </div>
  );
};

export default Index;

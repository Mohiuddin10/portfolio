import { ThemeToggle } from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;

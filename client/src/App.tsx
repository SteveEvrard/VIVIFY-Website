import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Cookies from "./pages/Cookies";
import Applications from "./pages/Applications";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Technology from "./pages/Technology";
import Framework from "./pages/Framework";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Redirect from "./pages/Redirect";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

const SHOW_FRAMEWORK_PAGE = false;

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Reset scroll position on route changes (SPA behavior), but respect hash anchors.
    // This keeps internal "deep links" (e.g. /technology#technology-cat-title) working.
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1));
      // Defer until after the new route has rendered.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/technology"} component={Technology} />
      <Route path={"/capabilities"} component={() => <Redirect to="/technology" />} />
      <Route path={"/products"} component={() => <Redirect to="/technology" />} />
      <Route path={"/about"} component={About} />
      <Route path={"/applications"} component={Applications} />
      <Route path={"/impact"} component={() => <Redirect to="/applications" />} />
      {SHOW_FRAMEWORK_PAGE && <Route path={"/framework"} component={Framework} />}
      <Route path={"/news"} component={News} />
      <Route path={"/news/:slug"} component={NewsArticle} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/cookies"} component={Cookies} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Header />
          <main className="min-h-screen">
            <Router />
          </main>
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

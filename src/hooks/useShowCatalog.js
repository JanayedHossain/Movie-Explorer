import { useEffect, useState } from "react";

const BASE_URL = "https://api.tvmaze.com";

export function useShowCatalog() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadAllShows() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/shows`);
        if (!res.ok) throw new Error("Couldn't reach TVMaze right now.");
        const data = await res.json();
        if (!cancelled) {
          setShows(data);
          setErrorMsg("");
        }
      } catch (err) {
        if (!cancelled) setErrorMsg(err.message || "Something went wrong.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadAllShows();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (query.trim() === "") return;

    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
        );
        if (!res.ok) throw new Error("Search failed, try again.");
        const data = await res.json();
        if (!cancelled) {
          setShows(data.map((entry) => entry.show));
          setErrorMsg("");
        }
      } catch (err) {
        if (!cancelled) setErrorMsg(err.message || "Something went wrong.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }, 350);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    if (query.trim() !== "") return;
    let cancelled = false;

    async function reloadAll() {
      try {
        const res = await fetch(`${BASE_URL}/shows`);
        const data = await res.json();
        if (!cancelled) setShows(data);
      } catch {
      }
    }
    reloadAll();
    return () => {
      cancelled = true;
    };
  }, [query === ""]);

  return { shows, query, setQuery, isLoading, errorMsg };
}

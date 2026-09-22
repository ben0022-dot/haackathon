"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingState from "@/components/LoadingState";
import OpportunityCard from "@/components/OpportunityCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import styles from "./page.module.css";

const EMPTY_FILTERS = { skill: "", location: "", type: "", verified: "" };

export default function OpportunitiesPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [opportunities, setOpportunities] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function load() {
      setFetching(true);
      setError("");
      try {
        const token = await user.getIdToken();
        const params = new URLSearchParams({ page: String(page) });
        if (query) params.set("q", query);
        if (filters.skill) params.set("skill", filters.skill);
        if (filters.location) params.set("location", filters.location);
        if (filters.type) params.set("type", filters.type);
        if (filters.verified) params.set("verified", filters.verified);

        const res = await fetch(`/api/opportunities?${params.toString()}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!cancelled) {
          if (!res.ok) {
            setError(data.error || "Could not load opportunities.");
            setOpportunities([]);
          } else {
            setOpportunities(data.opportunities || []);
            setTotal(data.total || 0);
          }
        }
      } catch {
        if (!cancelled) setError("Could not load opportunities. Check your connection.");
      } finally {
        if (!cancelled) setFetching(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [user, query, filters, page]);

  function handleSearch(value) {
    setQuery(value);
    setPage(1);
  }

  function handleFilters(next) {
    setFilters(next);
    setPage(1);
  }

  if (loading || !user) return <LoadingState message="Loading opportunities..." />;

  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <main className="container">
      <div className="page-hero">
        <h1>Opportunities</h1>
        <p className="subtitle">Verified jobs and gigs near you, matched to your skills.</p>
      </div>

      <div style={{ marginTop: 14 }}>
        <SearchBar onSearch={handleSearch} defaultValue={query} />
        <FilterBar filters={filters} onChange={handleFilters} />
      </div>

      {error && <p className="alert alert-error" role="alert">{error}</p>}

      {fetching ? (
        <LoadingState message="Searching opportunities..." />
      ) : opportunities.length === 0 ? (
        <div className="empty-state card">
          <h3>No opportunities found.</h3>
          <p>Try another skill or location.</p>
        </div>
      ) : (
        <>
          <p className={styles.resultCount}>
            {total} opportunit{total === 1 ? "y" : "ies"} found
          </p>
          <div className="grid grid-2">
            {opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className={styles.pageInfo}>
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
# Next + React Query props re-rendering optimisation

This repo is testing pros re-rendering optimisation with React Query on Next.js
## Notes

* Use "tracked queries" by default (see `notifyOnChangeProps` on https://tanstack.com/query/v4/docs/reference/useQuery)
* Transform the data with the selector to map the RMS portion of data to the relevant props needed by the component
* Create a hook that uses `useQuery` to fetch the data and accept a transformer to map the data to props needed

## Reference
* React Query Tracking: https://tkdodo.eu/blog/react-query-render-optimizations

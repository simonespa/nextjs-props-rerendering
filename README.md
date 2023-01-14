## Notes

* Use "tracked queries" by default (see `notifyOnChangeProps` on https://tanstack.com/query/v4/docs/reference/useQuery)
* Transform the data with the selector to map the RMS portion of data to the relevant props needed by the component
* Create a hook that uses `useQuery` to fetch the data and accept a transformer to map the data to props needed

## Reference
* React Query Tracking: https://tkdodo.eu/blog/react-query-render-optimizations

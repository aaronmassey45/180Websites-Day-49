import axios from 'axios';

const ROOT_URL = 'https://crossorigin.me/https://jobs.github.com/positions.json?';

export const FETCH_JOBS = 'FETCH_JOBS';

export function fetchJobs(search, location) {
  let term = search ? `search=${search}`: "";
  let place = "";
  if (search && location) {
    place = `&location=${location}`
  } else if (location) {
    place = `location=${location}`
  }

  const url = `${ROOT_URL}${term}${place}`;
  const request = axios.get(url);

  return {
    type: FETCH_JOBS,
    payload: request
  }
}

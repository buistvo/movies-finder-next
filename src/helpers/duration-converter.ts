export function convertDuration(duration: number) {
  const hrs = duration / 60;
  const mins = duration % 60;
  return `${Math.floor(hrs)}h ${mins}min`;
}

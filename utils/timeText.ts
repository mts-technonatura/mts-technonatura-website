export default function timeText(): string {
  const now = new Date();
  const hour = now.getHours();

  if (hour > 15) {
    return 'Good Evening';
  }

  if (hour > 12) {
    return 'Good Afternoon';
  }

  return 'Good Morning';
}

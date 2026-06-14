export default function PlannerPage() {
  return (
    <iframe
      src="/planner.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
      }}
      title="Day Planner"
    />
  );
}

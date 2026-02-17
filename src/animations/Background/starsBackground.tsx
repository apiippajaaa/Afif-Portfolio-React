import DriftStars from "./DriftStars";

export default function HomeBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="space-bg" />
      <div className="space-cloud" />
      <div className="grid-bg" />
      <div className="lens-flare" />

      <DriftStars />
    </div>
  );
}

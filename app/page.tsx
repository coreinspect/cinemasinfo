import ListBox from "@/components/ListBox";
import Navbar from "@/components/Navbar";
import WatchedBox from "@/components/WatchedBox";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen @container mx-auto">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row gap-4 p-4">
        <div className="w-full md:w-1/2">
          <ListBox />
        </div>
        <div className="w-full md:w-1/2">
          <WatchedBox />
        </div>
      </div>
    </div>
  );
}

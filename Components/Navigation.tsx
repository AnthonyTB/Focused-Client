import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-10 left-4 md:left-28 z-10">
      <button type="button" onClick={() => router.push("/")}>
        <i className="fas fa-chevron-left text-accent px-3 py-1 bg-altBackground rounded-full text-2xl"></i>
      </button>
    </div>
  );
};

export default Navigation;

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-background px-[220px] py-[120px] flex items-center justify-center">
      <div className={`w-full bg-white rounded-xl px-20 py-12`}>
        {children}
      </div>
    </div>
  );
}
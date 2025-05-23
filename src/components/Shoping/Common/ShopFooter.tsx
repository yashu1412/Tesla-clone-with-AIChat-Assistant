const TeslaFooter = () => {
    return (
      <footer className="w-full py-4 border-t border-gray-300 text-sm text-white bg-black/30 backdrop-blur-md flex justify-center items-center fixed bottom-0 left-0 right-0">
        <div className="flex space-x-4">
          <span>Tesla © 2025</span>
          <a href="/privacy" className="hover:underline">Privacy & Legal</a>
          <a href="/locations" className="hover:underline">Locations</a>
        </div>
      </footer>
    );
  };
  
  export default TeslaFooter;
  
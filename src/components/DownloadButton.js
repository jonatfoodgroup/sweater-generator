import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const DownloadButton = ({
  imageUrl,
}) => {
  const handleDownloadImage = async (imageUrl) => {
    
  };
  
  
  return (
    <button
      className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      onClick={() => handleDownloadImage(imageUrl)}
    >
      <ArrowDownTrayIcon className="inline-block mr-2 h-5 w-5" />
    </button>
  )
}
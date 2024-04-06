import { useState } from "react";
import { explorer, folderData } from "./data/folderData";
import { Folder } from "./components/folder";

function App() {
  const [explorerData, setExplorerData] = useState<explorer>(folderData);

  return (
    <div>
      <Folder explorerData={explorerData} />
    </div>
  );
}

export default App;

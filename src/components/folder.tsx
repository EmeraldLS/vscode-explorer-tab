import { useState } from "react";
import { explorer } from "../data/folderData";

export const Folder = ({
  explorerData: { name, id, children, isFolder },
}: {
  explorerData: explorer;
}) => {
  const [expand, setExpand] = useState(false);

  if (isFolder)
    return (
      <div style={{ marginTop: "5px" }}>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <span>🗂️ {name}</span>
        </div>
        <div className={!expand ? "hidden" : ""} style={{ paddingLeft: 25 }}>
          {children?.map((child, _) => (
            <Folder explorerData={child} key={child.id} />
          ))}
        </div>
      </div>
    );
  else return <div className="file">📄 {name}</div>;
};

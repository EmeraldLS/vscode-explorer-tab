import React, { useState } from "react";
import { explorer } from "../data/folderData";
import uuid from "react-uuid";

enum CreateType {
  Folder = "folder",
  File = "file",
}

export const Folder = ({
  explorerData: { name, children, isFolder },
}: {
  explorerData: explorer;
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const [type, setType] = useState<CreateType>(CreateType.Folder);
  const [input, setInput] = useState("");

  const addFolder = (e: React.MouseEvent) => {
    e.stopPropagation();
    setType(CreateType.Folder);
    setShowInput(true);
    setExpand(true);
  };

  const addFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setType(CreateType.File);
    setShowInput(true);
    setExpand(true);
  };

  const create = (e: React.FormEvent) => {
    e.preventDefault();

    if (type == CreateType.Folder) {
      children?.unshift({
        id: uuid(),
        name: input,
        isFolder: true,
      });
    } else if (type == CreateType.File) {
      children?.unshift({
        id: uuid(),
        name: input,
        isFolder: false,
      });
    }

    setInput("");
    setShowInput(false);
  };

  if (isFolder)
    return (
      <div style={{ marginTop: "5px" }}>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand);
            setShowInput(false);
          }}
        >
          <span>
            🗂️ {name}
            <span className="buttons">
              <button onClick={addFolder}>Folder +</button>
              <button onClick={addFile} style={{ backgroundColor: "#fde908" }}>
                File +
              </button>
            </span>
          </span>
        </div>

        <div
          className={`${!expand ? "hidden" : ""} child`}
          style={{ paddingLeft: 25 }}
        >
          {showInput && (
            <form onSubmit={create}>
              <input
                type="text"
                className=""
                id="name"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                autoComplete="true"
                placeholder={`Create ${type}`}
                onBlur={() => setShowInput(false)}
              />
            </form>
          )}
          {children?.map((child, _) => (
            <Folder explorerData={child} key={child.id} />
          ))}
        </div>
      </div>
    );
  else return <div className="file">📄 {name}</div>;
};

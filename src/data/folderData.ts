export interface explorer {
  id: string;
  name: string;
  isFolder: boolean;
  children?: explorer[];
}

export const folderData: explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  children: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      children: [
        {
          id: "5",
          name: "index.html",
          isFolder: false,
        },
        {
          id: "6",
          name: "favicon.ico",
          isFolder: false,
        },
      ],
    },
    {
      id: "13",
      name: "src",
      isFolder: true,
      children: [
        {
          id: "14",
          name: "upload.rust",
          isFolder: false,
        },
        {
          id: "15",
          name: "upload.js",
          isFolder: false,
        },
      ],
    },
    {
      id: "15",
      name: "package.json",
      isFolder: false,
    },
  ],
};

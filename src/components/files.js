import Image from "next/image";

export default function Files({ files }) {
  return (
    <table className="w-full">
      <thead className="bg-dark text-[11px] font-bold text-left">
        <tr>
          <th className="p-1">Type</th>
          <th className="p-1">Name</th>
          <th className="p-1 text-center">SE</th>
          <th className="p-1 text-center">LE</th>
        </tr>
      </thead>
      <tbody className="bg-light">
        {files
          .filter((file) => {
            const fileType = file[4].trim();
            const fileName = file[0].trim();

            // Remove empty cells and headers
            return (
              fileType &&
              fileName &&
              ![
                "category",
                "title",
                "google drive file link",
                "description",
                "notes",
                "category",
                "uploaded_utc",
                "tags",
                "size_mb",
                "file name",
                "seeders",
                "leechers",
                "uploader",
                "verified",
                "info_hash",
                "magnet_uri",
                "nfo_present",
              ].includes(file[0].toLowerCase())
            );
          })
          .map((file, index) => {
            const fileName = file[0].trim();
            const fileType = file[4].trim();
            const uploadedDate =
              file[5].trim() || new Date().toLocaleDateString();
            const uploader = file[12].trim();

            return (
              <tr
                key={index}
                className="text-xs bg-light odd:bg-accent hover:bg-white h-[48px]"
              >
                <td className="p-2 text-navy font-bold text-[11px] text-center">
                  {fileType}
                </td>
                <td className="p-2 ">
                  <div className="text-navy cursor-pointer hover:underline">
                    {fileName}
                  </div>
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <button>
                        <Image
                          src={"/icon-magnet.gif"}
                          width={11}
                          height={11}
                          alt=""
                        />
                      </button>
                      <button>
                        <Image src={"/vip.gif"} width={11} height={11} alt="" />
                      </button>
                    </div>
                    <div className="text-[11px] text-muted">
                      Uploaded {uploadedDate}, Size 1.92 GiB, ULed by{" "}
                      {uploader || "anonymous"}
                    </div>
                  </div>
                </td>
                <td className="p-2 text-center">0</td>
                <td className="p-2 text-center">0</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

import { DevfolioAxios } from "@/libs/axios/customAxios";

class FileRepository {
  public async getFileView(filename: string): Promise<Blob> {
    const { data } = await DevfolioAxios.get(`/files/view`, {
      params: { filename },
      responseType: "blob",
    });
    return data;
  }

  public async getFileDownload(filename: string): Promise<Blob> {
    const { data } = await DevfolioAxios.get(`/files/download`, {
      params: { filename },
      responseType: "blob",
    });
    return data;
  }

  public async deleteFile(fileId: number) {
    const { data } = await DevfolioAxios.delete(`/files/${fileId}`);
    return data;
  }
}

export default new FileRepository();

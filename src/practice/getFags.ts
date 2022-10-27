import fetch from "node-fetch";
interface IReq {
  topicId: number;
  status: ReqStatus;
}

enum ReqStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  DELETED = 'deleted',
}

interface IResItem {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: ReqStatus;
}

async function getFags(req: IReq): Promise<unknown> {
  const res = await fetch('/fags', {
    method: 'POST',
    body: JSON.stringify(req),
  })
  return await res.json();
}

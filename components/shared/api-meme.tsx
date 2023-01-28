export const getThumbnail = (id: string) =>
  `https://apimeme.com/thumbnail?name=${id}`;

interface GetMemeProps {
  id: string;
  topText?: string;
  bottomText?: string;
}
export const getMeme = ({ id, topText = '', bottomText = '' }: GetMemeProps) =>
  `https://apimeme.com/meme?meme=${id}&top=${encodeURIComponent(
    topText
  )}&bottom=${encodeURIComponent(bottomText)}`;
